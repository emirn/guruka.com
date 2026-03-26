---
title: "Sequence Recall - Jeu d'Entraînement Cérébral"
description: "Entraînez votre mémoire de travail en mémorisant des séquences de couleurs. Regardez les couleurs, puis rappelez-les dans l'ordre !"
full_width: true
language: "fr"
---
<style>
#sequence-recall-game {
max-width: 600px;
margin: 0 auto;
padding: 1.5rem 1rem 3rem;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
color: var(--color-text-primary, #1a2332);
-webkit-tap-highlight-color: transparent;
}

#sequence-recall-game * {
box-sizing: border-box;
}

#sequence-recall-game .sr-card {
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
padding: 1.5rem;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

[data-theme="dark"] #sequence-recall-game {
color: var(--color-dark-text-primary);
}

[data-theme="dark"] #sequence-recall-game .sr-card {
background: var(--color-dark-bg-primary);
border-color: var(--color-dark-border);
box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

[data-theme="dark"] #sequence-recall-game .sr-subtitle {
color: var(--color-dark-text-secondary);
}

[data-theme="dark"] #sequence-recall-game .sr-how-to li {
color: var(--color-dark-text-secondary);
}

#sequence-recall-game .sr-title {
font-family: "Space Grotesk", system-ui, sans-serif;
font-size: 1.75rem;
font-weight: 700;
text-align: center;
margin: 0 0 0.25rem;
letter-spacing: -0.025em;
}

#sequence-recall-game .sr-subtitle {
text-align: center;
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.95rem;
margin: 0 0 1.5rem;
}

#sequence-recall-game .sr-title-row { display: flex; align-items: center; gap: 0.75rem; justify-content: center; margin-bottom: 0.25rem; }
#sequence-recall-game .sr-icon {
display: flex;
justify-content: center;
margin-bottom: 0;
font-size: 2rem;
}

#sequence-recall-game .sr-how-to {
text-align: left;
background: var(--color-bg-secondary, #f0f4f8);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.25rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border, #dfe4ea);
}

[data-theme="dark"] #sequence-recall-game .sr-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#sequence-recall-game .sr-how-to h3 {
margin: 0 0 0.75rem 0;
font-size: 1rem;
color: var(--color-primary, #0f9072);
}

#sequence-recall-game .sr-how-to ul {
margin: 0;
padding-left: 1.25rem;
}

#sequence-recall-game .sr-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

#sequence-recall-game .sr-best-score {
text-align: center;
padding: 0.75rem;
background: var(--color-bg-secondary, #f0f4f8);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.5rem;
margin-bottom: 1.25rem;
font-size: 0.9rem;
color: var(--color-text-secondary, #4b5b6d);
}

#sequence-recall-game .sr-best-score strong {
color: var(--color-text-primary, #1a2332);
font-weight: 700;
}
[data-theme="dark"] #sequence-recall-game .sr-best-score {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}


#sequence-recall-game .sr-btn-primary {
display: block;
width: 100%;
padding: 0.875rem 1.5rem;
background: var(--color-primary, #0f9072);
color: #fff;
border: none;
border-radius: 0.5rem;
font-size: 1.05rem;
font-weight: 600;
cursor: pointer;
transition: all 0.2s;
text-align: center;
text-decoration: none;
max-width: 420px;
}

#sequence-recall-game .sr-btn-primary:hover {
opacity: 0.9;
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

#sequence-recall-game .sr-btn-primary:active {
transform: translateY(0);
}

#sequence-recall-game .sr-btn-secondary {
display: inline-block;
margin-top: 0.75rem;
padding: 0.5rem 1rem;
background: transparent;
color: var(--color-primary, #0f9072);
border: 1px solid var(--color-primary, #0f9072);
border-radius: 0.5rem;
font-size: 0.9rem;
font-weight: 500;
cursor: pointer;
transition: all 0.2s;
text-decoration: none;
text-align: center;
}

#sequence-recall-game .sr-btn-secondary:hover {
background: color-mix(in srgb, var(--color-primary, #0f9072) 10%, transparent);
}

/* Wizard overlay */
#sequence-recall-game .sr-wizard-overlay {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
#sequence-recall-game .sr-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: sr-wizard-enter 0.3s ease-out;
}
[data-theme="dark"] #sequence-recall-game .sr-wizard-card {
background: var(--color-dark-bg-primary, #1e293b);
color: var(--color-dark-text-primary, #e2e8f0);
}
@keyframes sr-wizard-enter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
#sequence-recall-game .sr-wizard-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
#sequence-recall-game .sr-wizard-title { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem; }
#sequence-recall-game .sr-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary, #4b5b6d);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] #sequence-recall-game .sr-wizard-desc {
color: var(--color-dark-text-secondary, #94a3b8);
}
#sequence-recall-game .sr-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
#sequence-recall-game .sr-wizard-dot {
width: 8px; height: 8px; border-radius: 50%;
background: var(--color-border, #dfe4ea);
transition: all 0.3s;
}
#sequence-recall-game .sr-wizard-dot.active {
background: var(--color-primary, #0f9072);
transform: scale(1.3);
}
[data-theme="dark"] #sequence-recall-game .sr-wizard-dot {
background: var(--color-dark-border, #3a4553);
}
[data-theme="dark"] #sequence-recall-game .sr-wizard-dot.active {
background: var(--color-primary, #0f9072);
}
#sequence-recall-game .sr-wizard-btn {
width: 100%;
padding: 0.875rem;
font-size: 1rem;
font-weight: 600;
border: none;
border-radius: 0.75rem;
background: var(--color-primary, #0f9072);
color: #fff;
cursor: pointer;
transition: background 0.2s;
min-height: 44px;
}
#sequence-recall-game .sr-wizard-btn:hover {
background: var(--color-primary-hover, #0d7a62);
}
@media (max-width: 400px) {
#sequence-recall-game .sr-wizard-card { padding: 1.5rem 1rem; }
#sequence-recall-game .sr-wizard-icon { font-size: 2rem; }
#sequence-recall-game .sr-wizard-title { font-size: 1.1rem; }
#sequence-recall-game .sr-wizard-desc { font-size: 0.85rem; }
#sequence-recall-game .sr-icon { font-size: 1.5rem; margin-bottom: 0; }
#sequence-recall-game .sr-title { font-size: 1.3rem; }
#sequence-recall-game .sr-subtitle { font-size: 0.85rem; margin-bottom: 1rem; }
#sequence-recall-game .sr-instructions-list li { font-size: 0.85rem; padding: 0.3rem 0; }
}

/* Header bar */
#sequence-recall-game .sr-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
padding: 0.75rem;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
font-size: 0.85rem;
font-weight: 600;
}

#sequence-recall-game .sr-header-item {
text-align: center;
line-height: 1.3;
}

