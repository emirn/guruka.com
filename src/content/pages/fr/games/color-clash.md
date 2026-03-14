---
title: "Color Clash - Jeu d'Entra&icirc;nement C&eacute;r&eacute;bral"
description: "Entra&icirc;nez votre contr&ocirc;le inhibiteur et votre attention s&eacute;lective avec l'effet Stroop. Identifiez les couleurs tout en supprimant la lecture automatique des mots !"
full_width: true
language: "fr"
---

<style>
#color-clash-game {
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

[data-theme="dark"] #color-clash-game {
color: var(--color-dark-text-primary);
}

/* ── Instructions Screen ── */
#cc-instructions {
text-align: center;
padding: 1rem 1rem;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-top: 2rem;
}

.cc-title-row { display: flex; align-items: center; gap: 0.75rem; justify-content: center; margin-bottom: 0.25rem; }
#cc-instructions .cc-icon {
font-size: 2.5rem;
margin-bottom: 0;
filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

#cc-instructions h2 {
font-size: 1.75rem;
margin: 0 0 0.25rem 0;
color: var(--color-primary);
}

#cc-instructions .cc-subtitle {
color: var(--color-text-secondary);
margin: 0 0 1.5rem 0;
font-size: 0.95rem;
}

[data-theme="dark"] #cc-instructions .cc-subtitle {
color: var(--color-dark-text-secondary);
}

#cc-instructions .cc-how-to {
text-align: left;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.5rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border);
}

[data-theme="dark"] #cc-instructions .cc-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#cc-instructions .cc-how-to h3 {
margin: 0 0 0.75rem 0;
font-size: 1rem;
color: var(--color-primary);
}

#cc-instructions .cc-how-to ul {
margin: 0;
padding-left: 1.25rem;
}

#cc-instructions .cc-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

