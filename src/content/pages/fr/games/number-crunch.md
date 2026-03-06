---
title: "Number Crunch - Jeu d'Entraînement Cérébral"
description: "Aiguisez votre calcul mental et votre flexibilité cognitive. Résolvez des équations avec des éléments manquants tout en vous adaptant aux modificateurs de règles !"
full_width: true
language: "fr"
---

<style>
#number-crunch-game {
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

[data-theme="dark"] #number-crunch-game {
color: var(--color-dark-text-primary);
}

/* ── Instructions Screen ── */
#nc-instructions {
text-align: center;
padding: 2rem 1rem;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

#nc-instructions .nc-icon {
font-size: 4rem;
margin-bottom: 1rem;
filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

#nc-instructions h2 {
font-size: 1.75rem;
margin: 0 0 0.25rem 0;
color: var(--color-primary);
}

#nc-instructions .nc-subtitle {
color: var(--color-text-secondary);
margin: 0 0 1.5rem 0;
font-size: 0.95rem;
}

[data-theme="dark"] #nc-instructions .nc-subtitle {
color: var(--color-dark-text-secondary);
}

#nc-instructions .nc-how-to {
text-align: left;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.5rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border);
}

[data-theme="dark"] #nc-instructions .nc-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#nc-instructions .nc-how-to h3 {
margin: 0 0 0.75rem 0;
font-size: 1rem;
color: var(--color-primary);
}

#nc-instructions .nc-how-to ol {
margin: 0;
padding-left: 1.25rem;
}

#nc-instructions .nc-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

