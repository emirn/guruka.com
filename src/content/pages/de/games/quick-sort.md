---
title: "Quick Sort - Gehirntraining Spiel"
description: "Trainiere deine Kategorisierungsgeschwindigkeit und Aufgabenwechsel. Sortiere Elemente in die richtige Kategorie, wenn sich die Regeln alle paar Runden ändern!"
full_width: true
language: "de"
---

<style>
#quick-sort-game {
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

[data-theme="dark"] #quick-sort-game {
color: var(--color-dark-text-primary);
}

/* ── Instructions Screen ── */
#qs-instructions {
text-align: center;
padding: 1rem 1rem;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.qs-title-row { display: flex; align-items: center; gap: 0.75rem; justify-content: center; margin-bottom: 0.25rem; }
#qs-instructions .qs-icon {
font-size: 2.5rem;
margin-bottom: 0;
filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

#qs-instructions h2 {
font-size: 1.75rem;
margin: 0 0 0.25rem 0;
color: #f97316;
}

#qs-instructions .qs-subtitle {
color: var(--color-text-secondary);
margin: 0 0 1.5rem 0;
font-size: 0.95rem;
}

[data-theme="dark"] #qs-instructions .qs-subtitle {
color: var(--color-dark-text-secondary);
}

#qs-instructions .qs-how-to {
text-align: left;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.5rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border);
}

[data-theme="dark"] #qs-instructions .qs-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#qs-instructions .qs-how-to h3 {
margin: 0 0 0.75rem 0;
font-size: 1rem;
color: #f97316;
}

#qs-instructions .qs-how-to ol {
margin: 0;
padding-left: 1.25rem;
}

#qs-instructions .qs-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

.qs-personal-best {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.5rem;
padding: 0.6rem 1.25rem;
margin-bottom: 1.5rem;
font-size: 0.9rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .qs-personal-best {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}

.qs-personal-best strong {
color: #f97316;
}

/* ── Buttons ── */
.qs-btn-primary {
background: #f97316;
color: #fff;
border: none;
padding: 0.8rem 2.5rem;
border-radius: 0.5rem;
font-size: 1.1rem;
font-weight: 600;
cursor: pointer;
transition: background 0.2s, transform 0.1s;
}

.qs-btn-primary:hover {
background: #ea580c;
}

.qs-btn-primary:active {
transform: scale(0.97);
}

.qs-btn-secondary {
background: transparent;
color: #f97316;
border: 1px solid #f97316;
padding: 0.6rem 1.5rem;
border-radius: 0.5rem;
font-size: 0.95rem;
font-weight: 500;
cursor: pointer;
transition: background 0.2s;
text-decoration: none;
display: inline-block;
}

.qs-btn-secondary:hover {
background: var(--color-bg-secondary);
}

[data-theme="dark"] .qs-btn-secondary:hover {
background: var(--color-dark-bg-secondary);
}

/* ── Wizard Overlay ── */
#qs-wizard {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
#qs-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: qs-wizard-enter 0.3s ease-out;
}
[data-theme="dark"] #qs-wizard-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}
@keyframes qs-wizard-enter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
.qs-wizard-icon {
font-size: 2.5rem;
margin-bottom: 0.75rem;
}
.qs-wizard-title {
font-size: 1.25rem;
font-weight: 700;
margin: 0 0 0.5rem;
}
.qs-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] .qs-wizard-desc {
color: var(--color-dark-text-secondary);
}
.qs-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
.qs-wizard-dot {
width: 8px;
height: 8px;
border-radius: 50%;
background: var(--color-border, #dfe4ea);
transition: all 0.3s;
}
.qs-wizard-dot.active {
background: #f97316;
transform: scale(1.3);
}
[data-theme="dark"] .qs-wizard-dot {
background: var(--color-dark-border, #3a4553);
}
[data-theme="dark"] .qs-wizard-dot.active {
background: #f97316;
}
.qs-wizard-btn {
width: 100%;
padding: 0.875rem;
font-size: 1rem;
font-weight: 600;
border: none;
border-radius: 0.75rem;
background: #f97316;
color: #fff;
cursor: pointer;
transition: background 0.2s;
min-height: 44px;
}
.qs-wizard-btn:hover {
background: #ea580c;
}
@media (max-width: 400px) {
#qs-wizard-card {
padding: 1.5rem 1rem;
}
.qs-wizard-icon {
font-size: 2rem;
}
.qs-wizard-title {
font-size: 1.1rem;
}
.qs-wizard-desc {
font-size: 0.85rem;
}
}

/* ── Playing Screen ── */
#qs-playing {
display: none;
flex: 1;
flex-direction: column;
}