#sequence-recall-game .sr-header-label {
display: block;
font-size: 0.65rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary, #4b5b6d);
font-weight: 500;
}

#sequence-recall-game .sr-header-value {
font-size: 1.1rem;
font-weight: 700;
color: var(--color-text-primary, #1a2332);
}

#sequence-recall-game .sr-header-value.sr-streak {
color: #f59e0b;
}

/* Phase indicator */
#sequence-recall-game .sr-phase-label {
text-align: center;
font-size: 0.8rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.08em;
color: var(--color-primary, #0f9072);
margin-bottom: 0.75rem;
}

/* Progress bar */
#sequence-recall-game .sr-progress {
margin-top: 1rem;
}

#sequence-recall-game .sr-progress-label {
text-align: center;
font-size: 0.8rem;
color: var(--color-text-secondary, #4b5b6d);
margin-bottom: 0.35rem;
}

#sequence-recall-game .sr-progress-bar {
width: 100%;
height: 6px;
background: var(--color-bg-secondary, #f0f4f8);
border-radius: 3px;
overflow: hidden;
}

#sequence-recall-game .sr-progress-fill {
height: 100%;
background: var(--color-primary, #0f9072);
border-radius: 3px;
transition: width 0.3s ease;
}

/* Color display area */
#sequence-recall-game .sr-color-stage {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 220px;
padding: 1rem;
}

#sequence-recall-game .sr-color-box {
width: 160px;
height: 160px;
border-radius: 1rem;
animation: sr-color-appear 0.3s ease-out;
box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

@keyframes sr-color-appear {
0% { transform: scale(0.5); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

#sequence-recall-game .sr-color-counter {
margin-top: 1rem;
font-size: 1rem;
font-weight: 600;
color: var(--color-text-secondary, #4b5b6d);
}

/* Recall area */
#sequence-recall-game .sr-recall-area {
padding: 0.5rem 0;
}

#sequence-recall-game .sr-selected-sequence {
display: flex;
align-items: center;
justify-content: center;
gap: 0.4rem;
min-height: 44px;
margin-bottom: 1rem;
padding: 0.75rem;
background: var(--color-bg-secondary, #f0f4f8);
border-radius: 0.5rem;
flex-wrap: wrap;
}

#sequence-recall-game .sr-selected-dot {
width: 28px;
height: 28px;
border-radius: 50%;
box-shadow: 0 2px 4px rgba(0,0,0,0.15);
animation: sr-dot-appear 0.2s ease-out;
flex-shrink: 0;
}

@keyframes sr-dot-appear {
0% { transform: scale(0); }
100% { transform: scale(1); }
}

#sequence-recall-game .sr-selected-placeholder {
font-size: 0.8rem;
color: var(--color-text-secondary, #4b5b6d);
}

#sequence-recall-game .sr-color-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0.6rem;
margin-bottom: 0.75rem;
}

#sequence-recall-game .sr-color-btn {
aspect-ratio: 1;
border: 3px solid transparent;
border-radius: 0.75rem;
cursor: pointer;
transition: all 0.15s ease;
min-height: 70px;
position: relative;
box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}

#sequence-recall-game .sr-color-btn:hover {
transform: scale(1.05);
box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

#sequence-recall-game .sr-color-btn:active {
transform: scale(0.95);
}

#sequence-recall-game .sr-color-btn .sr-btn-label {
position: absolute;
bottom: 6px;
left: 0;
right: 0;
text-align: center;
font-size: 0.65rem;
font-weight: 600;
color: rgba(255,255,255,0.9);
text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

#sequence-recall-game .sr-undo-row {
display: flex;
gap: 0.5rem;
}