.nc-personal-best {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.5rem;
padding: 0.6rem 1.25rem;
margin-bottom: 1.5rem;
font-size: 0.9rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .nc-personal-best {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}

.nc-personal-best strong {
color: var(--color-primary);
}

/* ── Buttons ── */
.nc-btn-primary {
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

.nc-btn-primary:hover {
background: var(--color-primary-hover);
}

.nc-btn-primary:active {
transform: scale(0.97);
}

.nc-btn-secondary {
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

.nc-btn-secondary:hover {
background: var(--color-bg-secondary);
}

[data-theme="dark"] .nc-btn-secondary:hover {
background: var(--color-dark-bg-secondary);
}

/* ── Wizard Overlay ── */
#nc-wizard {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
#nc-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: nc-wizard-enter 0.3s ease-out;
}
[data-theme="dark"] #nc-wizard-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}
@keyframes nc-wizard-enter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
.nc-wizard-icon {
font-size: 2.5rem;
margin-bottom: 0.75rem;
}
.nc-wizard-title {
font-size: 1.25rem;
font-weight: 700;
margin: 0 0 0.5rem;
}
.nc-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] .nc-wizard-desc {
color: var(--color-dark-text-secondary);
}
.nc-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
.nc-wizard-dot {
width: 8px;
height: 8px;
border-radius: 50%;
background: var(--color-border, #dfe4ea);
transition: all 0.3s;
}
.nc-wizard-dot.active {
background: var(--color-primary);
transform: scale(1.3);
}
[data-theme="dark"] .nc-wizard-dot {
background: var(--color-dark-border, #3a4553);
}
[data-theme="dark"] .nc-wizard-dot.active {
background: var(--color-primary);
}
.nc-wizard-btn {
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
.nc-wizard-btn:hover {
background: var(--color-primary-hover, #0d7a62);
}
@media (max-width: 400px) {
#nc-wizard-card {
padding: 1.5rem 1rem;
}
.nc-wizard-icon {
font-size: 2rem;
}
.nc-wizard-title {
font-size: 1.1rem;
}
.nc-wizard-desc {
font-size: 0.85rem;
}
}

/* ── Playing Screen ── */
#nc-playing {
display: none;
flex: 1;
flex-direction: column;
}

.nc-header {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 0.5rem;
margin-bottom: 0.75rem;
padding: 0.75rem;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .nc-header {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.nc-stat {
text-align: center;
}

.nc-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
margin-bottom: 0.15rem;
}

[data-theme="dark"] .nc-stat-label {
color: var(--color-dark-text-secondary);
}

.nc-stat-value {
font-size: 1.15rem;
font-weight: 700;
}

.nc-level-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
font-size: 0.85rem;
}

.nc-level-text {
font-weight: 600;
}

.nc-modifier-badge {
background: #6366f1;
color: #fff;
padding: 0.15rem 0.5rem;
border-radius: 0.25rem;
font-size: 0.75rem;
font-weight: 600;
}

.nc-progress-bar {
width: 100%;
height: 6px;
background: var(--color-bg-secondary);
border-radius: 3px;
overflow: hidden;
margin-bottom: 1rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .nc-progress-bar {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.nc-progress-fill {
height: 100%;
background: var(--color-primary);
border-radius: 3px;
transition: width 0.3s ease;
}

.nc-timer-bar {
width: 100%;
height: 4px;
background: var(--color-bg-secondary);
border-radius: 2px;
overflow: hidden;
margin-bottom: 1rem;
}

[data-theme="dark"] .nc-timer-bar {
background: var(--color-dark-bg-secondary);
}

.nc-timer-fill {
height: 100%;
background: var(--color-primary);
border-radius: 2px;
transition: width 0.05s linear;
}

.nc-timer-fill.nc-timer-warning {
background: #ef4444;
}

/* ── Equation Display ── */
.nc-equation-area {
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 180px;
position: relative;
}

.nc-rule-modifier {
background: rgba(99,102,241,0.1);
color: #6366f1;
padding: 0.4rem 1rem;
border-radius: 2rem;
font-size: 0.85rem;
font-weight: 600;
margin-bottom: 1rem;
display: none;
}

[data-theme="dark"] .nc-rule-modifier {
background: rgba(99,102,241,0.2);
color: #818cf8;
}

.nc-equation {
font-size: 2.5rem;
font-weight: 700;
line-height: 1.2;
animation: nc-eq-enter 0.2s ease-out;
text-align: center;
}

@keyframes nc-eq-enter {
0% { transform: scale(0.5); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

.nc-feedback-flash {
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

.nc-feedback-flash.nc-flash-correct {
background: rgba(34, 197, 94, 0.15);
opacity: 1;
}

.nc-feedback-flash.nc-flash-wrong {
background: rgba(239, 68, 68, 0.15);
opacity: 1;
}

.nc-feedback-icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
font-size: 3rem;
pointer-events: none;
z-index: 2;
}

.nc-feedback-icon.nc-show-check {
animation: nc-feedback-pop 0.4s ease-out forwards;
color: #22c55e;
}

.nc-feedback-icon.nc-show-x {
animation: nc-feedback-pop 0.4s ease-out forwards;
color: #ef4444;
}

@keyframes nc-feedback-pop {
0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}

/* ── Answer Buttons ── */
.nc-answers {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin-top: 1rem;
margin-bottom: 0.75rem;
}

.nc-answer-btn {
padding: 1rem;
border: 2px solid var(--color-border);
border-radius: 0.75rem;
font-size: 1.25rem;
font-weight: 700;
cursor: pointer;
transition: transform 0.1s, border-color 0.15s, background 0.15s;
background: var(--color-bg-primary);
color: var(--color-text-primary);
min-height: 56px;
display: flex;
align-items: center;
justify-content: center;
}

[data-theme="dark"] .nc-answer-btn {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-primary);
}

.nc-answer-btn:active {
transform: scale(0.95);
}

.nc-answer-btn:hover {
border-color: var(--color-primary);
background: rgba(99,102,241,0.05);
}

[data-theme="dark"] .nc-answer-btn:hover {
background: rgba(99,102,241,0.15);
}

.nc-answer-btn.nc-correct-flash {
border-color: #22c55e;
background: rgba(34,197,94,0.1);
}

.nc-answer-btn.nc-wrong-flash {
border-color: #ef4444;
background: rgba(239,68,68,0.1);
}

.nc-playing-hint {
text-align: center;
font-size: 0.75rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .nc-playing-hint {
color: var(--color-dark-text-secondary);
}

/* ── Pause Overlay ── */
#nc-pause-overlay {
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

#nc-pause-overlay .nc-pause-text {
font-size: 2.5rem;
font-weight: 800;
color: #fff;
text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}

/* ── Game Complete Modal ── */
#nc-complete-overlay {
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

.nc-complete-card {
background: var(--color-bg-primary);
border-radius: 1rem;
padding: 2rem;
max-width: 400px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: nc-modal-enter 0.3s ease-out;
}

[data-theme="dark"] .nc-complete-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}

@keyframes nc-modal-enter {
0% { transform: scale(0.8) translateY(20px); opacity: 0; }
100% { transform: scale(1) translateY(0); opacity: 1; }
}

.nc-complete-card h2 {
margin: 0 0 0.25rem 0;
font-size: 1.5rem;
}

.nc-complete-card .nc-trophy {
font-size: 3.5rem;
margin-bottom: 0.5rem;
}

.nc-final-score {
font-size: 2.5rem;
font-weight: 800;
color: var(--color-primary);
margin: 0.5rem 0;
}

.nc-new-best {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316);
color: #fff;
padding: 0.25rem 0.75rem;
border-radius: 1rem;
font-size: 0.85rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: nc-best-pulse 1s ease-in-out infinite alternate;
}

@keyframes nc-best-pulse {
0% { transform: scale(1); }
100% { transform: scale(1.05); }
}

.nc-complete-stats {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin: 1rem 0 1.5rem;
}

.nc-complete-stat {
background: var(--color-bg-secondary);
border-radius: 0.5rem;
padding: 0.6rem;
}

[data-theme="dark"] .nc-complete-stat {
background: var(--color-dark-bg-secondary);
}

.nc-complete-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
}

[data-theme="dark"] .nc-complete-stat-label {
color: var(--color-dark-text-secondary);
}

.nc-complete-stat-value {
font-size: 1.2rem;
font-weight: 700;
}

.nc-complete-actions {
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
}

.nc-back-link {
color: var(--color-text-secondary);
font-size: 0.9rem;
text-decoration: none;
}

[data-theme="dark"] .nc-back-link {
color: var(--color-dark-text-secondary);
}

.nc-back-link:hover {
color: var(--color-primary);
text-decoration: underline;
}

/* ── Level Up Toast ── */
.nc-level-up-toast {
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

.nc-level-up-toast.nc-toast-show {
transform: translateX(-50%) translateY(0);
}

/* ── Responsive ── */
@media (max-width: 480px) {
#number-crunch-game {
padding: 0.5rem;
}
.nc-equation {
font-size: 2rem;
}
.nc-answer-btn {
padding: 0.75rem;
font-size: 1.1rem;
min-height: 48px;
}
.nc-header {
padding: 0.5rem;
gap: 0.25rem;
}
.nc-stat-value {
font-size: 1rem;
}
#nc-instructions { padding: 1rem 0.5rem; }
#nc-instructions .nc-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
#nc-instructions h2 { font-size: 1.3rem; }
#nc-instructions .nc-subtitle { margin-bottom: 1rem; font-size: 0.85rem; }
#nc-instructions .nc-how-to { padding: 0.75rem 1rem; margin-bottom: 1rem; }
#nc-instructions .nc-how-to li { margin-bottom: 0.25rem; font-size: 0.82rem; }
.nc-personal-best { padding: 0.4rem 0.75rem; margin-bottom: 1rem; font-size: 0.82rem; }
}
@media (max-width: 640px) {
#number-crunch-game {
padding: 0.75rem;
}
.nc-equation {
font-size: 2.25rem;
}
.nc-answer-btn {
padding: 0.875rem;
}
}
@media (max-width: 360px) {
.nc-equation {
font-size: 1.75rem;
}
.nc-answer-btn {
padding: 0.625rem;
font-size: 1rem;
}
.nc-complete-stats {
grid-template-columns: 1fr 1fr;
}
.nc-final-score {
font-size: 2rem;
}
.nc-header {
padding: 0.375rem;
}
.nc-stat-value {
font-size: 0.9rem;
}
}
@keyframes nc-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.nc-confetti-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.nc-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: nc-confetti-fall 2.5s ease-in forwards;
}
.nc-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: nc-glow-fade 1s ease-out forwards;
}
@keyframes nc-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.nc-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
padding: 0.35rem 1rem;
border-radius: 1rem;
font-size: 0.9rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: nc-badge-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(245,158,11,0.4);
}
@keyframes nc-badge-bounce {
0% { transform: scale(0); opacity: 0; }
60% { transform: scale(1.2); }
100% { transform: scale(1); opacity: 1; }
}
</style>

