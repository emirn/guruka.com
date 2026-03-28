---
title: "Orbe de Respiration - Visuel avec Affirmations"
description: "Un orbe pulsant qui guide votre rythme respiratoire. Ajoutez votre propre texte d'affirmation, stocké en privé dans votre navigateur."
full_width: true
language: "fr"
---
<style>
#visual-page {
max-width: 40rem;
margin: 0 auto;
padding: 2rem 1rem 4rem;
text-align: center;
}
.vp-back {
display: inline-flex;
align-items: center;
gap: 0.375rem;
font-size: 0.9375rem;
color: var(--color-text-secondary, #4b5b6d);
text-decoration: none;
margin-bottom: 1.5rem;
}
[data-theme="dark"] .vp-back {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-back:hover { color: var(--color-primary, #0f9072); }
.vp-title {
font-size: clamp(1.75rem, 4vw, 2.25rem);
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .vp-title {
color: var(--color-dark-text-primary, #f9fafb);
}
.vp-desc {
color: var(--color-text-secondary, #4b5b6d);
font-size: 1rem;
max-width: 28rem;
margin: 0 auto 2rem;
line-height: 1.6;
}
[data-theme="dark"] .vp-desc {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-schemes {
display: flex;
justify-content: center;
gap: 1rem;
margin-bottom: 2rem;
flex-wrap: wrap;
}
.vp-scheme {
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
cursor: pointer;
background: none;
border: 3px solid transparent;
border-radius: 1rem;
padding: 0.75rem 1rem;
transition: border-color 0.2s;
}
.vp-scheme[aria-pressed="true"] {
border-color: var(--color-primary, #0f9072);
}
.vp-scheme-dot {
width: 3rem;
height: 3rem;
border-radius: 50%;
}
.vp-scheme span {
font-size: 0.8125rem;
font-weight: 600;
color: var(--color-text-secondary, #4b5b6d);
}
[data-theme="dark"] .vp-scheme span {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-start {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
background: var(--color-primary, #0f9072);
color: #fff;
border: none;
border-radius: 0.75rem;
padding: 1rem 2.5rem;
font-size: 1.125rem;
font-weight: 600;
cursor: pointer;
transition: background 0.2s;
min-height: 56px;
}
.vp-start:hover { background: #0d7d63; }
#vp-fullscreen {
position: fixed;
inset: 0;
z-index: 9999;
background: #0a0a1a;
}
#vp-canvas {
display: block;
width: 100%;
height: 100%;
}
#vp-hint {
position: absolute;
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
color: rgba(255,255,255,0.5);
font-size: 0.875rem;
pointer-events: none;
transition: opacity 1s;
}
@media (prefers-reduced-motion: reduce) {
.vp-scheme, .vp-start { transition: none; }
}
.vp-affirmation {
margin-bottom: 2rem;
text-align: left;
max-width: 28rem;
margin-left: auto;
margin-right: auto;
}
.vp-aff-label {
display: block;
font-size: 0.875rem;
font-weight: 600;
color: var(--color-text-secondary, #4b5b6d);
margin-bottom: 0.5rem;
}
[data-theme="dark"] .vp-aff-label {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-aff-textarea {
width: 100%;
padding: 0.75rem;
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
font-size: 1rem;
font-family: inherit;
resize: vertical;
background: var(--color-bg-primary, #fff);
color: var(--color-text-primary, #1a2332);
box-sizing: border-box;
}
[data-theme="dark"] .vp-aff-textarea {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
color: var(--color-dark-text-primary, #f9fafb);
}
.vp-pace {
margin-bottom: 2rem;
max-width: 28rem;
margin-left: auto;
margin-right: auto;
}
.vp-pace-label {
display: flex;
justify-content: space-between;
align-items: center;
font-size: 0.875rem;
font-weight: 600;
color: var(--color-text-secondary, #4b5b6d);
margin-bottom: 0.5rem;
}
[data-theme="dark"] .vp-pace-label {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-pace-label span {
font-weight: 400;
font-size: 0.8125rem;
}
.vp-pace-slider {
width: 100%;
height: 6px;
-webkit-appearance: none;
appearance: none;
background: var(--color-border, #dfe4ea);
border-radius: 3px;
outline: none;
cursor: pointer;
}
[data-theme="dark"] .vp-pace-slider {
background: var(--color-dark-border, #334155);
}
.vp-pace-slider::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
width: 20px;
height: 20px;
border-radius: 50%;
background: var(--color-primary, #0f9072);
cursor: pointer;
border: 2px solid #fff;
box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.vp-pace-slider::-moz-range-thumb {
width: 20px;
height: 20px;
border-radius: 50%;
background: var(--color-primary, #0f9072);
cursor: pointer;
border: 2px solid #fff;
box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.vp-pace-ends {
display: flex;
justify-content: space-between;
font-size: 0.75rem;
color: var(--color-text-secondary, #4b5b6d);
margin-top: 0.25rem;
}
[data-theme="dark"] .vp-pace-ends {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-aff-header {
display: flex;
justify-content: space-between;
align-items: baseline;
margin-bottom: 0.5rem;
}
.vp-aff-header .vp-aff-label {
margin-bottom: 0;
}
.vp-aff-presets {
position: relative;
display: inline-block;
}
.vp-aff-presets-btn {
font-size: 0.8125rem;
font-weight: 500;
color: var(--color-primary, #0f9072);
cursor: pointer;
background: none;
border: none;
padding: 0;
display: flex;
align-items: center;
gap: 0.25rem;
}
.vp-aff-presets-btn:hover {
color: var(--color-primary-hover, #0d7d63);
}
.vp-aff-presets-btn svg {
width: 12px;
height: 12px;
transition: transform 0.2s;
}
.vp-aff-presets-btn[aria-expanded="true"] svg {
transform: rotate(180deg);
}
.vp-aff-menu {
display: none;
position: absolute;
right: 0;
top: calc(100% + 0.375rem);
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
box-shadow: 0 8px 24px rgba(0,0,0,0.12);
min-width: 15rem;
z-index: 100;
padding: 0.375rem;
max-height: 20rem;
overflow-y: auto;
}
[data-theme="dark"] .vp-aff-menu {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.vp-aff-menu.vp-aff-menu-open {
display: block;
}
.vp-aff-menu-item {
display: block;
width: 100%;
text-align: left;
background: none;
border: none;
padding: 0.625rem 0.75rem;
border-radius: 0.5rem;
cursor: pointer;
color: var(--color-text-primary, #1a2332);
font-size: 0.875rem;
line-height: 1.4;
}
[data-theme="dark"] .vp-aff-menu-item {
color: var(--color-dark-text-primary, #f9fafb);
}
.vp-aff-menu-item:hover {
background: rgba(0,0,0,0.04);
}
[data-theme="dark"] .vp-aff-menu-item:hover {
background: rgba(255,255,255,0.06);
}
.vp-aff-menu-item-title {
font-weight: 600;
font-size: 0.8125rem;
color: var(--color-text-secondary, #4b5b6d);
margin-bottom: 0.125rem;
}
[data-theme="dark"] .vp-aff-menu-item-title {
color: var(--color-dark-text-secondary, #cbd5e1);
}
</style>

<div id="visual-page">
<div id="vp-intro">
<a href="/fr/visuals/" class="vp-back">&larr; Tous les Visuels</a>
<h1 class="vp-title">Orbe de Respiration</h1>
<p class="vp-desc">Orbe pulsant guidant votre respiration. Choisissez un thème de couleurs.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#4338ca,#7c3aed)"></div>
<span>Crépuscule</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f97316,#eab308)"></div>
<span>Lever de Soleil</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#059669,#14b8a6)"></div>
<span>Forêt</span>
</button>
</div>
<div class="vp-affirmation">
<div class="vp-aff-header"><label for="vp-aff-input" class="vp-aff-label">Texte d'affirmation (optionnel)</label><div class="vp-aff-presets"><button type="button" class="vp-aff-presets-btn" id="vp-aff-presets-btn" aria-expanded="false">préréglages <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="vp-aff-menu" id="vp-aff-menu"></div></div></div>
<textarea id="vp-aff-input" class="vp-aff-textarea" rows="3" maxlength="300" placeholder="optionnel. Entrez vos affirmations ici. Le texte s'affichera ligne par ligne."></textarea>
</div>
<div class="vp-pace">
<div class="vp-pace-label">Rythme <span id="vp-pace-val">Normal</span></div>
<input type="range" id="vp-pace-input" class="vp-pace-slider" min="0" max="4" step="1" value="2">
<div class="vp-pace-ends"><span>Lent</span><span>Rapide</span></div>
</div>
<button class="vp-start" id="vp-start-btn">Démarrer</button>
</div>
<div id="vp-fullscreen" style="display:none">
<canvas id="vp-canvas"></canvas>
<div id="vp-hint">Appuyez n'importe où pour quitter</div>
</div>
</div>

<script>
(function() {
var VISUAL_SLUG = 'breathing-orb';
var currentAffId = null;
var paceLabels = ["Très lent","Lent","Normal","Rapide","Très rapide"];
var currentPace = 2;
var schemes = [
{ name:'Twilight', bg:'#0a0a1a', orb:['#6366f1','#a78bfa','#4338ca'], particle:'#c4b5fd' },
{ name:'Sunrise', bg:'#1a0a05', orb:['#f97316','#eab308','#dc2626'], particle:'#fcd34d' },
{ name:'Forest', bg:'#051a0a', orb:['#059669','#14b8a6','#065f46'], particle:'#6ee7b7' }
];
var currentScheme = 0;
var running = false;
var animId = null;
var wakeLock = null;
var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var intro = document.getElementById('vp-intro');
var fs = document.getElementById('vp-fullscreen');
var canvas = document.getElementById('vp-canvas');
var ctx = canvas.getContext('2d');
var hint = document.getElementById('vp-hint');
var startBtn = document.getElementById('vp-start-btn');

// Scheme buttons
var btns = document.querySelectorAll('.vp-scheme');
btns.forEach(function(b) {
b.addEventListener('click', function() {
btns.forEach(function(x) { x.setAttribute('aria-pressed', 'false'); });
b.setAttribute('aria-pressed', 'true');
currentScheme = parseInt(b.getAttribute('data-scheme'));
});
});

// Pace slider
var paceInput = document.getElementById('vp-pace-input');
var paceVal = document.getElementById('vp-pace-val');
paceInput.addEventListener('input', function() {
currentPace = parseInt(paceInput.value);
paceVal.textContent = paceLabels[currentPace];
});

// Preset examples dropdown
var affPresets = [
{title:'Aucun',text:''},
{title:'Calme et clarté',text:'Mon esprit est calme et clair\nJe libère ce que je ne peux pas contrôler\nJe suis présent dans ce moment'},
{title:'Confiance en soi',text:'Je crois en moi et en mes capacités\nJe mérite de bonnes choses\nJe deviens plus fort chaque jour'},
{title:'Lâcher prise',text:'Je libère ce qui ne me sert plus\nJe me pardonne et pardonne aux autres\nJe fais de la place pour la paix'},
{title:'Gratitude',text:'Je suis reconnaissant pour ce moment\nL\'abondance coule dans ma vie\nJ\'apprécie les choses simples'},
{title:'Focus et énergie',text:'Ma concentration est vive et stable\nJe canalise mon énergie avec intention\nJ\'avance avec détermination'},
{title:'Sommeil et repos',text:'Je me donne la permission de me reposer\nMon corps se détend à chaque respiration\nJe glisse vers un sommeil paisible'},
{title:'Arrêter de fumer',text:'Mes poumons sont plus propres chaque jour\nJe suis plus fort que toute envie\nChaque respiration est une victoire'}
];
var presetsBtn = document.getElementById('vp-aff-presets-btn');
var presetsMenu = document.getElementById('vp-aff-menu');
var menuHtml = '';
for (var pi = 0; pi < affPresets.length; pi++) {
menuHtml += '<button class="vp-aff-menu-item" data-preset="' + pi + '"><div class="vp-aff-menu-item-title">' + affPresets[pi].title + '</div>' + (affPresets[pi].text ? affPresets[pi].text.split('\n')[0] + '\u2026' : 'Effacer le texte') + '</button>';
}
presetsMenu.innerHTML = menuHtml;
presetsBtn.addEventListener('click', function(e) {
e.stopPropagation();
var open = presetsMenu.classList.toggle('vp-aff-menu-open');
presetsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
presetsMenu.addEventListener('click', function(e) {
var item = e.target.closest('[data-preset]');
if (!item) return;
var idx = parseInt(item.getAttribute('data-preset'));
document.getElementById('vp-aff-input').value = affPresets[idx].text;
presetsMenu.classList.remove('vp-aff-menu-open');
presetsBtn.setAttribute('aria-expanded', 'false');
});
document.addEventListener('click', function() {
presetsMenu.classList.remove('vp-aff-menu-open');
presetsBtn.setAttribute('aria-expanded', 'false');
});

// Particles
var particles = [];
function initParticles() {
particles = [];
for (var i = 0; i < 100; i++) {
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: 1 + Math.random() * 2.5,
vx: (Math.random() - 0.5) * 0.2,
vy: (Math.random() - 0.5) * 0.2,
phase: Math.random() * Math.PI * 2
});
}
}

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (running && particles.length === 0) initParticles();
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;
var cx = W / 2, cy = H / 2;

// Background
ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);

// Breathing cycle: 6 seconds
var breathT = t / 1000;
var breathPhase = Math.sin(breathT * Math.PI / 6); // -1 to 1, 12s cycle
var scale = 0.85 + 0.15 * breathPhase;

var baseR = Math.min(W, H) * 0.12;
var orbR = baseR * scale;

// Orb glow layers
for (var g = 3; g >= 0; g--) {
var glowR = orbR * (1 + g * 0.6);
var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
var alpha = (0.08 - g * 0.015);
if (alpha < 0) alpha = 0;
grad.addColorStop(0, s.orb[0] + hexAlpha(alpha + 0.05));
grad.addColorStop(0.5, s.orb[1] + hexAlpha(alpha));
grad.addColorStop(1, s.orb[2] + '00');
ctx.beginPath();
ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
ctx.fillStyle = grad;
ctx.fill();
}

// Core orb
var coreGrad = ctx.createRadialGradient(cx - orbR * 0.2, cy - orbR * 0.2, orbR * 0.1, cx, cy, orbR);
coreGrad.addColorStop(0, s.orb[1]);
coreGrad.addColorStop(0.7, s.orb[0]);
coreGrad.addColorStop(1, s.orb[2]);
ctx.beginPath();
ctx.arc(cx, cy, orbR, 0, Math.PI * 2);
ctx.fillStyle = coreGrad;
ctx.globalAlpha = 0.9;
ctx.fill();
ctx.globalAlpha = 1;

// Particles
if (!reducedMotion) {
for (var i = 0; i < particles.length; i++) {
var p = particles[i];
// Drift toward/away from orb matching breath
var dx = p.x - cx, dy = p.y - cy;
var dist = Math.sqrt(dx * dx + dy * dy) || 1;
var breathPull = breathPhase * 0.15;
p.x += p.vx + (dx / dist) * breathPull;
p.y += p.vy + (dy / dist) * breathPull;

// Wrap around
if (p.x < 0) p.x = W;
if (p.x > W) p.x = 0;
if (p.y < 0) p.y = H;
if (p.y > H) p.y = 0;

// Twinkle
var twinkle = 0.3 + 0.7 * Math.abs(Math.sin(breathT * 0.4 + p.phase));
ctx.beginPath();
ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
ctx.fillStyle = s.particle;
ctx.globalAlpha = twinkle * 0.6;
ctx.fill();
}
ctx.globalAlpha = 1;
} else {
// Reduced motion: static orb only, no particles
}

animId = requestAnimationFrame(draw);
}

function hexAlpha(a) {
var v = Math.round(Math.min(1, Math.max(0, a)) * 255);
return (v < 16 ? '0' : '') + v.toString(16);
}

function hideNavFooter() {
var header = document.querySelector('header, nav, .site-header, [class*="header"]');
var footer = document.querySelector('footer, .site-footer, [class*="footer"]');
if (header) header.style.display = 'none';
if (footer) footer.style.display = 'none';
document.body.style.overflow = 'hidden';
}

function showNavFooter() {
var header = document.querySelector('header, nav, .site-header, [class*="header"]');
var footer = document.querySelector('footer, .site-footer, [class*="footer"]');
if (header) header.style.display = '';
if (footer) footer.style.display = '';
document.body.style.overflow = '';
}

async function acquireWakeLock() {
try {
if ('wakeLock' in navigator) {
wakeLock = await navigator.wakeLock.request('screen');
}
} catch(e) {}
}

function releaseWakeLock() {
if (wakeLock) {
wakeLock.release().catch(function(){});
wakeLock = null;
}
}

function start() {
running = true;
intro.style.display = 'none';
fs.style.display = 'block';
resize();
initParticles();
hideNavFooter();
acquireWakeLock();
var affText = document.getElementById('vp-aff-input').value.trim();
if (affText && window.GK && GK.Affirmations) {
var meta = GK.Affirmations.VISUAL_META[VISUAL_SLUG];
GK.Affirmations.createOverlay(fs, affText, meta.pulseDuration, currentPace);
GK.Affirmations.save({
id: currentAffId || GK.Affirmations.generateId(),
text: affText, visual: VISUAL_SLUG, scheme: currentScheme, pace: currentPace,
createdAt: Date.now()
});
}
if (reducedMotion) {
hint.innerHTML = 'Mouvement réduit activé \u00b7 Affichage statique<br>Appuyez n\u0027importe où pour quitter';
}
hint.style.opacity = '1';
setTimeout(function() { hint.style.opacity = '0'; }, reducedMotion ? 2500 : 1500);
animId = requestAnimationFrame(draw);
}

function stop() {
running = false;
if (animId) { cancelAnimationFrame(animId); animId = null; }
if (window.GK && GK.Affirmations) GK.Affirmations.destroyOverlay();
fs.style.display = 'none';
intro.style.display = '';
showNavFooter();
releaseWakeLock();
}

startBtn.addEventListener('click', start);
fs.addEventListener('click', stop);
window.addEventListener('resize', function() { if (running) resize(); });
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && running) stop();
});
// Query param handling for affirmation play/edit
if (window.GK && GK.Affirmations) {
GK.Affirmations._loadFont();
var params = new URLSearchParams(window.location.search);
var affParam = params.get('aff');
var editParam = params.get('edit');
var affId = affParam || editParam;
if (affId) {
var found = GK.Affirmations.getById(affId);
if (found) {
currentAffId = found.id;
document.getElementById('vp-aff-input').value = found.text;
currentScheme = found.scheme || 0;
currentPace = found.pace != null ? found.pace : 2;
paceInput.value = currentPace;
paceVal.textContent = paceLabels[currentPace];
btns.forEach(function(b) {
b.setAttribute('aria-pressed', b.getAttribute('data-scheme') == String(currentScheme) ? 'true' : 'false');
});
if (affParam) start();
}
}
}
})();
</script>