---
title: "Memory Matrix - Juego de Entrenamiento Cerebral"
description: "Fortalece tu memoria espacial memorizando y recordando patrones de cuadrícula. ¡Observa el patrón y luego toca las celdas de memoria!"
full_width: true
language: "es"
---
<style>
#memory-matrix-game {
max-width: 540px;
margin: 0 auto;
padding: 1.5rem 1rem;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
color: var(--color-text-primary);
-webkit-tap-highlight-color: transparent;
}

#memory-matrix-game * {
box-sizing: border-box;
}

#memory-matrix-game .mm-screen {
display: none;
animation: mmFadeIn 0.4s ease-out;
}

#memory-matrix-game .mm-screen.active {
display: block;
}

@keyframes mmFadeIn {
from { opacity: 0; transform: translateY(12px); }
to { opacity: 1; transform: translateY(0); }
}

@keyframes mmPulse {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.08); }
}

@keyframes mmCellGlow {
0% { box-shadow: 0 0 0 0 rgba(15, 144, 114, 0.4); }
70% { box-shadow: 0 0 0 8px rgba(15, 144, 114, 0); }
100% { box-shadow: 0 0 0 0 rgba(15, 144, 114, 0); }
}

@keyframes mmShine {
0% { background-position: -200% center; }
100% { background-position: 200% center; }
}

@keyframes mmBounceIn {
0% { transform: scale(0); opacity: 0; }
50% { transform: scale(1.1); }
100% { transform: scale(1); opacity: 1; }
}

@keyframes mmSlideUp {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}

/* ---- Instructions Screen ---- */
#memory-matrix-game .mm-instructions {
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-top: 2rem;
}

#memory-matrix-game .mm-title-row { display: flex; align-items: center; gap: 0.75rem; justify-content: center; margin-bottom: 0.25rem; }
#memory-matrix-game .mm-icon-wrap {
display: inline-flex;
align-items: center;
justify-content: center;
width: 48px;
height: 48px;
border-radius: 0.75rem;
background: color-mix(in srgb, var(--color-primary) 12%, transparent);
margin-bottom: 0;
}

#memory-matrix-game .mm-icon-wrap svg {
width: 36px;
height: 36px;
stroke: var(--color-primary);
fill: none;
stroke-width: 2;
stroke-linecap: round;
stroke-linejoin: round;
}

#memory-matrix-game .mm-title {
font-size: 1.75rem;
font-weight: 700;
margin: 0 0 0.25rem;
}

#memory-matrix-game .mm-subtitle {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
}

#memory-matrix-game .mm-how-to {
text-align: left;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.5rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border);
}

[data-theme="dark"] #memory-matrix-game .mm-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#memory-matrix-game .mm-how-to h3 {
font-size: 1rem;
font-weight: 600;
margin: 0 0 0.75rem;
color: var(--color-primary);
}

#memory-matrix-game .mm-how-to ul {
margin: 0;
padding-left: 1.25rem;
}

#memory-matrix-game .mm-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

#memory-matrix-game .mm-best-banner {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.75rem;
padding: 0.75rem 1rem;
margin-bottom: 1.5rem;
font-size: 0.9rem;
color: var(--color-text-secondary);
}

#memory-matrix-game .mm-best-banner strong {
color: var(--color-primary);
}

[data-theme="dark"] #memory-matrix-game .mm-best-banner {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}

/* ---- Buttons ---- */
#memory-matrix-game .mm-btn {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
border: none;
border-radius: 0.625rem;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
padding: 0.75rem 1.5rem;
transition: all 0.2s ease;
}

#memory-matrix-game .mm-btn:active {
transform: scale(0.97);
}

#memory-matrix-game .mm-btn-primary {
background: var(--color-primary);
color: #fff;
width: 100%;
}

#memory-matrix-game .mm-btn-primary:hover {
background: var(--color-primary-hover);
box-shadow: 0 4px 12px rgba(15, 144, 114, 0.3);
}

#memory-matrix-game .mm-btn-outline {
background: transparent;
color: var(--color-text-primary);
border: 2px solid var(--color-border);
}

#memory-matrix-game .mm-btn-outline:hover {
border-color: var(--color-primary);
color: var(--color-primary);
}

[data-theme="dark"] #memory-matrix-game .mm-btn-outline {
color: var(--color-dark-text-primary);
border-color: var(--color-dark-border);
}

[data-theme="dark"] #memory-matrix-game .mm-btn-outline:hover {
border-color: var(--color-primary);
color: var(--color-primary);
}

#memory-matrix-game .mm-btn-submit {
background: var(--color-primary);
color: #fff;
}

#memory-matrix-game .mm-btn-submit:hover:not(:disabled) {
background: var(--color-primary-hover);
}

#memory-matrix-game .mm-btn-submit:disabled {
opacity: 0.5;
cursor: not-allowed;
}