<div id="number-crunch-game">

<div id="nc-instructions">
<div class="nc-icon">&#129518;</div>
<h2>Number Crunch</h2>
<p class="nc-subtitle">Calcul mental et flexibilit&eacute; cognitive</p>
<div class="nc-how-to">
<h3>Comment Jouer</h3>
<ol>
<li>Une &eacute;quation avec un &eacute;l&eacute;ment manquant appara&icirc;t.</li>
<li>Choisissez la <strong>bonne r&eacute;ponse</strong> parmi 4 choix.</li>
<li>&Agrave; partir du Niveau 6, des <strong>modificateurs de r&egrave;gles</strong> apparaissent (ex. &laquo; Doublez-le &raquo;).</li>
<li>R&eacute;pondez avant la fin du temps !</li>
<li>La vitesse et les s&eacute;ries rapportent des points bonus.</li>
</ol>
</div>
<div id="nc-best-display" class="nc-personal-best" style="display:none;">
Record Personnel : <strong id="nc-best-score">0</strong> points
</div>
<button class="nc-btn-primary" id="nc-start-btn">Commencer</button>
<div id="nc-challenge-banner-wrap"></div>
<input type="text" id="nc-player-name" class="gk-name-input" placeholder="Votre nom (pour partager)" maxlength="20">
</div>

