---
title: "Speed Match - Brain Training Game"
description: "Test your processing speed and working memory with this fast-paced symbol matching game. Compare symbols and respond quickly!"
full_width: true
---

<style>
#speed-match-game {
max-width: 600px;
margin: 0 auto;
padding: 1rem;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
color: var(--color-text-primary);
min-height: 80vh;
display: flex;
flex-direction: column;
user-select: none;
-webkit-user-select: none;
}

[data-theme="dark"] #speed-match-game {
color: var(--color-dark-text-primary);
}

/* ── Instructions Screen ── */
#sm-instructions {
text-align: center;
padding: 2rem 1rem;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

#sm-instructions .sm-icon {
font-size: 4rem;
margin-bottom: 1rem;
filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

#sm-instructions h2 {
font-size: 1.75rem;
margin: 0 0 0.25rem 0;
color: var(--color-primary);
}

#sm-instructions .sm-subtitle {
color: var(--color-text-secondary);
margin: 0 0 1.5rem 0;
font-size: 0.95rem;
}

[data-theme="dark"] #sm-instructions .sm-subtitle {
color: var(--color-dark-text-secondary);
}

#sm-instructions .sm-how-to {
text-align: left;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.5rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border);
}

[data-theme="dark"] #sm-instructions .sm-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#sm-instructions .sm-how-to h3 {
margin: 0 0 0.75rem 0;
font-size: 1rem;
color: var(--color-primary);
}

#sm-instructions .sm-how-to ol {
margin: 0;
padding-left: 1.25rem;
}

#sm-instructions .sm-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

.sm-kbd-hints {
display: flex;
gap: 1.5rem;
justify-content: center;
margin-bottom: 1.5rem;
flex-wrap: wrap;
}