.cc-personal-best {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.5rem;
padding: 0.6rem 1.25rem;
margin-bottom: 1.5rem;
font-size: 0.9rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .cc-personal-best {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}

.cc-personal-best strong {
color: var(--color-primary);
}

/* ── Buttons ── */
.cc-btn-primary {
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

.cc-btn-primary:hover {
background: var(--color-primary-hover);
}

.cc-btn-primary:active {
transform: scale(0.97);
}

.cc-btn-secondary {
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

.cc-btn-secondary:hover {
background: var(--color-bg-secondary);
}

[data-theme="dark"] .cc-btn-secondary:hover {
background: var(--color-dark-bg-secondary);
}

/* ── Wizard Overlay ── */
#cc-wizard {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
#cc-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: cc-wizard-enter 0.3s ease-out;
}
[data-theme="dark"] #cc-wizard-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}
@keyframes cc-wizard-enter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
.cc-wizard-icon {
font-size: 2.5rem;
margin-bottom: 0.75rem;
}
.cc-wizard-title {
font-size: 1.25rem;
font-weight: 700;
margin: 0 0 0.5rem;
}
.cc-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] .cc-wizard-desc {
color: var(--color-dark-text-secondary);
}
.cc-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
.cc-wizard-dot {
width: 8px;
height: 8px;
border-radius: 50%;
background: var(--color-border, #dfe4ea);
transition: all 0.3s;
}
.cc-wizard-dot.active {
background: var(--color-primary);
transform: scale(1.3);
}
[data-theme="dark"] .cc-wizard-dot {
background: var(--color-dark-border, #3a4553);
}
[data-theme="dark"] .cc-wizard-dot.active {
background: var(--color-primary);
}
.cc-wizard-btn {
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
.cc-wizard-btn:hover {
background: var(--color-primary-hover, #0d7a62);
}
@media (max-width: 400px) {
#cc-wizard-card {
padding: 1.5rem 1rem;
}
.cc-wizard-icon {
font-size: 2rem;
}
.cc-wizard-title {
font-size: 1.1rem;
}
.cc-wizard-desc {
font-size: 0.85rem;
}
}

/* ── Playing Screen ── */
#cc-playing {
display: none;
flex: 1;
flex-direction: column;
}

.cc-header {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 0.5rem;
margin-bottom: 0.75rem;
padding: 0.75rem;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .cc-header {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.cc-stat {
text-align: center;
}

.cc-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
margin-bottom: 0.15rem;
}

[data-theme="dark"] .cc-stat-label {
color: var(--color-dark-text-secondary);
}

.cc-stat-value {
font-size: 1.15rem;
font-weight: 700;
}

.cc-level-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
font-size: 0.85rem;
}

.cc-level-text {
font-weight: 600;
}

.cc-modifier-badge {
background: #ec4899;
color: #fff;
padding: 0.15rem 0.5rem;
border-radius: 0.25rem;
font-size: 0.75rem;
font-weight: 600;
}

.cc-progress-bar {
width: 100%;
height: 6px;
background: var(--color-bg-secondary);
border-radius: 3px;
overflow: hidden;
margin-bottom: 1rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .cc-progress-bar {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.cc-progress-fill {
height: 100%;
background: var(--color-primary);
border-radius: 3px;
transition: width 0.3s ease;
}

.cc-timer-bar {
width: 100%;
height: 4px;
background: var(--color-bg-secondary);
border-radius: 2px;
overflow: hidden;
margin-bottom: 1rem;
}

[data-theme="dark"] .cc-timer-bar {
background: var(--color-dark-bg-secondary);
}

.cc-timer-fill {
height: 100%;
background: var(--color-primary);
border-radius: 2px;
transition: width 0.05s linear;
}

.cc-timer-fill.cc-timer-warning {
background: #ef4444;
}

/* ── Rule Indicator ── */
.cc-rule-indicator {
text-align: center;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
font-size: 0.95rem;
font-weight: 700;
margin-bottom: 1rem;
transition: background 0.3s, color 0.3s;
}

.cc-rule-ink {
background: rgba(236,72,153,0.15);
color: #ec4899;
border: 1px solid rgba(236,72,153,0.3);
}

[data-theme="dark"] .cc-rule-ink {
background: rgba(236,72,153,0.25);
color: #f472b6;
}

.cc-rule-word {
background: rgba(59,130,246,0.15);
color: #3b82f6;
border: 1px solid rgba(59,130,246,0.3);
}

[data-theme="dark"] .cc-rule-word {
background: rgba(59,130,246,0.25);
color: #60a5fa;
}

.cc-rule-bg {
background: rgba(168,85,247,0.15);
color: #a855f7;
border: 1px solid rgba(168,85,247,0.3);
}

[data-theme="dark"] .cc-rule-bg {
background: rgba(168,85,247,0.25);
color: #c084fc;
}

/* ── Stimulus Display ── */
.cc-stimulus-area {
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 180px;
position: relative;
}

.cc-stimulus-word {
font-size: 3.5rem;
font-weight: 800;
line-height: 1.2;
animation: cc-stimulus-enter 0.2s ease-out;
text-align: center;
text-transform: uppercase;
letter-spacing: 0.05em;
}

.cc-stimulus-wrap {
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
animation: cc-stimulus-enter 0.2s ease-out;
}

.cc-bg-square {
width: 50px;
height: 50px;
border-radius: 0.5rem;
border: 2px solid rgba(0,0,0,0.1);
flex-shrink: 0;
}

[data-theme="dark"] .cc-bg-square {
border-color: rgba(255,255,255,0.15);
}

@keyframes cc-stimulus-enter {
0% { transform: scale(0.5); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

.cc-feedback-flash {
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

.cc-feedback-flash.cc-flash-correct {
background: rgba(34, 197, 94, 0.15);
opacity: 1;
}

.cc-feedback-flash.cc-flash-wrong {
background: rgba(239, 68, 68, 0.15);
opacity: 1;
}

.cc-feedback-icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
font-size: 3rem;
pointer-events: none;
z-index: 2;
}

.cc-feedback-icon.cc-show-check {
animation: cc-feedback-pop 0.4s ease-out forwards;
color: #22c55e;
}

.cc-feedback-icon.cc-show-x {
animation: cc-feedback-pop 0.4s ease-out forwards;
color: #ef4444;
}

@keyframes cc-feedback-pop {
0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}

/* ── Color Answer Buttons ── */
.cc-answers {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin-top: 1rem;
margin-bottom: 0.75rem;
}

.cc-answer-btn {
padding: 0.75rem;
border: 2px solid transparent;
border-radius: 0.75rem;
font-size: 0.8rem;
font-weight: 700;
cursor: pointer;
transition: transform 0.1s, border-color 0.15s, opacity 0.15s;
color: #fff;
min-height: 70px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.35rem;
text-transform: uppercase;
letter-spacing: 0.03em;
}

.cc-color-circle {
width: 50px;
height: 50px;
border-radius: 50%;
border: 3px solid rgba(255,255,255,0.4);
background: currentColor;
}

.cc-answer-btn:active {
transform: scale(0.95);
}

.cc-answer-btn:hover {
opacity: 0.9;
border-color: rgba(255,255,255,0.5);
}

.cc-answer-btn.cc-correct-flash {
border-color: #22c55e;
box-shadow: 0 0 15px rgba(34,197,94,0.4);
}

.cc-answer-btn.cc-wrong-flash {
border-color: #ef4444;
box-shadow: 0 0 15px rgba(239,68,68,0.4);
}

.cc-playing-hint {
text-align: center;
font-size: 0.75rem;
color: var(--color-text-secondary);
display: none;
}

@media (min-width: 768px) {
.cc-playing-hint {
display: block;
}
}

[data-theme="dark"] .cc-playing-hint {
color: var(--color-dark-text-secondary);
}

/* ── Pause Overlay ── */
#cc-pause-overlay {
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

#cc-pause-overlay .cc-pause-text {
font-size: 2.5rem;
font-weight: 800;
color: #fff;
text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}

/* ── Game Complete Modal ── */
#cc-complete-overlay {
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

.cc-complete-card {
background: var(--color-bg-primary);
border-radius: 1rem;
padding: 2rem;
max-width: 400px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: cc-modal-enter 0.3s ease-out;
}

[data-theme="dark"] .cc-complete-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}

@keyframes cc-modal-enter {
0% { transform: scale(0.8) translateY(20px); opacity: 0; }
100% { transform: scale(1) translateY(0); opacity: 1; }
}

.cc-complete-card h2 {
margin: 0 0 0.25rem 0;
font-size: 1.5rem;
}

.cc-complete-card .cc-trophy {
font-size: 3.5rem;
margin-bottom: 0.5rem;
}

.cc-final-score {
font-size: 2.5rem;
font-weight: 800;
color: var(--color-primary);
margin: 0.5rem 0;
}

.cc-new-best {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316);
color: #fff;
padding: 0.25rem 0.75rem;
border-radius: 1rem;
font-size: 0.85rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: cc-best-pulse 1s ease-in-out infinite alternate;
}

@keyframes cc-best-pulse {
0% { transform: scale(1); }
100% { transform: scale(1.05); }
}

.cc-complete-stats {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin: 1rem 0 1.5rem;
}

.cc-complete-stat {
background: var(--color-bg-secondary);
border-radius: 0.5rem;
padding: 0.6rem;
}

[data-theme="dark"] .cc-complete-stat {
background: var(--color-dark-bg-secondary);
}

.cc-complete-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
}

[data-theme="dark"] .cc-complete-stat-label {
color: var(--color-dark-text-secondary);
}

.cc-complete-stat-value {
font-size: 1.2rem;
font-weight: 700;
}

.cc-complete-actions {
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
}

.cc-back-link {
color: var(--color-text-secondary);
font-size: 0.9rem;
text-decoration: none;
}

[data-theme="dark"] .cc-back-link {
color: var(--color-dark-text-secondary);
}

.cc-back-link:hover {
color: var(--color-primary);
text-decoration: underline;
}

/* ── Level Up Toast ── */
.cc-level-up-toast {
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

.cc-level-up-toast.cc-toast-show {
transform: translateX(-50%) translateY(0);
}

/* ── Responsive ── */
@media (max-width: 480px) {
#color-clash-game {
padding: 0.5rem;
}
.cc-stimulus-word {
font-size: 2.5rem;
}
.cc-answer-btn {
padding: 0.5rem;
min-height: 60px;
font-size: 0.7rem;
}
.cc-color-circle {
width: 40px;
height: 40px;
}
.cc-header {
padding: 0.5rem;
gap: 0.25rem;
}
.cc-stat-value {
font-size: 1rem;
}
#cc-instructions { padding: 0.75rem 0.5rem; }
#cc-instructions .cc-icon { font-size: 2rem; margin-bottom: 0; }
#cc-instructions h2 { font-size: 1.3rem; }
#cc-instructions .cc-subtitle { margin-bottom: 1rem; font-size: 0.85rem; }
#cc-instructions .cc-how-to { padding: 0.75rem 1rem; margin-bottom: 1rem; }
#cc-instructions .cc-how-to li { margin-bottom: 0.25rem; font-size: 0.82rem; }
.cc-personal-best { padding: 0.4rem 0.75rem; margin-bottom: 1rem; font-size: 0.82rem; }
.cc-bg-square { width: 40px; height: 40px; }
}
@media (max-width: 640px) {
#color-clash-game {
padding: 0.75rem;
}
.cc-stimulus-word {
font-size: 3rem;
}
.cc-answer-btn {
padding: 0.625rem;
}
}
@media (max-width: 360px) {
.cc-stimulus-word {
font-size: 2rem;
}
.cc-answer-btn {
padding: 0.5rem;
font-size: 0.65rem;
min-height: 54px;
}
.cc-color-circle {
width: 34px;
height: 34px;
}
.cc-complete-stats {
grid-template-columns: 1fr 1fr;
}
.cc-final-score {
font-size: 2rem;
}
.cc-header {
padding: 0.375rem;
}
.cc-stat-value {
font-size: 0.9rem;
}
.cc-rule-indicator {
font-size: 0.8rem;
padding: 0.4rem 0.75rem;
}
}
@keyframes cc-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.cc-confetti-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.cc-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: cc-confetti-fall 2.5s ease-in forwards;
}
.cc-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: cc-glow-fade 1s ease-out forwards;
}
@keyframes cc-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.cc-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
padding: 0.35rem 1rem;
border-radius: 1rem;
font-size: 0.9rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: cc-badge-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(236,72,153,0.4);
}
@keyframes cc-badge-bounce {
0% { transform: scale(0); opacity: 0; }
60% { transform: scale(1.2); }
100% { transform: scale(1); opacity: 1; }
}
</style>

