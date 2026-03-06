---
title: "Meditacoes Guiadas"
description: "Meditacoes guiadas gratuitas para calma, foco, sono, energia e bem-estar. Toque para comecar, nao e necessario criar conta."
full_width: true
language: "pt"
---

<style>
#meditate-hub {
max-width: 64rem;
margin: 0 auto;
padding: 2rem 1rem 4rem;
}
#meditate-hub .mh-header {
text-align: center;
margin-bottom: 3rem;
}
#meditate-hub .mh-header h1 {
font-size: clamp(1.75rem, 4vw, 2.5rem);
font-weight: 700;
margin-bottom: 0.75rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] #meditate-hub .mh-header h1 {
color: var(--color-dark-text-primary, #f9fafb);
}
#meditate-hub .mh-header p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 1.125rem;
max-width: 36rem;
margin: 0 auto;
}
[data-theme="dark"] #meditate-hub .mh-header p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.mh-grid {
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
}
.mh-card {
display: grid;
grid-template-columns: 2.5rem 1fr;
column-gap: 0.875rem;
text-decoration: none;
color: inherit;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 1rem;
padding: 1.25rem;
transition: transform 0.3s, box-shadow 0.3s;
position: relative;
overflow: hidden;
}
[data-theme="dark"] .mh-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.mh-card:hover {
transform: none;
}
.mh-card::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
height: 4px;
}
.mh-dot {
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
margin-bottom: 0;
grid-column: 1;
grid-row: 1;
align-self: center;
}
.mh-card h2 {
font-size: 1.35rem;
font-weight: 700;
margin-bottom: 0.375rem;
color: var(--color-text-primary, #1a2332);
grid-column: 2;
grid-row: 1;
align-self: center;
}
.mh-card .mh-sub,
.mh-card .mh-play {
grid-column: 1 / -1;
}
[data-theme="dark"] .mh-card h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.mh-card .mh-sub {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.5;
margin-bottom: 0.375rem;
}
[data-theme="dark"] .mh-card .mh-sub {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.mh-card .mh-dur {
font-size: 0.8rem;
font-weight: 600;
color: var(--color-text-muted, #6b7788);
margin-left: auto;
}
[data-theme="dark"] .mh-card .mh-dur {
color: var(--color-dark-text-muted, #94a3b8);
}
.mh-play {
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 600;
font-size: 0.9375rem;
color: var(--color-primary, #0f9072);
margin-top: 0.25rem;
min-height: 44px;
}
/* ── 480px+ ── */
@media (min-width: 480px) {
.mh-grid {
grid-template-columns: repeat(2, 1fr);
gap: 1.25rem;
}
.mh-card {
padding: 1.5rem;
}
}
/* ── 768px+ ── */
@media (min-width: 768px) {
.mh-grid {
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
}
.mh-card {
padding: 1.75rem;
grid-template-columns: 3rem 1fr;
}
.mh-dot {
width: 3rem;
height: 3rem;
}
}
/* ── Hover (pointer devices only) ── */
@media (hover: hover) and (pointer: fine) {
.mh-card:hover {
transform: translateY(-4px);
box-shadow: 0 12px 28px rgba(0,0,0,0.12);
}
.mh-card:hover .mh-play {
color: var(--color-primary-hover, #0d7d63);
}
}
@media (prefers-reduced-motion: reduce) {
.mh-card {
transition: none;
}
}
</style>

<div id="meditate-hub">
<div class="mh-header">
<h1>Meditacoes Guiadas</h1>
<p>Grátis e sem anúncios irritantes. Toque para começar, sem necessidade de conta.</p>
</div>

<div class="mh-grid">
<a href="/pt/meditate/calm-and-stress-relief/" class="mh-card" style="--accent:#818cf8">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#818cf8,#a78bfa)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#818cf8,#a78bfa)"></div>
<h2>Calma e Alivio do Estresse</h2>
<p class="mh-sub">Libere a tensao e retorne a respiracao</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">5 min</span></div>
</a>

<a href="/pt/meditate/focus-and-clarity/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#3b82f6,#1e40af)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#3b82f6,#1e40af)"></div>
<h2>Foco e Clareza</h2>
<p class="mh-sub">Aguce sua atencao e limpe a nevoa mental</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">5 min</span></div>
</a>

<a href="/pt/meditate/sleep-and-wind-down/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#6366f1,#4338ca)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#6366f1,#4338ca)"></div>
<h2>Sono e Relaxamento</h2>
<p class="mh-sub">Acalme sua mente e prepare-se para um sono reparador</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">7 min</span></div>
</a>

<a href="/pt/meditate/morning-energy/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#f59e0b,#d97706)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#f59e0b,#d97706)"></div>
<h2>Energia Matinal</h2>
<p class="mh-sub">Comece seu dia com vitalidade e intencao</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">5 min</span></div>
</a>

<a href="/pt/meditate/loving-kindness/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#f472b6,#ec4899)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#f472b6,#ec4899)"></div>
<h2>Bondade Amorosa</h2>
<p class="mh-sub">Cultive compaixao por si mesmo e pelos outros</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">6 min</span></div>
</a>

<a href="/pt/meditate/gratitude/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#fbbf24,#f59e0b)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#fbbf24,#f59e0b)"></div>
<h2>Gratidao</h2>
<p class="mh-sub">Aprecie o que voce tem e encontre alegria no presente</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">5 min</span></div>
</a>

<a href="/pt/meditate/body-scan-and-tension-release/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#2dd4bf,#14b8a6)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#2dd4bf,#14b8a6)"></div>
<h2>Escaneamento Corporal</h2>
<p class="mh-sub">Escaneie seu corpo em busca de tensoes e libere-as</p>
<div class="mh-play"><span>Comecar &rarr;</span><span class="mh-dur">8 min</span></div>
</a>
</div>
</div>
