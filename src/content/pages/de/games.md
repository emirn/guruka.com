---
title: "Gehirntraining-Spiele"
description: "Spielen Sie kostenlose Gehirntraining-Spiele zur Verbesserung von Gedächtnis, Verarbeitungsgeschwindigkeit und geistiger Agilität. Sieben Spiele mit adaptiver Schwierigkeit."
full_width: true
language: "de"
---

<style>
#games-hub {
max-width: 64rem;
margin: 0 auto;
padding: 2rem 1rem 4rem;
}
#games-hub .gh-header {
text-align: center;
margin-bottom: 3rem;
}
#games-hub .gh-header h1 {
font-size: clamp(1.75rem, 4vw, 2.5rem);
font-weight: 700;
margin-bottom: 0.75rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] #games-hub .gh-header h1 {
color: var(--color-dark-text-primary, #f9fafb);
}
#games-hub .gh-header p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 1.125rem;
max-width: 36rem;
margin: 0 auto;
}
[data-theme="dark"] #games-hub .gh-header p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gh-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
margin-bottom: 3rem;
}
.gh-game-card {
display: block;
text-decoration: none;
color: inherit;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 1rem;
padding: 2rem;
transition: transform 0.3s, box-shadow 0.3s;
position: relative;
overflow: hidden;
}
[data-theme="dark"] .gh-game-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.gh-game-card:hover {
transform: none;
}
.gh-game-card::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
height: 4px;
}
.gh-game-card.speed-match::before { background: #0f9072; }
.gh-game-card.memory-matrix::before { background: #f59e0b; }
.gh-game-card.sequence-recall::before { background: #10b981; }
.gh-game-card.number-crunch::before { background: #6366f1; }
.gh-game-card.color-clash::before { background: #ec4899; }
.gh-game-card.quick-sort::before { background: #f97316; }
.gh-game-card.pattern-path::before { background: #14b8a6; }
.gh-game-icon {
width: 4rem;
height: 4rem;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.75rem;
margin-bottom: 1.25rem;
}
.gh-game-card h2 {
font-size: 1.5rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gh-game-card h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gh-game-card .gh-skill {
display: inline-block;
font-size: 0.75rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
padding: 0.25rem 0.75rem;
border-radius: 9999px;
margin-bottom: 0.75rem;
}
.speed-match .gh-skill { background: rgba(15,144,114,0.1); color: #0f9072; }
.memory-matrix .gh-skill { background: rgba(245,158,11,0.1); color: #f59e0b; }
.sequence-recall .gh-skill { background: rgba(16,185,129,0.1); color: #10b981; }
.number-crunch .gh-skill { background: rgba(99,102,241,0.1); color: #6366f1; }
.color-clash .gh-skill { background: rgba(236,72,153,0.1); color: #ec4899; }
.quick-sort .gh-skill { background: rgba(249,115,22,0.1); color: #f97316; }
.pattern-path .gh-skill { background: rgba(20,184,166,0.1); color: #14b8a6; }
.gh-game-card .gh-desc {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.6;
margin-bottom: 1.25rem;
}
[data-theme="dark"] .gh-game-card .gh-desc {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gh-play-btn {
display: inline-flex;
align-items: center;
gap: 0.5rem;
font-weight: 600;
font-size: 0.9375rem;
color: var(--color-primary, #0f9072);
}
.gh-play-btn::after {
content: '\2192';
transition: transform 0.2s;
}
.gh-play-btn {
min-height: 44px;
}
.gh-best {
margin-top: 0.75rem;
padding-top: 0.75rem;
border-top: 1px solid var(--color-border, #dfe4ea);
font-size: 0.8125rem;
color: var(--color-text-secondary, #4b5b6d);
}
[data-theme="dark"] .gh-best {
border-color: var(--color-dark-border, #334155);
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gh-best strong {
color: var(--color-primary, #0f9072);
}
.gh-info {
text-align: center;
padding: 2rem;
background: var(--color-bg-secondary, #f0f4f8);
border-radius: 1rem;
}
[data-theme="dark"] .gh-info {
background: var(--color-dark-bg-secondary, #1e293b);
}
.gh-info h3 {
font-size: 1.25rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gh-info h3 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gh-info p {
color: var(--color-text-secondary, #4b5b6d);
max-width: 32rem;
margin: 0 auto;
font-size: 0.9375rem;
}
[data-theme="dark"] .gh-info p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
</style>

<div id="games-hub">
<div class="gh-header">
<h1>&#129504; Gehirntraining-Spiele</h1>
<p>Wähle ein Spiel und beginne das Training. Deine Punkte werden lokal gespeichert – kein Konto nötig.</p>
</div>

<div class="gh-grid">
<a href="/de/games/speed-match/" class="gh-game-card speed-match">
<div class="gh-game-icon" style="background: rgba(15,144,114,0.1); color: #0f9072;">&#9889;</div>
<h2>Speed Match</h2>
<span class="gh-skill">Verarbeitungsgeschwindigkeit</span>
<p class="gh-desc">Teste deine Verarbeitungsgeschwindigkeit durch Vergleichen von Symbolen. Ist das aktuelle Symbol dasselbe wie das vorherige? Reagiere schnell, bevor die Zeit abläuft!</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-speed-match"></div>
</a>

<a href="/de/games/memory-matrix/" class="gh-game-card memory-matrix">
<div class="gh-game-icon" style="background: rgba(245,158,11,0.1); color: #f59e0b;">&#9638;</div>
<h2>Memory Matrix</h2>
<span class="gh-skill">Räumliches Gedächtnis</span>
<p class="gh-desc">Beobachte ein Muster von hervorgehobenen Zellen in einem Raster und erstelle es dann aus dem Gedächtnis nach. Das Raster wird größer und die Muster komplexer, je höher du aufsteigst.</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-memory-matrix"></div>
</a>

<a href="/de/games/sequence-recall/" class="gh-game-card sequence-recall">
<div class="gh-game-icon" style="background: rgba(16,185,129,0.1); color: #10b981;">&#9776;</div>
<h2>Sequence Recall</h2>
<span class="gh-skill">Arbeitsgedächtnis</span>
<p class="gh-desc">Merke dir eine Sequenz von Farben, die einzeln angezeigt werden, und rufe sie dann in der richtigen Reihenfolge ab. Höhere Level fügen mathematische Ablenkungen und Zwei-Spuren-Herausforderungen hinzu.</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-sequence-recall"></div>
</a>

<a href="/de/games/number-crunch/" class="gh-game-card number-crunch">
<div class="gh-game-icon" style="background: rgba(99,102,241,0.1); color: #6366f1;">&#129518;</div>
<h2>Number Crunch</h2>
<span class="gh-skill">Kopfrechnen</span>
<p class="gh-desc">Löse Gleichungen mit fehlenden Elementen unter Zeitdruck. Höhere Level fügen Regelmodifikatoren hinzu, die eine mentale Umwandlung deiner Antworten erfordern.</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-number-crunch"></div>
</a>

<a href="/de/games/color-clash/" class="gh-game-card color-clash">
<div class="gh-game-icon" style="background: rgba(236,72,153,0.1); color: #ec4899;">&#127912;</div>
<h2>Color Clash</h2>
<span class="gh-skill">Inhibitorische Kontrolle</span>
<p class="gh-desc">Ein Farbwort erscheint in einer anderen Tintenfarbe. Tippe die richtige Antwort basierend auf der aktuellen Regel – Tintenfarbe oder Wortbedeutung. Die Regeln wechseln!</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-color-clash"></div>
</a>

<a href="/de/games/quick-sort/" class="gh-game-card quick-sort">
<div class="gh-game-icon" style="background: rgba(249,115,22,0.1); color: #f97316;">&#128451;</div>
<h2>Quick Sort</h2>
<span class="gh-skill">Aufgabenwechsel</span>
<p class="gh-desc">Sortiere Elemente in Kategorien durch Wischen nach links oder rechts. Die Sortierregel ändert sich alle paar Runden und fordert deine mentale Flexibilität heraus.</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-quick-sort"></div>
</a>

<a href="/de/games/pattern-path/" class="gh-game-card pattern-path">
<div class="gh-game-icon" style="background: rgba(20,184,166,0.1); color: #14b8a6;">&#129513;</div>
<h2>Pattern Path</h2>
<span class="gh-skill">Mustererkennung</span>
<p class="gh-desc">Finde das fehlende Teil in einer Sequenz visueller Muster. Formen ändern sich in Farbe, Größe und Drehung – erkenne die Regel und wähle die richtige Ergänzung.</p>
<span class="gh-play-btn">Jetzt spielen</span>
<div class="gh-best" id="best-pattern-path"></div>
</a>
</div>

<div class="gh-info">
<h3>So funktioniert's</h3>
<p>Jedes Spiel passt sich mit 20 Schwierigkeitsstufen an dein Können an. Trainiere täglich 15-20 Minuten über alle sieben Spiele hinweg für die besten Ergebnisse. Deine persönlichen Bestleistungen werden in deinem Browser gespeichert.</p>
</div>
</div>

<script>
(function() {
var games = ['speed-match', 'memory-matrix', 'sequence-recall', 'number-crunch', 'color-clash', 'quick-sort', 'pattern-path'];
games.forEach(function(game) {
var best = localStorage.getItem('guruka_' + game + '_best');
var el = document.getElementById('best-' + game);
if (el && best) {
el.innerHTML = 'Persönlicher Rekord: <strong>' + Number(best).toLocaleString() + '</strong> points';
}
});
})();
</script>

<style>
/* ── Mobile-first responsive ── */
.gh-game-card {
padding: 1.5rem;
}
.gh-game-icon {
width: 3.25rem;
height: 3.25rem;
}
.gh-game-card .gh-desc {
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
@media (min-width: 768px) {
.gh-game-card {
padding: 2rem;
}
.gh-game-icon {
width: 4rem;
height: 4rem;
}
.gh-game-card .gh-desc {
-webkit-line-clamp: unset;
overflow: visible;
}
}
@media (hover: hover) and (pointer: fine) {
.gh-game-card:hover {
transform: translateY(-6px);
box-shadow: 0 16px 32px rgba(0,0,0,0.12);
}
.gh-game-card:hover .gh-play-btn::after {
transform: translateX(4px);
}
}
@media (prefers-reduced-motion: reduce) {
.gh-game-card {
transition: none;
}
}
</style>