.qs-header {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 0.5rem;
margin-bottom: 0.75rem;
padding: 0.75rem;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .qs-header {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.qs-stat {
text-align: center;
}

.qs-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
margin-bottom: 0.15rem;
}

[data-theme="dark"] .qs-stat-label {
color: var(--color-dark-text-secondary);
}

.qs-stat-value {
font-size: 1.15rem;
font-weight: 700;
}

.qs-level-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
font-size: 0.85rem;
}

.qs-level-text {
font-weight: 600;
}

.qs-rule-change-badge {
background: #f97316;
color: #fff;
padding: 0.15rem 0.5rem;
border-radius: 0.25rem;
font-size: 0.75rem;
font-weight: 600;
}

.qs-progress-bar {
width: 100%;
height: 6px;
background: var(--color-bg-secondary);
border-radius: 3px;
overflow: hidden;
margin-bottom: 0.75rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .qs-progress-bar {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.qs-progress-fill {
height: 100%;
background: #f97316;
border-radius: 3px;
transition: width 0.3s ease;
}

.qs-timer-bar {
width: 100%;
height: 4px;
background: var(--color-bg-secondary);
border-radius: 2px;
overflow: hidden;
margin-bottom: 1rem;
}

[data-theme="dark"] .qs-timer-bar {
background: var(--color-dark-bg-secondary);
}

.qs-timer-fill {
height: 100%;
background: #f97316;
border-radius: 2px;
transition: width 0.05s linear;
}

.qs-timer-fill.qs-timer-warning {
background: #ef4444;
}

/* ── Rule Indicator ── */
.qs-rule-indicator {
background: #f97316;
color: #fff;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
font-size: 0.95rem;
font-weight: 700;
text-align: center;
margin-bottom: 1rem;
letter-spacing: 0.02em;
}

/* ── Stimulus Area ── */
.qs-stimulus-area {
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 160px;
position: relative;
}

.qs-feedback-flash {
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

.qs-feedback-flash.qs-flash-correct {
background: rgba(34, 197, 94, 0.15);
opacity: 1;
}

.qs-feedback-flash.qs-flash-wrong {
background: rgba(239, 68, 68, 0.15);
opacity: 1;
}

.qs-feedback-icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
font-size: 3rem;
pointer-events: none;
z-index: 2;
}

.qs-feedback-icon.qs-show-check {
animation: qs-feedback-pop 0.4s ease-out forwards;
color: #22c55e;
}

.qs-feedback-icon.qs-show-x {
animation: qs-feedback-pop 0.4s ease-out forwards;
color: #ef4444;
}

@keyframes qs-feedback-pop {
0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}

.qs-stimulus {
font-size: 3rem;
font-weight: 700;
line-height: 1.2;
animation: qs-stim-enter 0.2s ease-out;
text-align: center;
}

@keyframes qs-stim-enter {
0% { transform: scale(0.5); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

/* ── Sort Buttons (Left / Right) ── */
.qs-sort-buttons {
display: flex;
gap: 0.75rem;
margin-top: 1rem;
margin-bottom: 0.75rem;
}

.qs-sort-btn {
flex: 1;
padding: 1.1rem 0.75rem;
border: 2px solid var(--color-border);
border-radius: 0.75rem;
font-size: 1.1rem;
font-weight: 700;
cursor: pointer;
transition: transform 0.1s, border-color 0.15s, background 0.15s;
background: var(--color-bg-primary);
color: var(--color-text-primary);
min-height: 60px;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
}

[data-theme="dark"] .qs-sort-btn {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-primary);
}

.qs-sort-btn:active {
transform: scale(0.95);
}

.qs-btn-left {
border-left: 4px solid #f97316;
}

.qs-btn-left:hover {
border-color: #f97316;
background: rgba(249,115,22,0.05);
}

[data-theme="dark"] .qs-btn-left:hover {
background: rgba(249,115,22,0.15);
}

.qs-btn-right {
border-right: 4px solid #f97316;
}

.qs-btn-right:hover {
border-color: #f97316;
background: rgba(249,115,22,0.05);
}

[data-theme="dark"] .qs-btn-right:hover {
background: rgba(249,115,22,0.15);
}

.qs-sort-btn .qs-arrow {
font-size: 1.3rem;
opacity: 0.6;
}

.qs-sort-btn .qs-label {
font-size: 1rem;
}

.qs-sort-btn.qs-correct-flash {
border-color: #22c55e;
background: rgba(34,197,94,0.1);
}

.qs-sort-btn.qs-wrong-flash {
border-color: #ef4444;
background: rgba(239,68,68,0.1);
}

.qs-playing-hint {
text-align: center;
font-size: 0.75rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .qs-playing-hint {
color: var(--color-dark-text-secondary);
}

/* ── Pause Overlay ── */
#qs-pause-overlay {
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

#qs-pause-overlay .qs-pause-text {
font-size: 2.5rem;
font-weight: 800;
color: #fff;
text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}

/* ── Game Complete Modal ── */
#qs-complete-overlay {
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

.qs-complete-card {
background: var(--color-bg-primary);
border-radius: 1rem;
padding: 2rem;
max-width: 400px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: qs-modal-enter 0.3s ease-out;
}

[data-theme="dark"] .qs-complete-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}

@keyframes qs-modal-enter {
0% { transform: scale(0.8) translateY(20px); opacity: 0; }
100% { transform: scale(1) translateY(0); opacity: 1; }
}

.qs-complete-card h2 {
margin: 0 0 0.25rem 0;
font-size: 1.5rem;
}

.qs-complete-card .qs-trophy {
font-size: 3.5rem;
margin-bottom: 0.5rem;
}

.qs-final-score {
font-size: 2.5rem;
font-weight: 800;
color: #f97316;
margin: 0.5rem 0;
}

.qs-new-best {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316);
color: #fff;
padding: 0.25rem 0.75rem;
border-radius: 1rem;
font-size: 0.85rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: qs-best-pulse 1s ease-in-out infinite alternate;
}

@keyframes qs-best-pulse {
0% { transform: scale(1); }
100% { transform: scale(1.05); }
}

.qs-complete-stats {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin: 1rem 0 1.5rem;
}

.qs-complete-stat {
background: var(--color-bg-secondary);
border-radius: 0.5rem;
padding: 0.6rem;
}

[data-theme="dark"] .qs-complete-stat {
background: var(--color-dark-bg-secondary);
}

.qs-complete-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
}