<div id="nc-wizard">
<div id="nc-wizard-card"></div>
</div>

<div id="nc-playing">
<div class="nc-header">
<div class="nc-stat">
<div class="nc-stat-label">Score</div>
<div class="nc-stat-value" id="nc-score">0</div>
</div>
<div class="nc-stat">
<div class="nc-stat-label">S&eacute;rie</div>
<div class="nc-stat-value" id="nc-streak">0</div>
</div>
<div class="nc-stat">
<div class="nc-stat-label">Level</div>
<div class="nc-stat-value" id="nc-level">1</div>
</div>
</div>
<div class="nc-level-info">
<span class="nc-level-text">Level <span id="nc-level-text">1</span></span>
<span class="nc-modifier-badge" id="nc-modifier-badge" style="display:none;">Modificateurs actifs</span>
</div>
<div class="nc-progress-bar">
<div class="nc-progress-fill" id="nc-progress-fill" style="width:0%"></div>
</div>
<div class="nc-timer-bar">
<div class="nc-timer-fill" id="nc-timer-fill" style="width:100%"></div>
</div>
<div class="nc-equation-area">
<div class="nc-feedback-flash" id="nc-feedback-flash"></div>
<div class="nc-feedback-icon" id="nc-feedback-icon"></div>
<div class="nc-rule-modifier" id="nc-rule-modifier"></div>
<div class="nc-equation" id="nc-equation"></div>
</div>
<div class="nc-answers" id="nc-answers">
<button class="nc-answer-btn" id="nc-ans-0"></button>
<button class="nc-answer-btn" id="nc-ans-1"></button>
<button class="nc-answer-btn" id="nc-ans-2"></button>
<button class="nc-answer-btn" id="nc-ans-3"></button>
</div>
<div class="nc-playing-hint">Appuyez sur <strong>1-4</strong> pour r&eacute;pondre &middot; <strong>&Eacute;chap</strong> pour pause</div>
<button class="gk-finish-btn" id="nc-finish-btn">Terminer</button>
</div>

<div id="nc-pause-overlay">
<div class="nc-pause-text">Pause</div>
<button class="nc-btn-primary" id="nc-resume-btn">Reprendre</button>
</div>

<div id="nc-complete-overlay">
<div class="nc-complete-card">
<div class="nc-trophy">&#127942;</div>
<h2>Partie Termin&eacute;e !</h2>
<div class="nc-final-score" id="nc-final-score">0</div>
<div id="nc-new-best" class="nc-new-best" style="display:none;">&#11088; Nouveau record !</div>
<div class="gk-challenge-result" id="nc-challenge-result" style="display:none;"></div>
<div class="nc-complete-stats">
<div class="nc-complete-stat">
<div class="nc-complete-stat-label">Niveau atteint</div>
<div class="nc-complete-stat-value" id="nc-final-level">1</div>
</div>
<div class="nc-complete-stat">
<div class="nc-complete-stat-label">Pr&eacute;cision</div>
<div class="nc-complete-stat-value" id="nc-final-accuracy">0%</div>
</div>
<div class="nc-complete-stat">
<div class="nc-complete-stat-label">Meilleure s&eacute;rie</div>
<div class="nc-complete-stat-value" id="nc-final-streak">0</div>
</div>
<div class="nc-complete-stat">
<div class="nc-complete-stat-label">Record personnel</div>
<div class="nc-complete-stat-value" id="nc-final-best">0</div>
</div>
</div>
<div class="nc-complete-actions">
<button class="nc-btn-primary" id="nc-play-again-btn">Rejouer</button>
<a href="/fr/games/" class="nc-back-link">&larr; Tous les jeux</a>
</div>
<div class="gk-share-section">
<div class="gk-share-title">D&eacute;fie un ami</div>
<button class="gk-share-btn" id="nc-share-btn">&#128279; Partage ton score</button>
<div class="gk-share-copied" id="nc-share-copied" style="display:none;">Lien copi&eacute; !</div>
</div>
</div>
</div>