/* ---- Wizard Overlay ---- */
#mm-wizard {
display: none;
animation: mmFadeIn 0.4s ease-out;
}
#mm-wizard.active {
display: block;
}
.mm-wizard-overlay {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
.mm-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: mmWizardEnter 0.3s ease-out;
}
[data-theme="dark"] .mm-wizard-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}
@keyframes mmWizardEnter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
.mm-wizard-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.mm-wizard-title { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem; }
.mm-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] .mm-wizard-desc { color: var(--color-dark-text-secondary); }
.mm-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
.mm-wizard-dot {
width: 8px; height: 8px; border-radius: 50%;
background: var(--color-border);
transition: all 0.3s;
}
.mm-wizard-dot.active {
background: var(--color-primary);
transform: scale(1.3);
}
[data-theme="dark"] .mm-wizard-dot { background: var(--color-dark-border, #3a4553); }
[data-theme="dark"] .mm-wizard-dot.active { background: var(--color-primary); }
.mm-wizard-btn {
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
.mm-wizard-btn:hover { background: var(--color-primary-hover, #0d7a62); }
@media (max-width: 400px) {
.mm-wizard-card { padding: 1.5rem 1rem; }
.mm-wizard-icon { font-size: 2rem; }
.mm-wizard-title { font-size: 1.1rem; }
.mm-wizard-desc { font-size: 0.85rem; }
}

/* ---- Game Header ---- */
#memory-matrix-game .mm-header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.75rem;
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.75rem;
margin-bottom: 1rem;
}

[data-theme="dark"] #memory-matrix-game .mm-header {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#memory-matrix-game .mm-header-item {
text-align: center;
}

#memory-matrix-game .mm-header-label {
font-size: 0.65rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
margin-bottom: 0.125rem;
}

[data-theme="dark"] #memory-matrix-game .mm-header-label {
color: var(--color-dark-text-secondary);
}

#memory-matrix-game .mm-header-value {
font-size: 1.15rem;
font-weight: 700;
color: var(--color-text-primary);
}

[data-theme="dark"] #memory-matrix-game .mm-header-value {
color: var(--color-dark-text-primary);
}

#memory-matrix-game .mm-streak-value {
color: #f59e0b;
}

/* ---- Phase Indicator ---- */
#memory-matrix-game .mm-phase {
text-align: center;
font-size: 0.95rem;
font-weight: 600;
margin-bottom: 1rem;
min-height: 1.5rem;
}

#memory-matrix-game .mm-phase-memorize {
color: var(--color-primary);
animation: mmPulse 1.5s ease-in-out infinite;
}

#memory-matrix-game .mm-phase-recall {
color: #f59e0b;
}

#memory-matrix-game .mm-phase-correct {
color: #22c55e;
}

#memory-matrix-game .mm-phase-wrong {
color: #ef4444;
}

/* ---- Grid ---- */
#memory-matrix-game .mm-grid-wrap {
display: flex;
justify-content: center;
margin-bottom: 1rem;
}

#memory-matrix-game .mm-grid {
display: grid;
gap: 6px;
}

#memory-matrix-game .mm-cell {
aspect-ratio: 1;
border-radius: 8px;
border: 2px solid var(--color-border);
background: var(--color-bg-secondary);
cursor: default;
transition: all 0.25s ease;
position: relative;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 0.85rem;
color: transparent;
-webkit-user-select: none;
user-select: none;
}

[data-theme="dark"] #memory-matrix-game .mm-cell {
border-color: var(--color-dark-border);
background: var(--color-dark-bg-secondary);
}

#memory-matrix-game .mm-cell.recall-mode {
cursor: pointer;
}

#memory-matrix-game .mm-cell.recall-mode:hover {
border-color: color-mix(in srgb, var(--color-primary) 50%, transparent);
background: color-mix(in srgb, var(--color-primary) 5%, var(--color-bg-secondary));
}

[data-theme="dark"] #memory-matrix-game .mm-cell.recall-mode:hover {
background: color-mix(in srgb, var(--color-primary) 10%, var(--color-dark-bg-secondary));
}

#memory-matrix-game .mm-cell.showing {
background: var(--color-primary);
border-color: var(--color-primary);
animation: mmCellGlow 0.6s ease-out;
}

#memory-matrix-game .mm-cell.selected {
background: color-mix(in srgb, var(--color-primary) 80%, transparent);
border-color: var(--color-primary);
color: #fff;
}

#memory-matrix-game .mm-cell.fb-correct {
background: #22c55e;
border-color: #16a34a;
transition: all 0.3s ease;
}

#memory-matrix-game .mm-cell.fb-missed {
background: rgba(239, 68, 68, 0.45);
border-color: #ef4444;
transition: all 0.3s ease;
}

#memory-matrix-game .mm-cell.fb-wrong {
background: #ef4444;
border-color: #dc2626;
transition: all 0.3s ease;
}