[data-theme="dark"] .qs-complete-stat-label {
color: var(--color-dark-text-secondary);
}

.qs-complete-stat-value {
font-size: 1.2rem;
font-weight: 700;
}

.qs-complete-actions {
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
}

.qs-back-link {
color: var(--color-text-secondary);
font-size: 0.9rem;
text-decoration: none;
}

[data-theme="dark"] .qs-back-link {
color: var(--color-dark-text-secondary);
}

.qs-back-link:hover {
color: #f97316;
text-decoration: underline;
}

/* ── Level Up Toast ── */
.qs-level-up-toast {
position: fixed;
top: 1.5rem;
left: 50%;
transform: translateX(-50%) translateY(-100px);
background: #f97316;
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

.qs-level-up-toast.qs-toast-show {
transform: translateX(-50%) translateY(0);
}

/* ── Rule Change Toast ── */
.qs-rule-toast {
position: fixed;
top: 4.5rem;
left: 50%;
transform: translateX(-50%) translateY(-100px);
background: #7c3aed;
color: #fff;
padding: 0.6rem 1.5rem;
border-radius: 2rem;
font-weight: 700;
font-size: 0.95rem;
z-index: 999;
box-shadow: 0 4px 20px rgba(0,0,0,0.2);
transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
white-space: nowrap;
}

.qs-rule-toast.qs-toast-show {
transform: translateX(-50%) translateY(0);
}

/* ── Responsive ── */
@media (max-width: 480px) {
#quick-sort-game {
padding: 0.5rem;
}
.qs-stimulus {
font-size: 2.5rem;
}
.qs-sort-btn {
padding: 0.85rem 0.5rem;
font-size: 1rem;
min-height: 52px;
}
.qs-sort-btn .qs-label {
font-size: 0.9rem;
}
.qs-header {
padding: 0.5rem;
gap: 0.25rem;
}
.qs-stat-value {
font-size: 1rem;
}
.qs-rule-indicator {
font-size: 0.85rem;
padding: 0.4rem 0.75rem;
}
#qs-instructions { padding: 0.75rem 0.5rem; }
#qs-instructions .qs-icon { font-size: 2rem; margin-bottom: 0; }
#qs-instructions h2 { font-size: 1.3rem; }
#qs-instructions .qs-subtitle { margin-bottom: 1rem; font-size: 0.85rem; }
#qs-instructions .qs-how-to { padding: 0.75rem 1rem; margin-bottom: 1rem; }
#qs-instructions .qs-how-to li { margin-bottom: 0.25rem; font-size: 0.82rem; }
.qs-personal-best { padding: 0.4rem 0.75rem; margin-bottom: 1rem; font-size: 0.82rem; }
}
@media (max-width: 640px) {
#quick-sort-game {
padding: 0.75rem;
}
.qs-stimulus {
font-size: 2.75rem;
}
.qs-sort-btn {
padding: 1rem 0.5rem;
}
}
@media (max-width: 360px) {
.qs-stimulus {
font-size: 2rem;
}
.qs-sort-btn {
padding: 0.7rem 0.4rem;
font-size: 0.9rem;
min-height: 48px;
}
.qs-sort-btn .qs-label {
font-size: 0.8rem;
}
.qs-sort-btn .qs-arrow {
font-size: 1.1rem;
}
.qs-complete-stats {
grid-template-columns: 1fr 1fr;
}
.qs-final-score {
font-size: 2rem;
}
.qs-header {
padding: 0.375rem;
}
.qs-stat-value {
font-size: 0.9rem;
}
}
@keyframes qs-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.qs-confetti-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.qs-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: qs-confetti-fall 2.5s ease-in forwards;
}
.qs-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: qs-glow-fade 1s ease-out forwards;
}
@keyframes qs-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.qs-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
padding: 0.35rem 1rem;
border-radius: 1rem;
font-size: 0.9rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: qs-badge-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(249,115,22,0.4);
}
@keyframes qs-badge-bounce {
0% { transform: scale(0); opacity: 0; }
60% { transform: scale(1.2); }
100% { transform: scale(1); opacity: 1; }
}
</style>