#sequence-recall-game .sr-undo-btn {
flex: 1;
padding: 0.6rem;
border: 1px solid var(--color-border, #dfe4ea);
background: var(--color-bg-primary, #fff);
color: var(--color-text-primary, #1a2332);
border-radius: 0.5rem;
font-size: 0.85rem;
font-weight: 500;
cursor: pointer;
transition: all 0.15s;
}

#sequence-recall-game .sr-undo-btn:hover {
background: var(--color-bg-secondary, #f0f4f8);
}

#sequence-recall-game .sr-submit-btn {
flex: 2;
padding: 0.6rem;
border: none;
background: var(--color-primary, #0f9072);
color: #fff;
border-radius: 0.5rem;
font-size: 0.9rem;
font-weight: 600;
cursor: pointer;
transition: all 0.15s;
}

#sequence-recall-game .sr-submit-btn:disabled {
opacity: 0.4;
cursor: not-allowed;
}

#sequence-recall-game .sr-submit-btn:not(:disabled):hover {
opacity: 0.9;
}

/* Distraction (math) */
#sequence-recall-game .sr-math-area {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 200px;
padding: 1rem;
}

#sequence-recall-game .sr-math-problem {
font-size: 2rem;
font-weight: 700;
margin-bottom: 1rem;
font-family: "Space Grotesk", system-ui, sans-serif;
color: var(--color-text-primary, #1a2332);
}

#sequence-recall-game .sr-math-input-row {
display: flex;
gap: 0.5rem;
align-items: center;
}

#sequence-recall-game .sr-math-input {
width: 100px;
padding: 0.6rem 0.75rem;
border: 2px solid var(--color-border, #dfe4ea);
border-radius: 0.5rem;
font-size: 1.25rem;
text-align: center;
background: var(--color-bg-primary, #fff);
color: var(--color-text-primary, #1a2332);
outline: none;
}

#sequence-recall-game .sr-math-input:focus {
border-color: var(--color-primary, #0f9072);
}

#sequence-recall-game .sr-math-submit {
padding: 0.6rem 1.25rem;
background: var(--color-primary, #0f9072);
color: #fff;
border: none;
border-radius: 0.5rem;
font-weight: 600;
font-size: 1rem;
cursor: pointer;
transition: all 0.15s;
}

#sequence-recall-game .sr-math-submit:hover {
opacity: 0.9;
}

#sequence-recall-game .sr-math-hint {
margin-top: 0.75rem;
font-size: 0.8rem;
color: var(--color-text-secondary, #4b5b6d);
}

/* Positions grid */
#sequence-recall-game .sr-position-stage {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 260px;
padding: 1rem;
}

#sequence-recall-game .sr-position-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0.5rem;
width: 210px;
}

#sequence-recall-game .sr-position-cell {
width: 64px;
height: 64px;
background: var(--color-bg-secondary, #f0f4f8);
border: 2px solid var(--color-border, #dfe4ea);
border-radius: 0.5rem;
cursor: pointer;
transition: all 0.15s;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 0.9rem;
color: transparent;
}

#sequence-recall-game .sr-position-cell:hover {
border-color: var(--color-primary, #0f9072);
}

#sequence-recall-game .sr-position-cell.sr-pos-active {
background: var(--color-primary, #0f9072);
border-color: var(--color-primary, #0f9072);
color: #fff;
}

#sequence-recall-game .sr-position-cell.sr-pos-highlight {
background: var(--color-primary, #0f9072);
border-color: var(--color-primary, #0f9072);
animation: sr-pos-flash 0.4s ease-out;
}

@keyframes sr-pos-flash {
0% { transform: scale(0.8); opacity: 0.5; }
100% { transform: scale(1); opacity: 1; }
}

#sequence-recall-game .sr-position-counter {
margin-top: 0.75rem;
font-size: 0.9rem;
font-weight: 600;
color: var(--color-text-secondary, #4b5b6d);
}

/* Feedback overlay */
#sequence-recall-game .sr-feedback {
display: flex;
align-items: center;
justify-content: center;
min-height: 120px;
animation: sr-feedback-appear 0.3s ease-out;
}

#sequence-recall-game .sr-feedback-correct {
font-size: 1.5rem;
font-weight: 700;
color: #22c55e;
}

#sequence-recall-game .sr-feedback-wrong {
font-size: 1.5rem;
font-weight: 700;
color: #ef4444;
}

#sequence-recall-game .sr-feedback-points {
font-size: 0.9rem;
font-weight: 500;
color: var(--color-text-secondary, #4b5b6d);
margin-top: 0.25rem;
}

@keyframes sr-feedback-appear {
0% { transform: scale(0.8); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

/* Game complete */
#sequence-recall-game .sr-complete {
text-align: center;
}

#sequence-recall-game .sr-complete-icon {
font-size: 3rem;
margin-bottom: 0.5rem;
}

#sequence-recall-game .sr-complete-title {
font-family: "Space Grotesk", system-ui, sans-serif;
font-size: 1.5rem;
font-weight: 700;
margin: 0 0 1.25rem;
}

#sequence-recall-game .sr-stats-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0.75rem;
margin-bottom: 1.25rem;
}

#sequence-recall-game .sr-stat-box {
padding: 0.75rem 0.5rem;
background: var(--color-bg-secondary, #f0f4f8);
border-radius: 0.5rem;
text-align: center;
}

#sequence-recall-game .sr-stat-value {
font-size: 1.4rem;
font-weight: 700;
color: var(--color-text-primary, #1a2332);
display: block;
}

#sequence-recall-game .sr-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary, #4b5b6d);
}

#sequence-recall-game .sr-new-best {
display: inline-block;
padding: 0.35rem 0.75rem;
background: #f59e0b;
color: #1a2332;
border-radius: 1rem;
font-size: 0.8rem;
font-weight: 700;
margin-bottom: 1rem;
animation: sr-badge-pulse 1s ease-in-out infinite alternate;
}