.sm-kbd-hint {
display: flex;
align-items: center;
gap: 0.4rem;
font-size: 0.85rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .sm-kbd-hint {
color: var(--color-dark-text-secondary);
}

.sm-kbd {
display: inline-block;
padding: 0.15rem 0.5rem;
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.25rem;
font-family: monospace;
font-size: 0.8rem;
font-weight: 600;
}

[data-theme="dark"] .sm-kbd {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.sm-personal-best {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.5rem;
padding: 0.6rem 1.25rem;
margin-bottom: 1.5rem;
font-size: 0.9rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .sm-personal-best {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}

.sm-personal-best strong {
color: var(--color-primary);
}

/* ── Buttons ── */
.sm-btn-primary {
background: var(--color-primary);
color: #fff;
border: none;
padding: 0.8rem 2.5rem;
border-radius: 0.5rem;
font-size: 1.1rem;
font-weight: 600;
cursor: pointer;
transition: background 0.2s, transform 0.1s;
}

.sm-btn-primary:hover {
background: var(--color-primary-hover);
}

.sm-btn-primary:active {
transform: scale(0.97);
}

.sm-btn-secondary {
background: transparent;
color: var(--color-primary);
border: 1px solid var(--color-primary);
padding: 0.6rem 1.5rem;
border-radius: 0.5rem;
font-size: 0.95rem;
font-weight: 500;
cursor: pointer;
transition: background 0.2s;
text-decoration: none;
display: inline-block;
}

.sm-btn-secondary:hover {
background: var(--color-bg-secondary);
}

[data-theme="dark"] .sm-btn-secondary:hover {
background: var(--color-dark-bg-secondary);
}

/* ── Wizard Overlay ── */
#sm-wizard {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
#sm-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: sm-wizard-enter 0.3s ease-out;
}
[data-theme="dark"] #sm-wizard-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}
@keyframes sm-wizard-enter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
.sm-wizard-icon {
font-size: 2.5rem;
margin-bottom: 0.75rem;
}
.sm-wizard-title {
font-size: 1.25rem;
font-weight: 700;
margin: 0 0 0.5rem;
}
.sm-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] .sm-wizard-desc {
color: var(--color-dark-text-secondary);
}
.sm-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
.sm-wizard-dot {
width: 8px;
height: 8px;
border-radius: 50%;
background: var(--color-border, #dfe4ea);
transition: all 0.3s;
}
.sm-wizard-dot.active {
background: var(--color-primary);
transform: scale(1.3);
}
[data-theme="dark"] .sm-wizard-dot {
background: var(--color-dark-border, #3a4553);
}
[data-theme="dark"] .sm-wizard-dot.active {
background: var(--color-primary);
}
.sm-wizard-btn {
width: 100%;
padding: 0.875rem;
font-size: 1rem;
font-weight: 600;
border: none;
border-radius: 0.75rem;
background: var(--color-primary);
color: #fff;
cursor: pointer;
transition: background 0.2s;
min-height: 44px;
}
.sm-wizard-btn:hover {
background: var(--color-primary-hover, #0d7a62);
}
@media (max-width: 400px) {
#sm-wizard-card {
padding: 1.5rem 1rem;
}
.sm-wizard-icon {
font-size: 2rem;
}
.sm-wizard-title {
font-size: 1.1rem;
}
.sm-wizard-desc {
font-size: 0.85rem;
}
}

/* ── Playing Screen ── */
#sm-playing {
display: none;
flex: 1;
flex-direction: column;
}

.sm-header {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 0.5rem;
margin-bottom: 0.75rem;
padding: 0.75rem;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .sm-header {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.sm-stat {
text-align: center;
}

.sm-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
margin-bottom: 0.15rem;
}

[data-theme="dark"] .sm-stat-label {
color: var(--color-dark-text-secondary);
}

.sm-stat-value {
font-size: 1.15rem;
font-weight: 700;
}

.sm-level-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
font-size: 0.85rem;
}

.sm-level-text {
font-weight: 600;
}

.sm-nback-badge {
background: var(--color-primary);
color: #fff;
padding: 0.15rem 0.5rem;
border-radius: 0.25rem;
font-size: 0.75rem;
font-weight: 600;
}

.sm-progress-bar {
width: 100%;
height: 6px;
background: var(--color-bg-secondary);
border-radius: 3px;
overflow: hidden;
margin-bottom: 1rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .sm-progress-bar {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.sm-progress-fill {
height: 100%;
background: var(--color-primary);
border-radius: 3px;
transition: width 0.3s ease;
}

.sm-timer-bar {
width: 100%;
height: 4px;
background: var(--color-bg-secondary);
border-radius: 2px;
overflow: hidden;
margin-bottom: 1rem;
}

[data-theme="dark"] .sm-timer-bar {
background: var(--color-dark-bg-secondary);
}

.sm-timer-fill {
height: 100%;
background: var(--color-primary);
border-radius: 2px;
transition: width 0.05s linear;
}

.sm-timer-fill.sm-timer-warning {
background: #ef4444;
}

/* ── Symbol Display ── */
.sm-symbol-area {
flex: 1;
display: flex;
align-items: center;
justify-content: center;
min-height: 200px;
position: relative;
}

.sm-symbol {
font-size: 7rem;
line-height: 1;
transition: transform 0.15s ease;
animation: sm-symbol-enter 0.2s ease-out;
}

@keyframes sm-symbol-enter {
0% { transform: scale(0.5); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

.sm-feedback-flash {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
border-radius: 1rem;
opacity: 0;
pointer-events: none;
transition: opacity 0.15s ease;
}

.sm-feedback-flash.sm-flash-correct {
background: rgba(34, 197, 94, 0.15);
opacity: 1;
}

.sm-feedback-flash.sm-flash-wrong {
background: rgba(239, 68, 68, 0.15);
opacity: 1;
}

.sm-feedback-icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
font-size: 3rem;
pointer-events: none;
z-index: 2;
}

.sm-feedback-icon.sm-show-check {
animation: sm-feedback-pop 0.4s ease-out forwards;
color: #22c55e;
}

.sm-feedback-icon.sm-show-x {
animation: sm-feedback-pop 0.4s ease-out forwards;
color: #ef4444;
}

@keyframes sm-feedback-pop {
0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}

/* ── Action Buttons ── */
.sm-actions {
display: flex;
gap: 1rem;
margin-top: 1rem;
margin-bottom: 0.75rem;
}

.sm-action-btn {
flex: 1;
padding: 1rem;
border: 2px solid var(--color-border);
border-radius: 0.75rem;
font-size: 1.1rem;
font-weight: 700;
cursor: pointer;
transition: transform 0.1s, border-color 0.15s, background 0.15s;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.25rem;
background: var(--color-bg-primary);
color: var(--color-text-primary);
}

[data-theme="dark"] .sm-action-btn {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-primary);
}

.sm-action-btn:active {
transform: scale(0.95);
}

.sm-action-btn .sm-btn-icon {
font-size: 1.5rem;
}

.sm-action-btn .sm-btn-kbd {
font-size: 0.65rem;
color: var(--color-text-secondary);
font-weight: 400;
}

[data-theme="dark"] .sm-action-btn .sm-btn-kbd {
color: var(--color-dark-text-secondary);
}

.sm-btn-different {
border-color: #ef4444;
}

.sm-btn-different:hover {
background: rgba(239, 68, 68, 0.08);
}

[data-theme="dark"] .sm-btn-different:hover {
background: rgba(239, 68, 68, 0.15);
}

.sm-btn-same {
border-color: #22c55e;
}

.sm-btn-same:hover {
background: rgba(34, 197, 94, 0.08);
}

[data-theme="dark"] .sm-btn-same:hover {
background: rgba(34, 197, 94, 0.15);
}

.sm-playing-kbd-hint {
text-align: center;
font-size: 0.75rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .sm-playing-kbd-hint {
color: var(--color-dark-text-secondary);
}

/* ── Pause Overlay ── */
#sm-pause-overlay {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.75);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
flex-direction: column;
gap: 1.5rem;
}

#sm-pause-overlay .sm-pause-text {
font-size: 2.5rem;
font-weight: 800;
color: #fff;
text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}

/* ── Game Complete Modal ── */
#sm-complete-overlay {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.6);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}

.sm-complete-card {
background: var(--color-bg-primary);
border-radius: 1rem;
padding: 2rem;
max-width: 400px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: sm-modal-enter 0.3s ease-out;
}

[data-theme="dark"] .sm-complete-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}

@keyframes sm-modal-enter {
0% { transform: scale(0.8) translateY(20px); opacity: 0; }
100% { transform: scale(1) translateY(0); opacity: 1; }
}

.sm-complete-card h2 {
margin: 0 0 0.25rem 0;
font-size: 1.5rem;
}

.sm-complete-card .sm-trophy {
font-size: 3.5rem;
margin-bottom: 0.5rem;
}

.sm-final-score {
font-size: 2.5rem;
font-weight: 800;
color: var(--color-primary);
margin: 0.5rem 0;
}

.sm-new-best {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316);
color: #fff;
padding: 0.25rem 0.75rem;
border-radius: 1rem;
font-size: 0.85rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: sm-best-pulse 1s ease-in-out infinite alternate;
}

@keyframes sm-best-pulse {
0% { transform: scale(1); }
100% { transform: scale(1.05); }
}

.sm-complete-stats {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin: 1rem 0 1.5rem;
}

.sm-complete-stat {
background: var(--color-bg-secondary);
border-radius: 0.5rem;
padding: 0.6rem;
}

[data-theme="dark"] .sm-complete-stat {
background: var(--color-dark-bg-secondary);
}

.sm-complete-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
}