#memory-matrix-game .mm-cell.fb-neutral {
opacity: 0.5;
transition: all 0.3s ease;
}

/* ---- Progress Bar ---- */
#memory-matrix-game .mm-progress-wrap {
margin-bottom: 1rem;
text-align: center;
}

#memory-matrix-game .mm-progress-bar {
height: 6px;
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 3px;
overflow: hidden;
max-width: 240px;
margin: 0 auto 0.375rem;
}

[data-theme="dark"] #memory-matrix-game .mm-progress-bar {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#memory-matrix-game .mm-progress-fill {
height: 100%;
background: var(--color-primary);
border-radius: 3px;
transition: width 0.3s ease;
}

#memory-matrix-game .mm-progress-text {
font-size: 0.75rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] #memory-matrix-game .mm-progress-text {
color: var(--color-dark-text-secondary);
}

/* ---- Action Buttons ---- */
#memory-matrix-game .mm-actions {
display: flex;
justify-content: center;
gap: 0.75rem;
flex-wrap: wrap;
}

/* ---- Game Complete Screen ---- */
#memory-matrix-game .mm-complete {
text-align: center;
}

#memory-matrix-game .mm-score-display {
font-size: 3rem;
font-weight: 800;
color: var(--color-primary);
margin: 0.5rem 0;
background: linear-gradient(90deg, var(--color-primary), #10b981, var(--color-primary));
background-size: 200% auto;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
animation: mmShine 3s linear infinite;
}

#memory-matrix-game .mm-stats-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0.75rem;
margin: 1.25rem 0;
}

#memory-matrix-game .mm-stat-card {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.75rem;
padding: 0.75rem 0.5rem;
}

[data-theme="dark"] #memory-matrix-game .mm-stat-card {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#memory-matrix-game .mm-stat-value {
font-size: 1.25rem;
font-weight: 700;
color: var(--color-text-primary);
}

[data-theme="dark"] #memory-matrix-game .mm-stat-value {
color: var(--color-dark-text-primary);
}

#memory-matrix-game .mm-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.04em;
color: var(--color-text-secondary);
margin-top: 0.125rem;
}

[data-theme="dark"] #memory-matrix-game .mm-stat-label {
color: var(--color-dark-text-secondary);
}

#memory-matrix-game .mm-new-best {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #fbbf24);
color: #000;
font-size: 0.8rem;
font-weight: 700;
padding: 0.375rem 1rem;
border-radius: 2rem;
margin-bottom: 1rem;
animation: mmBounceIn 0.5s ease-out;
}

#memory-matrix-game .mm-complete-actions {
display: flex;
flex-direction: column;
gap: 0.75rem;
margin-top: 1.5rem;
}

#memory-matrix-game .mm-back-link {
display: inline-block;
margin-top: 0.75rem;
color: var(--color-primary);
text-decoration: none;
font-size: 0.9rem;
}

#memory-matrix-game .mm-back-link:hover {
text-decoration: underline;
}

/* ---- Dark Mode ---- */
[data-theme="dark"] #memory-matrix-game {
color: var(--color-dark-text-primary);
}

[data-theme="dark"] #memory-matrix-game .mm-title {
color: var(--color-dark-text-primary);
}

[data-theme="dark"] #memory-matrix-game .mm-subtitle {
color: var(--color-dark-text-secondary);
}

[data-theme="dark"] #memory-matrix-game .mm-how-to li {
color: var(--color-dark-text-secondary);
}

[data-theme="dark"] #memory-matrix-game .mm-cell.recall-mode:hover {
border-color: color-mix(in srgb, var(--color-primary) 60%, transparent);
}

/* ---- Responsive ---- */
@media (max-width: 400px) {
#memory-matrix-game {
padding: 1rem 0.5rem;
}
#memory-matrix-game .mm-grid {
gap: 4px;
}
#memory-matrix-game .mm-header {
padding: 0.5rem;
}
#memory-matrix-game .mm-header-value {
font-size: 1rem;
}
#memory-matrix-game .mm-btn {
padding: 0.625rem 1rem;
font-size: 0.9rem;
}
#memory-matrix-game .mm-icon-wrap { width: 40px; height: 40px; margin-bottom: 0; }
#memory-matrix-game .mm-icon-wrap svg { width: 20px; height: 20px; }
#memory-matrix-game .mm-instructions h2 { font-size: 1.3rem; }
#memory-matrix-game .mm-instructions .mm-subtitle { font-size: 0.85rem; margin-bottom: 0.75rem; }
}
@media (max-width: 640px) {
#memory-matrix-game .mm-stats-grid {
grid-template-columns: repeat(3, 1fr);
}
#memory-matrix-game .mm-stat-value {
font-size: 1.1rem;
}
}
@media (max-width: 360px) {
#memory-matrix-game .mm-grid {
gap: 3px;
}
#memory-matrix-game .mm-stats-grid {
grid-template-columns: 1fr 1fr;
}
#memory-matrix-game .mm-btn {
padding: 0.5rem 0.75rem;
font-size: 0.85rem;
}
#memory-matrix-game .mm-title {
font-size: 1.25rem;
}
#memory-matrix-game .mm-grid-wrap {
max-width: 100%;
overflow: hidden;
}
}
@keyframes mm-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.mm-confetti-container {
position: fixed;
top: 0; left: 0; width: 100%; height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.mm-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: mm-confetti-fall 2.5s ease-in forwards;
}
.mm-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: mm-glow-fade 1s ease-out forwards;
}
@keyframes mm-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.mm-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
font-size: 0.85rem;
font-weight: 700;
padding: 0.375rem 1rem;
border-radius: 2rem;
margin-bottom: 1rem;
animation: mmBounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(245,158,11,0.4);
}
</style>

