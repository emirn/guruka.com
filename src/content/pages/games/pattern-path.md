---
title: "Pattern Path - Brain Training Game"
description: "Train your pattern recognition and fluid intelligence. Identify the missing element in visual sequences of shapes, colors, and transformations!"
full_width: true
---

<style>
#pattern-path-game {
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

[data-theme="dark"] #pattern-path-game {
color: var(--color-dark-text-primary);
}

/* ── Instructions Screen ── */
#pp-instructions {
text-align: center;
padding: 1rem 1rem;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-top: 2rem;
}

.pp-title-row { display: flex; align-items: center; gap: 0.75rem; justify-content: center; margin-bottom: 0.25rem; }
#pp-instructions .pp-icon {
font-size: 2.5rem;
margin-bottom: 0;
filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

#pp-instructions h2 {
font-size: 1.75rem;
margin: 0 0 0.25rem 0;
color: #14b8a6;
}

#pp-instructions .pp-subtitle {
color: var(--color-text-secondary);
margin: 0 0 1.5rem 0;
font-size: 0.95rem;
}

[data-theme="dark"] #pp-instructions .pp-subtitle {
color: var(--color-dark-text-secondary);
}

#pp-instructions .pp-how-to {
text-align: left;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
padding: 1.25rem 1.5rem;
margin-bottom: 1.5rem;
width: 100%;
max-width: 420px;
border: 1px solid var(--color-border);
}

[data-theme="dark"] #pp-instructions .pp-how-to {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

#pp-instructions .pp-how-to h3 {
margin: 0 0 0.75rem 0;
font-size: 1rem;
color: #14b8a6;
}

#pp-instructions .pp-how-to ul {
margin: 0;
padding-left: 1.25rem;
}

#pp-instructions .pp-how-to li {
margin-bottom: 0.5rem;
font-size: 0.9rem;
line-height: 1.4;
}

.pp-personal-best {
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.5rem;
padding: 0.6rem 1.25rem;
margin-bottom: 1.5rem;
font-size: 0.9rem;
color: var(--color-text-secondary);
}

[data-theme="dark"] .pp-personal-best {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-secondary);
}

.pp-personal-best strong {
color: #14b8a6;
}

/* ── Buttons ── */
.pp-btn-primary {
background: #14b8a6;
color: #fff;
border: none;
padding: 0.8rem 2.5rem;
border-radius: 0.5rem;
font-size: 1.1rem;
font-weight: 600;
cursor: pointer;
transition: background 0.2s, transform 0.1s;
}

.pp-btn-primary:hover {
background: #0d9488;
}

.pp-btn-primary:active {
transform: scale(0.97);
}

.pp-btn-secondary {
background: transparent;
color: #14b8a6;
border: 1px solid #14b8a6;
padding: 0.6rem 1.5rem;
border-radius: 0.5rem;
font-size: 0.95rem;
font-weight: 500;
cursor: pointer;
transition: background 0.2s;
text-decoration: none;
display: inline-block;
}

.pp-btn-secondary:hover {
background: var(--color-bg-secondary);
}

[data-theme="dark"] .pp-btn-secondary:hover {
background: var(--color-dark-bg-secondary);
}