<div id="quick-sort-game">

<div id="qs-instructions">
<div class="qs-title-row"><span class="qs-icon">&#128450;</span><h2>Quick Sort</h2></div>
<p class="qs-subtitle">Kategorisierungsgeschwindigkeit und Aufgabenwechsel</p>
<div class="qs-how-to">
<h3>Wie man spielt</h3>
<ol>
<li>Ein Element (Zahl, Form oder Wort) erscheint auf dem Bildschirm.</li>
<li>Zwei Kategorien werden <strong>links und rechts</strong> angezeigt.</li>
<li>Tippe auf die richtige Seite, um das Element zu sortieren.</li>
<li>Die Sortierregel <strong>wechselt</strong> alle paar Runden!</li>
<li>Geschwindigkeit und Serien bringen Bonuspunkte.</li>
</ol>
</div>
<div id="qs-best-display" class="qs-personal-best" style="display:none;">
Persönlicher Rekord: <strong id="qs-best-score">0</strong> Punkte
</div>
<button class="qs-btn-primary" id="qs-start-btn">Spiel starten</button>
<div id="qs-challenge-banner-wrap"></div>
</div>

<div id="qs-wizard">
<div id="qs-wizard-card"></div>
</div>

<div id="qs-playing">
<div class="qs-header">
<div class="qs-stat">
<div class="qs-stat-label">Punkte</div>
<div class="qs-stat-value" id="qs-score">0</div>
</div>
<div class="qs-stat">
<div class="qs-stat-label">Serie</div>
<div class="qs-stat-value" id="qs-streak">0</div>
</div>
<div class="qs-stat">
<div class="qs-stat-label">Level</div>
<div class="qs-stat-value" id="qs-level">1</div>
</div>
</div>
<div class="qs-level-info">
<span class="qs-level-text">Level <span id="qs-level-text">1</span></span>
<span class="qs-rule-change-badge" id="qs-rule-badge" style="display:none;">Regelwechsel</span>
</div>
<div class="qs-progress-bar">
<div class="qs-progress-fill" id="qs-progress-fill" style="width:0%"></div>
</div>
<div class="qs-timer-bar">
<div class="qs-timer-fill" id="qs-timer-fill" style="width:100%"></div>
</div>
<div class="qs-rule-indicator" id="qs-rule-indicator">Sortiere: Gerade / Ungerade</div>
<div class="qs-stimulus-area">
<div class="qs-feedback-flash" id="qs-feedback-flash"></div>
<div class="qs-feedback-icon" id="qs-feedback-icon"></div>
<div class="qs-stimulus" id="qs-stimulus"></div>
</div>
<div class="qs-sort-buttons">
<button class="qs-sort-btn qs-btn-left" id="qs-btn-left">
<span class="qs-arrow">&#8592;</span>
<span class="qs-label" id="qs-label-left">Gerade</span>
</button>
<button class="qs-sort-btn qs-btn-right" id="qs-btn-right">
<span class="qs-label" id="qs-label-right">Ungerade</span>
<span class="qs-arrow">&#8594;</span>
</button>
</div>
<div class="qs-playing-hint">Drücke <strong>A / &#8592;</strong> für links &middot; <strong>D / &#8594;</strong> für rechts &middot; <strong>Esc</strong> zum Pausieren</div>
<button class="gk-finish-btn" id="qs-finish-btn">Spiel beenden</button>
</div>

<div id="qs-pause-overlay">
<div class="qs-pause-text">Pausiert</div>
<button class="qs-btn-primary" id="qs-resume-btn">Fortsetzen</button>
</div>