<div id="memory-matrix-game">

<div id="mm-instructions" class="mm-screen active">
<div class="mm-instructions">
<div class="mm-title-row"><div class="mm-icon-wrap"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div><h2 class="mm-title">Memory Matrix</h2></div>
<p class="mm-subtitle">Entrenamiento de Memoria Espacial</p>
<div id="mm-instr-best" class="mm-best-banner">
Mejor Puntuación: <strong id="mm-best-value">ninguno aún</strong>
</div>
<div class="mm-how-to">
<h3>C&oacute;mo Jugar</h3>
<ul>
<li>Observa el patr&oacute;n &mdash; las celdas se iluminan una por una.</li>
<li>Memoriza qu&eacute; celdas se iluminan.</li>
<li>Toca las mismas celdas de memoria.</li>
<li>Desde el nivel 8, <strong>el orden importa</strong> &mdash; &iexcl;toca en la secuencia correcta!</li>
</ul>
</div>

<button class="mm-btn mm-btn-primary" onclick="mmStartGame()">Iniciar Juego</button>
<div id="mm-challenge-banner-wrap"></div>
</div>
</div>

<div id="mm-wizard" class="mm-screen">
<div class="mm-wizard-overlay">
<div class="mm-wizard-card" id="mm-wizard-card"></div>
</div>
</div>

<div id="mm-playing" class="mm-screen">
<div class="mm-header">
<div class="mm-header-item">
<div class="mm-header-label">Puntuación</div>
<div class="mm-header-value" id="mm-score">0</div>
</div>
<div class="mm-header-item">
<div class="mm-header-label">Nivel</div>
<div class="mm-header-value" id="mm-level">1</div>
</div>
<div class="mm-header-item">
<div class="mm-header-label">Racha</div>
<div class="mm-header-value mm-streak-value" id="mm-streak">0</div>
</div>
</div>
<div class="mm-phase" id="mm-phase"></div>
<div class="mm-grid-wrap">
<div class="mm-grid" id="mm-grid"></div>
</div>
<div class="mm-progress-wrap">
<div class="mm-progress-bar">
<div class="mm-progress-fill" id="mm-progress-fill" style="width:0%"></div>
</div>
<div class="mm-progress-text" id="mm-progress-text">Ronda 1 de 3</div>
</div>
<div class="mm-actions" id="mm-actions"></div>
<button class="gk-finish-btn" id="mm-finish-btn">Terminar Juego</button>
</div>

<div id="mm-complete" class="mm-screen">
<div class="mm-complete">
<div class="mm-icon-wrap">
<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
</div>
<h2 class="mm-title">¡Juego Completado!</h2>
<div class="mm-score-display" id="mm-final-score">0</div>
<div id="mm-new-best-badge" class="mm-new-best" style="display:none;">¡Nuevo Récord Personal!</div>
<div class="gk-challenge-result" id="mm-challenge-result" style="display:none;"></div>
<div class="mm-stats-grid">
<div class="mm-stat-card">
<div class="mm-stat-value" id="mm-final-level">1</div>
<div class="mm-stat-label">Nivel</div>
</div>
<div class="mm-stat-card">
<div class="mm-stat-value" id="mm-final-accuracy">0%</div>
<div class="mm-stat-label">Precisión</div>
</div>
<div class="mm-stat-card">
<div class="mm-stat-value" id="mm-final-streak">0</div>
<div class="mm-stat-label">Mejor Racha</div>
</div>
</div>
<div class="mm-complete-actions">
<button class="mm-btn mm-btn-primary" onclick="mmPlayAgain()">Jugar de Nuevo</button>
<a href="/es/games/" class="mm-back-link">Volver a Todos los Juegos</a>
</div>
<div class="gk-share-section">

<button class="gk-share-btn" id="mm-share-btn">&#128279; Comparte tu Puntuación</button>
<div class="gk-share-copied" id="mm-share-copied" style="display:none;">¡Enlace copiado!</div>
</div>
</div>
</div>

