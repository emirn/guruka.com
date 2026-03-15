/* Project-specific scripts */
/* GURUKA Shared Functions */
(function() {
  var GK = window.GK = {};

  /* ── PWA Meta Tags ── */
  (function() {
    var head = document.head;
    function addMeta(name, content) {
      var m = document.createElement('meta');
      m.setAttribute('name', name);
      m.setAttribute('content', content);
      head.appendChild(m);
    }
    addMeta('apple-mobile-web-app-capable', 'yes');
    addMeta('apple-mobile-web-app-status-bar-style', 'default');
    addMeta('theme-color', '#0f9072');
    if (!document.querySelector('link[rel="manifest"]')) {
      var link = document.createElement('link');
      link.rel = 'manifest';
      link.href = '/site.webmanifest';
      head.appendChild(link);
    }
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      var atl = document.createElement('link');
      atl.rel = 'apple-touch-icon';
      atl.href = '/apple-touch-icon.png';
      head.appendChild(atl);
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(function() {});
    }
  })();
  /* ── Challenge Params ── */
  GK.parseChallenge = function() {
    var params = new URLSearchParams(window.location.search);
    var score = params.get('p_score') ? parseInt(params.get('p_score'), 10) : null;
    var name = params.get('p_name') || 'Challenger';
    return {
      score: score,
      name: name,
      active: score !== null && !isNaN(score)
    };
  };

  /* ── Challenge Banner (instructions screen) ── */
  GK.renderChallengeBanner = function(containerId, challenge) {
    if (!challenge.active) return;
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML =
      '<div class="gk-challenge-banner">' +
        '<div class="gk-challenge-icon">&#9876;</div>' +
        '<div class="gk-challenge-text"><strong>' + GK._esc(challenge.name) +
          '</strong> scored <strong>' + challenge.score + '</strong>!</div>' +
        '<div class="gk-challenge-dare">Can you beat it?</div>' +
      '</div>';
  };

  /* ── Challenge Bar (during gameplay) ── */
  GK.renderChallengeBar = function(containerId, challenge) {
    if (!challenge.active) return;
    var container = document.getElementById(containerId);
    if (!container) return;
    // Remove existing bar if re-rendered
    var existing = document.getElementById(containerId + '-bar');
    if (existing) existing.remove();
    var bar = document.createElement('div');
    bar.className = 'gk-challenge-bar';
    bar.id = containerId + '-bar';
    bar.innerHTML =
      '<span class="gk-cbar-them">' +
        '<span class="gk-cbar-name">' + GK._esc(challenge.name) + '</span>' +
        '<span class="gk-cbar-score">' + challenge.score + '</span>' +
      '</span>' +
      '<span class="gk-cbar-vs">vs</span>' +
      '<span class="gk-cbar-you">' +
        '<span class="gk-cbar-name">You</span>' +
        '<span class="gk-cbar-score" id="' + containerId + '-your-score">0</span>' +
      '</span>';
    container.insertBefore(bar, container.firstChild);
  };

  GK.updateChallengeBar = function(containerId, score, challengeScore) {
    var el = document.getElementById(containerId + '-your-score');
    if (!el) return;
    el.textContent = score;
    el.className = 'gk-cbar-score' +
      (score > challengeScore ? ' gk-cbar-ahead' :
       score < challengeScore ? ' gk-cbar-behind' : '');
  };

  /* ── Share Result ── */
  GK.shareResult = function(score, gameTitle, gamePath, copiedId) {
    var name = 'You';
    var url = window.location.origin + gamePath +
      '?p_score=' + score +
      '&p_name=' + encodeURIComponent(name);
    var text = 'I scored ' + score + ' in ' + gameTitle + ' on GURUKA! Can you beat me?';

    if (navigator.share) {
      navigator.share({ title: gameTitle, text: text, url: url }).catch(function() {});
    } else {
      var full = text + ' ' + url;
      var showCopied = function() {
        var copied = document.getElementById(copiedId);
        if (copied) {
          copied.style.display = 'block';
          setTimeout(function() { copied.style.display = 'none'; }, 2500);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).then(showCopied).catch(function() {
          GK._fallbackCopy(full);
          showCopied();
        });
      } else {
        GK._fallbackCopy(full);
        showCopied();
      }
    }
  };

  /* ── Share Buttons ── */
  GK.renderShareButtons = function(containerId, score, gameTitle, gamePath) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var name = 'You';
    var url = window.location.origin + gamePath +
      '?p_score=' + score +
      '&p_name=' + encodeURIComponent(name);
    var text = 'I scored ' + score + ' in ' + gameTitle + ' on GURUKA! Can you beat me?';
    var encodedText = encodeURIComponent(text);
    var encodedUrl = encodeURIComponent(url);
    var encodedFull = encodeURIComponent(text + ' ' + url);
    var copiedId = containerId.replace('-buttons', '-copied');

    container.innerHTML =
      '<a class="gk-share-link gk-share-whatsapp" href="https://wa.me/?text=' + encodedFull + '" target="_blank" rel="noopener">&#128172; WhatsApp</a>' +
      '<a class="gk-share-link gk-share-telegram" href="https://t.me/share/url?url=' + encodedUrl + '&text=' + encodedText + '" target="_blank" rel="noopener">&#9992; Telegram</a>' +
      '<a class="gk-share-link gk-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl + '&quote=' + encodedText + '" target="_blank" rel="noopener">&#128077; Facebook</a>' +
      '<button class="gk-share-link gk-share-copy" id="' + containerId + '-copy">&#128279; Copy Link</button>';

    document.getElementById(containerId + '-copy').addEventListener('click', function() {
      var full = text + ' ' + url;
      var showCopied = function() {
        var el = document.getElementById(copiedId);
        if (el) {
          el.style.display = 'block';
          setTimeout(function() { el.style.display = 'none'; }, 2500);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).then(showCopied).catch(function() {
          GK._fallbackCopy(full);
          showCopied();
        });
      } else {
        GK._fallbackCopy(full);
        showCopied();
      }
    });
  };

  GK._fallbackCopy = function(text) {
    var tmp = document.createElement('textarea');
    tmp.value = text;
    tmp.style.position = 'fixed';
    tmp.style.opacity = '0';
    document.body.appendChild(tmp);
    tmp.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(tmp);
  };

  /* ── Challenge Result (post-game) ── */
  GK.renderChallengeResult = function(elementId, score, challenge) {
    var el = document.getElementById(elementId);
    if (!el) return;
    if (!challenge.active) { el.style.display = 'none'; return; }
    var diff = score - challenge.score;
    if (diff > 0) {
      el.className = 'gk-challenge-result gk-challenge-won';
      el.innerHTML = '&#127881; You beat ' + GK._esc(challenge.name) + ' by ' + diff + '!';
    } else if (diff < 0) {
      el.className = 'gk-challenge-result gk-challenge-lost';
      el.innerHTML = 'You lost to ' + GK._esc(challenge.name) + ' by ' + Math.abs(diff) + '. Try again!';
    } else {
      el.className = 'gk-challenge-result gk-challenge-tied';
      el.innerHTML = 'You tied with ' + GK._esc(challenge.name) + '!';
    }
    el.style.display = 'block';
  };

  /* ── HTML escape ── */
  GK._esc = function(str) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  };

  /* ── Meditation ── */
  GK.Meditation = {};

  GK.Meditation.init = function(basePath) {
    fetch(basePath + 'content.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        data.body = data.cues;
        data.audioSrc = basePath + 'meditation.mp3';
        GK.Meditation.initVisual(data.colors);
        GK.Meditation.initPlayer(data);
      })
      .catch(function() {
        var app = document.getElementById('meditation-app');
        if (app) {
          app.innerHTML =
            '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.8);text-align:center;padding:2rem;font-family:-apple-system,sans-serif">' +
              '<div style="font-size:2.5rem;margin-bottom:1rem">&#9729;&#65039;</div>' +
              '<div style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem">Meditation unavailable offline</div>' +
              '<div style="font-size:0.9rem;color:rgba(255,255,255,0.5);max-width:300px;line-height:1.5">Download this meditation for offline use from the meditations hub page.</div>' +
            '</div>';
        }
      });
  };

  GK.Meditation.initVisual = function(colors) {
    var style = document.createElement('style');
    style.textContent =
      '@keyframes gk-med-b1{0%,100%{transform:translate(0,0) rotate(0deg) scale(1)}14%{transform:translate(8vw,-6vh) rotate(25deg) scale(1.08)}28%{transform:translate(-5vw,10vh) rotate(70deg) scale(0.95)}43%{transform:translate(12vw,4vh) rotate(130deg) scale(1.05)}57%{transform:translate(-8vw,-12vh) rotate(200deg) scale(0.92)}71%{transform:translate(6vw,8vh) rotate(260deg) scale(1.1)}85%{transform:translate(-3vw,-5vh) rotate(320deg) scale(0.98)}}' +
      '@keyframes gk-med-b2{0%,100%{transform:translate(0,0) rotate(0deg) scale(1)}14%{transform:translate(-10vw,8vh) rotate(-30deg) scale(0.94)}28%{transform:translate(7vw,-5vh) rotate(-80deg) scale(1.06)}43%{transform:translate(-4vw,-10vh) rotate(-140deg) scale(0.97)}57%{transform:translate(11vw,6vh) rotate(-210deg) scale(1.08)}71%{transform:translate(-6vw,12vh) rotate(-270deg) scale(0.93)}85%{transform:translate(9vw,-3vh) rotate(-330deg) scale(1.04)}}' +
      '@keyframes gk-med-b3{0%,100%{transform:translate(0,0) rotate(0deg) scale(1)}14%{transform:translate(6vw,9vh) rotate(40deg) scale(1.05)}28%{transform:translate(-9vw,-4vh) rotate(100deg) scale(0.93)}43%{transform:translate(3vw,12vh) rotate(160deg) scale(1.1)}57%{transform:translate(-12vw,2vh) rotate(220deg) scale(0.96)}71%{transform:translate(5vw,-8vh) rotate(280deg) scale(1.03)}85%{transform:translate(-7vw,6vh) rotate(340deg) scale(0.91)}}' +
      '@keyframes gk-med-b4{0%,100%{transform:translate(0,0) rotate(0deg) scale(1)}14%{transform:translate(-7vw,-8vh) rotate(-45deg) scale(1.07)}28%{transform:translate(10vw,3vh) rotate(-95deg) scale(0.94)}43%{transform:translate(-6vw,11vh) rotate(-150deg) scale(1.02)}57%{transform:translate(9vw,-7vh) rotate(-215deg) scale(0.9)}71%{transform:translate(-4vw,5vh) rotate(-275deg) scale(1.09)}85%{transform:translate(8vw,-10vh) rotate(-335deg) scale(0.96)}}' +
      '#meditation-app{position:fixed;top:0;left:0;right:0;bottom:0;z-index:50;background:' + colors.bg + ';overflow:hidden}' +
      '.gk-med-blob{position:absolute;border-radius:50%;pointer-events:none;will-change:transform;mix-blend-mode:screen}' +
      '.gk-med-blob-1{width:80vmax;height:56vmax;top:-15%;left:-10%;filter:blur(100px);background:radial-gradient(ellipse,' + colors.c1 + ',' + colors.c2 + ',transparent 70%);animation:gk-med-b1 47s ease-in-out infinite}' +
      '.gk-med-blob-2{width:49vmax;height:70vmax;bottom:-15%;right:-10%;filter:blur(90px);background:radial-gradient(ellipse,' + colors.c2 + ',' + colors.c3 + ',transparent 70%);animation:gk-med-b2 59s ease-in-out infinite}' +
      '.gk-med-blob-3{width:54vmax;height:66vmax;top:-5%;left:30%;filter:blur(80px);background:radial-gradient(ellipse,' + colors.c3 + ',' + colors.c1 + ',transparent 70%);animation:gk-med-b3 71s ease-in-out infinite}' +
      '.gk-med-blob-4{width:50vmax;height:50vmax;bottom:5%;left:20%;filter:blur(70px);opacity:0.7;background:radial-gradient(ellipse,' + colors.c1 + ',' + colors.c3 + ',transparent 70%);animation:gk-med-b4 83s ease-in-out infinite}' +
      '@media(max-width:768px){.gk-med-blob-4{display:none}}';
    document.head.appendChild(style);
    var app = document.getElementById('meditation-app');
    if (app) {
      for (var i = 1; i <= 4; i++) {
        var blob = document.createElement('div');
        blob.className = 'gk-med-blob gk-med-blob-' + i;
        app.appendChild(blob);
      }
    }
  };

  GK.Meditation._loadStats = function() {
    try {
      var raw = localStorage.getItem('guruka_meditation_stats');
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return { totalSessions: 0, totalSeconds: 0, history: [] };
  };

  GK.Meditation._saveSession = function(slug, durationSecs) {
    var stats = GK.Meditation._loadStats();
    stats.totalSessions++;
    stats.totalSeconds += durationSecs;
    stats.history.push({
      slug: slug,
      duration: durationSecs,
      date: new Date().toISOString().slice(0, 10)
    });
    try {
      localStorage.setItem('guruka_meditation_stats', JSON.stringify(stats));
    } catch(e) {}
    return stats;
  };

  GK.Meditation.initPlayer = function(data) {
    var app = document.getElementById('meditation-app');
    if (!app) return;

    // 1. Inject CSS
    if (!document.getElementById('gkm-styles')) {
      var styleEl = document.createElement('style');
      styleEl.id = 'gkm-styles';
      styleEl.textContent =
        '@keyframes gkm-letter-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}' +
        '@keyframes gkm-letter-out{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-6px);filter:blur(2px)}}' +
        '.gkm-letter{display:inline-block;opacity:0;animation:gkm-letter-in 0.5s cubic-bezier(0.25,0.1,0.25,1) forwards}' +
        '.gkm-letter.gkm-letter-exit{animation:gkm-letter-out 0.6s cubic-bezier(0.25,0.1,0.25,1) forwards}' +
        '.gkm-word{display:inline-block;white-space:nowrap}' +
        '@keyframes gkm-breathe{0%,100%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-50%) scale(1.04)}}' +
        '@keyframes gkm-fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}' +
        '.gkm-ui{position:relative;z-index:1;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;user-select:none;-webkit-user-select:none}' +
        '.gkm-close{position:absolute;top:1rem;right:1.25rem;color:rgba(255,255,255,0.4);font-size:1.75rem;text-decoration:none;z-index:20;line-height:1;transition:color 0.2s;min-width:44px;min-height:44px;display:flex;align-items:center;justify-content:center}' +
        '.gkm-close:hover{color:rgba(255,255,255,0.8)}' +
        '.gkm-text{position:fixed;top:8vh;left:50%;transform:translateX(-50%);width:100%;z-index:5;text-align:center;padding:0 2rem;max-width:36rem;min-height:7rem;transition:opacity 0.8s ease;font-size:clamp(1.1rem,4vw,1.5rem);font-weight:300;line-height:1.7;box-sizing:border-box}' +
        '.gkm-circle{position:fixed;left:50%;transform:translateX(-50%);top:55%;z-index:10;width:180px;height:180px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent;transition:transform 0.2s}' +
        '.gkm-circle:active{transform:translateX(-50%) scale(0.97)}' +
        '.gkm-circle>svg{position:absolute;top:0;left:0;width:100%;height:100%}' +
        '.gkm-breathing{animation:gkm-breathe 6s ease-in-out infinite}' +
        '.gkm-glow{}' +
        '@keyframes gkm-heartbeat-glow{0%,100%{transform:scale(1);opacity:0.18}50%{transform:scale(1.25);opacity:0.7}}' +
        '.gkm-glow::before{content:"";position:absolute;inset:-38px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.18) 0%,transparent 70%);animation:gkm-heartbeat-glow 5s ease-in-out infinite;pointer-events:none;z-index:-1}' +
        '.gkm-inner{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.25rem}' +
        '.gkm-time{font-size:2rem;font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:0.02em;color:rgba(255,255,255,0.9)}' +
        '.gkm-circle-label{font-size:0.75rem;font-weight:400;color:rgba(255,255,255,0.5);letter-spacing:0.05em;text-transform:uppercase}' +
        '.gkm-circle-icon{color:rgba(255,255,255,0.8)}' +
        '.gkm-idle-info{position:fixed;left:50%;transform:translateX(-50%);top:calc(55% + 190px);z-index:10;text-align:center;width:100%}' +
        '.gkm-idle-info h2{font-size:1.5rem;font-weight:600;margin:0 0 0.25rem}' +
        '.gkm-idle-info p{font-size:0.95rem;color:rgba(255,255,255,0.5);margin:0}' +
        '.gkm-end{position:absolute;inset:0;z-index:15;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;opacity:0;pointer-events:none;transition:opacity 0.6s ease}' +
        '.gkm-end.gkm-visible{opacity:1;pointer-events:auto}' +
        '.gkm-end>*{animation:gkm-fade-in 0.6s ease both}' +
        '.gkm-end>:nth-child(2){animation-delay:0.1s}' +
        '.gkm-end>:nth-child(3){animation-delay:0.2s}' +
        '.gkm-end>:nth-child(4){animation-delay:0.3s}' +
        '.gkm-end>:nth-child(5){animation-delay:0.4s}' +
        '.gkm-end>:nth-child(6){animation-delay:0.5s}' +
        '.gkm-stats{font-size:0.95rem;color:rgba(255,255,255,0.6);line-height:1.6;margin-bottom:1.5rem}' +
        '.gkm-hint{font-size:0.8rem;color:rgba(255,255,255,0.35);margin-bottom:2rem;line-height:1.5;max-width:280px}' +
        '.gkm-btn{padding:0.65rem 1.75rem;border-radius:2rem;border:none;font-size:0.9rem;font-weight:500;cursor:pointer;transition:background 0.2s,transform 0.15s;text-decoration:none;display:inline-block}' +
        '.gkm-btn:active{transform:scale(0.97)}' +
        '.gkm-btn-primary{background:rgba(255,255,255,0.15);color:#fff;border:1px solid rgba(255,255,255,0.2)}' +
        '.gkm-btn-primary:hover{background:rgba(255,255,255,0.22)}' +
        '.gkm-btn-ghost{background:transparent;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.15)}' +
        '.gkm-btn-ghost:hover{color:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.3)}' +
        '.gkm-pause-icon{display:inline-flex;gap:3px;margin-bottom:2px}' +
        '.gkm-pause-icon span{display:block;width:3px;height:14px;background:rgba(255,255,255,0.6);border-radius:1px}' +
        '.gkm-time-external{position:fixed;left:50%;transform:translateX(-50%);top:calc(55% + 190px);z-index:10;font-size:1.5rem;font-weight:400;font-variant-numeric:tabular-nums;color:rgba(255,255,255,0.25);min-height:2rem;text-align:center;transition:opacity 0.3s}' +
        '.gkm-seek-thumb{position:absolute;width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.9);transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity 0.15s;z-index:2}' +
        '.gkm-seeking .gkm-seek-thumb{opacity:1}' +
        '@media(max-width:768px){.gkm-circle{top:auto;bottom:20vh}.gkm-text{top:10vh}.gkm-time-external{top:auto;bottom:12vh}.gkm-idle-info{top:auto;bottom:4vh}}';
      document.head.appendChild(styleEl);
    }

    // Parse glow color from data.colors.c1 (rgba → rgb)
    var glowRgb = '255,255,255';
    if (data.colors && data.colors.c1) {
      var m = data.colors.c1.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (m) glowRgb = m[1] + ',' + m[2] + ',' + m[3];
    }

    var state = 'idle';
    var meditateBase = '/meditate/';
    var pathParts = window.location.pathname.split('/').filter(Boolean);
    var knownLangs = ['en','es','de','fr','pt','ja','ko'];
    if (knownLangs.indexOf(pathParts[0]) !== -1 && pathParts[0] !== 'en') {
      meditateBase = '/' + pathParts[0] + '/meditate/';
    }
    var startTime = 0;
    var elapsed = 0;
    var pausedAt = 0;
    var rafId = null;
    var currentIdx = -1;
    var wakeLock = null;
    var isSeeking = false;
    var wasRunningBeforeSeek = false;
    var seekRingInner = 50;  // px from center — inner edge of touchable ring
    var seekRingOuter = 95;  // px from center — outer edge

    var circumference = 2 * Math.PI * 85; // 534.07

    // Play triangle SVG
    var playIcon = '<svg class="gkm-circle-icon" width="52" height="52" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)"><polygon points="6,3 20,12 6,21"/></svg>';
    var pauseIcon = '<div class="gkm-pause-icon"><span></span><span></span></div>';
    var checkIcon = '<svg class="gkm-circle-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    // 2. Build HTML
    var ui = document.createElement('div');
    ui.className = 'gkm-ui';

    ui.innerHTML =
      '<a href="' + meditateBase + '" class="gkm-close" id="gkm-close" aria-label="Close">&times;</a>' +
      '<div class="gkm-text" id="gkm-text"></div>' +
      '<div class="gkm-circle gkm-glow" id="gkm-circle" tabindex="0" role="button" aria-label="Start meditation" style="--gkm-glow-rgb:' + glowRgb + '">' +
        '<svg viewBox="0 0 200 200" style="transform:scaleX(-1)">' +
          '<circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="16"/>' +
          '<circle id="gkm-progress" cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="16" stroke-linecap="round" stroke-dasharray="' + circumference.toFixed(2) + '" stroke-dashoffset="0" transform="rotate(-90 100 100)" style="transition:stroke-dashoffset 0.3s linear"/>' +
        '</svg>' +
        '<div class="gkm-seek-thumb" id="gkm-seek-thumb"></div>' +
        '<div class="gkm-inner" id="gkm-inner">' +
          playIcon +
        '</div>' +
      '</div>' +
      '<div class="gkm-time-external" id="gkm-time-ext"></div>' +
      '<div class="gkm-idle-info" id="gkm-idle">' +
        '<h2>' + GK._esc(data.title) + '</h2>' +
        '<p>' + GK._esc(data.subtitle) + '</p>' +
      '</div>' +
      '<div class="gkm-end" id="gkm-end">' +
        '<div style="font-size:2.5rem;margin-bottom:0.75rem">&#10024;</div>' +
        '<div style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem">Session Complete</div>' +
        '<div class="gkm-stats" id="gkm-stats"></div>' +
        '<div class="gkm-hint" id="gkm-hint"></div>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="gkm-btn gkm-btn-primary" id="gkm-restart">Start Again</button>' +
          '<a href="' + meditateBase + '" class="gkm-btn gkm-btn-ghost">Back to Meditations</a>' +
        '</div>' +
      '</div>';

    app.appendChild(ui);
    document.body.style.overflow = 'hidden';

    // 3. Cache DOM refs
    var textEl = document.getElementById('gkm-text');
    var progressEl = document.getElementById('gkm-progress');
    var circleEl = document.getElementById('gkm-circle');
    var innerEl = document.getElementById('gkm-inner');
    var idleEl = document.getElementById('gkm-idle');
    var endEl = document.getElementById('gkm-end');
    var closeEl = document.getElementById('gkm-close');
    var statsEl = document.getElementById('gkm-stats');
    var hintEl = document.getElementById('gkm-hint');
    var timeExtEl = document.getElementById('gkm-time-ext');
    var seekThumb = document.getElementById('gkm-seek-thumb');

    // 3b. Audio element (optional — when data.audioSrc is set)
    var audio = null;
    if (data.audioSrc) {
      audio = new Audio(data.audioSrc);
      audio.preload = 'auto';
    }

    // 4. Helpers
    function formatTime(secs) {
      var m = Math.floor(secs / 60);
      var s = Math.floor(secs % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function formatDuration(secs) {
      var h = Math.floor(secs / 3600);
      var m = Math.floor((secs % 3600) / 60);
      if (h > 0 && m > 0) return h + 'h ' + m + 'm';
      if (h > 0) return h + 'h';
      if (m > 0) return m + ' minute' + (m !== 1 ? 's' : '');
      return secs + 's';
    }

    function getSeekInfo(e) {
      var rect = circleEl.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var clientX, clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      var dx = cx - clientX;
      var dy = cy - clientY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var angle = Math.atan2(-dx, dy); // 0 at top, increases CW
      if (angle < 0) angle += 2 * Math.PI;
      var fraction = angle / (2 * Math.PI);
      return { fraction: fraction, dist: dist };
    }

    function seekTo(fraction) {
      fraction = Math.max(0.001, Math.min(0.999, fraction));
      var newTime = fraction * data.duration;
      // No audio.currentTime or startTime update here — done once in seekEnd
      elapsed = newTime;
      var offset = circumference * (elapsed / data.duration);
      progressEl.setAttribute('stroke-dashoffset', String(offset));
      timeExtEl.textContent = formatTime(data.duration - elapsed);
      dismissing = false;
      textEl.style.opacity = '1';    // undo any dismiss fade
      updateText(elapsed);
      // Update seek thumb position
      var thumbAngle = fraction * 2 * Math.PI;
      var thumbR = 76.5;
      seekThumb.style.left = (90 + thumbR * Math.sin(thumbAngle)) + 'px';
      seekThumb.style.top = (90 - thumbR * Math.cos(thumbAngle)) + 'px';
    }

    function revealText(el, text) {
      el.innerHTML = '';
      el.style.opacity = '1';
      var delay = 0;
      var lines = text.split('\n');
      var isCJK = ['ja','zh','ko'].indexOf(pathParts[0]) !== -1;
      for (var li = 0; li < lines.length; li++) {
        if (li > 0) {
          el.appendChild(document.createElement('br'));
        }
        if (isCJK) {
          for (var ci = 0; ci < lines[li].length; ci++) {
            var letterSpan = document.createElement('span');
            letterSpan.className = 'gkm-letter';
            letterSpan.textContent = lines[li][ci];
            letterSpan.style.animationDelay = delay + 'ms';
            el.appendChild(letterSpan);
            delay += 65;
          }
        } else {
          var words = lines[li].split(' ');
          for (var wi = 0; wi < words.length; wi++) {
            if (wi > 0) {
              var space = document.createElement('span');
              space.className = 'gkm-letter';
              space.textContent = '\u00A0';
              space.style.animationDelay = delay + 'ms';
              el.appendChild(space);
              delay += 20;
            }
            var wordSpan = document.createElement('span');
            wordSpan.className = 'gkm-word';
            for (var ci = 0; ci < words[wi].length; ci++) {
              var letterSpan = document.createElement('span');
              letterSpan.className = 'gkm-letter';
              letterSpan.textContent = words[wi][ci];
              letterSpan.style.animationDelay = delay + 'ms';
              wordSpan.appendChild(letterSpan);
              delay += 65;
            }
            el.appendChild(wordSpan);
          }
        }
      }
    }

    function dismissText(el) {
      el.style.opacity = '0';
    }

    function getSlug() {
      var p = window.location.pathname;
      p = p.replace(/^\/[a-z]{2}\/meditate\//, '').replace(/^\/meditate\//, '').replace(/\/$/, '');
      return p || 'unknown';
    }

    // 5. Platform detection
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    var isAndroid = /Android/.test(navigator.userAgent);
    var isMac = /Mac/.test(navigator.platform);

    function getHintText() {
      if (isIOS) return 'Tap Share \u2192 Add to Home Screen for quick access';
      if (isAndroid) return 'Tap \u22ee Menu \u2192 Add to Home Screen';
      return 'Press ' + (isMac ? '\u2318+D' : 'Ctrl+D') + ' to bookmark for quick access';
    }

    // 6. State transitions
    function setCircleContent(html) {
      innerEl.innerHTML = html;
    }

    var dismissing = false;
    var DISMISS_LEAD = 2; // seconds before next cue to start dismiss

    function updateText(sec) {
      var newIdx = -1;
      for (var i = data.body.length - 1; i >= 0; i--) {
        if (sec >= data.body[i].time) { newIdx = i; break; }
      }

      // Pre-dismiss: start fading out before the next cue arrives
      if (!isSeeking && !dismissing && currentIdx >= 0 && currentIdx < data.body.length - 1) {
        var nextTime = data.body[currentIdx + 1].time;
        if (sec >= nextTime - DISMISS_LEAD) {
          dismissing = true;
          dismissText(textEl);
        }
      }

      if (newIdx !== currentIdx) {
        currentIdx = newIdx;
        var newText = currentIdx >= 0 ? data.body[currentIdx].text : '';
        dismissing = false;
        if (newText) {
          revealText(textEl, newText);
        } else {
          textEl.innerHTML = '';
          textEl.style.opacity = '1';
        }
      }
    }

    // 7. Timer
    function tick() {
      if (state !== 'running') return;
      if (audio) {
        elapsed = audio.currentTime;
      } else {
        elapsed = (Date.now() - startTime) / 1000;
      }
      if (elapsed >= data.duration) {
        elapsed = data.duration;
        complete();
        return;
      }
      var remaining = data.duration - elapsed;
      var offset = circumference * (elapsed / data.duration);
      progressEl.setAttribute('stroke-dashoffset', String(offset));
      setCircleContent(pauseIcon);
      timeExtEl.textContent = formatTime(remaining);
      timeExtEl.style.opacity = '1';
      updateText(elapsed);
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      state = 'running';
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      } else {
        startTime = Date.now();
      }
      elapsed = 0;
      currentIdx = -1;
      dismissing = false;
      idleEl.style.display = 'none';
      endEl.classList.remove('gkm-visible');
      textEl.innerHTML = '';
      textEl.style.opacity = '1';
      timeExtEl.textContent = '';
      timeExtEl.style.opacity = '0';
      progressEl.setAttribute('stroke-dashoffset', '0');
      circleEl.classList.remove('gkm-glow');
      circleEl.style.animation = '';
      circleEl.classList.add('gkm-breathing');
      circleEl.setAttribute('aria-label', 'Pause meditation');
      acquireWakeLock();
      GK.Stats.startTracking('meditate');
      tick();
    }

    function pause() {
      state = 'paused';
      if (audio) audio.pause();
      pausedAt = Date.now();
      if (rafId) cancelAnimationFrame(rafId);
      textEl.style.opacity = '0.4';
      timeExtEl.style.opacity = '0.4';
      circleEl.classList.remove('gkm-breathing');
      circleEl.style.animationPlayState = '';
      setCircleContent(playIcon);
      circleEl.setAttribute('aria-label', 'Resume meditation');
      releaseWakeLock();
      GK.Stats.stopTracking();
    }

    function resume() {
      state = 'running';
      if (audio) {
        audio.play();
      } else {
        startTime += Date.now() - pausedAt;
      }
      textEl.style.opacity = '1';
      timeExtEl.style.opacity = '1';
      circleEl.classList.add('gkm-breathing');
      circleEl.setAttribute('aria-label', 'Pause meditation');
      acquireWakeLock();
      GK.Stats.startTracking('meditate');
      tick();
    }

    function complete() {
      state = 'complete';
      if (rafId) cancelAnimationFrame(rafId);
      progressEl.setAttribute('stroke-dashoffset', String(circumference));
      textEl.style.opacity = '0';
      setTimeout(function() { textEl.innerHTML = ''; }, 400);
      timeExtEl.textContent = '';
      timeExtEl.style.opacity = '0';
      circleEl.classList.remove('gkm-breathing');
      circleEl.style.visibility = 'hidden';
      timeExtEl.style.visibility = 'hidden';
      setCircleContent(checkIcon);
      GK.Stats.stopTracking();
      GK.Stats.incrementSession('meditate');

      // Save stats
      var slug = getSlug();
      var finalStats = GK.Meditation._saveSession(slug, Math.round(data.duration));

      // Render stats
      statsEl.innerHTML =
        '<div>' + formatDuration(Math.round(data.duration)) + '</div>' +
        '<div style="margin-top:0.25rem">Session ' + finalStats.totalSessions + ' \u00b7 ' + formatDuration(finalStats.totalSeconds) + ' total</div>';

      hintEl.textContent = getHintText();

      setTimeout(function() {
        endEl.classList.add('gkm-visible');
      }, 3000);
      releaseWakeLock();
    }

    function restart() {
      endEl.classList.remove('gkm-visible');
      circleEl.style.visibility = 'visible';
      timeExtEl.style.visibility = 'visible';
      circleEl.style.display = 'flex';
      if (audio) { audio.currentTime = 0; }
      start();
    }

    // 8. Wake lock
    function acquireWakeLock() {
      if ('wakeLock' in navigator) {
        navigator.wakeLock.request('screen').then(function(lock) {
          wakeLock = lock;
        }).catch(function() {});
      }
    }

    function releaseWakeLock() {
      if (wakeLock) {
        wakeLock.release().catch(function() {});
        wakeLock = null;
      }
    }

    // 9. Event listeners
    function handleCircleAction() {
      if (state === 'idle') start();
      else if (state === 'running') pause();
      else if (state === 'paused') resume();
    }

    circleEl.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isSeeking) return;
      handleCircleAction();
    });

    circleEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCircleAction();
      }
    });

    document.getElementById('gkm-restart').addEventListener('click', restart);

    // 9b. Ring seek handlers
    var seekStarted = false;

    function seekStart(e) {
      if (state !== 'running' && state !== 'paused') return;
      var info = getSeekInfo(e);
      if (info.dist < seekRingInner || info.dist > seekRingOuter) return;
      e.preventDefault();
      isSeeking = true;
      seekStarted = true;
      wasRunningBeforeSeek = (state === 'running');
      if (state === 'running') {
        if (audio) audio.pause();
        if (rafId) cancelAnimationFrame(rafId);
        circleEl.classList.remove('gkm-breathing');
      }
      progressEl.style.transition = 'none';
      circleEl.classList.add('gkm-seeking');
      seekTo(info.fraction);
    }

    function seekMove(e) {
      if (!isSeeking) return;
      e.preventDefault();
      var info = getSeekInfo(e);
      seekTo(info.fraction);
    }

    function seekEnd(e) {
      if (!isSeeking) return;
      if (seekStarted) {
        // Sync audio/timer to final drag position (single seek, not 60/s)
        if (audio) {
          audio.currentTime = elapsed;
        } else {
          startTime = Date.now() - elapsed * 1000;
        }
        progressEl.style.transition = '';
        circleEl.classList.remove('gkm-seeking');
        currentIdx = -1;
        dismissing = false;
        if (wasRunningBeforeSeek) {
          state = 'running';
          if (audio) audio.play();
          circleEl.classList.add('gkm-breathing');
          tick();
        }
      }
      // Delay clearing isSeeking so the click event that fires after touchend is ignored
      setTimeout(function() { isSeeking = false; seekStarted = false; }, 0);
    }

    circleEl.addEventListener('touchstart', seekStart, { passive: false });
    circleEl.addEventListener('mousedown', seekStart);
    document.addEventListener('touchmove', seekMove, { passive: false });
    document.addEventListener('mousemove', seekMove);
    document.addEventListener('touchend', seekEnd);
    document.addEventListener('mouseup', seekEnd);

    // 10. Visibility change → re-acquire wake lock
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible' && state === 'running') {
        acquireWakeLock();
      }
    });

    // 11. Audio ended → trigger completion
    if (audio) {
      audio.addEventListener('ended', function() {
        if (state === 'running') complete();
      });
    }
  };

  /* ── Activity Stats ── */
  GK.Stats = {};
  GK.Stats.STORAGE_KEY = 'guruka_activity_stats';
  GK.Stats.INTERVAL = 15000;

  // Internal tracking state
  GK.Stats._timer = null;
  GK.Stats._section = null;
  GK.Stats._startMark = 0;
  GK.Stats._lastSaved = 0;

  // i18n strings: [meditate_verb, games_verb, visuals_verb, times_word, total_word]
  GK.Stats._i18n = {
    en: { meditate: 'meditated', games: 'played', visuals: 'watched', times: 'times', time: 'time', total: 'Total' },
    es: { meditate: 'meditado', games: 'jugado', visuals: 'visto', times: 'veces', time: 'vez', total: 'Total' },
    de: { meditate: 'meditiert', games: 'gespielt', visuals: 'angesehen', times: 'Mal', time: 'Mal', total: 'Gesamt' },
    fr: { meditate: 'médité', games: 'joué', visuals: 'regardé', times: 'fois', time: 'fois', total: 'Total' },
    pt: { meditate: 'meditou', games: 'jogou', visuals: 'assistiu', times: 'vezes', time: 'vez', total: 'Total' },
    ja: { meditate: '瞑想', games: 'プレイ', visuals: '視聴', times: '回', time: '回', total: '合計' }
  };

  GK.Stats._getLang = function() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    var lang = parts[0];
    if (GK.Stats._i18n[lang]) return lang;
    return 'en';
  };

  GK.Stats._load = function() {
    try {
      var raw = localStorage.getItem(GK.Stats.STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return { meditate: { sessions: 0, totalSeconds: 0 }, games: { sessions: 0, totalSeconds: 0 }, visuals: { sessions: 0, totalSeconds: 0 } };
  };

  GK.Stats._save = function(data) {
    try {
      localStorage.setItem(GK.Stats.STORAGE_KEY, JSON.stringify(data));
    } catch(e) {}
  };

  GK.Stats._formatDuration = function(secs) {
    var h = Math.floor(secs / 3600);
    var m = Math.floor((secs % 3600) / 60);
    if (h > 0 && m > 0) return h + 'h ' + m + 'min';
    if (h > 0) return h + 'h';
    if (m > 0) return m + ' min';
    return secs + 's';
  };

  GK.Stats._formatSummary = function(section) {
    var data = GK.Stats._load();
    var s = data[section];
    if (!s || s.sessions === 0) return null;
    var lang = GK.Stats._getLang();
    var t = GK.Stats._i18n[lang] || GK.Stats._i18n.en;
    var verb = t[section] || t.games;
    var timesStr = s.sessions === 1 ? t.time : t.times;
    var durStr = GK.Stats._formatDuration(s.totalSeconds);
    if (lang === 'ja') {
      return verb + ' ' + s.sessions + timesStr + ' · ' + t.total + ': ' + durStr;
    }
    return s.sessions + 'x ' + verb + ' · ' + t.total + ': ' + durStr;
  };

  // Time tracking
  GK.Stats.startTracking = function(section) {
    if (GK.Stats._timer) GK.Stats.stopTracking();
    GK.Stats._section = section;
    GK.Stats._startMark = performance.now();
    GK.Stats._lastSaved = GK.Stats._startMark;
    GK.Stats._timer = setInterval(function() {
      GK.Stats._flushTime();
    }, GK.Stats.INTERVAL);
  };

  GK.Stats.stopTracking = function() {
    if (!GK.Stats._section) return;
    GK.Stats._flushTime();
    if (GK.Stats._timer) {
      clearInterval(GK.Stats._timer);
      GK.Stats._timer = null;
    }
    GK.Stats._section = null;
  };

  GK.Stats._flushTime = function() {
    if (!GK.Stats._section) return;
    var now = performance.now();
    var delta = Math.round((now - GK.Stats._lastSaved) / 1000);
    if (delta < 1) return;
    GK.Stats._lastSaved = now;
    var data = GK.Stats._load();
    if (!data[GK.Stats._section]) data[GK.Stats._section] = { sessions: 0, totalSeconds: 0 };
    data[GK.Stats._section].totalSeconds += delta;
    GK.Stats._save(data);
  };

  GK.Stats.incrementSession = function(section) {
    var data = GK.Stats._load();
    if (!data[section]) data[section] = { sessions: 0, totalSeconds: 0 };
    data[section].sessions++;
    GK.Stats._save(data);
  };

  // Banner creation
  GK.Stats._createBanner = function(section) {
    var text = GK.Stats._formatSummary(section);
    if (!text) return null;
    var div = document.createElement('div');
    div.className = 'gk-stats-banner';
    div.textContent = text;
    return div;
  };

  GK.Stats._injectStyles = function() {
    if (document.getElementById('gk-stats-styles')) return;
    var style = document.createElement('style');
    style.id = 'gk-stats-styles';
    style.textContent =
      '.gk-stats-banner{font-size:0.82rem;color:rgba(255,255,255,0.45);padding:0.4rem 0 0.15rem;letter-spacing:0.01em}' +
      '#meditate-hub .gk-stats-banner,#games-hub .gk-stats-banner,#visuals-hub .gk-stats-banner{margin-top:0.25rem}' +
      '.gkm-idle-info .gk-stats-banner{margin-top:0.4rem;font-size:0.8rem;color:rgba(255,255,255,0.35)}' +
      '[id$="-instructions"] .gk-stats-banner{color:rgba(255,255,255,0.35);margin:0.5rem 0;font-size:0.8rem}' +
      '.vp-desc+.gk-stats-banner{margin-top:0.35rem;color:rgba(255,255,255,0.35);font-size:0.8rem}' +
      '@media(prefers-color-scheme:light){' +
        '.gk-stats-banner{color:rgba(0,0,0,0.4)}' +
        '.gkm-idle-info .gk-stats-banner{color:rgba(255,255,255,0.35)}' +
        '[id$="-instructions"] .gk-stats-banner{color:rgba(0,0,0,0.35)}' +
        '.vp-desc+.gk-stats-banner{color:rgba(0,0,0,0.35)}' +
      '}';
    document.head.appendChild(style);
  };

  // Page detection and auto-init
  GK.Stats._detectSection = function() {
    var path = window.location.pathname;
    if (/\/meditate(\/|$)/.test(path)) return 'meditate';
    if (/\/games(\/|$)/.test(path)) return 'games';
    if (/\/visuals(\/|$)/.test(path)) return 'visuals';
    return null;
  };

  GK.Stats._isHub = function(section) {
    var path = window.location.pathname.replace(/\/$/, '');
    var lang = GK.Stats._getLang();
    var base = lang === 'en' ? '' : '/' + lang;
    return path === base + '/' + section;
  };

  GK.Stats._injectHubBanner = function(section) {
    var selectors = {
      meditate: '#meditate-hub .mh-header p',
      games: '#games-hub .gh-header p',
      visuals: '#visuals-hub .vh-header p'
    };
    var target = document.querySelector(selectors[section]);
    if (!target) return;
    var banner = GK.Stats._createBanner(section);
    if (banner) target.parentNode.insertBefore(banner, target.nextSibling);
  };

  GK.Stats._injectPageBanner = function(section) {
    if (section === 'meditate') {
      // Meditation: inject into #gkm-idle (created dynamically, may not exist yet)
      // We use a short poll since initPlayer creates it async after fetch
      var attempts = 0;
      var tryInject = function() {
        var idle = document.getElementById('gkm-idle');
        if (idle && !idle.querySelector('.gk-stats-banner')) {
          var banner = GK.Stats._createBanner('meditate');
          if (banner) idle.appendChild(banner);
          return;
        }
        if (++attempts < 20) setTimeout(tryInject, 250);
      };
      tryInject();
    } else if (section === 'games') {
      // Games: inject inside instructions, before the start button
      var instr = document.querySelector('[id$="-instructions"]');
      if (!instr) return;
      var btn = instr.querySelector('[class$="-btn-primary"], button');
      var banner = GK.Stats._createBanner('games');
      if (banner && btn) instr.insertBefore(banner, btn);
    } else if (section === 'visuals') {
      // Visuals: inject after .vp-desc
      var desc = document.querySelector('.vp-desc');
      if (!desc) return;
      var banner = GK.Stats._createBanner('visuals');
      if (banner) desc.parentNode.insertBefore(banner, desc.nextSibling);
    }
  };

  // Observers for auto-detection
  GK.Stats._setupGameObserver = function() {
    // Detect game completion via overlay becoming visible
    // Pattern 1: [id$="-complete-overlay"] with style.display changing to flex
    // Pattern 2: [id$="-complete"].mm-screen/.sr-screen getting .active class
    var tracked = false;

    // Start tracking time when page loads (game page detected)
    GK.Stats.startTracking('games');

    var checkComplete = function() {
      if (tracked) return;
      // Check overlay-style games
      var overlay = document.querySelector('[id$="-complete-overlay"]');
      if (overlay) {
        var obs = new MutationObserver(function(mutations) {
          if (tracked) return;
          var d = overlay.style.display;
          if (d === 'flex' || d === 'block') {
            tracked = true;
            GK.Stats.stopTracking();
            GK.Stats.incrementSession('games');
          }
        });
        obs.observe(overlay, { attributes: true, attributeFilter: ['style'] });
        return;
      }
      // Check class-based games (memory-matrix, sequence-recall)
      var screen = document.querySelector('[id$="-complete"][class*="-screen"]');
      if (screen) {
        var obs2 = new MutationObserver(function() {
          if (tracked) return;
          if (screen.classList.contains('active')) {
            tracked = true;
            GK.Stats.stopTracking();
            GK.Stats.incrementSession('games');
          }
        });
        obs2.observe(screen, { attributes: true, attributeFilter: ['class'] });
        return;
      }
    };

    // DOM might not be fully ready for game elements, poll briefly
    var attempts = 0;
    var trySetup = function() {
      var overlay = document.querySelector('[id$="-complete-overlay"]');
      var screen = document.querySelector('[id$="-complete"][class*="-screen"]');
      if (overlay || screen) {
        checkComplete();
      } else if (++attempts < 20) {
        setTimeout(trySetup, 250);
      }
    };
    trySetup();
  };

  GK.Stats._setupVisualObserver = function() {
    var fs = document.getElementById('vp-fullscreen');
    if (!fs) return;
    var wasVisible = false;
    var obs = new MutationObserver(function() {
      var visible = fs.style.display !== 'none' && fs.style.display !== '';
      if (visible && !wasVisible) {
        // Visual started
        wasVisible = true;
        GK.Stats.startTracking('visuals');
      } else if (!visible && wasVisible) {
        // Visual ended
        wasVisible = false;
        GK.Stats.stopTracking();
        GK.Stats.incrementSession('visuals');
      }
    });
    obs.observe(fs, { attributes: true, attributeFilter: ['style'] });
  };

  // Lifecycle handlers
  GK.Stats._onPageHide = function() {
    GK.Stats._flushTime();
  };

  GK.Stats._onVisibilityChange = function() {
    if (document.visibilityState === 'hidden') {
      GK.Stats._flushTime();
    }
  };

  GK.Stats.init = function() {
    var section = GK.Stats._detectSection();
    if (!section) return;

    GK.Stats._injectStyles();

    if (GK.Stats._isHub(section)) {
      GK.Stats._injectHubBanner(section);
    } else {
      // Individual page
      GK.Stats._injectPageBanner(section);

      if (section === 'games') {
        GK.Stats._setupGameObserver();
      } else if (section === 'visuals') {
        GK.Stats._setupVisualObserver();
      }
      // Meditation tracking is handled via hooks in initPlayer
    }

    // Lifecycle
    window.addEventListener('pagehide', GK.Stats._onPageHide);
    document.addEventListener('visibilitychange', GK.Stats._onVisibilityChange);
  };

  document.addEventListener('DOMContentLoaded', function() {
    GK.Stats.init();
  });

  /* ── Offline Support ── */
  GK.Offline = {};

  GK.Offline.THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
  GK.Offline.LAST_ONLINE_KEY = 'guruka_last_online';

  GK.Offline.LANGS = ['en','es','de','fr','ja','ko','pt'];

  GK.Offline.MEDITATIONS = [
    'body-scan-and-tension-release','calm-and-stress-relief','focus-and-clarity',
    'gratitude','loving-kindness','morning-energy','sleep-and-wind-down'
  ];
  GK.Offline.GAMES = [
    'color-clash','memory-matrix','number-crunch','pattern-path',
    'quick-sort','sequence-recall','speed-match'
  ];
  GK.Offline.VISUALS = [
    'aurora','breathing-orb','dividing-cells','lava-flow','mandala','starfield'
  ];

  GK.Offline._prefKey = function(section, lang) {
    return 'guruka_offline_' + section + (lang ? '_' + lang : '');
  };

  GK.Offline._getLang = function() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    if (GK.Offline.LANGS.indexOf(parts[0]) !== -1) return parts[0];
    return 'en';
  };

  GK.Offline._buildUrls = function(section, lang) {
    var prefix = '/' + lang + '/';
    var urls = [];

    if (section === 'meditate') {
      urls.push(prefix + 'meditate/');
      GK.Offline.MEDITATIONS.forEach(function(slug) {
        urls.push(prefix + 'meditate/' + slug + '/');
        urls.push('/assets/' + lang + '/meditate/' + slug + '/content.json');
        urls.push('/assets/' + lang + '/meditate/' + slug + '/meditation.mp3');
      });
    } else if (section === 'games') {
      urls.push(prefix + 'games/');
      GK.Offline.GAMES.forEach(function(slug) {
        urls.push(prefix + 'games/' + slug + '/');
      });
    } else if (section === 'visuals') {
      urls.push(prefix + 'visuals/');
      GK.Offline.VISUALS.forEach(function(slug) {
        urls.push(prefix + 'visuals/' + slug + '/');
      });
    }
    return urls;
  };

  GK.Offline.downloadSection = function(section, lang, onProgress, onComplete) {
    if (!navigator.serviceWorker) return;
    var urls = GK.Offline._buildUrls(section, lang);
    var totalAll = urls.length;
    var finished = false;

    function done() {
      if (finished) return;
      finished = true;
      navigator.serviceWorker.removeEventListener('message', handleMessage);
      clearTimeout(timer);
      localStorage.setItem(GK.Offline._prefKey(section, lang), '1');
      if (onComplete) onComplete();
    }

    function handleMessage(e) {
      if (!e.data) return;
      if (e.data.type === 'CACHE_PROGRESS') {
        if (onProgress) onProgress(e.data.done, totalAll);
      }
      if (e.data.type === 'CACHE_COMPLETE') {
        done();
      }
    }

    // Timeout fallback — 90s to prevent infinite hang
    var timer = setTimeout(function() {
      if (!finished) done();
    }, 90000);

    navigator.serviceWorker.addEventListener('message', handleMessage);

    // Wait for SW to be ready before sending message
    navigator.serviceWorker.ready.then(function(reg) {
      if (reg.active) {
        reg.active.postMessage({
          type: 'CACHE_URLS', urls: urls, cacheName: 'guruka-pages-v1'
        });
      }
    });
  };

  GK.Offline.removeSection = function(section, lang, onComplete) {
    if (!navigator.serviceWorker) return;
    var urls = GK.Offline._buildUrls(section, lang);
    var pageUrls = urls.filter(function(u) { return !u.endsWith('.mp3') && !u.endsWith('.json'); });
    var audioUrls = urls.filter(function(u) { return u.endsWith('.mp3') || u.endsWith('.json'); });

    navigator.serviceWorker.ready.then(function(reg) {
      if (!reg.active) return;
      reg.active.postMessage({
        type: 'CLEAR_URLS', urls: pageUrls, cacheName: 'guruka-pages-v1'
      });
      if (audioUrls.length > 0) {
        reg.active.postMessage({
          type: 'CLEAR_URLS', urls: audioUrls, cacheName: 'guruka-audio-v1'
        });
      }
    });
    localStorage.removeItem(GK.Offline._prefKey(section, lang));
    if (onComplete) onComplete();
  };

  GK.Offline._injectStyles = function() {
    if (document.getElementById('gk-offline-styles')) return;
    var s = document.createElement('style');
    s.id = 'gk-offline-styles';
    s.textContent =
      '.gk-off-wrap{margin-top:0.5rem;font-size:0.8rem;color:rgba(0,0,0,0.45);line-height:1.5;text-align:center;padding:0 1rem}' +
      '.gk-off-link{color:rgba(0,0,0,0.55);text-decoration:none;cursor:pointer;border-bottom:1px solid rgba(0,0,0,0.2);transition:color 0.2s,border-color 0.2s}' +
      '.gk-off-link:hover{color:rgba(0,0,0,0.8);border-color:rgba(0,0,0,0.5)}' +
      '.gk-off-downloading{color:rgba(0,0,0,0.5)}' +
      '.gk-off-progress{width:100%;max-width:280px;height:3px;border-radius:2px;background:rgba(0,0,0,0.08);overflow:hidden;margin:0.4rem auto 0}' +
      '.gk-off-progress-fill{height:100%;background:rgba(15,144,114,0.8);border-radius:2px;transition:width 0.3s}' +
      '.gk-off-done{color:rgba(15,144,114,0.8)}' +
      '.gk-off-done a{color:rgba(0,0,0,0.4);text-decoration:none;cursor:pointer;border-bottom:1px solid rgba(0,0,0,0.15);transition:color 0.2s}' +
      '.gk-off-done a:hover{color:rgba(0,0,0,0.65)}' +
      '.gk-off-expiry-banner{position:fixed;top:0;left:0;right:0;z-index:9999;background:rgba(180,60,60,0.95);color:#fff;text-align:center;padding:0.6rem 1rem;font-size:0.85rem;font-family:-apple-system,sans-serif}' +
      '[data-theme="dark"] .gk-off-wrap{color:rgba(255,255,255,0.55)}' +
      '[data-theme="dark"] .gk-off-link{color:rgba(255,255,255,0.65);border-bottom-color:rgba(255,255,255,0.25)}' +
      '[data-theme="dark"] .gk-off-link:hover{color:rgba(255,255,255,0.85);border-color:rgba(255,255,255,0.5)}' +
      '[data-theme="dark"] .gk-off-downloading{color:rgba(255,255,255,0.55)}' +
      '[data-theme="dark"] .gk-off-progress{background:rgba(255,255,255,0.12)}' +
      '[data-theme="dark"] .gk-off-done a{color:rgba(255,255,255,0.45);border-bottom-color:rgba(255,255,255,0.18)}' +
      '[data-theme="dark"] .gk-off-done a:hover{color:rgba(255,255,255,0.7)}';
    document.head.appendChild(s);
  };

  GK.Offline.injectUI = function(section) {
    GK.Offline._injectStyles();

    var selectors = {
      meditate: '#meditate-hub .mh-header',
      games: '#games-hub .gh-header',
      visuals: '#visuals-hub .vh-header'
    };
    var header = document.querySelector(selectors[section]);
    if (!header) return;

    var lang = GK.Offline._getLang();

    var wrap = document.createElement('div');
    wrap.className = 'gk-off-wrap';
    wrap.id = 'gk-off-wrap';
    header.appendChild(wrap);

    // Cloud SVG icon (inline, small)
    var cloudIcon = '<svg style="display:inline;vertical-align:-2px;margin-right:4px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>';
    var checkIcon = '<svg style="display:inline;vertical-align:-2px;margin-right:2px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    function render() {
      var isSaved = localStorage.getItem(GK.Offline._prefKey(section, lang));

      if (isSaved) {
        wrap.innerHTML = '<span class="gk-off-done">' + checkIcon + ' Available offline &middot; <a id="gk-off-remove" href="#">Remove</a></span>';
        document.getElementById('gk-off-remove').addEventListener('click', function(e) {
          e.preventDefault();
          GK.Offline.removeSection(section, lang, render);
        });
      } else {
        wrap.innerHTML = cloudIcon + ' Use offline &ndash; <a class="gk-off-link" id="gk-off-download" href="#">enable</a>';

        document.getElementById('gk-off-download').addEventListener('click', function(e) {
          e.preventDefault();
          // Switch to downloading state
          wrap.innerHTML =
            '<span class="gk-off-downloading">Downloading for offline use\u2026</span>' +
            '<div class="gk-off-progress"><div class="gk-off-progress-fill" id="gk-off-fill" style="width:0%"></div></div>';

          GK.Offline.downloadSection(section, lang,
            function(done, total) {
              var fill = document.getElementById('gk-off-fill');
              if (fill) fill.style.width = Math.round((done / total) * 100) + '%';
            },
            function() {
              render();
            }
          );
        });
      }
    }

    render();
  };

  GK.Offline._checkExpiry = function() {
    var lastOnline = parseInt(localStorage.getItem(GK.Offline.LAST_ONLINE_KEY), 10);
    var now = Date.now();

    if (navigator.onLine) {
      localStorage.setItem(GK.Offline.LAST_ONLINE_KEY, String(now));
      return;
    }

    if (!lastOnline) return; // Never recorded — first visit, skip

    if (now - lastOnline > GK.Offline.THIRTY_DAYS) {
      // Expired — show banner
      var banner = document.createElement('div');
      banner.className = 'gk-off-expiry-banner';
      banner.textContent = 'Please reconnect to the internet to continue using offline content.';
      document.body.appendChild(banner);

      // Tell SW to clear caches
      if (navigator.serviceWorker) {
        navigator.serviceWorker.ready.then(function(reg) {
          if (reg.active) reg.active.postMessage({ type: 'CHECK_EXPIRY' });
        });
      }

      // Clear all offline preferences
      GK.Offline.LANGS.forEach(function(l) {
        localStorage.removeItem(GK.Offline._prefKey('meditate', l));
      });
      localStorage.removeItem(GK.Offline._prefKey('games'));
      localStorage.removeItem(GK.Offline._prefKey('visuals'));
    }
  };

  GK.Offline._respondToSW = function() {
    if (!navigator.serviceWorker) return;
    navigator.serviceWorker.addEventListener('message', function(e) {
      if (e.data && e.data.type === 'CHECK_LAST_ONLINE' && e.ports && e.ports[0]) {
        var last = parseInt(localStorage.getItem(GK.Offline.LAST_ONLINE_KEY), 10) || 0;
        var expired = Date.now() - last > GK.Offline.THIRTY_DAYS;
        e.ports[0].postMessage(expired);
      }
    });
  };

  GK.Offline._detectSection = function() {
    var path = window.location.pathname;
    if (/\/meditate\/?$/.test(path)) return 'meditate';
    if (/\/games\/?$/.test(path)) return 'games';
    if (/\/visuals\/?$/.test(path)) return 'visuals';
    return null;
  };

  GK.Offline.init = function() {
    if (!('serviceWorker' in navigator)) return;

    // Update last-online timestamp when online
    if (navigator.onLine) {
      localStorage.setItem(GK.Offline.LAST_ONLINE_KEY, String(Date.now()));
    }
    window.addEventListener('online', function() {
      localStorage.setItem(GK.Offline.LAST_ONLINE_KEY, String(Date.now()));
    });

    GK.Offline._respondToSW();
    GK.Offline._checkExpiry();

    // Inject UI on hub pages
    var section = GK.Offline._detectSection();
    if (section) {
      GK.Offline.injectUI(section);
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    GK.Offline.init();
  });

  /* ── Add-to-Home-Screen Hint ── */
  GK.HomeScreenHint = {};

  GK.HomeScreenHint._deferredPrompt = null;

  // Capture beforeinstallprompt for Android native install
  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    GK.HomeScreenHint._deferredPrompt = e;
  });

  GK.HomeScreenHint.init = function() {
    var path = window.location.pathname;
    if (path !== '/' && path !== '/games/' && path !== '/meditate/') return;
    if (localStorage.getItem('guruka_hs_dismissed')) return;
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    // Platform detection
    var ua = navigator.userAgent;
    var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    var isAndroid = /Android/.test(ua);
    if (!isIOS && !isAndroid) return; // Desktop: don't show

    var styleEl = document.createElement('style');
    styleEl.textContent =
      '@keyframes gkHsSlideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}' +
      '#gk-hs-hint{position:fixed;bottom:0;left:0;right:0;z-index:9999;background:rgba(15,23,42,0.95);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:rgba(255,255,255,0.9);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.875rem;padding:0.75rem 1rem;display:flex;align-items:center;gap:0.75rem;border-top:1px solid rgba(255,255,255,0.1);animation:gkHsSlideUp 0.4s ease-out;transition:transform 0.25s ease-out}' +
      '#gk-hs-hint .gk-hs-icon{width:40px;height:40px;border-radius:10px;background:#0f9072;display:flex;align-items:center;justify-content:center;flex-shrink:0}' +
      '#gk-hs-hint .gk-hs-icon svg{width:22px;height:22px}' +
      '#gk-hs-hint .gk-hs-body{flex:1;min-width:0}' +
      '#gk-hs-hint .gk-hs-title{font-weight:600;font-size:0.875rem;line-height:1.3}' +
      '#gk-hs-hint .gk-hs-desc{font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.3;display:flex;align-items:center;gap:0.3rem;margin-top:0.125rem}' +
      '#gk-hs-hint .gk-hs-desc svg{width:14px;height:14px;flex-shrink:0}' +
      '#gk-hs-hint .gk-hs-close{background:none;border:none;color:rgba(255,255,255,0.5);font-size:1.5rem;cursor:pointer;min-width:44px;min-height:44px;display:flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1;-webkit-tap-highlight-color:transparent}';
    document.head.appendChild(styleEl);

    var banner = document.createElement('div');
    banner.id = 'gk-hs-hint';

    // App icon (green square with G)
    var iconSvg = '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="20" y="27" font-family="-apple-system,sans-serif" font-weight="bold" font-size="24" fill="white" text-anchor="middle">G</text></svg>';

    // Platform-specific instruction
    var title = 'Add GURUKA to Home Screen';
    var desc;
    if (isIOS) {
      desc = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>' +
        'Tap Share then "Add to Home Screen"';
    } else {
      desc = '<svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>' +
        'Tap \u22ee then "Add to Home screen"';
    }

    banner.innerHTML =
      '<div class="gk-hs-icon">' + iconSvg + '</div>' +
      '<div class="gk-hs-body">' +
        '<div class="gk-hs-title">' + title + '</div>' +
        '<div class="gk-hs-desc">' + desc + '</div>' +
      '</div>' +
      '<button class="gk-hs-close" aria-label="Dismiss">\u00d7</button>';

    function dismiss() {
      localStorage.setItem('guruka_hs_dismissed', '1');
      banner.style.transform = 'translateY(100%)';
      setTimeout(function() { banner.remove(); }, 300);
    }

    banner.querySelector('.gk-hs-close').addEventListener('click', function(e) {
      e.stopPropagation();
      dismiss();
    });

    // Android: if native prompt available, tap banner to install
    if (isAndroid) {
      banner.style.cursor = 'pointer';
      banner.addEventListener('click', function() {
        if (GK.HomeScreenHint._deferredPrompt) {
          GK.HomeScreenHint._deferredPrompt.prompt();
          GK.HomeScreenHint._deferredPrompt.userChoice.then(function(result) {
            GK.HomeScreenHint._deferredPrompt = null;
            if (result.outcome === 'accepted') dismiss();
          });
        }
      });
    }

    // Swipe-down-to-dismiss
    var touchStartY = 0;
    var touchDeltaY = 0;
    banner.addEventListener('touchstart', function(e) {
      touchStartY = e.touches[0].clientY;
      touchDeltaY = 0;
    }, {passive: true});
    banner.addEventListener('touchmove', function(e) {
      touchDeltaY = e.touches[0].clientY - touchStartY;
      if (touchDeltaY > 0) {
        banner.style.transform = 'translateY(' + touchDeltaY + 'px)';
      }
    }, {passive: true});
    banner.addEventListener('touchend', function() {
      if (touchDeltaY > 60) {
        dismiss();
      } else {
        banner.style.transform = 'translateY(0)';
      }
    }, {passive: true});

    document.body.appendChild(banner);
  };

  GK.HomeScreenHint.init();
})();