/* ── Wizard Overlay ── */
#pp-wizard {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.7);
display: none;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
}
#pp-wizard-card {
background: var(--color-bg-primary, #fff);
border-radius: 1rem;
padding: 2rem 1.5rem;
max-width: 380px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: pp-wizard-enter 0.3s ease-out;
}
[data-theme="dark"] #pp-wizard-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}
@keyframes pp-wizard-enter {
0% { transform: scale(0.85); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}
.pp-wizard-icon {
font-size: 2.5rem;
margin-bottom: 0.75rem;
}
.pp-wizard-title {
font-size: 1.25rem;
font-weight: 700;
margin: 0 0 0.5rem;
}
.pp-wizard-desc {
font-size: 0.95rem;
color: var(--color-text-secondary);
margin: 0 0 1.5rem;
line-height: 1.5;
}
[data-theme="dark"] .pp-wizard-desc {
color: var(--color-dark-text-secondary);
}
.pp-wizard-dots {
display: flex;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
}
.pp-wizard-dot {
width: 8px;
height: 8px;
border-radius: 50%;
background: var(--color-border, #dfe4ea);
transition: all 0.3s;
}
.pp-wizard-dot.active {
background: #14b8a6;
transform: scale(1.3);
}
[data-theme="dark"] .pp-wizard-dot {
background: var(--color-dark-border, #3a4553);
}
[data-theme="dark"] .pp-wizard-dot.active {
background: #14b8a6;
}
.pp-wizard-btn {
width: 100%;
padding: 0.875rem;
font-size: 1rem;
font-weight: 600;
border: none;
border-radius: 0.75rem;
background: #14b8a6;
color: #fff;
cursor: pointer;
transition: background 0.2s;
min-height: 44px;
}
.pp-wizard-btn:hover {
background: #0d9488;
}
@media (max-width: 400px) {
#pp-wizard-card {
padding: 1.5rem 1rem;
}
.pp-wizard-icon {
font-size: 2rem;
}
.pp-wizard-title {
font-size: 1.1rem;
}
.pp-wizard-desc {
font-size: 0.85rem;
}
}

/* ── Playing Screen ── */
#pp-playing {
display: none;
flex: 1;
flex-direction: column;
}

.pp-header {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 0.5rem;
margin-bottom: 0.75rem;
padding: 0.75rem;
background: var(--color-bg-secondary);
border-radius: 0.75rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .pp-header {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.pp-stat {
text-align: center;
}

.pp-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
margin-bottom: 0.15rem;
}

[data-theme="dark"] .pp-stat-label {
color: var(--color-dark-text-secondary);
}

.pp-stat-value {
font-size: 1.15rem;
font-weight: 700;
}

.pp-level-info {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
font-size: 0.85rem;
}

.pp-level-text {
font-weight: 600;
}

.pp-difficulty-badge {
background: #14b8a6;
color: #fff;
padding: 0.15rem 0.5rem;
border-radius: 0.25rem;
font-size: 0.75rem;
font-weight: 600;
}

.pp-progress-bar {
width: 100%;
height: 6px;
background: var(--color-bg-secondary);
border-radius: 3px;
overflow: hidden;
margin-bottom: 1rem;
border: 1px solid var(--color-border);
}

[data-theme="dark"] .pp-progress-bar {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.pp-progress-fill {
height: 100%;
background: #14b8a6;
border-radius: 3px;
transition: width 0.3s ease;
}

.pp-timer-bar {
width: 100%;
height: 4px;
background: var(--color-bg-secondary);
border-radius: 2px;
overflow: hidden;
margin-bottom: 1rem;
}

[data-theme="dark"] .pp-timer-bar {
background: var(--color-dark-bg-secondary);
}

.pp-timer-fill {
height: 100%;
background: #14b8a6;
border-radius: 2px;
transition: width 0.05s linear;
}

.pp-timer-fill.pp-timer-warning {
background: #ef4444;
}

/* ── Pattern Display Area ── */
.pp-pattern-area {
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 200px;
position: relative;
}

.pp-feedback-flash {
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

.pp-feedback-flash.pp-flash-correct {
background: rgba(34, 197, 94, 0.15);
opacity: 1;
}

.pp-feedback-flash.pp-flash-wrong {
background: rgba(239, 68, 68, 0.15);
opacity: 1;
}

.pp-feedback-icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
font-size: 3rem;
pointer-events: none;
z-index: 2;
}

.pp-feedback-icon.pp-show-check {
animation: pp-feedback-pop 0.4s ease-out forwards;
color: #22c55e;
}

.pp-feedback-icon.pp-show-x {
animation: pp-feedback-pop 0.4s ease-out forwards;
color: #ef4444;
}

@keyframes pp-feedback-pop {
0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}

.pp-sequence-row {
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-bottom: 1.25rem;
flex-wrap: wrap;
animation: pp-seq-enter 0.3s ease-out;
}

@keyframes pp-seq-enter {
0% { transform: scale(0.8); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
}

.pp-seq-element {
width: 70px;
height: 70px;
border: 2px solid var(--color-border);
border-radius: 0.75rem;
display: flex;
align-items: center;
justify-content: center;
background: var(--color-bg-primary, #fff);
}

[data-theme="dark"] .pp-seq-element {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
}

.pp-seq-element svg {
display: block;
}

.pp-seq-missing {
border: 2px dashed #14b8a6;
background: rgba(20, 184, 166, 0.05);
font-size: 1.75rem;
font-weight: 700;
color: #14b8a6;
}

[data-theme="dark"] .pp-seq-missing {
background: rgba(20, 184, 166, 0.1);
}

.pp-seq-arrow {
font-size: 1.25rem;
color: var(--color-text-secondary);
flex-shrink: 0;
}

[data-theme="dark"] .pp-seq-arrow {
color: var(--color-dark-text-secondary);
}

/* ── Answer Choice Buttons ── */
.pp-answers {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin-top: 1rem;
margin-bottom: 0.75rem;
}

.pp-answer-btn {
padding: 0.75rem;
border: 2px solid var(--color-border);
border-radius: 0.75rem;
cursor: pointer;
transition: transform 0.1s, border-color 0.15s, background 0.15s;
background: var(--color-bg-primary);
color: var(--color-text-primary);
min-height: 80px;
display: flex;
align-items: center;
justify-content: center;
}

[data-theme="dark"] .pp-answer-btn {
background: var(--color-dark-bg-secondary);
border-color: var(--color-dark-border);
color: var(--color-dark-text-primary);
}

.pp-answer-btn:active {
transform: scale(0.95);
}

.pp-answer-btn:hover {
border-color: #14b8a6;
background: rgba(20, 184, 166, 0.05);
}

[data-theme="dark"] .pp-answer-btn:hover {
background: rgba(20, 184, 166, 0.15);
}

.pp-answer-btn svg {
display: block;
}

.pp-answer-btn.pp-correct-flash {
border-color: #22c55e;
background: rgba(34,197,94,0.1);
}

.pp-answer-btn.pp-wrong-flash {
border-color: #ef4444;
background: rgba(239,68,68,0.1);
}

.pp-playing-hint {
text-align: center;
font-size: 0.75rem;
color: var(--color-text-secondary);
display: none;
}

@media (min-width: 768px) {
.pp-playing-hint {
display: block;
}
}

[data-theme="dark"] .pp-playing-hint {
color: var(--color-dark-text-secondary);
}

/* ── Pause Overlay ── */
#pp-pause-overlay {
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

#pp-pause-overlay .pp-pause-text {
font-size: 2.5rem;
font-weight: 800;
color: #fff;
text-shadow: 0 2px 12px rgba(0,0,0,0.3);
}

/* ── Game Complete Modal ── */
#pp-complete-overlay {
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

.pp-complete-card {
background: var(--color-bg-primary);
border-radius: 1rem;
padding: 2rem;
max-width: 400px;
width: 100%;
text-align: center;
box-shadow: 0 20px 60px rgba(0,0,0,0.3);
animation: pp-modal-enter 0.3s ease-out;
}

[data-theme="dark"] .pp-complete-card {
background: var(--color-dark-bg-primary);
color: var(--color-dark-text-primary);
}

@keyframes pp-modal-enter {
0% { transform: scale(0.8) translateY(20px); opacity: 0; }
100% { transform: scale(1) translateY(0); opacity: 1; }
}

.pp-complete-card h2 {
margin: 0 0 0.25rem 0;
font-size: 1.5rem;
}

.pp-complete-card .pp-trophy {
font-size: 3.5rem;
margin-bottom: 0.5rem;
}

.pp-final-score {
font-size: 2.5rem;
font-weight: 800;
color: #14b8a6;
margin: 0.5rem 0;
}

.pp-new-best {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316);
color: #fff;
padding: 0.25rem 0.75rem;
border-radius: 1rem;
font-size: 0.85rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: pp-best-pulse 1s ease-in-out infinite alternate;
}

@keyframes pp-best-pulse {
0% { transform: scale(1); }
100% { transform: scale(1.05); }
}

.pp-complete-stats {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.75rem;
margin: 1rem 0 1.5rem;
}

.pp-complete-stat {
background: var(--color-bg-secondary);
border-radius: 0.5rem;
padding: 0.6rem;
}

[data-theme="dark"] .pp-complete-stat {
background: var(--color-dark-bg-secondary);
}

.pp-complete-stat-label {
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--color-text-secondary);
}

[data-theme="dark"] .pp-complete-stat-label {
color: var(--color-dark-text-secondary);
}

.pp-complete-stat-value {
font-size: 1.2rem;
font-weight: 700;
}

.pp-complete-actions {
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
}

.pp-back-link {
color: var(--color-text-secondary);
font-size: 0.9rem;
text-decoration: none;
}

[data-theme="dark"] .pp-back-link {
color: var(--color-dark-text-secondary);
}

.pp-back-link:hover {
color: #14b8a6;
text-decoration: underline;
}

/* ── Level Up Toast ── */
.pp-level-up-toast {
position: fixed;
top: 1.5rem;
left: 50%;
transform: translateX(-50%) translateY(-100px);
background: #14b8a6;
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

.pp-level-up-toast.pp-toast-show {
transform: translateX(-50%) translateY(0);
}

/* ── Responsive ── */
@media (max-width: 480px) {
#pattern-path-game {
padding: 0.5rem;
}
.pp-seq-element {
width: 56px;
height: 56px;
}
.pp-seq-arrow {
font-size: 1rem;
}
.pp-answer-btn {
padding: 0.5rem;
min-height: 64px;
}
.pp-header {
padding: 0.5rem;
gap: 0.25rem;
}
.pp-stat-value {
font-size: 1rem;
}
#pp-instructions { padding: 0.75rem 0.5rem; }
#pp-instructions .pp-icon { font-size: 2rem; margin-bottom: 0; }
#pp-instructions h2 { font-size: 1.3rem; }
#pp-instructions .pp-subtitle { margin-bottom: 1rem; font-size: 0.85rem; }
#pp-instructions .pp-how-to { padding: 0.75rem 1rem; margin-bottom: 1rem; }
#pp-instructions .pp-how-to li { margin-bottom: 0.25rem; font-size: 0.82rem; }
.pp-personal-best { padding: 0.4rem 0.75rem; margin-bottom: 1rem; font-size: 0.82rem; }
}
@media (max-width: 640px) {
#pattern-path-game {
padding: 0.75rem;
}
.pp-seq-element {
width: 62px;
height: 62px;
}
.pp-answer-btn {
padding: 0.625rem;
min-height: 72px;
}
}
@media (max-width: 360px) {
.pp-seq-element {
width: 48px;
height: 48px;
}
.pp-seq-arrow {
font-size: 0.85rem;
}
.pp-sequence-row {
gap: 0.3rem;
}
.pp-answer-btn {
padding: 0.4rem;
min-height: 56px;
}
.pp-complete-stats {
grid-template-columns: 1fr 1fr;
}
.pp-final-score {
font-size: 2rem;
}
.pp-header {
padding: 0.375rem;
}
.pp-stat-value {
font-size: 0.9rem;
}
}
@keyframes pp-confetti-fall {
0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.pp-confetti-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 1001;
overflow: hidden;
}
.pp-confetti-piece {
position: absolute;
top: -10px;
width: 10px;
height: 10px;
animation: pp-confetti-fall 2.5s ease-in forwards;
}
.pp-glow-flash {
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: radial-gradient(circle, rgba(20,184,166,0.3) 0%, transparent 70%);
z-index: 999;
pointer-events: none;
animation: pp-glow-fade 1s ease-out forwards;
}
@keyframes pp-glow-fade {
0% { opacity: 1; }
100% { opacity: 0; }
}
.pp-new-best-enhanced {
display: inline-block;
background: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
color: #fff;
padding: 0.35rem 1rem;
border-radius: 1rem;
font-size: 0.9rem;
font-weight: 700;
margin-bottom: 0.75rem;
animation: pp-badge-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
box-shadow: 0 0 20px rgba(20,184,166,0.4);
}
@keyframes pp-badge-bounce {
0% { transform: scale(0); opacity: 0; }
60% { transform: scale(1.2); }
100% { transform: scale(1); opacity: 1; }
}
</style>

<div id="pattern-path-game">

<div id="pp-instructions">
<div class="pp-title-row"><span class="pp-icon">&#129513;</span><h2>Pattern Path</h2></div>
<p class="pp-subtitle">Spot patterns, find the missing piece</p>
<div id="pp-best-display" class="pp-personal-best">
Personal Best: <strong id="pp-best-score">none yet</strong>
</div>
<div class="pp-how-to">
<h3>How to Play</h3>
<ul>
<li>A sequence of shapes with a <strong>missing element</strong> (?) appears.</li>
<li>Identify the pattern (color, shape, size, or rotation changes).</li>
<li>Pick the <strong>correct completion</strong> from 4 choices.</li>
<li>Answer before time runs out &mdash; higher levels combine multiple attributes!</li>
</ul>
</div>

<button class="pp-btn-primary" id="pp-start-btn">Start Game</button>
<div id="pp-challenge-banner-wrap"></div>
</div>

<div id="pp-wizard">
<div id="pp-wizard-card"></div>
</div>

<div id="pp-playing">
<div class="pp-header">
<div class="pp-stat">
<div class="pp-stat-label">Score</div>
<div class="pp-stat-value" id="pp-score">0</div>
</div>
<div class="pp-stat">
<div class="pp-stat-label">Streak</div>
<div class="pp-stat-value" id="pp-streak">0</div>
</div>
<div class="pp-stat">
<div class="pp-stat-label">Level</div>
<div class="pp-stat-value" id="pp-level">1</div>
</div>
</div>
<div class="pp-level-info">
<span class="pp-level-text">Level <span id="pp-level-text">1</span></span>
<span class="pp-difficulty-badge" id="pp-difficulty-badge">Colors</span>
</div>
<div class="pp-progress-bar">
<div class="pp-progress-fill" id="pp-progress-fill" style="width:0%"></div>
</div>
<div class="pp-timer-bar">
<div class="pp-timer-fill" id="pp-timer-fill" style="width:100%"></div>
</div>
<div class="pp-pattern-area">
<div class="pp-feedback-flash" id="pp-feedback-flash"></div>
<div class="pp-feedback-icon" id="pp-feedback-icon"></div>
<div class="pp-sequence-row" id="pp-sequence-row"></div>
</div>
<div class="pp-answers" id="pp-answers">
<button class="pp-answer-btn" id="pp-ans-0"></button>
<button class="pp-answer-btn" id="pp-ans-1"></button>
<button class="pp-answer-btn" id="pp-ans-2"></button>
<button class="pp-answer-btn" id="pp-ans-3"></button>
</div>
<div class="pp-playing-hint">Press <strong>1-4</strong> to answer &middot; <strong>Esc</strong> to pause</div>
<button class="gk-finish-btn" id="pp-finish-btn">Finish Game</button>
</div>

<div id="pp-pause-overlay">
<div class="pp-pause-text">Paused</div>
<button class="pp-btn-primary" id="pp-resume-btn">Resume</button>
</div>

<div id="pp-complete-overlay">
<div class="pp-complete-card">
<div class="pp-trophy">&#127942;</div>
<h2>Game Complete!</h2>
<div class="pp-final-score" id="pp-final-score">0</div>
<div id="pp-new-best" class="pp-new-best" style="display:none;">&#11088; New Best!</div>
<div class="gk-challenge-result" id="pp-challenge-result" style="display:none;"></div>
<div class="pp-complete-stats">
<div class="pp-complete-stat">
<div class="pp-complete-stat-label">Level Reached</div>
<div class="pp-complete-stat-value" id="pp-final-level">1</div>
</div>
<div class="pp-complete-stat">
<div class="pp-complete-stat-label">Accuracy</div>
<div class="pp-complete-stat-value" id="pp-final-accuracy">0%</div>
</div>
<div class="pp-complete-stat">
<div class="pp-complete-stat-label">Best Streak</div>
<div class="pp-complete-stat-value" id="pp-final-streak">0</div>
</div>
<div class="pp-complete-stat">
<div class="pp-complete-stat-label">Personal Best</div>
<div class="pp-complete-stat-value" id="pp-final-best">0</div>
</div>
</div>
<div class="pp-complete-actions">
<button class="pp-btn-primary" id="pp-play-again-btn">Play Again</button>
<a href="/games/" class="pp-back-link">&larr; Back to Games</a>
</div>
<div class="gk-share-section">

<button class="gk-share-btn" id="pp-share-btn">&#128279; Share Your Score</button>
<div class="gk-share-copied" id="pp-share-copied" style="display:none;">Link copied!</div>
</div>
</div>
</div>

<div class="pp-level-up-toast" id="pp-level-toast">Level Up!</div>

</div>

<script>
(function() {
"use strict";

var MAX_LEVEL = 20;
var STORAGE_HISTORY = 'guruka_pattern-path_history';
var STORAGE_BEST = 'guruka_pattern-path_best';

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
correctChoice: null
};

/* ── Shape / Color / Size definitions ── */
var SHAPES = ['circle', 'square', 'triangle'];
var COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#f97316'];
var COLOR_NAMES = { '#ef4444': 'red', '#3b82f6': 'blue', '#22c55e': 'green', '#eab308': 'yellow', '#a855f7': 'purple', '#f97316': 'orange' };
var SIZES = [30, 45, 60];
var SIZE_NAMES = ['small', 'medium', 'large'];
var ROTATIONS = [0, 90, 180, 270];

/* ── DOM refs ── */
var elInstructions = document.getElementById('pp-instructions');
var elWizard = document.getElementById('pp-wizard');
var elWizardCard = document.getElementById('pp-wizard-card');
var elPlaying = document.getElementById('pp-playing');
var elPauseOverlay = document.getElementById('pp-pause-overlay');
var elCompleteOverlay = document.getElementById('pp-complete-overlay');
var elScore = document.getElementById('pp-score');
var elStreak = document.getElementById('pp-streak');
var elLevel = document.getElementById('pp-level');
var elLevelText = document.getElementById('pp-level-text');
var elDifficultyBadge = document.getElementById('pp-difficulty-badge');
var elProgressFill = document.getElementById('pp-progress-fill');
var elTimerFill = document.getElementById('pp-timer-fill');
var elSequenceRow = document.getElementById('pp-sequence-row');
var elFeedbackFlash = document.getElementById('pp-feedback-flash');
var elFeedbackIcon = document.getElementById('pp-feedback-icon');
var elFinalScore = document.getElementById('pp-final-score');
var elNewBest = document.getElementById('pp-new-best');
var elFinalLevel = document.getElementById('pp-final-level');
var elFinalAccuracy = document.getElementById('pp-final-accuracy');
var elFinalStreak = document.getElementById('pp-final-streak');
var elFinalBest = document.getElementById('pp-final-best');
var elBestDisplay = document.getElementById('pp-best-display');
var elBestScore = document.getElementById('pp-best-score');
var elLevelToast = document.getElementById('pp-level-toast');
var btnStart = document.getElementById('pp-start-btn');
var btnResume = document.getElementById('pp-resume-btn');
var btnPlayAgain = document.getElementById('pp-play-again-btn');
var answerBtns = [
document.getElementById('pp-ans-0'),
document.getElementById('pp-ans-1'),
document.getElementById('pp-ans-2'),
document.getElementById('pp-ans-3')
];

/* ── SVG Shape Rendering ── */
function renderShape(shape, color, size, rotation) {
var vb = '0 0 60 60';
var inner = '';
if (shape === 'circle') {
var r = Math.round(size * 25 / 60);
inner = '<circle cx="30" cy="30" r="' + r + '" fill="' + color + '"/>';
} else if (shape === 'square') {
var half = Math.round(size * 50 / 60);
var off = Math.round((60 - half) / 2);
inner = '<rect x="' + off + '" y="' + off + '" width="' + half + '" height="' + half + '" fill="' + color + '" transform="rotate(' + rotation + ' 30 30)"/>';
} else if (shape === 'triangle') {
var h = Math.round(size * 50 / 60);
var topY = 30 - Math.round(h / 2);
var botY = 30 + Math.round(h / 2);
var leftX = 30 - Math.round(h / 2);
var rightX = 30 + Math.round(h / 2);
inner = '<polygon points="30,' + topY + ' ' + rightX + ',' + botY + ' ' + leftX + ',' + botY + '" fill="' + color + '" transform="rotate(' + rotation + ' 30 30)"/>';
}
return '<svg viewBox="' + vb + '" width="' + size + '" height="' + size + '">' + inner + '</svg>';
}

/* ── Level parameters ── */
function getDisplayTime(lvl) {
if (lvl <= 3) return 10000;
if (lvl <= 6) return 8000;
if (lvl <= 9) return 7000;
if (lvl <= 12) return 6000;
if (lvl <= 16) return 5000;
return 4000;
}

function getRoundsPerLevel(lvl) {
return 10 + lvl;
}

function getSeqLength(lvl) {
if (lvl <= 6) return 3;
if (lvl <= 12) return 4;
return 5;
}

function getDifficultyLabel(lvl) {
if (lvl <= 3) return 'Colors';
if (lvl <= 6) return 'Shapes';
if (lvl <= 9) return 'Color + Shape';
if (lvl <= 12) return 'Rotation';
if (lvl <= 16) return 'Size + Count';
return 'Multi-Attribute';
}

/* ── Utility ── */
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

function cloneEl(el) {
return { shape: el.shape, color: el.color, size: el.size, rotation: el.rotation };
}

function elEquals(a, b) {
return a.shape === b.shape && a.color === b.color && a.size === b.size && a.rotation === b.rotation;
}

/* ── Pattern Generation ── */
function generatePattern(lvl) {
var seqLen = getSeqLength(lvl);
var sequence = [];
var correct;

if (lvl <= 3) {
/* Single attribute: color changes in sequence */
var colorSeq = shuffle(COLORS.slice()).slice(0, seqLen + 1);
var baseShape = pick(SHAPES);
var baseSize = 45;
for (var i = 0; i <= seqLen; i++) {
sequence.push({ shape: baseShape, color: colorSeq[i % colorSeq.length], size: baseSize, rotation: 0 });
}
correct = sequence.pop();

} else if (lvl <= 6) {
/* Shape patterns: circle -> square -> triangle -> ... */
var baseColor = pick(COLORS);
var baseSize2 = 45;
for (var i = 0; i <= seqLen; i++) {
sequence.push({ shape: SHAPES[i % SHAPES.length], color: baseColor, size: baseSize2, rotation: 0 });
}
correct = sequence.pop();

} else if (lvl <= 9) {
/* 2-attribute: color + shape both change */
var colorPool = shuffle(COLORS.slice());
for (var i = 0; i <= seqLen; i++) {
sequence.push({
shape: SHAPES[i % SHAPES.length],
color: colorPool[i % colorPool.length],
size: 45,
rotation: 0
});
}
correct = sequence.pop();

} else if (lvl <= 12) {
/* Rotation patterns: shapes rotate 0 -> 90 -> 180 -> 270 */
var baseShape3 = pick(['square', 'triangle']);
var baseColor3 = pick(COLORS);
for (var i = 0; i <= seqLen; i++) {
sequence.push({
shape: baseShape3,
color: baseColor3,
size: 45,
rotation: ROTATIONS[i % ROTATIONS.length]
});
}
correct = sequence.pop();

} else if (lvl <= 16) {
/* Size + shape changes */
var colorBase = pick(COLORS);
for (var i = 0; i <= seqLen; i++) {
sequence.push({
shape: SHAPES[i % SHAPES.length],
color: colorBase,
size: SIZES[i % SIZES.length],
rotation: 0
});
}
correct = sequence.pop();

} else {
/* L17-20: 3 attributes changing (shape + color + size) */
var colorPool2 = shuffle(COLORS.slice());
for (var i = 0; i <= seqLen; i++) {
sequence.push({
shape: SHAPES[i % SHAPES.length],
color: colorPool2[i % colorPool2.length],
size: SIZES[i % SIZES.length],
rotation: ROTATIONS[i % ROTATIONS.length]
});
}
correct = sequence.pop();
}

return { sequence: sequence, correct: correct };
}

function generateWrongChoice(correct, lvl) {
var wrong = cloneEl(correct);
/* Pick a random attribute to alter */
var attrs = [];
if (lvl <= 3) {
attrs = ['color'];
} else if (lvl <= 6) {
attrs = ['shape'];
} else if (lvl <= 9) {
attrs = ['color', 'shape'];
} else if (lvl <= 12) {
attrs = ['rotation'];
} else if (lvl <= 16) {
attrs = ['size', 'shape'];
} else {
attrs = ['color', 'shape', 'size'];
}

var attr = pick(attrs);
var attempts = 0;
while (attempts < 20) {
if (attr === 'color') {
wrong.color = pick(COLORS);
} else if (attr === 'shape') {
wrong.shape = pick(SHAPES);
} else if (attr === 'size') {
wrong.size = pick(SIZES);
} else if (attr === 'rotation') {
wrong.rotation = pick(ROTATIONS);
}
if (!elEquals(wrong, correct)) return wrong;
attempts++;
}
/* Fallback: change color */
for (var c = 0; c < COLORS.length; c++) {
wrong.color = COLORS[c];
if (!elEquals(wrong, correct)) return wrong;
}
wrong.shape = SHAPES[(SHAPES.indexOf(correct.shape) + 1) % SHAPES.length];
return wrong;
}

function generateChoices(correct, lvl) {
var choices = [correct];
var attempts = 0;
while (choices.length < 4 && attempts < 100) {
var wrong = generateWrongChoice(correct, lvl);
var isDup = false;
for (var i = 0; i < choices.length; i++) {
if (elEquals(choices[i], wrong)) { isDup = true; break; }
}
if (!isDup) choices.push(wrong);
attempts++;
}
/* Fallback fill */
while (choices.length < 4) {
var fb = cloneEl(correct);
fb.color = COLORS[choices.length % COLORS.length];
fb.shape = SHAPES[choices.length % SHAPES.length];
choices.push(fb);
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
elBestScore.textContent = 'none yet';
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
elDifficultyBadge.textContent = getDifficultyLabel(state.level);
var roundsNeeded = getRoundsPerLevel(state.level);
var pct = Math.min((state.round / roundsNeeded) * 100, 100);
elProgressFill.style.width = pct + '%';
if (challenge.active) GK.updateChallengeBar('pp-playing', state.score, challenge.score);
}

/* ── Timer bar countdown ── */
function startTimerBar() {
var displayTime = getDisplayTime(state.level);
var startTime = Date.now();
elTimerFill.style.width = '100%';
elTimerFill.classList.remove('pp-timer-warning');

if (state.timerInterval) clearInterval(state.timerInterval);
state.timerInterval = setInterval(function() {
if (state.paused) return;
var elapsed = Date.now() - startTime;
var remaining = Math.max(0, 1 - elapsed / displayTime);
elTimerFill.style.width = (remaining * 100) + '%';
if (remaining < 0.3) {
elTimerFill.classList.add('pp-timer-warning');
}
if (remaining <= 0) {
clearInterval(state.timerInterval);
}
}, 50);
}

/* ── Show feedback flash ── */
function showFeedback(correct) {
elFeedbackFlash.className = 'pp-feedback-flash';
elFeedbackIcon.className = 'pp-feedback-icon';
void elFeedbackFlash.offsetWidth;
void elFeedbackIcon.offsetWidth;

if (correct) {
elFeedbackFlash.classList.add('pp-flash-correct');
elFeedbackIcon.textContent = '\u2713';
elFeedbackIcon.classList.add('pp-show-check');
} else {
elFeedbackFlash.classList.add('pp-flash-wrong');
elFeedbackIcon.textContent = '\u2717';
elFeedbackIcon.classList.add('pp-show-x');
}

setTimeout(function() {
elFeedbackFlash.className = 'pp-feedback-flash';
elFeedbackIcon.className = 'pp-feedback-icon';
}, 400);
}

/* ── Show level-up toast ── */
function showLevelToast(level) {
elLevelToast.textContent = 'Level ' + level + '!';
elLevelToast.classList.add('pp-toast-show');
setTimeout(function() {
elLevelToast.classList.remove('pp-toast-show');
}, 1500);
}

/* ── Flash answer button ── */
function flashAnswerBtn(idx, correct) {
answerBtns[idx].classList.add(correct ? 'pp-correct-flash' : 'pp-wrong-flash');
setTimeout(function() {
answerBtns[idx].classList.remove('pp-correct-flash', 'pp-wrong-flash');
}, 400);
}

/* ── Render sequence display ── */
function renderSequence(sequence) {
var html = '';
for (var i = 0; i < sequence.length; i++) {
var el = sequence[i];
html += '<div class="pp-seq-element">';
html += renderShape(el.shape, el.color, el.size, el.rotation);
html += '</div>';
if (i < sequence.length) {
html += '<div class="pp-seq-arrow">\u2192</div>';
}
}
/* Missing element placeholder */
html += '<div class="pp-seq-element pp-seq-missing">?</div>';
elSequenceRow.innerHTML = html;
}

/* ── Render choice buttons ── */
function renderChoices(choices) {
for (var i = 0; i < 4; i++) {
var el = choices[i];
answerBtns[i].innerHTML = renderShape(el.shape, el.color, el.size, el.rotation);
}
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

var correct = (chosenIdx === state.correctChoiceIdx);

state.totalAnswered++;
flashAnswerBtn(chosenIdx, correct);

if (correct) {
state.totalCorrect++;
var responseTime = Date.now() - state.roundStartTime;
var points = 100;
if (responseTime < 2000) {
points += Math.floor((2000 - responseTime) / 10);
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

var pattern = generatePattern(state.level);
var choices = generateChoices(pattern.correct, state.level);

/* Find correct choice index */
state.correctChoiceIdx = -1;
for (var i = 0; i < choices.length; i++) {
if (elEquals(choices[i], pattern.correct)) {
state.correctChoiceIdx = i;
break;
}
}

renderSequence(pattern.sequence);
renderChoices(choices);

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
var colors = ['#14b8a6','#ef4444','#22c55e','#3b82f6','#a855f7','#f97316'];
var container = document.createElement('div');
container.className = 'pp-confetti-container';
for (var i = 0; i < 20; i++) {
var piece = document.createElement('div');
piece.className = 'pp-confetti-piece';
piece.style.left = Math.random() * 100 + '%';
piece.style.background = colors[Math.floor(Math.random() * colors.length)];
piece.style.animationDelay = (Math.random() * 0.8) + 's';
piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
piece.style.width = (6 + Math.random() * 8) + 'px';
piece.style.height = piece.style.width;
container.appendChild(piece);
}
var glow = document.createElement('div');
glow.className = 'pp-glow-flash';
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

var trophy = document.querySelector('.pp-trophy');
var title = document.querySelector('#pp-complete-overlay .pp-complete-card h2');

if (isNewBest) {
showConfetti();
trophy.textContent = '\uD83C\uDF89';
title.textContent = 'AMAZING!';
elNewBest.className = 'pp-new-best-enhanced';
elNewBest.innerHTML = '\uD83C\uDF1F AMAZING! New Best!';
elNewBest.style.display = 'inline-block';
} else {
trophy.textContent = '\uD83C\uDFC6';
title.textContent = 'Good Job!';
elNewBest.className = 'pp-new-best';
elNewBest.style.display = 'none';
}

elFinalLevel.textContent = state.level;
elFinalAccuracy.textContent = accuracy + '%';
elFinalStreak.textContent = state.bestStreak;
elFinalBest.textContent = best.toLocaleString();

GK.renderChallengeResult('pp-challenge-result', state.score, challenge);

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
var PP_WIZARD_STEPS = [
{icon: '\uD83E\uDDE9', title: 'Spot the pattern', desc: 'A sequence of shapes appears with one missing element. Identify the pattern!'},
{icon: '\uD83C\uDFA8', title: 'Attributes change', desc: 'Patterns involve color, shape, size, and rotation. Higher levels combine multiple attributes.'},
{icon: '\u26A1', title: 'Be fast!', desc: 'Pick the correct shape before time runs out. Speed and streaks earn bonus points!', final: true}
];
var ppWizardStep = 0;

function renderWizardStep() {
var s = PP_WIZARD_STEPS[ppWizardStep];
var dotsHtml = '';
for (var i = 0; i < PP_WIZARD_STEPS.length; i++) {
dotsHtml += '<div class="pp-wizard-dot' + (i === ppWizardStep ? ' active' : '') + '"></div>';
}
var btnLabel = s.final ? 'Start Playing' : 'Next';
elWizardCard.innerHTML =
'<div class="pp-wizard-icon">' + s.icon + '</div>' +
'<div class="pp-wizard-title">' + s.title + '</div>' +
'<div class="pp-wizard-desc">' + s.desc + '</div>' +
'<div class="pp-wizard-dots">' + dotsHtml + '</div>' +
'<button class="pp-wizard-btn" id="pp-wizard-next">' + btnLabel + '</button>';
elWizardCard.style.animation = 'none';
void elWizardCard.offsetWidth;
elWizardCard.style.animation = 'pp-wizard-enter 0.3s ease-out';
document.getElementById('pp-wizard-next').addEventListener('click', advanceWizard);
}

function advanceWizard() {
if (ppWizardStep < PP_WIZARD_STEPS.length - 1) {
ppWizardStep++;
renderWizardStep();
} else {
startPlaying();
}
}

function showWizard() {
ppWizardStep = 0;
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
state.correctChoiceIdx = -1;
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
GK.renderChallengeBar('pp-playing', challenge);
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

document.getElementById('pp-finish-btn').addEventListener('click', function() {
endGame();
});

document.getElementById('pp-share-btn').addEventListener('click', function() {
GK.shareResult(state.score, 'Pattern Path', '/games/pattern-path/', 'pp-share-copied');
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
GK.renderChallengeBanner('pp-challenge-banner-wrap', challenge);
showScreen('instructions');

})();
</script>