</div>

<script>
(function() {
var STORAGE_HISTORY = 'guruka_memory-matrix_history';
var STORAGE_BEST = 'guruka_memory-matrix_best';
var POINTS_PER_CORRECT = 100;
var SPEED_BONUS_THRESHOLD = 1000;
var STREAK_MULTIPLIER = 0.1;
var challenge = GK.parseChallenge();

var state = {
  screen: 'instructions',
  score: 0,
  level: 1,
  streak: 0,
  bestStreak: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  roundsInLevel: 0,
  pattern: [],
  selectedCells: [],
  showingIndex: 0,
  phase: 'showing',
  answerTime: 0,
  countdownValue: 3,
  countdownTimer: null,
  showTimer: null,
  feedbackTimer: null
};

function getLevelConfig(level) {
  var gridSize = level <= 5 ? 3 : level <= 10 ? 4 : level <= 15 ? 5 : 6;
  var patternSize = Math.min(3 + Math.floor(level / 2), gridSize * gridSize - 2);
  var displayTime = Math.max(2000 - (level - 1) * 80, 800);
  var orderMatters = level >= 8;
  return {
    gridSize: gridSize,
    patternSize: patternSize,
    displayTime: displayTime,
    orderMatters: orderMatters,
    roundsPerLevel: 3,
    maxLevel: 20
  };
}

function getPersonalBest() {
  try {
    var val = localStorage.getItem(STORAGE_BEST);
    return val ? parseInt(val, 10) : 0;
  } catch (e) { return 0; }
}

function saveResult(score, level, accuracy) {
  try {
    var history = [];
    var raw = localStorage.getItem(STORAGE_HISTORY);
    if (raw) { history = JSON.parse(raw); }
    history.push({ score: score, level: level, accuracy: accuracy, date: new Date().toISOString() });
    if (history.length > 50) { history = history.slice(-50); }
    localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));

    var best = getPersonalBest();
    if (score > best) {
      localStorage.setItem(STORAGE_BEST, String(score));
      return true;
    }
    return false;
  } catch (e) { return false; }
}

function showScreen(name) {
  var screens = document.querySelectorAll('#memory-matrix-game .mm-screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove('active');
  }
  var el = document.getElementById('mm-' + name);
  if (el) {
    el.classList.add('active');
  }
  state.screen = name;
}

function updateInstructionsBest() {
  var best = getPersonalBest();
  var el = document.getElementById('mm-best-value');
  if (el) {
    if (best > 0) {
      el.textContent = best.toLocaleString() + ' puntos';
    } else {
      el.textContent = 'ninguno aún';
    }
  }
}

/* ---- Wizard ---- */
var MM_WIZARD_STEPS = [
{icon: '\uD83D\uDCA1', title: 'Observa las celdas iluminarse', desc: '¡Las celdas se iluminan una por una. Presta atención!'},
{icon: '\uD83D\uDC46', title: 'Tócalas de memoria', desc: 'Recrea el patrón después de que desaparezca.'},
{icon: '\uD83D\uDE80', title: '¿Listo? ¡Vamos!', desc: '¡Los patrones se vuelven más difíciles a medida que subes de nivel!', final: true}
];
var mmWizardStep = 0;

function mmRenderWizardStep() {
var s = MM_WIZARD_STEPS[mmWizardStep];
var dotsHtml = '';
for (var i = 0; i < MM_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="mm-wizard-dot' + (i === mmWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Comenzar a Jugar' : 'Siguiente';
var card = document.getElementById('mm-wizard-card');
card.innerHTML =
'<div class="mm-wizard-icon">' + s.icon + '</div>' +
'<div class="mm-wizard-title">' + s.title + '</div>' +
'<div class="mm-wizard-desc">' + s.desc + '</div>' +
'<div class="mm-wizard-dots">' + dotsHtml + '</div>' +
'<button class="mm-wizard-btn" id="mm-wizard-next">' + btnLabel + '</button>';
card.style.animation = 'none';
void card.offsetWidth;
card.style.animation = 'mmWizardEnter 0.3s ease-out';
document.getElementById('mm-wizard-next').addEventListener('click', mmAdvanceWizard);
}

function mmAdvanceWizard() {
if (mmWizardStep < MM_WIZARD_STEPS.length - 1) {
mmWizardStep++;
mmRenderWizardStep();
} else {
mmStartGame();
}
}

window.mmShowWizard = function() {
mmWizardStep = 0;
showScreen('wizard');
mmRenderWizardStep();
};

/* ---- Start Game ---- */
window.mmStartGame = mmStartGame;
function mmStartGame() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  var stickyNav = document.querySelector('.sticky.top-0');
  if (stickyNav && window.innerWidth <= 768) { stickyNav.style.display = 'none'; document.body.style.paddingTop = '0'; }
  var footer = document.querySelector('footer');
  if (footer && window.innerWidth <= 768) footer.style.display = 'none';
  state.score = 0;
  state.level = 1;
  state.streak = 0;
  state.bestStreak = 0;
  state.correctAnswers = 0;
  state.wrongAnswers = 0;
  state.roundsInLevel = 0;
  state.pattern = [];
  state.selectedCells = [];

  showScreen('playing');
  GK.renderChallengeBar('mm-playing', challenge);
  updateHeader();
  generatePattern();
}

