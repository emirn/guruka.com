/* GURUKA Service Worker */
var CACHE_VERSION = 1;
var CACHE_PAGES = 'guruka-pages-v' + CACHE_VERSION;
var CACHE_AUDIO = 'guruka-audio-v' + CACHE_VERSION;
var CACHE_STATIC = 'guruka-static-v' + CACHE_VERSION;
var OFFLINE_URL = '/offline/';
var THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_PAGES).then(function(cache) {
      return cache.add(OFFLINE_URL);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  var valid = [CACHE_PAGES, CACHE_AUDIO, CACHE_STATIC];
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) {
          return n.startsWith('guruka-') && valid.indexOf(n) === -1;
        }).map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

function isAudioOrJson(url) {
  var p = new URL(url).pathname;
  return p.endsWith('.mp3') || (p.startsWith('/assets/') && p.endsWith('/content.json'));
}

function isStaticAsset(url) {
  var p = new URL(url).pathname;
  return /\.(css|js|woff2?|ttf|eot|png|jpg|jpeg|gif|svg|ico|webp|avif)(\?.*)?$/.test(p);
}

function isPage(url) {
  var p = new URL(url).pathname;
  return !isAudioOrJson(url) && !isStaticAsset(url) && (p.endsWith('/') || p.endsWith('.html') || p.indexOf('.') === -1);
}

/* Check if offline cache has expired (30 days since last online) */
function isCacheExpired(client) {
  return client ? new Promise(function(resolve) {
    var ch = new MessageChannel();
    ch.port1.onmessage = function(e) { resolve(e.data); };
    client.postMessage({ type: 'CHECK_LAST_ONLINE' }, [ch.port2]);
    setTimeout(function() { resolve(true); }, 500);
  }) : Promise.resolve(false);
}

self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Only handle GET requests and same-origin
  if (e.request.method !== 'GET') return;
  if (new URL(url).origin !== self.location.origin) return;

  // Audio / JSON → cache-first
  if (isAudioOrJson(url)) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        return fetch(e.request).then(function(resp) {
          if (resp.ok) {
            var clone = resp.clone();
            caches.open(CACHE_AUDIO).then(function(c) { c.put(e.request, clone); });
          }
          return resp;
        });
      }).catch(function() {
        return new Response('', { status: 404 });
      })
    );
    return;
  }

  // Static assets → stale-while-revalidate
  if (isStaticAsset(url)) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        var fetchPromise = fetch(e.request).then(function(resp) {
          if (resp.ok) {
            var clone = resp.clone();
            caches.open(CACHE_STATIC).then(function(c) { c.put(e.request, clone); });
          }
          return resp;
        }).catch(function() {
          return cached || new Response('', { status: 404 });
        });
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Pages → network-first, fallback to cache, then offline page
  if (isPage(url)) {
    e.respondWith(
      fetch(e.request).then(function(resp) {
        if (resp.ok) {
          var clone = resp.clone();
          caches.open(CACHE_PAGES).then(function(c) { c.put(e.request, clone); });
        }
        return resp;
      }).catch(function() {
        return caches.match(e.request).then(function(cached) {
          return cached || caches.match(OFFLINE_URL);
        });
      })
    );
    return;
  }
});

/* Message handlers */
self.addEventListener('message', function(e) {
  var data = e.data;
  if (!data || !data.type) return;

  if (data.type === 'CACHE_URLS') {
    var urls = data.urls || [];
    var cacheName = data.cacheName || CACHE_PAGES;
    var done = 0;
    var total = urls.length;

    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return urls.reduce(function(chain, url) {
          return chain.then(function() {
            return cache.match(url).then(function(existing) {
              if (existing) {
                done++;
                reportProgress(e.source, done, total);
                return;
              }
              return fetch(url).then(function(resp) {
                done++;
                reportProgress(e.source, done, total);
                if (resp.ok) return cache.put(url, resp);
              }).catch(function() {
                done++;
                reportProgress(e.source, done, total);
              });
            });
          });
        }, Promise.resolve());
      }).then(function() {
        try {
          if (e.source) e.source.postMessage({ type: 'CACHE_COMPLETE', total: total });
        } catch(err) {}
      })
    );
  }

  if (data.type === 'CLEAR_CACHE') {
    var name = data.cacheName;
    if (name && name.startsWith('guruka-')) {
      e.waitUntil(caches.delete(name));
    }
  }

  if (data.type === 'CLEAR_URLS') {
    var urlsToClear = data.urls || [];
    var cn = data.cacheName || CACHE_PAGES;
    e.waitUntil(
      caches.open(cn).then(function(cache) {
        return Promise.all(urlsToClear.map(function(u) { return cache.delete(u); }));
      })
    );
  }

  if (data.type === 'GET_CACHE_SIZE') {
    e.waitUntil(
      Promise.all([CACHE_PAGES, CACHE_AUDIO, CACHE_STATIC].map(function(cn) {
        return caches.open(cn).then(function(cache) {
          return cache.keys().then(function(keys) {
            return { name: cn, count: keys.length };
          });
        });
      })).then(function(results) {
        if (e.source) e.source.postMessage({ type: 'CACHE_SIZE', caches: results });
      })
    );
  }

  if (data.type === 'CHECK_EXPIRY') {
    e.waitUntil(
      caches.delete(CACHE_AUDIO).then(function() {
        return caches.delete(CACHE_PAGES);
      }).then(function() {
        if (e.source) e.source.postMessage({ type: 'EXPIRY_CLEARED' });
      })
    );
  }
});

function reportProgress(client, done, total) {
  try {
    if (client) {
      client.postMessage({ type: 'CACHE_PROGRESS', done: done, total: total });
    }
  } catch(err) {}
}
