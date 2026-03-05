---
title: "Méditations Guidées"
description: "Méditations guidées gratuites pour le calme, la concentration, le sommeil, l'énergie et le bien-être. Appuyez pour commencer, aucun compte nécessaire."
full_width: true
language: "fr"
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
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
}
.mh-card {
display: block;
text-decoration: none;
color: inherit;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 1rem;
padding: 1.75rem;
transition: transform 0.3s, box-shadow 0.3s;
position: relative;
overflow: hidden;
}
[data-theme="dark"] .mh-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.mh-card:hover {
transform: translateY(-4px);
box-shadow: 0 12px 28px rgba(0,0,0,0.12);
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
width: 3rem;
height: 3rem;
border-radius: 50%;
margin-bottom: 1rem;
}
.mh-card h2 {
font-size: 1.35rem;
font-weight: 700;
margin-bottom: 0.375rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .mh-card h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.mh-card .mh-sub {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.5;
margin-bottom: 0.75rem;
}
[data-theme="dark"] .mh-card .mh-sub {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.mh-card .mh-dur {
font-size: 0.8rem;
font-weight: 600;
color: var(--color-text-muted, #6b7788);
}
[data-theme="dark"] .mh-card .mh-dur {
color: var(--color-dark-text-muted, #94a3b8);
}
.mh-play {
display: inline-flex;
align-items: center;
gap: 0.4rem;
font-weight: 600;
font-size: 0.9375rem;
color: var(--color-primary, #0f9072);
margin-top: 0.5rem;
}
.mh-play::after {
content: '\2192';
transition: transform 0.2s;
}
.mh-card:hover .mh-play::after {
transform: translateX(4px);
}
</style>

<div id="meditate-hub">
<div class="mh-header">
<h1>Méditations Guidées</h1>
<p>Choisissez une méditation et appuyez pour commencer. Aucun compte nécessaire.</p>
</div>

<div class="mh-grid">
<a href="/fr/meditate/calm-and-stress-relief/" class="mh-card" style="--accent:#818cf8">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#818cf8,#a78bfa)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#818cf8,#a78bfa)"></div>
<h2>Calme et Soulagement du Stress</h2>
<p class="mh-sub">Relâchez les tensions et revenez au souffle</p>
<span class="mh-dur">5 min</span>
<div class="mh-play">Commencer</div>
</a>

<a href="/fr/meditate/focus-and-clarity/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#3b82f6,#1e40af)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#3b82f6,#1e40af)"></div>
<h2>Concentration et Clarté</h2>
<p class="mh-sub">Aiguisez votre attention et dissipez le brouillard mental</p>
<span class="mh-dur">5 min</span>
<div class="mh-play">Commencer</div>
</a>

<a href="/fr/meditate/sleep-and-wind-down/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#6366f1,#4338ca)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#6366f1,#4338ca)"></div>
<h2>Sommeil et Détente</h2>
<p class="mh-sub">Calmez votre esprit et préparez-vous pour un sommeil réparateur</p>
<span class="mh-dur">7 min</span>
<div class="mh-play">Commencer</div>
</a>

<a href="/fr/meditate/morning-energy/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#f59e0b,#d97706)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#f59e0b,#d97706)"></div>
<h2>Énergie Matinale</h2>
<p class="mh-sub">Commencez votre journée avec vitalité et intention</p>
<span class="mh-dur">5 min</span>
<div class="mh-play">Commencer</div>
</a>

<a href="/fr/meditate/loving-kindness/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#f472b6,#ec4899)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#f472b6,#ec4899)"></div>
<h2>Bienveillance</h2>
<p class="mh-sub">Cultivez la compassion envers vous-même et les autres</p>
<span class="mh-dur">6 min</span>
<div class="mh-play">Commencer</div>
</a>

<a href="/fr/meditate/gratitude/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#fbbf24,#f59e0b)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#fbbf24,#f59e0b)"></div>
<h2>Gratitude</h2>
<p class="mh-sub">Appréciez ce que vous avez et trouvez la joie dans le présent</p>
<span class="mh-dur">5 min</span>
<div class="mh-play">Commencer</div>
</a>

<a href="/fr/meditate/body-scan-and-tension-release/" class="mh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#2dd4bf,#14b8a6)"></div>
<div class="mh-dot" style="background:linear-gradient(135deg,#2dd4bf,#14b8a6)"></div>
<h2>Scan Corporel</h2>
<p class="mh-sub">Parcourez votre corps pour détecter les tensions et les relâcher</p>
<span class="mh-dur">8 min</span>
<div class="mh-play">Commencer</div>
</a>
</div>
</div>