<div class="nc-level-up-toast" id="nc-level-toast">Level Up!</div>

</div>

<script>
(function() {
"use strict";

var MAX_LEVEL = 20;
var STORAGE_HISTORY = 'guruka_number-crunch_history';
var STORAGE_BEST = 'guruka_number-crunch_best';

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
answered: false,
paused: false,
roundStartTime: 0,
timerInterval: null,
autoAdvanceTimeout: null,
gameOver: false,
correctAnswer: 0,
currentModifier: null
};

/* ── DOM refs ── */
var elInstructions = document.getElementById('nc-instructions');
var elWizard = document.getElementById('nc-wizard');
var elWizardCard = document.getElementById('nc-wizard-card');
var elPlaying = document.getElementById('nc-playing');
var elPauseOverlay = document.getElementById('nc-pause-overlay');
var elCompleteOverlay = document.getElementById('nc-complete-overlay');
var elScore = document.getElementById('nc-score');
var elStreak = document.getElementById('nc-streak');
var elLevel = document.getElementById('nc-level');
var elLevelText = document.getElementById('nc-level-text');
var elModifierBadge = document.getElementById('nc-modifier-badge');
var elProgressFill = document.getElementById('nc-progress-fill');
var elTimerFill = document.getElementById('nc-timer-fill');
var elEquation = document.getElementById('nc-equation');
var elRuleModifier = document.getElementById('nc-rule-modifier');
var elFeedbackFlash = document.getElementById('nc-feedback-flash');
var elFeedbackIcon = document.getElementById('nc-feedback-icon');
var elFinalScore = document.getElementById('nc-final-score');
var elNewBest = document.getElementById('nc-new-best');
var elFinalLevel = document.getElementById('nc-final-level');
var elFinalAccuracy = document.getElementById('nc-final-accuracy');
var elFinalStreak = document.getElementById('nc-final-streak');
var elFinalBest = document.getElementById('nc-final-best');
var elBestDisplay = document.getElementById('nc-best-display');
var elBestScore = document.getElementById('nc-best-score');
var elLevelToast = document.getElementById('nc-level-toast');
var btnStart = document.getElementById('nc-start-btn');
var btnResume = document.getElementById('nc-resume-btn');
var btnPlayAgain = document.getElementById('nc-play-again-btn');
var answerBtns = [
document.getElementById('nc-ans-0'),
document.getElementById('nc-ans-1'),
document.getElementById('nc-ans-2'),
document.getElementById('nc-ans-3')
];

/* ── Level parameters ── */
function getDisplayTime(lvl) {
return Math.max(4000 - lvl * 130, 1500);
}

function getRoundsPerLevel(lvl) {
return 10 + lvl;
}

/* ── Modifiers ── */
var MODIFIERS = [
{ name: 'Doublez-le', apply: function(n) { return n * 2; } },
{ name: 'Ajoutez 10', apply: function(n) { return n + 10; } },
{ name: 'Soustrayez 5', apply: function(n) { return n - 5; } },
{ name: 'Divisez par 2', apply: function(n) { return Math.round(n / 2); } }
];

function shouldHaveModifier(lvl) {
return lvl >= 6;
}

function getModifier(lvl) {
if (lvl >= 17) {
/* Dual modifier: pick two */
var a = MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];
var b = MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];
while (b === a) b = MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];
return {
name: a.name + ', puis ' + b.name.toLowerCase(),
apply: function(n) { return b.apply(a.apply(n)); }
};
}
if (lvl >= 13) {
/* Pick from all modifiers */
return MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];
}
/* L6-12: simpler modifiers only */
var simple = MODIFIERS.slice(0, 2);
return simple[Math.floor(Math.random() * simple.length)];
}