<div id="qs-complete-overlay">
<div class="qs-complete-card">
<div class="qs-trophy">&#127942;</div>
<h2>Spiel beendet!</h2>
<div class="qs-final-score" id="qs-final-score">0</div>
<div id="qs-new-best" class="qs-new-best" style="display:none;">&#11088; Neuer Rekord!</div>
<div class="gk-challenge-result" id="qs-challenge-result" style="display:none;"></div>
<div class="qs-complete-stats">
<div class="qs-complete-stat">
<div class="qs-complete-stat-label">Level erreicht</div>
<div class="qs-complete-stat-value" id="qs-final-level">1</div>
</div>
<div class="qs-complete-stat">
<div class="qs-complete-stat-label">Genauigkeit</div>
<div class="qs-complete-stat-value" id="qs-final-accuracy">0%</div>
</div>
<div class="qs-complete-stat">
<div class="qs-complete-stat-label">Beste Serie</div>
<div class="qs-complete-stat-value" id="qs-final-streak">0</div>
</div>
<div class="qs-complete-stat">
<div class="qs-complete-stat-label">Persönlicher Rekord</div>
<div class="qs-complete-stat-value" id="qs-final-best">0</div>
</div>
</div>
<div class="qs-complete-actions">
<button class="qs-btn-primary" id="qs-play-again-btn">Nochmal spielen</button>
<a href="/de/games/" class="qs-back-link">&larr; Alle Spiele</a>
</div>
<div class="gk-share-section">

<button class="gk-share-btn" id="qs-share-btn">&#128279; Teile dein Ergebnis</button>
<div class="gk-share-copied" id="qs-share-copied" style="display:none;">Link kopiert!</div>
</div>
</div>
</div>

<div class="qs-level-up-toast" id="qs-level-toast">Level Up!</div>
<div class="qs-rule-toast" id="qs-rule-toast">Neue Regel!</div>

</div>