[data-theme="dark"] .sm-complete-stat-label {
color: var(--color-dark-text-secondary);
}

.sm-complete-stat-value {
font-size: 1.2rem;
font-weight: 700;
}

.sm-complete-actions {
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
}

.sm-back-link {
color: var(--color-text-secondary);
font-size: 0.9rem;
text-decoration: none;
}

[data-theme="dark"] .sm-back-link {
color: var(--color-dark-text-secondary);
}

.sm-back-link:hover {
color: var(--color-primary);
text-decoration: underline;
}

/* ── Level Up Toast ── */
.sm-level-up-toast {
position: fixed;
top: 1.5rem;
left: 50%;
transform: translateX(-50%) translateY(-100px);
background: var(--color-primary);
color: #fff;
padding: 0.6rem 1.5rem;
border-radius: 2rem;
font-weight: 700;
font-size: 1rem;
z-index: 999;
box-shadow: 0 4px 20px rgba(0,0,0,0.2);
transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
white-space: nowrap;
}

.sm-level-up-toast.sm-toast-show {
transform: translateX(-50%) translateY(0);
}

/* ── Responsive ── */
@media (max-width: 480px) {
#speed-match-game {
padding: 0.5rem;
}
.sm-symbol {
font-size: 5rem;
}
.sm-action-btn {
padding: 0.75rem;
font-size: 1rem;
}
.sm-header {
padding: 0.5rem;
gap: 0.25rem;
}
.sm-stat-value {
font-size: 1rem;
}
}
@media (max-width: 640px) {
#speed-match-game {
padding: 0.75rem;
}
.sm-symbol {
font-size: 6rem;
}
.sm-action-btn {
padding: 0.875rem;
}
}
@media (max-width: 360px) {
.sm-symbol {
font-size: 4rem;
}
.sm-action-btn {
padding: 0.625rem;
font-size: 0.9rem;
}
.sm-complete-stats {
grid-template-columns: 1fr 1fr;
}
.sm-final-score {
font-size: 2rem;
}
.sm-header {
padding: 0.375rem;
}
.sm-stat-value {
font-size: 0.9rem;
}
}
@keyframes sm-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.sm-confetti-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.sm-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: sm-confetti-fall 2.5s ease-in forwards;
}
.sm-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: sm-glow-fade 1s ease-out forwards;
}
@keyframes sm-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.sm-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
padding: 0.35rem 1rem;
border-radius: 1rem;
font-size: 0.9rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: sm-badge-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(245,158,11,0.4);
}
@keyframes sm-badge-bounce {
0% { transform: scale(0); opacity: 0; }
60% { transform: scale(1.2); }
100% { transform: scale(1); opacity: 1; }
}
</style>