/* ── Generate equation ── */
function randInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateEquation(lvl) {
var a, b, op, answer, display;

if (lvl <= 3) {
/* add/subtract 2-digit */
a = randInt(10, 50);
b = randInt(5, 30);
if (Math.random() < 0.5) {
op = '+';
answer = a + b;
} else {
op = '\u2212';
answer = a - b;
}
display = a + ' ' + op + ' ' + b + ' = ?';
} else if (lvl <= 5) {
/* multiply */
a = randInt(3, 12);
b = randInt(3, 12);
op = '\u00D7';
answer = a * b;
display = a + ' ' + op + ' ' + b + ' = ?';
} else if (lvl <= 8) {
/* add/subtract/multiply mix */
var r = Math.random();
if (r < 0.33) {
a = randInt(10, 80);
b = randInt(5, 40);
answer = a + b;
display = a + ' + ' + b + ' = ?';
} else if (r < 0.66) {
a = randInt(20, 99);
b = randInt(5, a);
answer = a - b;
display = a + ' \u2212 ' + b + ' = ?';
} else {
a = randInt(4, 12);
b = randInt(4, 12);
answer = a * b;
display = a + ' \u00D7 ' + b + ' = ?';
}
} else if (lvl <= 12) {
/* 3-digit + division */
var r2 = Math.random();
if (r2 < 0.25) {
a = randInt(100, 300);
b = randInt(10, 99);
answer = a + b;
display = a + ' + ' + b + ' = ?';
} else if (r2 < 0.5) {
a = randInt(100, 400);
b = randInt(10, a);
answer = a - b;
display = a + ' \u2212 ' + b + ' = ?';
} else if (r2 < 0.75) {
a = randInt(5, 15);
b = randInt(5, 15);
answer = a * b;
display = a + ' \u00D7 ' + b + ' = ?';
} else {
b = randInt(2, 12);
answer = randInt(3, 20);
a = answer * b;
display = a + ' \u00F7 ' + b + ' = ?';
}
} else if (lvl <= 16) {
/* stacking modifiers + harder ops */
var r3 = Math.random();
if (r3 < 0.3) {
a = randInt(100, 500);
b = randInt(50, 200);
answer = a + b;
display = a + ' + ' + b + ' = ?';
} else if (r3 < 0.6) {
a = randInt(10, 20);
b = randInt(5, 15);
answer = a * b;
display = a + ' \u00D7 ' + b + ' = ?';
} else {
b = randInt(3, 15);
answer = randInt(5, 25);
a = answer * b;
display = a + ' \u00F7 ' + b + ' = ?';
}
} else {
/* L17-20: 3-operand + dual modifiers */
var r4 = Math.random();
if (r4 < 0.5) {
a = randInt(10, 50);
b = randInt(5, 30);
var c = randInt(3, 20);
answer = a + b - c;
display = a + ' + ' + b + ' \u2212 ' + c + ' = ?';
} else {
a = randInt(3, 10);
b = randInt(3, 10);
var c2 = randInt(5, 20);
answer = a * b + c2;
display = a + ' \u00D7 ' + b + ' + ' + c2 + ' = ?';
}
}

/* Apply modifier */
var modifier = null;
if (shouldHaveModifier(lvl) && Math.random() < 0.7) {
modifier = getModifier(lvl);
answer = modifier.apply(answer);
}

return { display: display, answer: answer, modifier: modifier };
}