<script>
(function() {
"use strict";

var MAX_LEVEL = 20;
var STORAGE_HISTORY = 'guruka_quick-sort_history';
var STORAGE_BEST = 'guruka_quick-sort_best';

var challenge = GK.parseChallenge();

var state = {
screen: 'instructions',
level: 1,
score: 0,
streak: 0,
bestStreak: 0,
round: 0,
roundInRule: 0,
totalCorrect: 0,
totalAnswered: 0,
answered: false,
paused: false,
roundStartTime: 0,
timerInterval: null,
autoAdvanceTimeout: null,
gameOver: false,
correctSide: null,
currentRule: null,
currentStimulus: null,
ruleIndex: 0
};

/* ── DOM refs ── */
var elInstructions = document.getElementById('qs-instructions');
var elWizard = document.getElementById('qs-wizard');
var elWizardCard = document.getElementById('qs-wizard-card');
var elPlaying = document.getElementById('qs-playing');
var elPauseOverlay = document.getElementById('qs-pause-overlay');
var elCompleteOverlay = document.getElementById('qs-complete-overlay');
var elScore = document.getElementById('qs-score');
var elStreak = document.getElementById('qs-streak');
var elLevel = document.getElementById('qs-level');
var elLevelText = document.getElementById('qs-level-text');
var elRuleBadge = document.getElementById('qs-rule-badge');
var elProgressFill = document.getElementById('qs-progress-fill');
var elTimerFill = document.getElementById('qs-timer-fill');
var elRuleIndicator = document.getElementById('qs-rule-indicator');
var elStimulus = document.getElementById('qs-stimulus');
var elFeedbackFlash = document.getElementById('qs-feedback-flash');
var elFeedbackIcon = document.getElementById('qs-feedback-icon');
var elLabelLeft = document.getElementById('qs-label-left');
var elLabelRight = document.getElementById('qs-label-right');
var elBtnLeft = document.getElementById('qs-btn-left');
var elBtnRight = document.getElementById('qs-btn-right');
var elFinalScore = document.getElementById('qs-final-score');
var elNewBest = document.getElementById('qs-new-best');
var elFinalLevel = document.getElementById('qs-final-level');
var elFinalAccuracy = document.getElementById('qs-final-accuracy');
var elFinalStreak = document.getElementById('qs-final-streak');
var elFinalBest = document.getElementById('qs-final-best');
var elBestDisplay = document.getElementById('qs-best-display');
var elBestScore = document.getElementById('qs-best-score');
var elLevelToast = document.getElementById('qs-level-toast');
var elRuleToast = document.getElementById('qs-rule-toast');
var btnStart = document.getElementById('qs-start-btn');
var btnResume = document.getElementById('qs-resume-btn');
var btnPlayAgain = document.getElementById('qs-play-again-btn');

/* ── Level parameters ── */
function getDisplayTime(lvl) {
return Math.max(4000 - lvl * 130, 1500);
}

function getRoundsPerLevel(lvl) {
return 10 + lvl;
}

function getRuleChangeInterval(lvl) {
if (lvl <= 6) return 999;
if (lvl <= 9) return 4;
if (lvl <= 12) return 3;
if (lvl <= 16) return 3;
return 2;
}

/* ── Helpers ── */
function randInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
for (var i = arr.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var tmp = arr[i];
arr[i] = arr[j];
arr[j] = tmp;
}
return arr;
}

/* ── Rule definitions ── */
var SHAPES = ['Kreis', 'Quadrat', 'Dreieck'];
var FRUITS = ['Apfel', 'Banane', 'Kirsche'];
var NOT_FRUITS = ['Auto', 'Buch', 'Schreibtisch'];
var ALL_WORDS = FRUITS.concat(NOT_FRUITS);

function ruleEvenOdd() {
return {
name: 'Gerade / Ungerade',
leftLabel: 'Gerade',
rightLabel: 'Ungerade',
generate: function() {
var n = randInt(1, 50);
return {
display: String(n),
correctSide: (n % 2 === 0) ? 'left' : 'right'
};
}
};
}

function ruleBigSmall() {
return {
name: 'Gro\u00df / Klein',
leftLabel: 'Gro\u00df (\u226550)',
rightLabel: 'Klein (<50)',
generate: function() {
var n = randInt(1, 100);
return {
display: String(n),
correctSide: (n >= 50) ? 'left' : 'right'
};
}
};
}

function ruleShapeOrNot() {
return {
name: 'Form / Keine Form',
leftLabel: 'Form',
rightLabel: 'Keine Form',
generate: function() {
var isShape = Math.random() < 0.5;
var item;
if (isShape) {
item = pick(SHAPES);
} else {
item = String(randInt(1, 100));
}
return {
display: item,
correctSide: isShape ? 'left' : 'right'
};
}
};
}

function ruleFruitOrNot() {
return {
name: 'Obst / Kein Obst',
leftLabel: 'Obst',
rightLabel: 'Kein Obst',
generate: function() {
var item = pick(ALL_WORDS);
var isFruit = FRUITS.indexOf(item) !== -1;
return {
display: item,
correctSide: isFruit ? 'left' : 'right'
};
}
};
}

function ruleCompoundEvenBig() {
return {
name: 'Gerade UND Gro\u00df / Andere',
leftLabel: 'Gerade+Gro\u00df',
rightLabel: 'Andere',
generate: function() {
var n = randInt(1, 100);
var isEvenAndBig = (n % 2 === 0) && (n >= 50);
return {
display: String(n),
correctSide: isEvenAndBig ? 'left' : 'right'
};
}
};
}

function ruleCompoundOddSmall() {
return {
name: 'Ungerade UND Klein / Andere',
leftLabel: 'Ungerade+Klein',
rightLabel: 'Andere',
generate: function() {
var n = randInt(1, 100);
var isOddAndSmall = (n % 2 !== 0) && (n < 50);
return {
display: String(n),
correctSide: isOddAndSmall ? 'left' : 'right'
};
}
};
}

function ruleCompoundFruitBig() {
return {
name: 'Obst ODER Gro\u00df / Andere',
leftLabel: 'Obst/Gro\u00df',
rightLabel: 'Andere',
generate: function() {
var useWord = Math.random() < 0.4;
if (useWord) {
var item = pick(ALL_WORDS);
var isFruit = FRUITS.indexOf(item) !== -1;
return {
display: item,
correctSide: isFruit ? 'left' : 'right'
};
} else {
var n = randInt(1, 100);
return {
display: String(n),
correctSide: (n >= 50) ? 'left' : 'right'
};
}
}
};
}

function ruleCompoundShapeEven() {
return {
name: 'Form ODER Gerade / Andere',
leftLabel: 'Form/Gerade',
rightLabel: 'Andere',
generate: function() {
var useShape = Math.random() < 0.35;
if (useShape) {
var isShape = Math.random() < 0.5;
var item = isShape ? pick(SHAPES) : String(randInt(1, 50) * 2 - 1);
return {
display: item,
correctSide: isShape ? 'left' : 'right'
};
} else {
var n = randInt(1, 100);
return {
display: String(n),
correctSide: (n % 2 === 0) ? 'left' : 'right'
};
}
}
};
}

/* ── Get available rules for level ── */
function getRulesForLevel(lvl) {
if (lvl <= 3) {
return [ruleEvenOdd];
} else if (lvl <= 6) {
return [ruleBigSmall];
} else if (lvl <= 9) {
return [ruleEvenOdd, ruleBigSmall];
} else if (lvl <= 12) {
return [ruleShapeOrNot, ruleEvenOdd];
} else if (lvl <= 16) {
return [ruleFruitOrNot, ruleEvenOdd, ruleBigSmall];
} else {
return [ruleCompoundEvenBig, ruleCompoundOddSmall, ruleCompoundFruitBig, ruleCompoundShapeEven];
}
}

function pickNewRule(lvl, prevRuleName) {
var factories = getRulesForLevel(lvl);
if (factories.length === 1) {
return factories[0]();
}
var attempts = 0;
var rule;
do {
rule = pick(factories)();
attempts++;
} while (rule.name === prevRuleName && attempts < 10);
return rule;
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
var rulesForLevel = getRulesForLevel(state.level);
if (rulesForLevel.length > 1) {
elRuleBadge.style.display = '';
elRuleBadge.textContent = 'Regeln wechseln';
} else {
elRuleBadge.style.display = 'none';
}
var roundsNeeded = getRoundsPerLevel(state.level);
var pct = Math.min((state.round / roundsNeeded) * 100, 100);
elProgressFill.style.width = pct + '%';
if (challenge.active) GK.updateChallengeBar('qs-playing', state.score, challenge.score);
}

/* ── Update rule display ── */
function updateRuleDisplay() {
if (!state.currentRule) return;
elRuleIndicator.textContent = 'Sortiere: ' + state.currentRule.name;
elLabelLeft.textContent = state.currentRule.leftLabel;
elLabelRight.textContent = state.currentRule.rightLabel;
}

/* ── Timer bar countdown ── */
function startTimerBar() {
var displayTime = getDisplayTime(state.level);
var startTime = Date.now();
elTimerFill.style.width = '100%';
elTimerFill.classList.remove('qs-timer-warning');

if (state.timerInterval) clearInterval(state.timerInterval);
state.timerInterval = setInterval(function() {
if (state.paused) return;
var elapsed = Date.now() - startTime;
var remaining = Math.max(0, 1 - elapsed / displayTime);
elTimerFill.style.width = (remaining * 100) + '%';
if (remaining < 0.3) {
elTimerFill.classList.add('qs-timer-warning');
}
if (remaining <= 0) {
clearInterval(state.timerInterval);
}
}, 50);
}

/* ── Show feedback flash ── */
function showFeedback(correct) {
elFeedbackFlash.className = 'qs-feedback-flash';
elFeedbackIcon.className = 'qs-feedback-icon';
void elFeedbackFlash.offsetWidth;
void elFeedbackIcon.offsetWidth;

if (correct) {
elFeedbackFlash.classList.add('qs-flash-correct');
elFeedbackIcon.textContent = '\u2713';
elFeedbackIcon.classList.add('qs-show-check');
} else {
elFeedbackFlash.classList.add('qs-flash-wrong');
elFeedbackIcon.textContent = '\u2717';
elFeedbackIcon.classList.add('qs-show-x');
}

setTimeout(function() {
elFeedbackFlash.className = 'qs-feedback-flash';
elFeedbackIcon.className = 'qs-feedback-icon';
}, 400);
}

/* ── Show level-up toast ── */
function showLevelToast(level) {
elLevelToast.textContent = 'Level ' + level + '!';
elLevelToast.classList.add('qs-toast-show');
setTimeout(function() {
elLevelToast.classList.remove('qs-toast-show');
}, 1500);
}

/* ── Show rule-change toast ── */
function showRuleToast(ruleName) {
elRuleToast.textContent = 'Neue Regel: ' + ruleName;
elRuleToast.classList.add('qs-toast-show');
setTimeout(function() {
elRuleToast.classList.remove('qs-toast-show');
}, 1800);
}

/* ── Flash sort button ── */
function flashSortBtn(side, correct) {
var btn = side === 'left' ? elBtnLeft : elBtnRight;
btn.classList.add(correct ? 'qs-correct-flash' : 'qs-wrong-flash');
setTimeout(function() {
btn.classList.remove('qs-correct-flash', 'qs-wrong-flash');
}, 400);
}

/* ── Process answer ── */
function processAnswer(chosenSide) {
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

var correct = (chosenSide === state.correctSide);

state.totalAnswered++;
flashSortBtn(chosenSide, correct);

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
state.roundInRule = 0;
var prevName = state.currentRule ? state.currentRule.name : null;
state.currentRule = pickNewRule(state.level, prevName);
updateRuleDisplay();
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
state.roundInRule = 0;
var prevName = state.currentRule ? state.currentRule.name : null;
state.currentRule = pickNewRule(state.level, prevName);
updateRuleDisplay();
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
state.roundInRule++;
state.answered = false;

/* Check if rule should change mid-level */
var ruleInterval = getRuleChangeInterval(state.level);
if (state.roundInRule > ruleInterval && getRulesForLevel(state.level).length > 1) {
state.roundInRule = 1;
var prevName = state.currentRule ? state.currentRule.name : null;
state.currentRule = pickNewRule(state.level, prevName);
updateRuleDisplay();
showRuleToast(state.currentRule.name);
}

/* Generate stimulus */
var item = state.currentRule.generate();
state.correctSide = item.correctSide;
state.currentStimulus = item.display;

elStimulus.textContent = item.display;
elStimulus.style.animation = 'none';
void elStimulus.offsetWidth;
elStimulus.style.animation = '';

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
container.className = 'qs-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'qs-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'qs-glow-flash';
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

var trophy = document.querySelector('.qs-trophy');
var title = document.querySelector('#qs-complete-overlay .qs-complete-card h2');

if (isNewBest) {
showConfetti();
trophy.textContent = '\uD83C\uDF89';
title.textContent = 'FANTASTISCH!';
elNewBest.className = 'qs-new-best-enhanced';
elNewBest.innerHTML = '\uD83C\uDF1F FANTASTISCH! Neuer Rekord!';
elNewBest.style.display = 'inline-block';
} else {
trophy.textContent = '\uD83C\uDFC6';
title.textContent = 'Gut gemacht!';
elNewBest.className = 'qs-new-best';
elNewBest.style.display = 'none';
}

elFinalLevel.textContent = state.level;
elFinalAccuracy.textContent = accuracy + '%';
elFinalStreak.textContent = state.bestStreak;
elFinalBest.textContent = best.toLocaleString();

GK.renderChallengeResult('qs-challenge-result', state.score, challenge);

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
var QS_WIZARD_STEPS = [
{icon: '\uD83D\uDCC2', title: 'Sortiere Elemente schnell', desc: 'Ein Element erscheint auf dem Bildschirm. Tippe auf die richtige Kategorie (links oder rechts), um es zu sortieren!'},
{icon: '\uD83D\uDD00', title: 'Regeln ändern sich!', desc: 'Alle paar Runden wechselt die Sortierregel. Bleib aufmerksam und passe dich schnell an!'},
{icon: '\u26A1', title: 'Sei schnell!', desc: 'Antworte bevor die Zeit abläuft. Geschwindigkeit und Serien bringen Bonuspunkte!', final: true}
];
var qsWizardStep = 0;

function renderWizardStep() {
var s = QS_WIZARD_STEPS[qsWizardStep];
var dotsHtml = '';
for (var i = 0; i < QS_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="qs-wizard-dot' + (i === qsWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Spiel starten' : 'Weiter';
elWizardCard.innerHTML =
'<div class="qs-wizard-icon">' + s.icon + '</div>' +
'<div class="qs-wizard-title">' + s.title + '</div>' +
'<div class="qs-wizard-desc">' + s.desc + '</div>' +
'<div class="qs-wizard-dots">' + dotsHtml + '</div>' +
'<button class="qs-wizard-btn" id="qs-wizard-next">' + btnLabel + '</button>';
elWizardCard.style.animation = 'none';
void elWizardCard.offsetWidth;
elWizardCard.style.animation = 'qs-wizard-enter 0.3s ease-out';
document.getElementById('qs-wizard-next').addEventListener('click', advanceWizard);
}

function advanceWizard() {
if (qsWizardStep < QS_WIZARD_STEPS.length - 1) {
qsWizardStep++;
renderWizardStep();
} else {
startPlaying();
}
}

function showWizard() {
qsWizardStep = 0;
showScreen('wizard');
renderWizardStep();
}

function resetState() {
state.level = 1;
state.score = 0;
state.streak = 0;
state.bestStreak = 0;
state.round = 0;
state.roundInRule = 0;
state.totalCorrect = 0;
state.totalAnswered = 0;
state.answered = false;
state.paused = false;
state.gameOver = false;
state.roundStartTime = 0;
state.correctSide = null;
state.currentRule = null;
state.currentStimulus = null;
state.ruleIndex = 0;
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
state.currentRule = pickNewRule(state.level, null);
state.roundInRule = 0;
updateRuleDisplay();
showScreen('playing');
GK.renderChallengeBar('qs-playing', challenge);
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

elBtnLeft.addEventListener('click', function() {
processAnswer('left');
});

elBtnRight.addEventListener('click', function() {
processAnswer('right');
});

btnResume.addEventListener('click', function() {
resumeGame();
});

document.getElementById('qs-finish-btn').addEventListener('click', function() {
endGame();
});

document.getElementById('qs-share-btn').addEventListener('click', function() {
GK.shareResult(state.score, 'Quick Sort', '/de/games/quick-sort/', 'qs-share-copied');
});

document.addEventListener('keydown', function(e) {
if (state.screen === 'playing' && !state.paused && !state.gameOver) {
if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
e.preventDefault();
processAnswer('left');
} else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
e.preventDefault();
processAnswer('right');
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
GK.renderChallengeBanner('qs-challenge-banner-wrap', challenge);
showScreen('instructions');

})();
</script>