<div id="color-clash-game">

<div id="cc-instructions">
<div class="cc-title-row"><span class="cc-icon">&#127912;</span><h2>Color Clash</h2></div>
<p class="cc-subtitle">Lisez les couleurs, ignorez les distractions</p>
<div id="cc-best-display" class="cc-personal-best">
Record Personnel: <strong id="cc-best-score">aucun</strong>
</div>
<div class="cc-how-to">
<h3>Comment Jouer</h3>
<ul>
<li>Un mot de couleur appara&icirc;t &eacute;crit dans une <strong style="color:#ec4899">couleur d'encre diff&eacute;rente</strong>.</li>
<li>Suivez l'<strong>indicateur de r&egrave;gle</strong> &mdash; appuyez sur la bonne couleur selon la r&egrave;gle en cours.</li>
<li>Les r&egrave;gles alternent entre <strong style="color:#ec4899">&laquo; Couleur de l'Encre &raquo;</strong> et <strong style="color:#3b82f6">&laquo; Sens du Mot &raquo;</strong> au fil des niveaux.</li>
<li>R&eacute;pondez avant la fin du temps !</li>
</ul>
</div>

<button class="cc-btn-primary" id="cc-start-btn">Commencer</button>
<div id="cc-challenge-banner-wrap"></div>
</div>