<div id="speed-match-game">

<div id="sm-instructions">
<div class="sm-icon">&#9889;</div>
<h2>Speed Match</h2>
<p class="sm-subtitle">Test your processing speed and working memory</p>
<div class="sm-how-to">
<h3>How to Play</h3>
<ol>
<li>A symbol appears on screen each round.</li>
<li>Decide if it <strong>matches</strong> the symbol from the previous round.</li>
<li>Click <strong>Same</strong> if it matches, <strong>Different</strong> if it does not.</li>
<li>Respond before time runs out or it counts as wrong!</li>
<li>As you level up, the game gets faster and harder.</li>
</ol>
</div>
<div class="sm-kbd-hints">
<span class="sm-kbd-hint"><span class="sm-kbd">A</span> / <span class="sm-kbd">&larr;</span> Different</span>
<span class="sm-kbd-hint"><span class="sm-kbd">D</span> / <span class="sm-kbd">&rarr;</span> Same</span>
<span class="sm-kbd-hint"><span class="sm-kbd">Esc</span> Pause</span>
</div>
<div id="sm-best-display" class="sm-personal-best" style="display:none;">
Personal Best: <strong id="sm-best-score">0</strong> points
</div>
<button class="sm-btn-primary" id="sm-start-btn">Start Game</button>
<div id="sm-challenge-banner-wrap"></div>
<input type="text" id="sm-player-name" class="gk-name-input" placeholder="Your name (for sharing)" maxlength="20">
</div>

<div id="sm-wizard">
<div id="sm-wizard-card"></div>
</div>

<div id="sm-playing">
<div class="sm-header">
<div class="sm-stat">
<div class="sm-stat-label">Score</div>
<div class="sm-stat-value" id="sm-score">0</div>
</div>
<div class="sm-stat">
<div class="sm-stat-label">Streak</div>
<div class="sm-stat-value" id="sm-streak">0</div>
</div>
<div class="sm-stat">
<div class="sm-stat-label">Level</div>
<div class="sm-stat-value" id="sm-level">1</div>
</div>
</div>
<div class="sm-level-info">
<span class="sm-level-text">Level <span id="sm-level-text">1</span></span>
<span class="sm-nback-badge" id="sm-nback-badge">1-Back</span>
</div>
<div class="sm-progress-bar">
<div class="sm-progress-fill" id="sm-progress-fill" style="width:0%"></div>
</div>
<div class="sm-timer-bar">
<div class="sm-timer-fill" id="sm-timer-fill" style="width:100%"></div>
</div>
<div class="sm-symbol-area">
<div class="sm-feedback-flash" id="sm-feedback-flash"></div>
<div class="sm-feedback-icon" id="sm-feedback-icon"></div>
<div class="sm-symbol" id="sm-symbol"></div>
</div>
<div class="sm-actions">
<button class="sm-action-btn sm-btn-different" id="sm-btn-different">
<span class="sm-btn-icon">&#10007;</span>
<span>Different</span>
<span class="sm-btn-kbd">A / &larr;</span>
</button>
<button class="sm-action-btn sm-btn-same" id="sm-btn-same">
<span class="sm-btn-icon">&#10003;</span>
<span>Same</span>
<span class="sm-btn-kbd">D / &rarr;</span>
</button>
</div>
<div class="sm-playing-kbd-hint">Press <strong>Esc</strong> to pause</div>
<button class="gk-finish-btn" id="sm-finish-btn">Finish Game</button>
</div>

<div id="sm-pause-overlay">
<div class="sm-pause-text">Paused</div>
<button class="sm-btn-primary" id="sm-resume-btn">Resume</button>
</div>

