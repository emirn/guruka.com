---
title: "GURUKA - Train Your Brain, Sharpen Your Mind"
description: "Brain training games and guided meditations to improve memory, focus, and mental clarity. Play daily and track your progress."
full_width: true
blog_grid: true
blog_grid_title: "From the Blog"
blog_grid_limit: 3
---

<style>
/* ── Base (mobile, <480px) ── */
.gk-section {
padding: 1.75rem 1rem 1.25rem;
max-width: 72rem;
margin: 0 auto;
}
.gk-section-muted {
background: var(--color-bg-secondary, #f0f4f8);
}
[data-theme="dark"] .gk-section-muted {
background: var(--color-dark-bg-secondary, #1e293b);
}
.gk-section-header {
text-align: center;
margin-bottom: 1.5rem;
}
.gk-section-header h2 {
font-size: clamp(1.5rem, 3vw, 2.25rem);
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-section-header h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-section-header p {
color: var(--color-text-secondary, #4b5b6d);
max-width: 36rem;
margin: 0 auto;
}
[data-theme="dark"] .gk-section-header p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-free-tag {
font-size: 0.85rem;
color: var(--color-primary, #0f9072);
font-weight: 500;
margin: 0.25rem auto 0;
}
.gk-cards {
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
max-width: 60rem;
margin: 0 auto;
}
.gk-card {
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
padding: 1.25rem;
transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
text-decoration: none;
color: inherit;
display: grid;
grid-template-columns: 2.75rem 1fr;
column-gap: 0.875rem;
}
[data-theme="dark"] .gk-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08);
}
.gk-card-icon {
width: 2.75rem;
height: 2.75rem;
border-radius: 0.75rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
margin-bottom: 0;
grid-column: 1;
grid-row: 1;
align-self: center;
}
.gk-card h3 {
font-size: clamp(1.1rem, 2.5vw, 1.25rem);
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
grid-column: 2;
grid-row: 1;
align-self: center;
}
.gk-card p {
grid-column: 1 / -1;
}
[data-theme="dark"] .gk-card h3 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-card p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.5;
margin: 0;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
[data-theme="dark"] .gk-card p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-med-cards {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.75rem;
max-width: 60rem;
margin: 0 auto;
}
.gk-med-card {
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
padding: 0.875rem;
min-height: 44px;
transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
text-decoration: none;
color: inherit;
display: flex;
align-items: center;
gap: 0.75rem;
}
[data-theme="dark"] .gk-med-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08);
}
.gk-med-dot {
width: 2rem;
height: 2rem;
border-radius: 50%;
flex-shrink: 0;
}
.gk-med-card span {
font-size: 0.9rem;
font-weight: 600;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-med-card span {
color: var(--color-dark-text-primary, #f9fafb);
}
/* ── 480px+ (large phones) ── */
@media (min-width: 480px) {
.gk-section {
padding: 2rem 1rem 1.5rem;
}
.gk-med-cards {
grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}
.gk-med-dot {
width: 2.25rem;
height: 2.25rem;
}
.gk-med-card {
padding: 1rem;
}
.gk-med-card span {
font-size: 1rem;
}
.gk-card {
padding: 1.5rem;
grid-template-columns: 3rem 1fr;
}
.gk-card-icon {
width: 3rem;
height: 3rem;
}
}
/* ── 768px+ (tablets) ── */
@media (min-width: 768px) {
.gk-section {
padding: 2.5rem 1.5rem 2rem;
}
.gk-section-header {
margin-bottom: 2.5rem;
}
.gk-med-cards {
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 1.25rem;
}
.gk-med-dot {
width: 2.5rem;
height: 2.5rem;
}
.gk-med-card {
padding: 1.25rem;
}
.gk-cards {
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1.5rem;
}
.gk-card p {
-webkit-line-clamp: unset;
overflow: visible;
}
}
/* ── 1024px+ (desktop) ── */
@media (min-width: 1024px) {
.gk-section {
padding: 3rem 1rem 2rem;
}
}
/* ── Hover effects (pointer devices only) ── */
@media (hover: hover) and (pointer: fine) {
.gk-card:hover {
transform: translateY(-4px);
box-shadow: 0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
border-color: rgba(15, 144, 114, 0.3);
}
.gk-med-card:hover {
transform: translateY(-3px);
box-shadow: 0 6px 24px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.03);
border-color: rgba(15, 144, 114, 0.3);
}
[data-theme="dark"] .gk-card:hover {
box-shadow: 0 8px 30px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.12);
border-color: rgba(15, 144, 114, 0.4);
}
[data-theme="dark"] .gk-med-card:hover {
box-shadow: 0 6px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.1);
border-color: rgba(15, 144, 114, 0.4);
}
}
/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
.gk-card,
.gk-med-card {
transition: none;
}
}
</style>