<div id="cc-wizard">
<div id="cc-wizard-card"></div>
</div>

<div id="cc-playing">
<div class="cc-header">
<div class="cc-stat">
<div class="cc-stat-label">Score</div>
<div class="cc-stat-value" id="cc-score">0</div>
</div>
<div class="cc-stat">
<div class="cc-stat-label">S&eacute;rie</div>
<div class="cc-stat-value" id="cc-streak">0</div>
</div>
<div class="cc-stat">
<div class="cc-stat-label">Level</div>
<div class="cc-stat-value" id="cc-level">1</div>
</div>
</div>
<div class="cc-level-info">
<span class="cc-level-text">Level <span id="cc-level-text">1</span></span>
<span class="cc-modifier-badge" id="cc-modifier-badge" style="display:none;">Changement de r&egrave;gle</span>
</div>
<div class="cc-progress-bar">
<div class="cc-progress-fill" id="cc-progress-fill" style="width:0%"></div>
</div>
<div class="cc-timer-bar">
<div class="cc-timer-fill" id="cc-timer-fill" style="width:100%"></div>
</div>
<div class="cc-rule-indicator cc-rule-ink" id="cc-rule-indicator">Appuyez sur la COULEUR DE L'ENCRE</div>
<div class="cc-stimulus-area">
<div class="cc-feedback-flash" id="cc-feedback-flash"></div>
<div class="cc-feedback-icon" id="cc-feedback-icon"></div>
<div id="cc-stimulus-wrap" class="cc-stimulus-wrap">
<span class="cc-stimulus-word" id="cc-stimulus-word"></span>
<div class="cc-bg-square" id="cc-bg-square" style="display:none;"></div>
</div>
</div>
<div class="cc-answers" id="cc-answers">
<button class="cc-answer-btn" id="cc-ans-0"><div class="cc-color-circle"></div><span></span></button>
<button class="cc-answer-btn" id="cc-ans-1"><div class="cc-color-circle"></div><span></span></button>
<button class="cc-answer-btn" id="cc-ans-2"><div class="cc-color-circle"></div><span></span></button>
<button class="cc-answer-btn" id="cc-ans-3"><div class="cc-color-circle"></div><span></span></button>
</div>
<div class="cc-playing-hint">Appuyez sur <strong>1-4</strong> pour r&eacute;pondre &middot; <strong>&Eacute;chap</strong> pour pause</div>
<button class="gk-finish-btn" id="cc-finish-btn">Terminer</button>
</div>

<div id="cc-pause-overlay">
<div class="cc-pause-text">Pause</div>
<button class="cc-btn-primary" id="cc-resume-btn">Reprendre</button>
</div>