/* ---- Update Header ---- */
function updateHeader() {
  document.getElementById('mm-score').textContent = state.score.toLocaleString();
  document.getElementById('mm-level').textContent = state.level;
  document.getElementById('mm-streak').textContent = state.streak;
  if (challenge.active) GK.updateChallengeBar('mm-playing', state.score, challenge.score);
}

/* ---- Generate Pattern ---- */
function generatePattern() {
  var config = getLevelConfig(state.level);
  var totalCells = config.gridSize * config.gridSize;
  var newPattern = [];

  while (newPattern.length < config.patternSize) {
    var cell = Math.floor(Math.random() * totalCells);
    if (newPattern.indexOf(cell) === -1) {
      newPattern.push(cell);
    }
  }

  state.pattern = newPattern;
  state.selectedCells = [];
  state.showingIndex = 0;
  state.phase = 'showing';

  buildGrid(config);
  updateProgressBar(config);
  updatePhase(config);
  updateActions(config);
  startShowingPattern(config);
}

/* ---- Build Grid ---- */
function buildGrid(config) {
  var grid = document.getElementById('mm-grid');
  var cellSize = config.gridSize <= 3 ? 72 : config.gridSize <= 4 ? 62 : config.gridSize <= 5 ? 52 : 44;
  var gapSize = config.gridSize <= 4 ? 6 : 5;
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 360) {
    var maxCellSize = Math.floor((viewportWidth - 40 - (config.gridSize - 1) * gapSize) / config.gridSize);
    if (maxCellSize < cellSize) cellSize = maxCellSize;
  }
  var totalSize = config.gridSize * cellSize + (config.gridSize - 1) * gapSize;

  grid.style.gridTemplateColumns = 'repeat(' + config.gridSize + ', ' + cellSize + 'px)';
  grid.style.gridTemplateRows = 'repeat(' + config.gridSize + ', ' + cellSize + 'px)';
  grid.style.gap = gapSize + 'px';
  grid.style.width = totalSize + 'px';
  grid.innerHTML = '';

  var totalCells = config.gridSize * config.gridSize;
  for (var i = 0; i < totalCells; i++) {
    var cell = document.createElement('button');
    cell.className = 'mm-cell';
    cell.setAttribute('data-index', i);
    cell.setAttribute('type', 'button');
    (function(idx) {
      cell.addEventListener('click', function() { handleCellClick(idx); });
    })(i);
    grid.appendChild(cell);
  }
}

/* ---- Show Pattern Sequentially ---- */
function startShowingPattern(config) {
  var delay = config.displayTime / state.pattern.length;
  state.showingIndex = 0;

  function showNext() {
    if (state.screen !== 'playing') return;
    if (state.showingIndex < state.pattern.length) {
      // Clear previous highlights
      var cells = document.querySelectorAll('#mm-grid .mm-cell');
      for (var j = 0; j < cells.length; j++) {
        cells[j].classList.remove('showing');
      }
      // Highlight current cell
      var idx = state.pattern[state.showingIndex];
      var targetCell = document.querySelector('#mm-grid .mm-cell[data-index="' + idx + '"]');
      if (targetCell) {
        targetCell.classList.add('showing');
      }
      state.showingIndex++;
      state.showTimer = setTimeout(showNext, delay);
    } else {
      // All shown, brief pause then switch to recall
      var cells = document.querySelectorAll('#mm-grid .mm-cell');
      for (var j = 0; j < cells.length; j++) {
        cells[j].classList.remove('showing');
      }
      state.showTimer = setTimeout(function() {
        state.phase = 'recall';
        state.answerTime = Date.now();
        enableRecallMode(config);
        updatePhase(config);
        updateActions(config);
      }, 400);
    }
  }

  showNext();
}

/* ---- Enable Recall Mode ---- */
function enableRecallMode(config) {
  var cells = document.querySelectorAll('#mm-grid .mm-cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add('recall-mode');
  }
}

/* ---- Handle Cell Click ---- */
function handleCellClick(cellIndex) {
  if (state.phase !== 'recall') return;

  var existingIdx = state.selectedCells.indexOf(cellIndex);
  if (existingIdx !== -1) {
    // Deselect
    state.selectedCells.splice(existingIdx, 1);
  } else if (state.selectedCells.length < state.pattern.length) {
    state.selectedCells.push(cellIndex);
  }

  var config = getLevelConfig(state.level);
  updateCellVisuals();
  updatePhase(config);
  updateActions(config);
}

