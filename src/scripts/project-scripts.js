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

  /* ── Share Result ── */
  GK.shareResult = function(score, gameTitle, gamePath, copiedId) {
    var name = GK.getPlayerName() || 'Someone';
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
})();