<div id="cc-complete-overlay">
<div class="cc-complete-card">
<div class="cc-trophy">&#127942;</div>
<h2>Partie Termin&eacute;e !</h2>
<div class="cc-final-score" id="cc-final-score">0</div>
<div id="cc-new-best" class="cc-new-best" style="display:none;">&#11088; Nouveau record !</div>
<div class="gk-challenge-result" id="cc-challenge-result" style="display:none;"></div>
<div class="cc-complete-stats">
<div class="cc-complete-stat">
<div class="cc-complete-stat-label">Niveau atteint</div>
<div class="cc-complete-stat-value" id="cc-final-level">1</div>
</div>
<div class="cc-complete-stat">
<div class="cc-complete-stat-label">Pr&eacute;cision</div>
<div class="cc-complete-stat-value" id="cc-final-accuracy">0%</div>
</div>
<div class="cc-complete-stat">
<div class="cc-complete-stat-label">Meilleure s&eacute;rie</div>
<div class="cc-complete-stat-value" id="cc-final-streak">0</div>
</div>
<div class="cc-complete-stat">
<div class="cc-complete-stat-label">Record personnel</div>
<div class="cc-complete-stat-value" id="cc-final-best">0</div>
</div>
</div>
<div class="cc-complete-actions">
<button class="cc-btn-primary" id="cc-play-again-btn">Rejouer</button>
<a href="/fr/games/" class="cc-back-link">&larr; Tous les jeux</a>
</div>
<div class="gk-share-section">

<button class="gk-share-btn" id="cc-share-btn">&#128279; Partage ton score</button>
<div class="gk-share-copied" id="cc-share-copied" style="display:none;">Lien copi&eacute; !</div>
</div>
</div>
</div>

<div class="cc-level-up-toast" id="cc-level-toast">Level Up!</div>

</div>