@keyframes sr-badge-pulse {
0% { transform: scale(1); }
100% { transform: scale(1.05); }
}

#sequence-recall-game .sr-complete-links {
display: flex;
flex-direction: column;
gap: 0.5rem;
align-items: center;
margin-top: 0.5rem;
}

#sr-instructions {
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-top: 2rem;
}

/* Hide all screens by default */
#sequence-recall-game .sr-screen {
display: none;
}

#sequence-recall-game .sr-screen.sr-active {
display: block;
}

/* Responsive */
@media (max-width: 400px) {
#sequence-recall-game .sr-color-btn {
min-height: 60px;
}
#sequence-recall-game .sr-color-box {
width: 130px;
height: 130px;
}
#sequence-recall-game .sr-position-grid {
width: 180px;
}
#sequence-recall-game .sr-position-cell {
width: 54px;
height: 54px;
}
}
@media (max-width: 640px) {
#sequence-recall-game .sr-color-grid {
gap: 0.5rem;
}
#sequence-recall-game .sr-stats-grid {
grid-template-columns: repeat(3, 1fr);
}
}
@media (max-width: 360px) {
#sequence-recall-game .sr-color-btn {
min-height: 50px;
}
#sequence-recall-game .sr-color-box {
width: 110px;
height: 110px;
}
#sequence-recall-game .sr-position-grid {
width: 160px;
}
#sequence-recall-game .sr-position-cell {
width: 48px;
height: 48px;
}
#sequence-recall-game .sr-stats-grid {
grid-template-columns: 1fr 1fr;
}
#sequence-recall-game .sr-selected-dot {
width: 22px;
height: 22px;
}
}
@keyframes sr-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.sr-confetti-container {
position: fixed;
top: 0; left: 0; width: 100%; height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.sr-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: sr-confetti-fall 2.5s ease-in forwards;
}
.sr-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: sr-glow-fade 1s ease-out forwards;
}
@keyframes sr-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.sr-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
padding: 0.35rem 1rem;
border-radius: 1rem;
font-size: 0.85rem;
font-weight: 700;
margin-bottom: 1rem;
animation: sr-badge-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(245,158,11,0.4);
}
@keyframes sr-badge-bounce {
0% { transform: scale(0); opacity: 0; }
60% { transform: scale(1.2); }
100% { transform: scale(1); opacity: 1; }
}
</style>

<div id="sequence-recall-game">

<div id="sr-instructions" class="sr-screen sr-active">

<div class="sr-title-row"><span class="sr-icon">&#x1F9E0;</span><h2 class="sr-title">Sequence Recall</h2></div>
<p class="sr-subtitle">Entraînez votre mémoire de travail</p>
<div class="sr-best-score" id="sr-best-display">
Meilleur Score: <strong id="sr-best-value">aucun</strong>
</div>
<div class="sr-how-to">
<h3>Comment Jouer</h3>
<ul>
<li>Regardez les tuiles colorées s'allumer en séquence.</li>
<li>Touchez les tuiles dans le même ordre de mémoire.</li>
<li>Aux niveaux supérieurs, résolvez une <strong>distraction mathématique</strong> avant de rappeler.</li>
<li>À partir du niveau 11, rappelez-vous des <strong>couleurs et positions</strong> (double piste) !</li>
</ul>
</div>

<button class="sr-btn-primary" id="sr-start-btn">Commencer</button>
<div id="sr-challenge-banner-wrap"></div>
</div>

<div id="sr-wizard" class="sr-screen">
<div class="sr-wizard-overlay">
<div class="sr-wizard-card" id="sr-wizard-card"></div>
</div>
</div>

<div id="sr-playing" class="sr-screen">
<div class="sr-header">
<div class="sr-header-item">
<span class="sr-header-label">Score</span>
<span class="sr-header-value" id="sr-score">0</span>
</div>
<div class="sr-header-item">
<span class="sr-header-label">Niveau</span>
<span class="sr-header-value" id="sr-level">1</span>
</div>
<div class="sr-header-item">
<span class="sr-header-label">Série</span>
<span class="sr-header-value sr-streak" id="sr-streak">0</span>
</div>
</div>
<div class="sr-phase-label" id="sr-phase-label">Mémoriser</div>
<div id="sr-play-area"></div>
<div class="sr-progress">
<div class="sr-progress-label" id="sr-progress-label">Manche 1 sur 3</div>
<div class="sr-progress-bar">
<div class="sr-progress-fill" id="sr-progress-fill" style="width:0%"></div>
</div>
</div>
<button class="gk-finish-btn" id="sr-finish-btn">Terminer</button>
</div>

<div id="sr-complete" class="sr-screen">
<div class="sr-card sr-complete">
<div class="sr-complete-icon">&#x1F3C6;</div>
<h2 class="sr-complete-title">Partie Terminée !</h2>
<div id="sr-new-best-badge" class="sr-new-best" style="display:none;">Nouveau Record !</div>
<div class="gk-challenge-result" id="sr-challenge-result" style="display:none;"></div>
<div class="sr-stats-grid">
<div class="sr-stat-box">
<span class="sr-stat-value" id="sr-final-score">0</span>
<span class="sr-stat-label">Score</span>
</div>
<div class="sr-stat-box">
<span class="sr-stat-value" id="sr-final-level">1</span>
<span class="sr-stat-label">Niveau</span>
</div>
<div class="sr-stat-box">
<span class="sr-stat-value" id="sr-final-accuracy">0%</span>
<span class="sr-stat-label">Précision</span>
</div>
</div>
<div class="sr-complete-links">
<button class="sr-btn-primary" id="sr-play-again-btn">Rejouer</button>
<a href="/fr/games/" class="sr-btn-secondary">Tous les Jeux</a>
</div>
<div class="gk-share-section">