/* ---- Update Cell Visuals ---- */
function updateCellVisuals() {
  var config = getLevelConfig(state.level);
  var cells = document.querySelectorAll('#mm-grid .mm-cell');

  for (var i = 0; i < cells.length; i++) {
    var idx = parseInt(cells[i].getAttribute('data-index'), 10);
    cells[i].classList.remove('selected');
    cells[i].textContent = '';

    if (state.selectedCells.indexOf(idx) !== -1) {
      cells[i].classList.add('selected');
      if (config.orderMatters) {
        cells[i].textContent = String(state.selectedCells.indexOf(idx) + 1);
        cells[i].style.color = '#fff';
      }
    } else {
      cells[i].style.color = 'transparent';
    }
  }
}

/* ---- Update Phase Indicator ---- */
function updatePhase(config) {
  var phaseEl = document.getElementById('mm-phase');
  if (state.phase === 'showing') {
    phaseEl.innerHTML = '<span class="mm-phase-memorize">Memoriza el patrón...</span>';
  } else if (state.phase === 'recall') {
    var orderNote = config.orderMatters ? ' (¡el orden importa!)' : '';
    phaseEl.innerHTML = '<span class="mm-phase-recall">¡Toca las celdas!' + orderNote + ' &mdash; ' + state.selectedCells.length + '/' + state.pattern.length + ' seleccionadas</span>';
  }
}

/* ---- Update Actions ---- */
function updateActions(config) {
  var actionsEl = document.getElementById('mm-actions');
  if (state.phase !== 'recall') {
    actionsEl.innerHTML = '';
    return;
  }

  var clearDisabled = state.selectedCells.length === 0 ? ' disabled' : '';
  var submitDisabled = state.selectedCells.length !== state.pattern.length ? ' disabled' : '';

  actionsEl.innerHTML =
    '<button class="mm-btn mm-btn-outline" onclick="mmClearSelection()"' + clearDisabled + '>Limpiar</button>' +
    '<button class="mm-btn mm-btn-submit" onclick="mmSubmitAnswer()"' + submitDisabled + '>Enviar (' + state.selectedCells.length + '/' + state.pattern.length + ')</button>';
}

/* ---- Update Progress Bar ---- */
function updateProgressBar(config) {
  var pct = (state.roundsInLevel / config.roundsPerLevel) * 100;
  document.getElementById('mm-progress-fill').style.width = pct + '%';
  document.getElementById('mm-progress-text').textContent =
    'Ronda ' + (state.roundsInLevel + 1) + ' de ' + config.roundsPerLevel;
}

/* ---- Clear Selection ---- */
window.mmClearSelection = function() {
  state.selectedCells = [];
  updateCellVisuals();
  updateActions(getLevelConfig(state.level));
  updatePhase(getLevelConfig(state.level));
};

/* ---- Submit Answer ---- */
window.mmSubmitAnswer = function() {
  if (state.phase !== 'recall') return;
  var config = getLevelConfig(state.level);
  var responseTime = Date.now() - state.answerTime;

  var correct;
  if (config.orderMatters) {
    correct = true;
    for (var i = 0; i < state.pattern.length; i++) {
      if (state.selectedCells[i] !== state.pattern[i]) {
        correct = false;
        break;
      }
    }
  } else {
    correct = state.selectedCells.length === state.pattern.length;
    if (correct) {
      for (var i = 0; i < state.pattern.length; i++) {
        if (state.selectedCells.indexOf(state.pattern[i]) === -1) {
          correct = false;
          break;
        }
      }
    }
  }

  // Calculate points
  var pointsEarned = 0;
  if (correct) {
    pointsEarned = POINTS_PER_CORRECT;
    if (responseTime < SPEED_BONUS_THRESHOLD) {
      pointsEarned += Math.floor((SPEED_BONUS_THRESHOLD - responseTime) / 10);
    }
    pointsEarned += Math.floor(state.streak * STREAK_MULTIPLIER * POINTS_PER_CORRECT);
    state.score += pointsEarned;
    state.streak++;
    state.correctAnswers++;
    if (state.streak > state.bestStreak) {
      state.bestStreak = state.streak;
    }
  } else {
    state.streak = 0;
    state.wrongAnswers++;
  }

  updateHeader();
  showFeedback(correct, config);
};