<script>
(function() {
"use strict";

var MAX_LEVEL = 20;
var STORAGE_HISTORY = 'guruka_color-clash_history';
var STORAGE_BEST = 'guruka_color-clash_best';

var challenge = GK.parseChallenge();

/* ── Color pool ── */
var COLORS = [
{ name: 'Rouge', hex: '#ef4444' },
{ name: 'Bleu', hex: '#3b82f6' },
{ name: 'Vert', hex: '#22c55e' },
{ name: 'Jaune', hex: '#eab308' },
{ name: 'Violet', hex: '#a855f7' },
{ name: 'Orange', hex: '#f97316' },
{ name: 'Rose', hex: '#ec4899' },
{ name: 'Cyan', hex: '#06b6d4' }
];

var RULES = { INK: 'ink', WORD: 'word', BG: 'bg' };

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
correctColorName: '',
currentRule: RULES.INK,
roundsSinceRuleSwitch: 0,
nextRuleSwitchAt: 0
};

/* ── DOM refs ── */
var elInstructions = document.getElementById('cc-instructions');
var elWizard = document.getElementById('cc-wizard');
var elWizardCard = document.getElementById('cc-wizard-card');
var elPlaying = document.getElementById('cc-playing');
var elPauseOverlay = document.getElementById('cc-pause-overlay');
var elCompleteOverlay = document.getElementById('cc-complete-overlay');
var elScore = document.getElementById('cc-score');
var elStreak = document.getElementById('cc-streak');
var elLevel = document.getElementById('cc-level');
var elLevelText = document.getElementById('cc-level-text');
var elModifierBadge = document.getElementById('cc-modifier-badge');
var elProgressFill = document.getElementById('cc-progress-fill');
var elTimerFill = document.getElementById('cc-timer-fill');
var elRuleIndicator = document.getElementById('cc-rule-indicator');
var elStimulusWord = document.getElementById('cc-stimulus-word');
var elStimulusWrap = document.getElementById('cc-stimulus-wrap');
var elBgSquare = document.getElementById('cc-bg-square');
var elFeedbackFlash = document.getElementById('cc-feedback-flash');
var elFeedbackIcon = document.getElementById('cc-feedback-icon');
var elFinalScore = document.getElementById('cc-final-score');
var elNewBest = document.getElementById('cc-new-best');
var elFinalLevel = document.getElementById('cc-final-level');
var elFinalAccuracy = document.getElementById('cc-final-accuracy');
var elFinalStreak = document.getElementById('cc-final-streak');
var elFinalBest = document.getElementById('cc-final-best');
var elBestDisplay = document.getElementById('cc-best-display');
var elBestScore = document.getElementById('cc-best-score');
var elLevelToast = document.getElementById('cc-level-toast');
var btnStart = document.getElementById('cc-start-btn');
var btnResume = document.getElementById('cc-resume-btn');
var btnPlayAgain = document.getElementById('cc-play-again-btn');
var answerBtns = [
document.getElementById('cc-ans-0'),
document.getElementById('cc-ans-1'),
document.getElementById('cc-ans-2'),
document.getElementById('cc-ans-3')
];

/* ── Level parameters ── */
function getDisplayTime(lvl) {
return Math.max(4000 - lvl * 130, 1500);
}

function getRoundsPerLevel(lvl) {
return 10 + lvl;
}

function getColorPool(lvl) {
if (lvl <= 9) return COLORS.slice(0, 4);
return COLORS;
}

/* ── Rule logic ── */
function getRuleForLevel(lvl) {
if (lvl <= 6) return RULES.INK;
return RULES.INK;
}

function shouldSwitchRules(lvl) {
return lvl >= 7;
}

function isTripleStroop(lvl) {
return lvl >= 17;
}

function isCongruent(lvl) {
return lvl <= 3;
}

function doesRuleSwitchMidLevel(lvl) {
return lvl >= 13 && lvl <= 16;
}

function updateRuleIndicator() {
elRuleIndicator.className = 'cc-rule-indicator';
if (state.currentRule === RULES.INK) {
elRuleIndicator.textContent = 'Appuyez sur la COULEUR DE L\u2019ENCRE';
elRuleIndicator.classList.add('cc-rule-ink');
} else if (state.currentRule === RULES.WORD) {
elRuleIndicator.textContent = 'Appuyez sur le SENS DU MOT';
elRuleIndicator.classList.add('cc-rule-word');
} else if (state.currentRule === RULES.BG) {
elRuleIndicator.textContent = 'Appuyez sur la COULEUR DE FOND';
elRuleIndicator.classList.add('cc-rule-bg');
}
}

/* ── Random helpers ── */
function randInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
for (var i = arr.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
return arr;
}

function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

function pickDifferent(arr, exclude) {
var filtered = arr.filter(function(c) { return c.name !== exclude.name; });
return pickRandom(filtered);
}

/* ── Generate stimulus ── */
function generateStimulus(lvl) {
var pool = getColorPool(lvl);
var wordColor, inkColor, bgColor, correctColor;

if (isCongruent(lvl)) {
/* L1-3: congruent, word matches ink */
wordColor = pickRandom(pool);
inkColor = wordColor;
bgColor = null;
state.currentRule = RULES.INK;
correctColor = wordColor;
} else if (lvl <= 6) {
/* L4-6: incongruent, identify ink */
wordColor = pickRandom(pool);
inkColor = pickDifferent(pool, wordColor);
bgColor = null;
state.currentRule = RULES.INK;
correctColor = inkColor;
} else if (lvl <= 9) {
/* L7-9: rule alternates each round between ink and word */
wordColor = pickRandom(pool);
inkColor = pickDifferent(pool, wordColor);
bgColor = null;
correctColor = (state.currentRule === RULES.INK) ? inkColor : wordColor;
} else if (lvl <= 12) {
/* L10-12: 8 colors, rule alternates */
wordColor = pickRandom(pool);
inkColor = pickDifferent(pool, wordColor);
bgColor = null;
correctColor = (state.currentRule === RULES.INK) ? inkColor : wordColor;
} else if (lvl <= 16) {
/* L13-16: rule switches mid-level */
wordColor = pickRandom(pool);
inkColor = pickDifferent(pool, wordColor);
bgColor = null;
correctColor = (state.currentRule === RULES.INK) ? inkColor : wordColor;
} else {
/* L17-20: triple stroop */
wordColor = pickRandom(pool);
inkColor = pickDifferent(pool, wordColor);
bgColor = pickDifferent(pool, inkColor);
while (bgColor.name === wordColor.name) {
bgColor = pickDifferent(pool, inkColor);
}
if (state.currentRule === RULES.INK) {
correctColor = inkColor;
} else if (state.currentRule === RULES.WORD) {
correctColor = wordColor;
} else {
correctColor = bgColor;
}
}

return {
wordText: wordColor.name,
inkHex: inkColor.hex,
bgColor: bgColor,
correctColor: correctColor,
pool: pool
};
}

function generateColorChoices(correctColor, pool) {
var choices = [correctColor];
var attempts = 0;
while (choices.length < 4 && attempts < 50) {
var candidate = pickRandom(pool);
var isDuplicate = false;
for (var i = 0; i < choices.length; i++) {
if (choices[i].name === candidate.name) {
isDuplicate = true;
break;
}
}
if (!isDuplicate) {
choices.push(candidate);
}
attempts++;
}
/* Fill remaining if pool is too small */
var allColors = COLORS.slice();
while (choices.length < 4) {
var c = pickRandom(allColors);
var dup = false;
for (var k = 0; k < choices.length; k++) {
if (choices[k].name === c.name) { dup = true; break; }
}
if (!dup) choices.push(c);
}
return shuffle(choices);
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
elBestScore.textContent = best.toLocaleString() + ' points';
} else {
elBestScore.textContent = 'aucun';
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
if (shouldSwitchRules(state.level)) {
elModifierBadge.style.display = '';
if (isTripleStroop(state.level)) {
elModifierBadge.textContent = 'Triple Stroop';
} else if (doesRuleSwitchMidLevel(state.level)) {
elModifierBadge.textContent = 'Changement en niveau';
} else {
elModifierBadge.textContent = 'Changement de r\u00e8gle';
}
} else {
elModifierBadge.style.display = 'none';
}
var roundsNeeded = getRoundsPerLevel(state.level);
var pct = Math.min((state.round / roundsNeeded) * 100, 100);
elProgressFill.style.width = pct + '%';
if (challenge.active) GK.updateChallengeBar('cc-playing', state.score, challenge.score);
}

/* ── Timer bar countdown ── */
function startTimerBar() {
var displayTime = getDisplayTime(state.level);
var startTime = Date.now();
elTimerFill.style.width = '100%';
elTimerFill.classList.remove('cc-timer-warning');

if (state.timerInterval) clearInterval(state.timerInterval);
state.timerInterval = setInterval(function() {
if (state.paused) return;
var elapsed = Date.now() - startTime;
var remaining = Math.max(0, 1 - elapsed / displayTime);
elTimerFill.style.width = (remaining * 100) + '%';
if (remaining < 0.3) {
elTimerFill.classList.add('cc-timer-warning');
}
if (remaining <= 0) {
clearInterval(state.timerInterval);
}
}, 50);
}

/* ── Show feedback flash ── */
function showFeedback(correct) {
elFeedbackFlash.className = 'cc-feedback-flash';
elFeedbackIcon.className = 'cc-feedback-icon';
void elFeedbackFlash.offsetWidth;
void elFeedbackIcon.offsetWidth;

if (correct) {
elFeedbackFlash.classList.add('cc-flash-correct');
elFeedbackIcon.textContent = '\u2713';
elFeedbackIcon.classList.add('cc-show-check');
} else {
elFeedbackFlash.classList.add('cc-flash-wrong');
elFeedbackIcon.textContent = '\u2717';
elFeedbackIcon.classList.add('cc-show-x');
}

setTimeout(function() {
elFeedbackFlash.className = 'cc-feedback-flash';
elFeedbackIcon.className = 'cc-feedback-icon';
}, 400);
}

/* ── Show level-up toast ── */
function showLevelToast(level) {
elLevelToast.textContent = 'Level ' + level + ' !';
elLevelToast.classList.add('cc-toast-show');
setTimeout(function() {
elLevelToast.classList.remove('cc-toast-show');
}, 1500);
}

/* ── Flash answer button ── */
function flashAnswerBtn(idx, correct) {
answerBtns[idx].classList.add(correct ? 'cc-correct-flash' : 'cc-wrong-flash');
setTimeout(function() {
answerBtns[idx].classList.remove('cc-correct-flash', 'cc-wrong-flash');
}, 400);
}

/* ── Determine rule for the next round ── */
function determineRule() {
var lvl = state.level;
if (lvl <= 3) {
state.currentRule = RULES.INK;
} else if (lvl <= 6) {
state.currentRule = RULES.INK;
} else if (lvl <= 12) {
/* Alternate each round */
state.currentRule = (state.round % 2 === 0) ? RULES.INK : RULES.WORD;
} else if (lvl <= 16) {
/* Mid-level switching every 3-5 rounds */
state.roundsSinceRuleSwitch++;
if (state.roundsSinceRuleSwitch >= state.nextRuleSwitchAt) {
state.currentRule = (state.currentRule === RULES.INK) ? RULES.WORD : RULES.INK;
state.roundsSinceRuleSwitch = 0;
state.nextRuleSwitchAt = randInt(3, 5);
}
} else {
/* L17-20: triple stroop, cycle through ink/word/bg */
var rules = [RULES.INK, RULES.WORD, RULES.BG];
state.roundsSinceRuleSwitch++;
if (state.roundsSinceRuleSwitch >= state.nextRuleSwitchAt) {
var currentIdx = rules.indexOf(state.currentRule);
var nextIdx = (currentIdx + 1) % rules.length;
state.currentRule = rules[nextIdx];
state.roundsSinceRuleSwitch = 0;
state.nextRuleSwitchAt = randInt(2, 4);
}
}
}

/* ── Set color button appearance ── */
function setColorButton(btn, color) {
btn.style.background = color.hex;
btn.style.borderColor = 'transparent';
var circle = btn.querySelector('.cc-color-circle');
var label = btn.querySelector('span');
circle.style.background = '#fff';
circle.style.borderColor = 'rgba(255,255,255,0.6)';
circle.style.background = color.hex;
circle.style.filter = 'brightness(1.2)';
label.textContent = color.name;
btn.dataset.colorName = color.name;
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

var chosenName = answerBtns[chosenIdx].dataset.colorName;
var correct = (chosenName === state.correctColorName);

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
state.roundsSinceRuleSwitch = 0;
state.nextRuleSwitchAt = randInt(3, 5);
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
state.roundsSinceRuleSwitch = 0;
state.nextRuleSwitchAt = randInt(3, 5);
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

/* Determine rule for this round */
determineRule();
updateRuleIndicator();

var stimulus = generateStimulus(state.level);
state.correctColorName = stimulus.correctColor.name;

/* Display the stimulus word */
elStimulusWord.textContent = stimulus.wordText;
elStimulusWord.style.color = stimulus.inkHex;
elStimulusWrap.style.animation = 'none';
void elStimulusWrap.offsetWidth;
elStimulusWrap.style.animation = '';

/* Handle background square for triple stroop */
if (stimulus.bgColor && isTripleStroop(state.level)) {
elBgSquare.style.display = 'block';
elBgSquare.style.background = stimulus.bgColor.hex;
} else {
elBgSquare.style.display = 'none';
}

/* Generate and display color choices */
var choices = generateColorChoices(stimulus.correctColor, stimulus.pool);
for (var i = 0; i < 4; i++) {
setColorButton(answerBtns[i], choices[i]);
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
container.className = 'cc-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'cc-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'cc-glow-flash';
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

var trophy = document.querySelector('.cc-trophy');
var title = document.querySelector('#cc-complete-overlay .cc-complete-card h2');

if (isNewBest) {
showConfetti();
trophy.textContent = '\uD83C\uDF89';
title.textContent = 'INCROYABLE !';
elNewBest.className = 'cc-new-best-enhanced';
elNewBest.innerHTML = '\uD83C\uDF1F INCROYABLE ! Nouveau record !';
elNewBest.style.display = 'inline-block';
} else {
trophy.textContent = '\uD83C\uDFC6';
title.textContent = 'Bien jou\u00e9 !';
elNewBest.className = 'cc-new-best';
elNewBest.style.display = 'none';
}

elFinalLevel.textContent = state.level;
elFinalAccuracy.textContent = accuracy + '%';
elFinalStreak.textContent = state.bestStreak;
elFinalBest.textContent = best.toLocaleString();

GK.renderChallengeResult('cc-challenge-result', state.score, challenge);

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
var CC_WIZARD_STEPS = [
{icon: '\uD83C\uDFA8', title: 'Lisez la couleur, pas le mot', desc: 'Un mot de couleur appara\u00eet dans une couleur d\u2019encre diff\u00e9rente. Suivez l\u2019indicateur de r\u00e8gle pour choisir la bonne r\u00e9ponse !'},
{icon: '\uD83D\uDD04', title: 'Les r\u00e8gles changent avec les niveaux', desc: 'Aux niveaux sup\u00e9rieurs, la r\u00e8gle alterne entre \u00ab Couleur de l\u2019Encre \u00bb et \u00ab Sens du Mot \u00bb. Restez concentr\u00e9 !'},
{icon: '\u26A1', title: 'Soyez rapide !', desc: 'R\u00e9pondez avant la fin du temps. Vitesse et s\u00e9ries = points bonus !', final: true}
];
var ccWizardStep = 0;

function renderWizardStep() {
var s = CC_WIZARD_STEPS[ccWizardStep];
var dotsHtml = '';
for (var i = 0; i < CC_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="cc-wizard-dot' + (i === ccWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Commencer' : 'Suivant';
elWizardCard.innerHTML =
'<div class="cc-wizard-icon">' + s.icon + '</div>' +
'<div class="cc-wizard-title">' + s.title + '</div>' +
'<div class="cc-wizard-desc">' + s.desc + '</div>' +
'<div class="cc-wizard-dots">' + dotsHtml + '</div>' +
'<button class="cc-wizard-btn" id="cc-wizard-next">' + btnLabel + '</button>';
elWizardCard.style.animation = 'none';
void elWizardCard.offsetWidth;
elWizardCard.style.animation = 'cc-wizard-enter 0.3s ease-out';
document.getElementById('cc-wizard-next').addEventListener('click', advanceWizard);
}

function advanceWizard() {
if (ccWizardStep < CC_WIZARD_STEPS.length - 1) {
ccWizardStep++;
renderWizardStep();
} else {
startPlaying();
}
}

function showWizard() {
ccWizardStep = 0;
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
state.correctColorName = '';
state.currentRule = RULES.INK;
state.roundsSinceRuleSwitch = 0;
state.nextRuleSwitchAt = randInt(3, 5);
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
GK.renderChallengeBar('cc-playing', challenge);
updateHUD();
nextRound();
}

/* ── Event listeners ── */
btnStart.addEventListener('click', function() {
resetState();
startPlaying();
});

btnPlayAgain.addEventListener('click', function() {
resetState();
showPersonalBest();
startPlaying();
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

document.getElementById('cc-finish-btn').addEventListener('click', function() {
endGame();
});

document.getElementById('cc-share-btn').addEventListener('click', function() {
GK.shareResult(state.score, 'Color Clash', '/fr/games/color-clash/', 'cc-share-copied');
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
} else if (state.screen === 'instructions') {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
resetState();
startPlaying();
}
} else if (state.screen === 'complete') {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
resetState();
showPersonalBest();
startPlaying();
}
}
});

/* ── Init ── */
showPersonalBest();
GK.renderChallengeBanner('cc-challenge-banner-wrap', challenge);
showScreen('instructions');

})();
</script>