<button class="gk-share-btn" id="sr-share-btn">&#128279; Partager votre Score</button>
<div class="gk-share-copied" id="sr-share-copied" style="display:none;">Lien copié !</div>
</div>
</div>
</div>

</div>

<script>
(function() {
var STORAGE_HISTORY = 'guruka_sequence-recall_history';
var STORAGE_BEST = 'guruka_sequence-recall_best';

var challenge = GK.parseChallenge();

var COLORS = [
{ name: 'Rouge', hsl: 'hsl(0,84%,60%)' },
{ name: 'Bleu', hsl: 'hsl(217,91%,60%)' },
{ name: 'Vert', hsl: 'hsl(142,76%,36%)' },
{ name: 'Jaune', hsl: 'hsl(48,96%,53%)' },
{ name: 'Violet', hsl: 'hsl(280,68%,55%)' },
{ name: 'Orange', hsl: 'hsl(25,95%,53%)' }
];

var MAX_LEVEL = 20;
var ROUNDS_PER_LEVEL = 3;

var state = {
screen: 'instructions',
level: 1,
round: 0,
score: 0,
streak: 0,
totalCorrect: 0,
totalAttempts: 0,
colorSequence: [],
positionSequence: [],
selectedColors: [],
selectedPositions: [],
currentShowIndex: 0,
phaseStartTime: 0,
showTimer: null,
feedbackTimer: null
};

function getSequenceLength(level) {
return Math.min(3 + Math.floor(level / 3), 8);
}

function hasDistraction(level) {
return level >= 6;
}

function isDualTrack(level) {
return level >= 11;
}

function getDisplayTime(level) {
return Math.max(1200 - (level - 1) * 40, 600);
}

function getBestScore() {
try {
var val = localStorage.getItem(STORAGE_BEST);
return val ? parseInt(val, 10) : 0;
} catch(e) { return 0; }
}

function setBestScore(s) {
try { localStorage.setItem(STORAGE_BEST, String(s)); } catch(e) {}
}

function getHistory() {
try {
var val = localStorage.getItem(STORAGE_HISTORY);
return val ? JSON.parse(val) : [];
} catch(e) { return []; }
}

function addHistory(entry) {
try {
var h = getHistory();
h.push(entry);
if (h.length > 50) h = h.slice(-50);
localStorage.setItem(STORAGE_HISTORY, JSON.stringify(h));
} catch(e) {}
}

function $(id) { return document.getElementById(id); }

function showScreen(name) {
var screens = document.querySelectorAll('#sequence-recall-game .sr-screen');
for (var i = 0; i < screens.length; i++) {
screens[i].classList.remove('sr-active');
}
var el = $('sr-' + name);
if (el) el.classList.add('sr-active');
state.screen = name;
}

function generateColorSequence(len) {
var seq = [];
for (var i = 0; i < len; i++) {
seq.push(Math.floor(Math.random() * COLORS.length));
}
return seq;
}

function generatePositionSequence(len) {
var positions = [];
var used = {};
var count = Math.min(len, 9);
while (positions.length < count) {
var p = Math.floor(Math.random() * 9);
if (!used[p]) {
used[p] = true;
positions.push(p);
}
}
return positions;
}

function generateMathProblem() {
var ops = ['+', '-', '*'];
var op = ops[Math.floor(Math.random() * ops.length)];
var a, b, answer;
if (op === '+') {
a = Math.floor(Math.random() * 50) + 1;
b = Math.floor(Math.random() * 50) + 1;
answer = a + b;
} else if (op === '-') {
a = Math.floor(Math.random() * 50) + 10;
b = Math.floor(Math.random() * a);
answer = a - b;
} else {
a = Math.floor(Math.random() * 12) + 2;
b = Math.floor(Math.random() * 12) + 2;
answer = a * b;
}
var display = op === '*' ? (a + ' \u00D7 ' + b) : (a + ' ' + op + ' ' + b);
return { display: display, answer: answer };
}

function updateHeader() {
$('sr-score').textContent = state.score;
$('sr-level').textContent = state.level;
$('sr-streak').textContent = state.streak;
if (challenge.active) GK.updateChallengeBar('sr-playing', state.score, challenge.score);
}

function updateProgress() {
$('sr-progress-label').textContent = 'Manche ' + (state.round + 1) + ' sur ' + ROUNDS_PER_LEVEL;
var pct = (state.round / ROUNDS_PER_LEVEL) * 100;
$('sr-progress-fill').style.width = pct + '%';
}

var SR_WIZARD_STEPS = [
{icon: '\uD83C\uDFA8', title: 'Regardez la séquence de couleurs', desc: 'Les couleurs apparaissent une par une. Mémorisez l\'ordre !'},
{icon: '\uD83E\uDDE0', title: 'Rappelez-les dans l\'ordre', desc: 'Touchez les couleurs dans la séquence exacte que vous avez vue.'},
{icon: '\uD83D\uDE80', title: 'Prêt ? C\'est parti !', desc: 'Les séquences deviennent plus longues. Restez concentré !', final: true}
];
var srWizardStep = 0;
var srWizardCallback = null;

function srRenderWizardStep() {
var s = SR_WIZARD_STEPS[srWizardStep];
var dotsHtml = '';
for (var i = 0; i < SR_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="sr-wizard-dot' + (i === srWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Commencer à Jouer' : 'Suivant';
var card = $('sr-wizard-card');
card.innerHTML =
'<div class="sr-wizard-icon">' + s.icon + '</div>' +
'<div class="sr-wizard-title">' + s.title + '</div>' +
'<div class="sr-wizard-desc">' + s.desc + '</div>' +
'<div class="sr-wizard-dots">' + dotsHtml + '</div>' +
'<button class="sr-wizard-btn" id="sr-wizard-next">' + btnLabel + '</button>';
card.style.animation = 'none';
void card.offsetWidth;
card.style.animation = 'sr-wizard-enter 0.3s ease-out';
$('sr-wizard-next').addEventListener('click', srAdvanceWizard);
}

function srAdvanceWizard() {
if (srWizardStep < SR_WIZARD_STEPS.length - 1) {
srWizardStep++;
srRenderWizardStep();
} else {
if (srWizardCallback) srWizardCallback();
}
}

function showWizard(callback) {
srWizardStep = 0;
srWizardCallback = callback;
showScreen('wizard');
srRenderWizardStep();
}

function startRound() {
var seqLen = getSequenceLength(state.level);
state.colorSequence = generateColorSequence(seqLen);
state.positionSequence = isDualTrack(state.level) ? generatePositionSequence(Math.min(seqLen, 9)) : [];
state.selectedColors = [];
state.selectedPositions = [];
state.currentShowIndex = 0;

updateHeader();
updateProgress();
showColorSequence();
}

function showColorSequence() {
$('sr-phase-label').textContent = 'Mémorisez les couleurs';
state.currentShowIndex = 0;
showNextColor();
}

function showNextColor() {
var area = $('sr-play-area');
if (state.currentShowIndex >= state.colorSequence.length) {
if (isDualTrack(state.level)) {
showPositionSequence();
} else if (hasDistraction(state.level)) {
showDistraction();
} else {
startRecallColors();
}
return;
}

var colorIdx = state.colorSequence[state.currentShowIndex];
var color = COLORS[colorIdx];
var total = state.colorSequence.length;
var current = state.currentShowIndex + 1;

area.innerHTML = '<div class="sr-color-stage">' +
'<div class="sr-color-box" style="background:' + color.hsl + '"></div>' +
'<div class="sr-color-counter">' + current + ' / ' + total + '</div>' +
'</div>';

state.currentShowIndex++;
var dt = getDisplayTime(state.level);
state.showTimer = setTimeout(function() {
showNextColor();
}, dt);
}

function showPositionSequence() {
$('sr-phase-label').textContent = 'Mémorisez les positions';
state.currentShowIndex = 0;
showNextPosition();
}

function showNextPosition() {
if (state.currentShowIndex >= state.positionSequence.length) {
if (hasDistraction(state.level)) {
showDistraction();
} else {
startRecallColors();
}
return;
}

var pos = state.positionSequence[state.currentShowIndex];
var total = state.positionSequence.length;
var current = state.currentShowIndex + 1;

var html = '<div class="sr-position-stage">';
html += '<div class="sr-position-grid">';
for (var i = 0; i < 9; i++) {
var cls = 'sr-position-cell';
if (i === pos) cls += ' sr-pos-highlight';
html += '<div class="' + cls + '"></div>';
}
html += '</div>';
html += '<div class="sr-position-counter">' + current + ' / ' + total + '</div>';
html += '</div>';

$('sr-play-area').innerHTML = html;

state.currentShowIndex++;
var dt = getDisplayTime(state.level);
state.showTimer = setTimeout(function() {
showNextPosition();
}, dt);
}

function showDistraction() {
$('sr-phase-label').textContent = 'Calcul rapide !';
var problem = generateMathProblem();

var html = '<div class="sr-math-area">';
html += '<div class="sr-math-problem">' + problem.display + ' = ?</div>';
html += '<div class="sr-math-input-row">';
html += '<input type="number" class="sr-math-input" id="sr-math-input" inputmode="numeric" autocomplete="off">';
html += '<button class="sr-math-submit" id="sr-math-btn">Go</button>';
html += '</div>';
html += '<div class="sr-math-hint">Résolvez pour continuer</div>';
html += '</div>';

$('sr-play-area').innerHTML = html;

var input = $('sr-math-input');
var btn = $('sr-math-btn');

function submitMath() {
var val = parseInt(input.value, 10);
if (isNaN(val)) return;
startRecallColors();
}

btn.addEventListener('click', submitMath);
input.addEventListener('keydown', function(e) {
if (e.key === 'Enter') submitMath();
});

setTimeout(function() { input.focus(); }, 100);
}

function startRecallColors() {
$('sr-phase-label').textContent = 'Rappelez la séquence de couleurs';
state.selectedColors = [];
state.phaseStartTime = Date.now();
renderRecallColors();
}

function renderRecallColors() {
var needed = state.colorSequence.length;
var html = '<div class="sr-recall-area">';

html += '<div class="sr-selected-sequence" id="sr-selected-seq">';
if (state.selectedColors.length === 0) {
html += '<span class="sr-selected-placeholder">Touchez les couleurs dans l\'ordre (' + needed + ' nécessaires)</span>';
} else {
for (var i = 0; i < state.selectedColors.length; i++) {
var c = COLORS[state.selectedColors[i]];
html += '<div class="sr-selected-dot" style="background:' + c.hsl + '"></div>';
}
}
html += '</div>';

html += '<div class="sr-color-grid">';
for (var j = 0; j < COLORS.length; j++) {
html += '<button class="sr-color-btn" data-color="' + j + '" style="background:' + COLORS[j].hsl + '">';
html += '<span class="sr-btn-label">' + COLORS[j].name + '</span>';
html += '</button>';
}
html += '</div>';

html += '<div class="sr-undo-row">';
html += '<button class="sr-undo-btn" id="sr-undo-btn">Annuler</button>';
html += '<button class="sr-submit-btn" id="sr-submit-colors-btn"' + (state.selectedColors.length < needed ? ' disabled' : '') + '>Valider</button>';
html += '</div>';

html += '</div>';

$('sr-play-area').innerHTML = html;

var buttons = document.querySelectorAll('#sequence-recall-game .sr-color-btn');
for (var k = 0; k < buttons.length; k++) {
buttons[k].addEventListener('click', function() {
var ci = parseInt(this.getAttribute('data-color'), 10);
if (state.selectedColors.length < needed) {
state.selectedColors.push(ci);
renderRecallColors();
if (state.selectedColors.length === needed) {
setTimeout(function() {
var sb = $('sr-submit-colors-btn');
if (sb) sb.focus();
}, 50);
}
}
});
}

$('sr-undo-btn').addEventListener('click', function() {
if (state.selectedColors.length > 0) {
state.selectedColors.pop();
renderRecallColors();
}
});

var submitBtn = $('sr-submit-colors-btn');
submitBtn.addEventListener('click', function() {
if (state.selectedColors.length === needed) {
submitColorRecall();
}
});
}

function submitColorRecall() {
var responseTime = Date.now() - state.phaseStartTime;
var correct = true;
for (var i = 0; i < state.colorSequence.length; i++) {
if (state.colorSequence[i] !== state.selectedColors[i]) {
correct = false;
break;
}
}

if (isDualTrack(state.level)) {
state._colorCorrect = correct;
state._colorResponseTime = responseTime;
startRecallPositions();
} else {
resolveRound(correct, responseTime);
}
}

function startRecallPositions() {
$('sr-phase-label').textContent = 'Rappelez les positions dans l\'ordre';
state.selectedPositions = [];
state.phaseStartTime = Date.now();
renderRecallPositions();
}

function renderRecallPositions() {
var needed = state.positionSequence.length;
var html = '<div class="sr-position-stage">';

html += '<div class="sr-selected-sequence">';
if (state.selectedPositions.length === 0) {
html += '<span class="sr-selected-placeholder">Touchez les positions dans l\'ordre (' + needed + ' nécessaires)</span>';
} else {
for (var i = 0; i < state.selectedPositions.length; i++) {
html += '<div class="sr-selected-dot" style="background:var(--color-primary, #0f9072)"></div>';
}
}
html += '</div>';

html += '<div class="sr-position-grid">';
for (var j = 0; j < 9; j++) {
var isSelected = false;
var order = -1;
for (var k = 0; k < state.selectedPositions.length; k++) {
if (state.selectedPositions[k] === j) {
isSelected = true;
order = k + 1;
break;
}
}
var cls = 'sr-position-cell';
if (isSelected) cls += ' sr-pos-active';
html += '<div class="' + cls + '" data-pos="' + j + '">' + (isSelected ? order : '') + '</div>';
}
html += '</div>';

html += '<div class="sr-undo-row" style="margin-top:0.75rem;max-width:210px;width:100%;">';
html += '<button class="sr-undo-btn" id="sr-undo-pos-btn">Annuler</button>';
html += '<button class="sr-submit-btn" id="sr-submit-pos-btn"' + (state.selectedPositions.length < needed ? ' disabled' : '') + '>Valider</button>';
html += '</div>';

html += '</div>';

$('sr-play-area').innerHTML = html;

var cells = document.querySelectorAll('#sequence-recall-game .sr-position-cell');
for (var m = 0; m < cells.length; m++) {
cells[m].addEventListener('click', function() {
var p = parseInt(this.getAttribute('data-pos'), 10);
var alreadySelected = false;
for (var n = 0; n < state.selectedPositions.length; n++) {
if (state.selectedPositions[n] === p) {
alreadySelected = true;
break;
}
}
if (!alreadySelected && state.selectedPositions.length < needed) {
state.selectedPositions.push(p);
renderRecallPositions();
}
});
}

$('sr-undo-pos-btn').addEventListener('click', function() {
if (state.selectedPositions.length > 0) {
state.selectedPositions.pop();
renderRecallPositions();
}
});

$('sr-submit-pos-btn').addEventListener('click', function() {
if (state.selectedPositions.length === needed) {
submitPositionRecall();
}
});
}

function submitPositionRecall() {
var responseTime = Date.now() - state.phaseStartTime;
var posCorrect = true;
for (var i = 0; i < state.positionSequence.length; i++) {
if (state.positionSequence[i] !== state.selectedPositions[i]) {
posCorrect = false;
break;
}
}

var bothCorrect = state._colorCorrect && posCorrect;
var combinedTime = state._colorResponseTime + responseTime;
resolveRound(bothCorrect, combinedTime);
}

function resolveRound(correct, responseTime) {
state.totalAttempts++;
var points = 0;

if (correct) {
state.totalCorrect++;
state.streak++;
points = 100;
if (responseTime < 1000) {
points += Math.floor((1000 - responseTime) / 10);
}
points += Math.floor(state.streak * 0.1 * 100);
state.score += points;
} else {
state.streak = 0;
}

updateHeader();
showFeedback(correct, points);
}

function showFeedback(correct, points) {
$('sr-phase-label').textContent = '';
var html = '<div class="sr-feedback"><div>';
if (correct) {
html += '<div class="sr-feedback-correct">Correct !</div>';
html += '<div class="sr-feedback-points">+' + points + ' points</div>';
} else {
html += '<div class="sr-feedback-wrong">Incorrect</div>';
html += '<div class="sr-feedback-points">Série réinitialisée</div>';
}
html += '</div></div>';

$('sr-play-area').innerHTML = html;

state.feedbackTimer = setTimeout(function() {
advanceRound(correct);
}, 1200);
}

function advanceRound(wasCorrect) {
state.round++;

if (state.round >= ROUNDS_PER_LEVEL) {
if (wasCorrect) {
state.level++;
}
state.round = 0;

if (state.level > MAX_LEVEL) {
endGame();
return;
}
}

updateProgress();
startRound();
}

/* ── Celebration effects ── */
function srShowConfetti() {
var colors = ['#f59e0b','#ef4444','#22c55e','#3b82f6','#a855f7','#ec4899'];
var container = document.createElement('div');
container.className = 'sr-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'sr-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'sr-glow-flash';
document.body.appendChild(container);
document.body.appendChild(glow);
setTimeout(function() {
if (container.parentNode) container.parentNode.removeChild(container);
if (glow.parentNode) glow.parentNode.removeChild(glow);
}, 3000);
}

function srAnimateScoreCountUp(el, target) {
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

function endGame() {
var stickyNav = document.querySelector('.sticky.top-0');
if (stickyNav) stickyNav.style.display = '';
var footer = document.querySelector('footer');
if (footer) footer.style.display = '';
var accuracy = state.totalAttempts > 0 ? Math.round((state.totalCorrect / state.totalAttempts) * 100) : 0;
var best = getBestScore();
var isNewBest = state.score > best;

if (isNewBest) {
setBestScore(state.score);
}

addHistory({
score: state.score,
level: state.level > MAX_LEVEL ? MAX_LEVEL : state.level,
accuracy: accuracy,
date: new Date().toISOString()
});

var iconEl = document.querySelector('#sr-complete .sr-complete-icon');
var titleEl = document.querySelector('#sr-complete .sr-complete-title');
var badge = $('sr-new-best-badge');

if (isNewBest) {
srShowConfetti();
iconEl.textContent = '\uD83C\uDF89';
titleEl.textContent = 'INCROYABLE !';
badge.className = 'sr-new-best-enhanced';
badge.innerHTML = '\uD83C\uDF1F INCROYABLE ! Nouveau Record !';
badge.style.display = 'inline-block';
} else {
iconEl.textContent = '\uD83C\uDFC6';
titleEl.textContent = 'Bien Joué !';
badge.className = 'sr-new-best';
badge.style.display = 'none';
}

GK.renderChallengeResult('sr-challenge-result', state.score, challenge);

$('sr-final-level').textContent = state.level > MAX_LEVEL ? MAX_LEVEL : state.level;
$('sr-final-accuracy').textContent = accuracy + '%';

showScreen('complete');
srAnimateScoreCountUp($('sr-final-score'), state.score);
}

function resetGame() {
clearTimeout(state.showTimer);
clearTimeout(state.feedbackTimer);
state.level = 1;
state.round = 0;
state.score = 0;
state.streak = 0;
state.totalCorrect = 0;
state.totalAttempts = 0;
state.selectedColors = [];
state.selectedPositions = [];
state.colorSequence = [];
state.positionSequence = [];
}

function initInstructions() {
var best = getBestScore();
if (best > 0) {
$('sr-best-value').textContent = best.toLocaleString() + ' points';
} else {
$('sr-best-value').textContent = 'aucun';
}
GK.renderChallengeBanner('sr-challenge-banner-wrap', challenge);
showScreen('instructions');
}

$('sr-finish-btn').addEventListener('click', function() {
endGame();
});

function srStartPlaying() {
window.scrollTo({ top: 0, behavior: 'instant' });
var stickyNav = document.querySelector('.sticky.top-0');
if (stickyNav && window.innerWidth <= 768) { stickyNav.style.display = 'none'; document.body.style.paddingTop = '0'; }
var footer = document.querySelector('footer');
if (footer && window.innerWidth <= 768) footer.style.display = 'none';
showScreen('playing');
GK.renderChallengeBar('sr-playing', challenge);
startRound();
}

$('sr-start-btn').addEventListener('click', function() {
resetGame();
srStartPlaying();
});

$('sr-play-again-btn').addEventListener('click', function() {
resetGame();
srStartPlaying();
});

$('sr-share-btn').addEventListener('click', function() {
GK.shareResult(state.score, 'Sequence Recall', '/fr/games/sequence-recall/', 'sr-share-copied');
});

initInstructions();
})();
</script>