/* ---- Show Feedback ---- */
function showFeedback(correct, config) {
  state.phase = 'feedback';

  var phaseEl = document.getElementById('mm-phase');
  if (correct) {
    phaseEl.innerHTML = '<span class="mm-phase-correct">¡Correcto!</span>';
  } else {
    phaseEl.innerHTML = '<span class="mm-phase-wrong">Incorrecto...</span>';
  }

  // Update cell visuals to show correct/wrong
  var cells = document.querySelectorAll('#mm-grid .mm-cell');
  for (var i = 0; i < cells.length; i++) {
    var idx = parseInt(cells[i].getAttribute('data-index'), 10);
    cells[i].classList.remove('showing', 'selected', 'recall-mode');
    cells[i].style.color = 'transparent';
    cells[i].textContent = '';

    var inPattern = state.pattern.indexOf(idx) !== -1;
    var wasSelected = state.selectedCells.indexOf(idx) !== -1;

    if (inPattern && wasSelected) {
      cells[i].classList.add('fb-correct');
    } else if (inPattern && !wasSelected) {
      cells[i].classList.add('fb-missed');
    } else if (!inPattern && wasSelected) {
      cells[i].classList.add('fb-wrong');
    } else {
      cells[i].classList.add('fb-neutral');
    }
  }

  // Hide action buttons during feedback
  document.getElementById('mm-actions').innerHTML = '';

  state.feedbackTimer = setTimeout(function() {
    advanceRound(config);
  }, 1200);
}

/* ---- Advance Round ---- */
function advanceRound(config) {
  state.roundsInLevel++;

  if (state.roundsInLevel >= config.roundsPerLevel) {
    if (state.level >= config.maxLevel) {
      endGame();
      return;
    }
    state.level++;
    state.roundsInLevel = 0;
    updateHeader();
  }

  generatePattern();
}

/* ---- Celebration effects ---- */
function mmShowConfetti() {
var colors = ['#f59e0b','#ef4444','#22c55e','#3b82f6','#a855f7','#ec4899'];
var container = document.createElement('div');
container.className = 'mm-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'mm-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'mm-glow-flash';
document.body.appendChild(container);
document.body.appendChild(glow);
setTimeout(function() {
if (container.parentNode) container.parentNode.removeChild(container);
if (glow.parentNode) glow.parentNode.removeChild(glow);
}, 3000);
}

function mmAnimateScoreCountUp(el, target) {
var duration = 1200;
var startTime = null;
function step(ts) {
if (!startTime) startTime = ts;
var progress = Math.min((ts - startTime) / duration, 1);
var ease = 1 - Math.pow(1 - progress, 3);
var current = Math.round(target * ease);
el.textContent = current.toLocaleString();
if (progress < 1) requestAnimationFrame(step);
}
requestAnimationFrame(step);
}

/* ---- End Game ---- */
function endGame() {
  var stickyNav = document.querySelector('.sticky.top-0');
  if (stickyNav) stickyNav.style.display = '';
  var footer = document.querySelector('footer');
  if (footer) footer.style.display = '';
  var totalAnswers = state.correctAnswers + state.wrongAnswers;
  var accuracy = totalAnswers > 0 ? Math.round((state.correctAnswers / totalAnswers) * 100) : 0;
  var isNewBest = saveResult(state.score, state.level, accuracy);

  var titleEl = document.querySelector('#mm-complete .mm-title');
  var iconWrap = document.querySelector('#mm-complete .mm-icon-wrap');
  var bestBadge = document.getElementById('mm-new-best-badge');

  if (isNewBest) {
    mmShowConfetti();
    titleEl.textContent = '¡INCREÍBLE!';
    iconWrap.innerHTML = '<span style="font-size:2.25rem">\uD83C\uDF89</span>';
    bestBadge.className = 'mm-new-best-enhanced';
    bestBadge.innerHTML = '\uD83C\uDF1F ¡INCREÍBLE! ¡Nuevo Récord!';
    bestBadge.style.display = 'inline-block';
  } else {
    titleEl.textContent = '¡Buen Trabajo!';
    iconWrap.innerHTML = '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';
    bestBadge.className = 'mm-new-best';
    bestBadge.style.display = 'none';
  }

  GK.renderChallengeResult('mm-challenge-result', state.score, challenge);

  showScreen('complete');

  var scoreEl = document.getElementById('mm-final-score');
  document.getElementById('mm-final-level').textContent = state.level;
  document.getElementById('mm-final-accuracy').textContent = accuracy + '%';
  document.getElementById('mm-final-streak').textContent = state.bestStreak;

  mmAnimateScoreCountUp(scoreEl, state.score);
}

/* ---- Play Again ---- */
window.mmPlayAgain = function() {
  clearTimeout(state.showTimer);
  clearTimeout(state.feedbackTimer);
  clearInterval(state.countdownTimer);
  updateInstructionsBest();
  mmStartGame();
};

/* ---- Init ---- */
updateInstructionsBest();
GK.renderChallengeBanner('mm-challenge-banner-wrap', challenge);

document.getElementById('mm-finish-btn').addEventListener('click', function() {
  endGame();
});

document.getElementById('mm-share-btn').addEventListener('click', function() {
  GK.shareResult(state.score, 'Memory Matrix', '/es/games/memory-matrix/', 'mm-share-copied');
});
})();
</script>