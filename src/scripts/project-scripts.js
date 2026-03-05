/* Project-specific scripts */
/* GURUKA Shared Functions */
(function() {
  var GK = window.GK = {};
  var STORAGE_NAME = 'guruka_player_name';

  /* ── Player Name ── */
  GK.getPlayerName = function() {
    return localStorage.getItem(STORAGE_NAME) || '';
  };
  GK.savePlayerName = function(name) {
    localStorage.setItem(STORAGE_NAME, (name || '').trim());
  };
  GK.initNameInput = function(inputId) {
    var el = document.getElementById(inputId);
    if (!el) return;
    el.value = GK.getPlayerName();
    el.addEventListener('input', function() {
      GK.savePlayerName(el.value);
    });
  };

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

  /* ── Share Buttons ── */
  GK.renderShareButtons = function(containerId, score, gameTitle, gamePath) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var name = GK.getPlayerName() || 'Someone';
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
      });
  };

  GK.Meditation.initVisual = function(colors) {
    var style = document.createElement('style');
    style.textContent =
      '@keyframes gk-med-blob1{0%,100%{transform:translate(0,0) rotate(0deg) scale(1)}33%{transform:translate(30px,-50px) rotate(120deg) scale(1.1)}66%{transform:translate(-20px,40px) rotate(240deg) scale(0.9)}}' +
      '@keyframes gk-med-blob2{0%,100%{transform:translate(0,0) rotate(0deg) scale(1)}33%{transform:translate(-40px,30px) rotate(-120deg) scale(0.9)}66%{transform:translate(50px,-20px) rotate(-240deg) scale(1.1)}}' +
      '#meditation-app{position:fixed;top:0;left:0;right:0;bottom:0;z-index:50;background:' + colors.bg + ';overflow:hidden}' +
      '#meditation-app::before,#meditation-app::after{content:"";position:absolute;width:70vmax;height:70vmax;border-radius:50%;filter:blur(60px);opacity:1;pointer-events:none}' +
      '#meditation-app::before{top:-20%;left:-10%;background:radial-gradient(circle,' + colors.c1 + ',' + colors.c2 + ',transparent 70%);animation:gk-med-blob1 20s ease-in-out infinite}' +
      '#meditation-app::after{bottom:-20%;right:-10%;background:radial-gradient(circle,' + colors.c2 + ',' + colors.c3 + ',transparent 70%);animation:gk-med-blob2 25s ease-in-out infinite}';
    document.head.appendChild(style);
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
        '@keyframes gkm-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}' +
        '@keyframes gkm-glow{0%,100%{box-shadow:0 0 30px rgba(var(--gkm-glow-rgb),0.15),0 0 60px rgba(var(--gkm-glow-rgb),0.08)}50%{box-shadow:0 0 50px rgba(var(--gkm-glow-rgb),0.3),0 0 90px rgba(var(--gkm-glow-rgb),0.15)}}' +
        '@keyframes gkm-fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}' +
        '.gkm-ui{position:relative;z-index:1;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;user-select:none;-webkit-user-select:none}' +
        '.gkm-close{position:absolute;top:1rem;right:1.25rem;color:rgba(255,255,255,0.4);font-size:1.75rem;text-decoration:none;z-index:2;line-height:1;transition:color 0.2s;display:none}' +
        '.gkm-close:hover{color:rgba(255,255,255,0.8)}' +
        '.gkm-text{text-align:center;padding:0 2rem;max-width:36rem;min-height:3rem;transition:opacity 0.8s ease;font-size:clamp(1.1rem,4vw,1.5rem);font-weight:300;line-height:1.7;margin-bottom:2rem;white-space:pre-line}' +
        '.gkm-circle{width:180px;height:180px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;touch-action:manipulation;position:relative;outline:none;-webkit-tap-highlight-color:transparent;transition:transform 0.2s}' +
        '.gkm-circle:active{transform:scale(0.97)}' +
        '.gkm-circle svg{position:absolute;top:0;left:0;width:100%;height:100%}' +
        '.gkm-breathing{animation:gkm-breathe 6s ease-in-out infinite}' +
        '.gkm-glow{animation:gkm-glow 3s ease-in-out infinite}' +
        '.gkm-inner{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.25rem}' +
        '.gkm-time{font-size:2rem;font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:0.02em;color:rgba(255,255,255,0.9)}' +
        '.gkm-circle-label{font-size:0.75rem;font-weight:400;color:rgba(255,255,255,0.5);letter-spacing:0.05em;text-transform:uppercase}' +
        '.gkm-circle-icon{color:rgba(255,255,255,0.8)}' +
        '.gkm-idle-info{text-align:center;margin-top:2rem}' +
        '.gkm-idle-info h2{font-size:1.5rem;font-weight:600;margin:0 0 0.25rem}' +
        '.gkm-idle-info p{font-size:0.95rem;color:rgba(255,255,255,0.5);margin:0}' +
        '.gkm-end{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;opacity:0;pointer-events:none;transition:opacity 0.6s ease}' +
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
        '.gkm-pause-icon span{display:block;width:3px;height:14px;background:rgba(255,255,255,0.6);border-radius:1px}';
      document.head.appendChild(styleEl);
    }

    // Parse glow color from data.colors.c1 (rgba → rgb)
    var glowRgb = '255,255,255';
    if (data.colors && data.colors.c1) {
      var m = data.colors.c1.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (m) glowRgb = m[1] + ',' + m[2] + ',' + m[3];
    }

    var state = 'idle';
    var startTime = 0;
    var elapsed = 0;
    var pausedAt = 0;
    var rafId = null;
    var currentIdx = -1;
    var wakeLock = null;

    var circumference = 2 * Math.PI * 85; // 534.07

    // Play triangle SVG
    var playIcon = '<svg class="gkm-circle-icon" width="30" height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)"><polygon points="6,3 20,12 6,21"/></svg>';
    var pauseIcon = '<div class="gkm-pause-icon"><span></span><span></span></div>';
    var checkIcon = '<svg class="gkm-circle-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    // 2. Build HTML
    var ui = document.createElement('div');
    ui.className = 'gkm-ui';

    ui.innerHTML =
      '<a href="/meditate/" class="gkm-close" id="gkm-close" aria-label="Close">&times;</a>' +
      '<div class="gkm-text" id="gkm-text"></div>' +
      '<div class="gkm-circle gkm-glow" id="gkm-circle" tabindex="0" role="button" aria-label="Start meditation" style="--gkm-glow-rgb:' + glowRgb + '">' +
        '<svg viewBox="0 0 200 200">' +
          '<circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6"/>' +
          '<circle id="gkm-progress" cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + circumference.toFixed(2) + '" stroke-dashoffset="0" transform="rotate(-90 100 100)" style="transition:stroke-dashoffset 0.3s linear"/>' +
        '</svg>' +
        '<div class="gkm-inner" id="gkm-inner">' +
          playIcon +
          '<div class="gkm-circle-label">Tap to Begin</div>' +
        '</div>' +
      '</div>' +
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
          '<a href="/meditate/" class="gkm-btn gkm-btn-ghost">Back to Meditations</a>' +
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

    function getSlug() {
      var p = window.location.pathname.replace(/^\/meditate\//, '').replace(/\/$/, '');
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

    function updateText(sec) {
      var newIdx = -1;
      for (var i = data.body.length - 1; i >= 0; i--) {
        if (sec >= data.body[i].time) { newIdx = i; break; }
      }
      if (newIdx !== currentIdx) {
        currentIdx = newIdx;
        textEl.style.opacity = '0';
        setTimeout(function() {
          textEl.textContent = currentIdx >= 0 ? data.body[currentIdx].text : '';
          textEl.style.opacity = '1';
        }, 400);
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
      setCircleContent(
        pauseIcon +
        '<div class="gkm-time">' + formatTime(remaining) + '</div>'
      );
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
      idleEl.style.display = 'none';
      endEl.classList.remove('gkm-visible');
      closeEl.style.display = 'block';
      textEl.textContent = '';
      textEl.style.opacity = '1';
      progressEl.setAttribute('stroke-dashoffset', '0');
      circleEl.classList.remove('gkm-glow');
      circleEl.classList.add('gkm-breathing');
      circleEl.setAttribute('aria-label', 'Pause meditation');
      acquireWakeLock();
      tick();
    }

    function pause() {
      state = 'paused';
      if (audio) audio.pause();
      pausedAt = Date.now();
      if (rafId) cancelAnimationFrame(rafId);
      textEl.style.opacity = '0.4';
      circleEl.classList.remove('gkm-breathing');
      circleEl.style.animationPlayState = '';
      setCircleContent(
        playIcon +
        '<div class="gkm-circle-label">Resume</div>'
      );
      circleEl.setAttribute('aria-label', 'Resume meditation');
      releaseWakeLock();
    }

    function resume() {
      state = 'running';
      if (audio) {
        audio.play();
      } else {
        startTime += Date.now() - pausedAt;
      }
      textEl.style.opacity = '1';
      circleEl.classList.add('gkm-breathing');
      circleEl.setAttribute('aria-label', 'Pause meditation');
      acquireWakeLock();
      tick();
    }

    function complete() {
      state = 'complete';
      if (rafId) cancelAnimationFrame(rafId);
      progressEl.setAttribute('stroke-dashoffset', String(circumference));
      textEl.style.opacity = '0';
      setTimeout(function() { textEl.textContent = ''; }, 400);
      circleEl.classList.remove('gkm-breathing');
      circleEl.style.display = 'none';
      closeEl.style.display = 'none';
      setCircleContent(checkIcon);

      // Save stats
      var slug = getSlug();
      var finalStats = GK.Meditation._saveSession(slug, Math.round(data.duration));

      // Render stats
      statsEl.innerHTML =
        '<div>' + formatDuration(Math.round(data.duration)) + '</div>' +
        '<div style="margin-top:0.25rem">Session ' + finalStats.totalSessions + ' \u00b7 ' + formatDuration(finalStats.totalSeconds) + ' total</div>';

      hintEl.textContent = getHintText();

      endEl.classList.add('gkm-visible');
      releaseWakeLock();
    }

    function restart() {
      endEl.classList.remove('gkm-visible');
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
      handleCircleAction();
    });

    circleEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCircleAction();
      }
    });

    document.getElementById('gkm-restart').addEventListener('click', restart);

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

  /* ── Add-to-Home-Screen Hint ── */
  GK.HomeScreenHint = {};

  GK.HomeScreenHint.init = function() {
    // Only show on specific pages
    var path = window.location.pathname;
    if (path !== '/' && path !== '/games/' && path !== '/meditate/') return;

    // Don't show if already dismissed
    if (localStorage.getItem('guruka_hs_dismissed')) return;

    // Don't show if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    var banner = document.createElement('div');
    banner.id = 'gk-hs-hint';
    banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:rgba(15,23,42,0.95);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:rgba(255,255,255,0.9);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:0.875rem;padding:0.75rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:0.75rem;border-top:1px solid rgba(255,255,255,0.1);animation:gkHsSlideUp 0.4s ease-out';

    var styleEl = document.createElement('style');
    styleEl.textContent = '@keyframes gkHsSlideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}';
    document.head.appendChild(styleEl);

    var text = document.createElement('span');
    text.textContent = 'Add GURUKA to your home screen for quick access';

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '\u00d7';
    closeBtn.setAttribute('aria-label', 'Dismiss');
    closeBtn.style.cssText = 'background:none;border:none;color:rgba(255,255,255,0.6);font-size:1.5rem;cursor:pointer;padding:0 0.25rem;line-height:1;flex-shrink:0';

    closeBtn.addEventListener('click', function() {
      localStorage.setItem('guruka_hs_dismissed', '1');
      banner.remove();
    });

    banner.appendChild(text);
    banner.appendChild(closeBtn);
    document.body.appendChild(banner);
  };

  GK.HomeScreenHint.init();
})();