function generateChoices(correct) {
var choices = [correct];
var attempts = 0;
while (choices.length < 4 && attempts < 50) {
var offset = randInt(1, Math.max(Math.abs(correct) * 0.3, 5));
var wrong = correct + (Math.random() < 0.5 ? offset : -offset);
wrong = Math.round(wrong);
if (wrong !== correct && choices.indexOf(wrong) === -1) {
choices.push(wrong);
}
attempts++;
}
/* Fill remaining with simple offsets */
while (choices.length < 4) {
choices.push(correct + choices.length * 2);
}
/* Shuffle */
for (var i = choices.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = choices[i];
choices[i] = choices[j];
choices[j] = temp;
}
return choices;
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

/* ── Update the HUD ── */
function updateHUD() {
elScore.textContent = state.score.toLocaleString();
elStreak.textContent = state.streak;
elLevel.textContent = state.level;
elLevelText.textContent = state.level;
if (shouldHaveModifier(state.level)) {
elModifierBadge.style.display = '';
elModifierBadge.textContent = 'Modificateurs actifs';
} else {
elModifierBadge.style.display = 'none';
}
var roundsNeeded = getRoundsPerLevel(state.level);
var pct = Math.min((state.round / roundsNeeded) * 100, 100);
elProgressFill.style.width = pct + '%';
if (challenge.active) GK.updateChallengeBar('nc-playing', state.score, challenge.score);
}

/* ── Timer bar countdown ── */
function startTimerBar() {
var displayTime = getDisplayTime(state.level);
var startTime = Date.now();
elTimerFill.style.width = '100%';
elTimerFill.classList.remove('nc-timer-warning');

if (state.timerInterval) clearInterval(state.timerInterval);
state.timerInterval = setInterval(function() {
if (state.paused) return;
var elapsed = Date.now() - startTime;
var remaining = Math.max(0, 1 - elapsed / displayTime);
elTimerFill.style.width = (remaining * 100) + '%';
if (remaining < 0.3) {
elTimerFill.classList.add('nc-timer-warning');
}
if (remaining <= 0) {
clearInterval(state.timerInterval);
}
}, 50);
}

/* ── Show feedback flash ── */
function showFeedback(correct) {
elFeedbackFlash.className = 'nc-feedback-flash';
elFeedbackIcon.className = 'nc-feedback-icon';
void elFeedbackFlash.offsetWidth;
void elFeedbackIcon.offsetWidth;

if (correct) {
elFeedbackFlash.classList.add('nc-flash-correct');
elFeedbackIcon.textContent = '\u2713';
elFeedbackIcon.classList.add('nc-show-check');
} else {
elFeedbackFlash.classList.add('nc-flash-wrong');
elFeedbackIcon.textContent = '\u2717';
elFeedbackIcon.classList.add('nc-show-x');
}

setTimeout(function() {
elFeedbackFlash.className = 'nc-feedback-flash';
elFeedbackIcon.className = 'nc-feedback-icon';
}, 400);
}

/* ── Show level-up toast ── */
function showLevelToast(level) {
elLevelToast.textContent = 'Level ' + level + ' !';
elLevelToast.classList.add('nc-toast-show');
setTimeout(function() {
elLevelToast.classList.remove('nc-toast-show');
}, 1500);
}

/* ── Flash answer button ── */
function flashAnswerBtn(idx, correct) {
answerBtns[idx].classList.add(correct ? 'nc-correct-flash' : 'nc-wrong-flash');
setTimeout(function() {
answerBtns[idx].classList.remove('nc-correct-flash', 'nc-wrong-flash');
}, 400);
}

/* ── Process answer ── */
function processAnswer(chosenIdx) {
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

var chosenValue = parseInt(answerBtns[chosenIdx].textContent, 10);
var correct = (chosenValue === state.correctAnswer);

state.totalAnswered++;
flashAnswerBtn(chosenIdx, correct);

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

var eq = generateEquation(state.level);
state.correctAnswer = eq.answer;
state.currentModifier = eq.modifier;

elEquation.textContent = eq.display;
elEquation.style.animation = 'none';
void elEquation.offsetWidth;
elEquation.style.animation = '';

if (eq.modifier) {
elRuleModifier.textContent = '\u2728 ' + eq.modifier.name;
elRuleModifier.style.display = '';
} else {
elRuleModifier.style.display = 'none';
}

var choices = generateChoices(eq.answer);
for (var i = 0; i < 4; i++) {
answerBtns[i].textContent = choices[i];
}

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
container.className = 'nc-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'nc-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'nc-glow-flash';
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
var stickyNav = document.querySelector('.sticky.top-0');
if (stickyNav) stickyNav.style.display = '';
var footer = document.querySelector('footer');
if (footer) footer.style.display = '';
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

var trophy = document.querySelector('.nc-trophy');
var title = document.querySelector('#nc-complete-overlay .nc-complete-card h2');

if (isNewBest) {
showConfetti();
trophy.textContent = '\uD83C\uDF89';
title.textContent = 'INCROYABLE !';
elNewBest.className = 'nc-new-best-enhanced';
elNewBest.innerHTML = '\uD83C\uDF1F INCROYABLE ! Nouveau record !';
elNewBest.style.display = 'inline-block';
} else {
trophy.textContent = '\uD83C\uDFC6';
title.textContent = 'Bien jou\u00e9 !';
elNewBest.className = 'nc-new-best';
elNewBest.style.display = 'none';
}

elFinalLevel.textContent = state.level;
elFinalAccuracy.textContent = accuracy + '%';
elFinalStreak.textContent = state.bestStreak;
elFinalBest.textContent = best.toLocaleString();

GK.renderChallengeResult('nc-challenge-result', state.score, challenge);

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
state.roundStartTime = Date.now();
startTimerBar();
var displayTime = getDisplayTime(state.level);
state.autoAdvanceTimeout = setTimeout(function() {
handleTimeout();
}, displayTime);
}

/* ── Start game flow ── */
var NC_WIZARD_STEPS = [
{icon: '\uD83E\uDDEE', title: 'R\u00e9solvez l\u2019\u00e9quation', desc: 'Une \u00e9quation avec une r\u00e9ponse manquante appara\u00eet. Choisissez la bonne !'},
{icon: '\u2728', title: 'Attention aux modificateurs', desc: '\u00c0 partir du Niveau 6, les modificateurs de r\u00e8gles changent la r\u00e9ponse (ex. \u00ab Doublez-le \u00bb).'},
{icon: '\u26A1', title: 'Soyez rapide !', desc: 'R\u00e9pondez avant la fin du temps. Vitesse = points bonus !', final: true}
];
var ncWizardStep = 0;

function renderWizardStep() {
var s = NC_WIZARD_STEPS[ncWizardStep];
var dotsHtml = '';
for (var i = 0; i < NC_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="nc-wizard-dot' + (i === ncWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Commencer' : 'Suivant';
elWizardCard.innerHTML =
'<div class="nc-wizard-icon">' + s.icon + '</div>' +
'<div class="nc-wizard-title">' + s.title + '</div>' +
'<div class="nc-wizard-desc">' + s.desc + '</div>' +
'<div class="nc-wizard-dots">' + dotsHtml + '</div>' +
'<button class="nc-wizard-btn" id="nc-wizard-next">' + btnLabel + '</button>';
elWizardCard.style.animation = 'none';
void elWizardCard.offsetWidth;
elWizardCard.style.animation = 'nc-wizard-enter 0.3s ease-out';
document.getElementById('nc-wizard-next').addEventListener('click', advanceWizard);
}

function advanceWizard() {
if (ncWizardStep < NC_WIZARD_STEPS.length - 1) {
ncWizardStep++;
renderWizardStep();
} else {
startPlaying();
}
}

function showWizard() {
ncWizardStep = 0;
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
state.answered = false;
state.paused = false;
state.gameOver = false;
state.roundStartTime = 0;
state.correctAnswer = 0;
state.currentModifier = null;
if (state.timerInterval) clearInterval(state.timerInterval);
if (state.autoAdvanceTimeout) clearTimeout(state.autoAdvanceTimeout);
state.timerInterval = null;
state.autoAdvanceTimeout = null;
}

function startPlaying() {
window.scrollTo({ top: 0, behavior: 'instant' });
var stickyNav = document.querySelector('.sticky.top-0');
if (stickyNav && window.innerWidth <= 768) { stickyNav.style.display = 'none'; document.body.style.paddingTop = '0'; }
var footer = document.querySelector('footer');
if (footer && window.innerWidth <= 768) footer.style.display = 'none';
showScreen('playing');
GK.renderChallengeBar('nc-playing', challenge);
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

for (var i = 0; i < 4; i++) {
(function(idx) {
answerBtns[idx].addEventListener('click', function() {
processAnswer(idx);
});
})(i);
}

btnResume.addEventListener('click', function() {
resumeGame();
});

document.getElementById('nc-finish-btn').addEventListener('click', function() {
endGame();
});

document.getElementById('nc-share-btn').addEventListener('click', function() {
GK.shareResult(state.score, 'Number Crunch', '/fr/games/number-crunch/', 'nc-share-copied');
});

document.addEventListener('keydown', function(e) {
if (state.screen === 'playing' && !state.paused && !state.gameOver) {
if (e.key >= '1' && e.key <= '4') {
e.preventDefault();
processAnswer(parseInt(e.key, 10) - 1);
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
GK.initNameInput('nc-player-name');
GK.renderChallengeBanner('nc-challenge-banner-wrap', challenge);
showScreen('instructions');

})();
</script>