<div id="sm-complete-overlay">
<div class="sm-complete-card">
<div class="sm-trophy">&#127942;</div>
<h2>Game Complete!</h2>
<div class="sm-final-score" id="sm-final-score">0</div>
<div id="sm-new-best" class="sm-new-best" style="display:none;">&#11088; New Best!</div>
<div class="gk-challenge-result" id="sm-challenge-result" style="display:none;"></div>
<div class="sm-complete-stats">
<div class="sm-complete-stat">
<div class="sm-complete-stat-label">Level Reached</div>
<div class="sm-complete-stat-value" id="sm-final-level">1</div>
</div>
<div class="sm-complete-stat">
<div class="sm-complete-stat-label">Accuracy</div>
<div class="sm-complete-stat-value" id="sm-final-accuracy">0%</div>
</div>
<div class="sm-complete-stat">
<div class="sm-complete-stat-label">Best Streak</div>
<div class="sm-complete-stat-value" id="sm-final-streak">0</div>
</div>
<div class="sm-complete-stat">
<div class="sm-complete-stat-label">Personal Best</div>
<div class="sm-complete-stat-value" id="sm-final-best">0</div>
</div>
</div>
<div class="sm-complete-actions">
<button class="sm-btn-primary" id="sm-play-again-btn">Play Again</button>
<a href="/games/" class="sm-back-link">&larr; Back to Games</a>
</div>
<div class="gk-share-section">
<div class="gk-share-title">Challenge a Friend</div>
<button class="gk-share-btn" id="sm-share-btn">&#128279; Share Your Score</button>
<div class="gk-share-copied" id="sm-share-copied" style="display:none;">Link copied!</div>
</div>
</div>
</div>

<div class="sm-level-up-toast" id="sm-level-toast">Level Up!</div>

</div>