<div class="gk-section">
<div class="gk-section-header">
<h2>Meditate</h2>
<p>Guided meditations for calm, focus, and well-being</p>
<p class="gk-free-tag">Free and without annoying ads</p>
</div>
<div class="gk-med-cards">
<a href="/meditate/calm-and-stress-relief/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #818cf8, #a78bfa);"></div>
<span>Calm & Stress Relief</span>
</a>
<a href="/meditate/focus-and-clarity/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #3b82f6, #1e40af);"></div>
<span>Focus & Clarity</span>
</a>
<a href="/meditate/sleep-and-wind-down/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #6366f1, #4338ca);"></div>
<span>Sleep & Wind Down</span>
</a>
<a href="/meditate/morning-energy/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #f59e0b, #d97706);"></div>
<span>Morning Energy</span>
</a>
<a href="/meditate/loving-kindness/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #f472b6, #ec4899);"></div>
<span>Loving Kindness</span>
</a>
<a href="/meditate/gratitude/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);"></div>
<span>Gratitude</span>
</a>
<a href="/meditate/body-scan-and-tension-release/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #2dd4bf, #14b8a6);"></div>
<span>Body Scan</span>
</a>
</div>
</div>

<div class="gk-section-muted">
<div class="gk-section">
<div class="gk-section-header">
<h2>Train Brain and Memory</h2>
<p>Train your brain with seven games targeting different cognitive skills</p>
<p class="gk-free-tag">Free and without annoying ads</p>
</div>
<div class="gk-cards">
<a href="/games/speed-match/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(15,144,114,0.1); color: #0f9072;">&#9889;</div>
<h3>Speed Match</h3>
<p>Boost processing speed with fast-paced symbol matching</p>
</a>
<a href="/games/memory-matrix/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(245,158,11,0.1); color: #f59e0b;">&#9638;</div>
<h3>Memory Matrix</h3>
<p>Strengthen spatial memory by recalling grid patterns</p>
</a>
<a href="/games/sequence-recall/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(16,185,129,0.1); color: #10b981;">&#9776;</div>
<h3>Sequence Recall</h3>
<p>Train working memory with dual-track sequences</p>
</a>
<a href="/games/number-crunch/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(99,102,241,0.1); color: #6366f1;">&#129518;</div>
<h3>Number Crunch</h3>
<p>Sharpen mental arithmetic with timed equations and rule modifiers</p>
</a>
<a href="/games/color-clash/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(236,72,153,0.1); color: #ec4899;">&#127912;</div>
<h3>Color Clash</h3>
<p>Build inhibitory control with Stroop-based color challenges</p>
</a>
<a href="/games/quick-sort/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(249,115,22,0.1); color: #f97316;">&#128451;</div>
<h3>Quick Sort</h3>
<p>Improve task switching by sorting items under changing rules</p>
</a>
<a href="/games/pattern-path/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(20,184,166,0.1); color: #14b8a6;">&#129513;</div>
<h3>Pattern Path</h3>
<p>Develop pattern recognition with visual sequence puzzles</p>
</a>
</div>
</div>
</div>

<div class="gk-section">
<div class="gk-section-header">
<h2>Meditative Visuals</h2>
<p>Calming full-screen animations for relaxation and focus</p>
<p class="gk-free-tag">Free and without annoying ads</p>
</div>
<div class="gk-med-cards">
<a href="/visuals/breathing-orb/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #6366f1, #a78bfa);"></div>
<span>Breathing Orb</span>
</a>
<a href="/visuals/aurora/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #22d3ee, #06b6d4);"></div>
<span>Aurora</span>
</a>
<a href="/visuals/starfield/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #1e293b, #475569);"></div>
<span>Starfield</span>
</a>
<a href="/visuals/lava-flow/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #f97316, #ef4444);"></div>
<span>Lava Flow</span>
</a>
<a href="/visuals/mandala/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #eab308, #a855f7);"></div>
<span>Mandala</span>
</a>
<a href="/visuals/dividing-cells/" class="gk-med-card">
<div class="gk-med-dot" style="background: linear-gradient(135deg, #10b981, #22d3ee);"></div>
<span>Dividing Cells</span>
</a>
</div>
</div>