<script>
(function() {
"use strict";

var SYMBOLS = ['\u25C6', '\u25CF', '\u25A0', '\u25B2', '\u2605', '\u2666', '\u2660', '\u2663', '\u2665', '\u2B1F', '\u2B21', '\u25EF'];
var MAX_LEVEL = 20;
var STORAGE_HISTORY = 'guruka_speed-match_history';
var STORAGE_BEST = 'guruka_speed-match_best';

var challenge = GK.parseChallenge();

var state = {
screen: 'instructions',
level: 1,
score: 0,
streak: 0,
bestStreak: 0,
round: 0,
totalCorrect: 0,
totalAnswered: 0,
symbolHistory: [],
currentSymbol: '',
answered: false,
paused: false,
roundStartTime: 0,
timerInterval: null,
autoAdvanceTimeout: null,
gameOver: false
};

/* ── DOM refs ── */
var elInstructions = document.getElementById('sm-instructions');
var elWizard = document.getElementById('sm-wizard');
var elWizardCard = document.getElementById('sm-wizard-card');
var elPlaying = document.getElementById('sm-playing');
var elPauseOverlay = document.getElementById('sm-pause-overlay');
var elCompleteOverlay = document.getElementById('sm-complete-overlay');
var elScore = document.getElementById('sm-score');
var elStreak = document.getElementById('sm-streak');
var elLevel = document.getElementById('sm-level');
var elLevelText = document.getElementById('sm-level-text');
var elNbackBadge = document.getElementById('sm-nback-badge');
var elProgressFill = document.getElementById('sm-progress-fill');
var elTimerFill = document.getElementById('sm-timer-fill');
var elSymbol = document.getElementById('sm-symbol');
var elFeedbackFlash = document.getElementById('sm-feedback-flash');
var elFeedbackIcon = document.getElementById('sm-feedback-icon');
var elFinalScore = document.getElementById('sm-final-score');
var elNewBest = document.getElementById('sm-new-best');
var elFinalLevel = document.getElementById('sm-final-level');
var elFinalAccuracy = document.getElementById('sm-final-accuracy');
var elFinalStreak = document.getElementById('sm-final-streak');
var elFinalBest = document.getElementById('sm-final-best');
var elBestDisplay = document.getElementById('sm-best-display');
var elBestScore = document.getElementById('sm-best-score');
var elLevelToast = document.getElementById('sm-level-toast');
var btnStart = document.getElementById('sm-start-btn');
var btnDifferent = document.getElementById('sm-btn-different');
var btnSame = document.getElementById('sm-btn-same');
var btnResume = document.getElementById('sm-resume-btn');
var btnPlayAgain = document.getElementById('sm-play-again-btn');

/* ── Level parameters ── */
function getNBack(lvl) {
return lvl <= 10 ? 1 : 2;
}

function getDisplayTime(lvl) {
return Math.max(2500 - lvl * 100, 800);
}

function getSymbolCount(lvl) {
return Math.min(6 + Math.floor(lvl / 3), 12);
}

function getRoundsPerLevel(lvl) {
return 10 + lvl;
}

/* ── localStorage helpers ── */
function loadBest() {
try {
var b = localStorage.getItem(STORAGE_BEST);
return b ? parseInt(b, 10) : 0;
} catch(e) { return 0; }
}

function saveBest(score) {
try { localStorage.setItem(STORAGE_BEST, String(score)); } catch(e) {}
}

function saveHistory(entry) {
try {
var raw = localStorage.getItem(STORAGE_HISTORY);
var arr = raw ? JSON.parse(raw) : [];
arr.push(entry);
if (arr.length > 50) arr = arr.slice(-50);
localStorage.setItem(STORAGE_HISTORY, JSON.stringify(arr));
} catch(e) {}
}

/* ── Show personal best on instructions ── */
function showPersonalBest() {
var best = loadBest();
if (best > 0) {
elBestScore.textContent = best.toLocaleString();
elBestDisplay.style.display = 'block';
} else {
elBestDisplay.style.display = 'none';
}
}

/* ── Screen management ── */
function showScreen(name) {
elInstructions.style.display = name === 'instructions' ? 'flex' : 'none';
elPlaying.style.display = name === 'playing' ? 'flex' : 'none';
elWizard.style.display = name === 'wizard' ? 'flex' : 'none';
elPauseOverlay.style.display = name === 'paused' ? 'flex' : 'none';
elCompleteOverlay.style.display = name === 'complete' ? 'flex' : 'none';
state.screen = name;
}

/* ── Pick a random symbol ── */
function pickSymbol() {
var count = getSymbolCount(state.level);
var pool = SYMBOLS.slice(0, count);
return pool[Math.floor(Math.random() * pool.length)];
}

/* ── Determine if current symbol matches nBack ── */
function isMatch() {
var nBack = getNBack(state.level);
var idx = state.symbolHistory.length - 1 - nBack;
if (idx < 0) return false;
return state.symbolHistory[idx] === state.currentSymbol;
}

/* ── Update the HUD ── */
function updateHUD() {
elScore.textContent = state.score.toLocaleString();
elStreak.textContent = state.streak;
elLevel.textContent = state.level;
elLevelText.textContent = state.level;
var nBack = getNBack(state.level);
elNbackBadge.textContent = nBack + '-Back';
var roundsNeeded = getRoundsPerLevel(state.level);
var pct = Math.min((state.round / roundsNeeded) * 100, 100);
elProgressFill.style.width = pct + '%';
if (challenge.active) GK.updateChallengeBar('sm-playing', state.score, challenge.score);
}

/* ── Timer bar countdown ── */
function startTimerBar() {
var displayTime = getDisplayTime(state.level);
var startTime = Date.now();
elTimerFill.style.width = '100%';
elTimerFill.classList.remove('sm-timer-warning');

if (state.timerInterval) clearInterval(state.timerInterval);
state.timerInterval = setInterval(function() {
if (state.paused) return;
var elapsed = Date.now() - startTime;
var remaining = Math.max(0, 1 - elapsed / displayTime);
elTimerFill.style.width = (remaining * 100) + '%';
if (remaining < 0.3) {
elTimerFill.classList.add('sm-timer-warning');
}
if (remaining <= 0) {
clearInterval(state.timerInterval);
}
}, 50);
}

/* ── Show feedback flash ── */
function showFeedback(correct) {
elFeedbackFlash.className = 'sm-feedback-flash';
elFeedbackIcon.className = 'sm-feedback-icon';
void elFeedbackFlash.offsetWidth;
void elFeedbackIcon.offsetWidth;

if (correct) {
elFeedbackFlash.classList.add('sm-flash-correct');
elFeedbackIcon.textContent = '\u2713';
elFeedbackIcon.classList.add('sm-show-check');
} else {
elFeedbackFlash.classList.add('sm-flash-wrong');
elFeedbackIcon.textContent = '\u2717';
elFeedbackIcon.classList.add('sm-show-x');
}

setTimeout(function() {
elFeedbackFlash.className = 'sm-feedback-flash';
elFeedbackIcon.className = 'sm-feedback-icon';
}, 400);
}

/* ── Show level-up toast ── */
function showLevelToast(level) {
elLevelToast.textContent = 'Level ' + level + '!';
elLevelToast.classList.add('sm-toast-show');
setTimeout(function() {
elLevelToast.classList.remove('sm-toast-show');
}, 1500);
}

/* ── Process answer ── */
function processAnswer(userSaidSame) {
if (state.answered || state.gameOver) return;
state.answered = true;

if (state.autoAdvanceTimeout) {
clearTimeout(state.autoAdvanceTimeout);
state.autoAdvanceTimeout = null;
}
if (state.timerInterval) {
clearInterval(state.timerInterval);
state.timerInterval = null;
}

var nBack = getNBack(state.level);
var correct;
/* First nBack rounds: no comparison target, any answer is acceptable but
   we treat it as always different (since there's no previous symbol to match). */
if (state.symbolHistory.length <= nBack) {
correct = !userSaidSame;
} else {
var matchResult = isMatch();
correct = (userSaidSame === matchResult);
}

state.totalAnswered++;

if (correct) {
state.totalCorrect++;
var responseTime = Date.now() - state.roundStartTime;
var points = 100;
if (responseTime < 1000) {
points += Math.floor((1000 - responseTime) / 10);
}
points += Math.floor(state.streak * 0.1 * 100);
state.score += points;
state.streak++;
if (state.streak > state.bestStreak) state.bestStreak = state.streak;
showFeedback(true);
} else {
state.streak = 0;
showFeedback(false);
}

updateHUD();

/* Check level progression */
var roundsNeeded = getRoundsPerLevel(state.level);
if (state.round >= roundsNeeded) {
if (state.level >= MAX_LEVEL) {
endGame();
return;
}
state.level++;
state.round = 0;
state.symbolHistory = [];
showLevelToast(state.level);
}

setTimeout(function() {
if (!state.gameOver && !state.paused) {
nextRound();
}
}, 350);
}

/* ── Handle timeout (no answer) ── */
function handleTimeout() {
if (state.answered || state.gameOver) return;
state.answered = true;
state.totalAnswered++;
state.streak = 0;

if (state.timerInterval) {
clearInterval(state.timerInterval);
state.timerInterval = null;
}

showFeedback(false);
updateHUD();

var roundsNeeded = getRoundsPerLevel(state.level);
if (state.round >= roundsNeeded) {
if (state.level >= MAX_LEVEL) {
endGame();
return;
}
state.level++;
state.round = 0;
state.symbolHistory = [];
showLevelToast(state.level);
}

setTimeout(function() {
if (!state.gameOver && !state.paused) {
nextRound();
}
}, 350);
}

/* ── Next round ── */
function nextRound() {
state.round++;
state.answered = false;
state.currentSymbol = pickSymbol();
state.symbolHistory.push(state.currentSymbol);

elSymbol.textContent = state.currentSymbol;
elSymbol.style.animation = 'none';
void elSymbol.offsetWidth;
elSymbol.style.animation = '';

state.roundStartTime = Date.now();
updateHUD();
startTimerBar();

var displayTime = getDisplayTime(state.level);
state.autoAdvanceTimeout = setTimeout(function() {
handleTimeout();
}, displayTime);
}

/* ── Celebration effects ── */
function showConfetti() {
var colors = ['#f59e0b','#ef4444','#22c55e','#3b82f6','#a855f7','#ec4899'];
var container = document.createElement('div');
container.className = 'sm-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'sm-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'sm-glow-flash';
document.body.appendChild(container);
document.body.appendChild(glow);
setTimeout(function() {
if (container.parentNode) container.parentNode.removeChild(container);
if (glow.parentNode) glow.parentNode.removeChild(glow);
}, 3000);
}

function animateScoreCountUp(el, target) {
var start = 0;
var duration = 1200;
var startTime = null;
function step(ts) {
if (!startTime) startTime = ts;
var progress = Math.min((ts - startTime) / duration, 1);
var ease = 1 - Math.pow(1 - progress, 3);
var current = Math.round(start + (target - start) * ease);
el.textContent = current.toLocaleString();
if (progress < 1) requestAnimationFrame(step);
}
requestAnimationFrame(step);
}

/* ── End game ── */
function endGame() {
state.gameOver = true;
if (state.timerInterval) clearInterval(state.timerInterval);
if (state.autoAdvanceTimeout) clearTimeout(state.autoAdvanceTimeout);

var accuracy = state.totalAnswered > 0
? Math.round((state.totalCorrect / state.totalAnswered) * 100)
: 0;

var best = loadBest();
var isNewBest = state.score > best;
if (isNewBest) {
saveBest(state.score);
best = state.score;
}

saveHistory({
score: state.score,
level: state.level,
accuracy: accuracy,
date: new Date().toISOString()
});

var trophy = document.querySelector('.sm-trophy');
var title = document.querySelector('#sm-complete-overlay .sm-complete-card h2');

if (isNewBest) {
showConfetti();
trophy.textContent = '\uD83C\uDF89';
title.textContent = 'AMAZING!';
elNewBest.className = 'sm-new-best-enhanced';
elNewBest.innerHTML = '\uD83C\uDF1F AMAZING! New Best!';
elNewBest.style.display = 'inline-block';
} else {
trophy.textContent = '\uD83C\uDFC6';
title.textContent = 'Good Job!';
elNewBest.className = 'sm-new-best';
elNewBest.style.display = 'none';
}

elFinalLevel.textContent = state.level;
elFinalAccuracy.textContent = accuracy + '%';
elFinalStreak.textContent = state.bestStreak;
elFinalBest.textContent = best.toLocaleString();

GK.renderChallengeResult('sm-challenge-result', state.score, challenge);

showScreen('complete');
animateScoreCountUp(elFinalScore, state.score);
}

/* ── Pause / Resume ── */
function pauseGame() {
if (state.paused || state.gameOver) return;
state.paused = true;
if (state.autoAdvanceTimeout) {
clearTimeout(state.autoAdvanceTimeout);
state.autoAdvanceTimeout = null;
}
if (state.timerInterval) {
clearInterval(state.timerInterval);
state.timerInterval = null;
}
showScreen('paused');
}

function resumeGame() {
if (!state.paused) return;
state.paused = false;
showScreen('playing');
/* Restart the current round's timer with full time */
state.roundStartTime = Date.now();
startTimerBar();
var displayTime = getDisplayTime(state.level);
state.autoAdvanceTimeout = setTimeout(function() {
handleTimeout();
}, displayTime);
}

/* ── Start game flow ── */
var SM_WIZARD_STEPS = [
{icon: '\u2728', title: 'A symbol appears on screen', desc: 'Each round shows a symbol. Watch it!'},
{icon: '\u2194\uFE0F', title: 'Same or Different?', desc: 'Does it match the previous one? Tap to answer.'},
{icon: '\u26A1', title: 'Be fast!', desc: 'React before time runs out. Speed = bonus points!', final: true}
];
var smWizardStep = 0;

function renderWizardStep() {
var s = SM_WIZARD_STEPS[smWizardStep];
var dotsHtml = '';
for (var i = 0; i < SM_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="sm-wizard-dot' + (i === smWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Start Playing' : 'Next';
elWizardCard.innerHTML =
'<div class="sm-wizard-icon">' + s.icon + '</div>' +
'<div class="sm-wizard-title">' + s.title + '</div>' +
'<div class="sm-wizard-desc">' + s.desc + '</div>' +
'<div class="sm-wizard-dots">' + dotsHtml + '</div>' +
'<button class="sm-wizard-btn" id="sm-wizard-next">' + btnLabel + '</button>';
elWizardCard.style.animation = 'none';
void elWizardCard.offsetWidth;
elWizardCard.style.animation = 'sm-wizard-enter 0.3s ease-out';
document.getElementById('sm-wizard-next').addEventListener('click', advanceWizard);
}

function advanceWizard() {
if (smWizardStep < SM_WIZARD_STEPS.length - 1) {
smWizardStep++;
renderWizardStep();
} else {
startPlaying();
}
}

function showWizard() {
smWizardStep = 0;
showScreen('wizard');
renderWizardStep();
}

function resetState() {
state.level = 1;
state.score = 0;
state.streak = 0;
state.bestStreak = 0;
state.round = 0;
state.totalCorrect = 0;
state.totalAnswered = 0;
state.symbolHistory = [];
state.currentSymbol = '';
state.answered = false;
state.paused = false;
state.gameOver = false;
state.roundStartTime = 0;
if (state.timerInterval) clearInterval(state.timerInterval);
if (state.autoAdvanceTimeout) clearTimeout(state.autoAdvanceTimeout);
state.timerInterval = null;
state.autoAdvanceTimeout = null;
}

function startPlaying() {
showScreen('playing');
GK.renderChallengeBar('sm-playing', challenge);
updateHUD();
nextRound();
}

/* ── Event listeners ── */
btnStart.addEventListener('click', function() {
resetState();
showWizard();
});

btnPlayAgain.addEventListener('click', function() {
resetState();
showPersonalBest();
showWizard();
});

btnDifferent.addEventListener('click', function() {
processAnswer(false);
});

btnSame.addEventListener('click', function() {
processAnswer(true);
});

btnResume.addEventListener('click', function() {
resumeGame();
});

document.getElementById('sm-finish-btn').addEventListener('click', function() {
endGame();
});

document.getElementById('sm-share-btn').addEventListener('click', function() {
GK.shareResult(state.score, 'Speed Match', '/games/speed-match/', 'sm-share-copied');
});

document.addEventListener('keydown', function(e) {
if (state.screen === 'playing' && !state.paused && !state.gameOver) {
if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
e.preventDefault();
processAnswer(false);
} else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
e.preventDefault();
processAnswer(true);
} else if (e.key === 'Escape') {
e.preventDefault();
pauseGame();
}
} else if (state.screen === 'paused') {
if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
resumeGame();
}
} else if (state.screen === 'wizard') {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
advanceWizard();
}
} else if (state.screen === 'instructions') {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
resetState();
showWizard();
}
} else if (state.screen === 'complete') {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
resetState();
showPersonalBest();
showWizard();
}
}
});

/* ── Init ── */
showPersonalBest();
GK.initNameInput('sm-player-name');
GK.renderChallengeBanner('sm-challenge-banner-wrap', challenge);
showScreen('instructions');

})();
</script>
