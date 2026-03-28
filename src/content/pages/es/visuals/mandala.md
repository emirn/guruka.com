---
title: "Mandala - Visual Meditativa"
description: "Geometría sagrada rotando lentamente con simetría evolutiva. Añade tu propio texto de afirmación, almacenado de forma privada en tu navegador."
full_width: true
language: "es"
---
<style>
#visual-page {
max-width: 40rem;
margin: 0 auto;
padding: 1.5rem 1rem 2rem;
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
margin: 0 auto 0.25rem;
line-height: 1.6;
}
[data-theme="dark"] .vp-desc {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vp-schemes {
display: flex;
justify-content: center;
gap: 0.75rem;
margin-bottom: 1.25rem;
flex-wrap: wrap;
}
.vp-scheme {
display: flex;
flex-direction: column;
align-items: center;
gap: 0.25rem;
cursor: pointer;
background: none;
border: 3px solid transparent;
border-radius: 1rem;
padding: 0.5rem 0.75rem;
transition: border-color 0.2s;
}
.vp-scheme[aria-pressed="true"] {
border-color: var(--color-primary, #0f9072);
}
.vp-scheme-dot {
width: 2rem;
height: 2rem;
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
background: #0a0808;
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
margin-bottom: 1.25rem;
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
margin-bottom: 0;
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
margin-bottom: 1.25rem;
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
[data-theme="dark"] .vp-aff-header {
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
<a href="/es/visuals/" class="vp-back">&larr; Todas las Visuales</a>
<h1 class="vp-title">Mandala</h1>
<p class="vp-desc">Geometría sagrada rotando.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#eab308,#f59e0b)"></div>
<span>Dorado</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#6366f1,#a855f7)"></div>
<span>Celestial</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#14b8a6,#10b981)"></div>
<span>Jade</span>
</button>
</div>
<div class="vp-affirmation">
<div class="vp-aff-header"><label for="vp-aff-input" class="vp-aff-label">Texto de afirmación (opcional)</label><button type="button" class="vp-aff-presets-btn" id="vp-aff-presets-btn" aria-expanded="false">preajustes <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="vp-aff-menu" id="vp-aff-menu"></div></div>
<textarea id="vp-aff-input" class="vp-aff-textarea" rows="2" maxlength="300" placeholder="opcional. Introduce afirmaciones aquí. El texto se mostrará línea por línea."></textarea>
</div>
<div class="vp-pace">
<div class="vp-pace-label">Ritmo <span id="vp-pace-val">Normal</span></div>
<input type="range" id="vp-pace-input" class="vp-pace-slider" min="0" max="4" step="1" value="2">
</div>
<button class="vp-start" id="vp-start-btn">Iniciar</button>
</div>
<div id="vp-fullscreen" style="display:none">
<canvas id="vp-canvas"></canvas>
<div id="vp-hint">Toca en cualquier lugar para salir</div>
</div>
</div>

<script>
(function() {
var VISUAL_SLUG = 'mandala';
var currentAffId = null;
var paceLabels = ["Muy lento","Lento","Normal","Rápido","Muy rápido"];
var currentPace = 2;
var schemes = [
{ name:'Golden', bg:'#0a0808', stroke:'#d4a017', strokeAlt:'#f5c842', dot:'#fff8dc', bgFill:'rgba(10,8,8,' },
{ name:'Celestial', bg:'#05050f', stroke:'#818cf8', strokeAlt:'#c084fc', dot:'#e0e7ff', bgFill:'rgba(5,5,15,' },
{ name:'Jade', bg:'#050a08', stroke:'#2dd4bf', strokeAlt:'#34d399', dot:'#d1fae5', bgFill:'rgba(5,10,8,' }
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
{title:'Ninguno',text:''},
{title:'Calma y claridad',text:'Mi mente está en calma y clara\nSuelto lo que no puedo controlar\nEstoy presente en este momento'},
{title:'Autoconfianza',text:'Creo en mí mismo y en mis capacidades\nMerezco cosas buenas\nMe hago más fuerte cada día'},
{title:'Soltar',text:'Suelto lo que ya no me sirve\nMe perdono a mí mismo y a los demás\nHago espacio para la paz'},
{title:'Gratitud',text:'Estoy agradecido por este momento\nLa abundancia fluye en mi vida\nAprecio las cosas simples'},
{title:'Enfoque y energía',text:'Mi enfoque es firme y constante\nCanalizo mi energía con propósito\nAvanzo con intención'},
{title:'Sueño y descanso',text:'Me doy permiso para descansar\nMi cuerpo se relaja con cada respiración\nMe dejo llevar hacia un sueño tranquilo'}
];
var presetsBtn = document.getElementById('vp-aff-presets-btn');
var presetsMenu = document.getElementById('vp-aff-menu');
var menuHtml = '';
for (var pi = 0; pi < affPresets.length; pi++) {
menuHtml += '<button class="vp-aff-menu-item" data-preset="' + pi + '"><div class="vp-aff-menu-item-title">' + affPresets[pi].title + '</div>' + (affPresets[pi].text ? affPresets[pi].text.split('\n')[0] + '…' : 'Borrar texto') + '</button>';
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

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

var rings = [
{ radius: 0.08, folds: 12, speed: 0.00008, dir: 1, type: 'dots' },
{ radius: 0.18, folds: 8, speed: 0.00006, dir: -1, type: 'petals' },
{ radius: 0.30, folds: 12, speed: 0.00004, dir: 1, type: 'lines' },
{ radius: 0.42, folds: 8, speed: 0.00007, dir: -1, type: 'petals' },
{ radius: 0.55, folds: 16, speed: 0.00003, dir: 1, type: 'dots' },
{ radius: 0.68, folds: 12, speed: 0.00005, dir: -1, type: 'lines' },
{title:'Dejar de fumar',text:'Mis pulmones están más limpios cada día\nSoy más fuerte que cualquier antojo\nCada respiración es una victoria'}
];

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;
var cx = W / 2, cy = H / 2;
var maxR = Math.min(W, H) * 0.65;

// Trail effect
ctx.fillStyle = s.bgFill + '0.04)';
ctx.fillRect(0, 0, W, H);

var baseAngle = reducedMotion ? 0 : t * 0.00005;

for (var ri = 0; ri < rings.length; ri++) {
var ring = rings[ri];
var ringR = maxR * ring.radius;
var folds = ring.folds;
var angle = reducedMotion ? 0 : baseAngle * ring.dir + t * ring.speed * ring.dir;
var breathe = reducedMotion ? 1 : (1 + 0.15 * Math.sin(t * 0.0005 + ri * 1.2));
var alphaFade = 1 - ri * 0.10;

ctx.save();
ctx.translate(cx, cy);
ctx.rotate(angle);

for (var f = 0; f < folds; f++) {
var fAngle = (f / folds) * Math.PI * 2;
ctx.save();
ctx.rotate(fAngle);

if (ring.type === 'dots') {
var dotR = (3 + Math.sin(t * 0.0008 + ri + f) * 2) * breathe;
ctx.shadowColor = s.stroke;
ctx.shadowBlur = 6;
ctx.beginPath();
ctx.arc(ringR * breathe, 0, dotR, 0, Math.PI * 2);
ctx.fillStyle = s.dot;
ctx.globalAlpha = alphaFade * 0.7;
ctx.fill();
ctx.shadowBlur = 0;
} else if (ring.type === 'petals') {
var petalLen = (20 + Math.sin(t * 0.0006 + ri * 2) * 10) * breathe;
var petalW = (8 + Math.sin(t * 0.0004 + f) * 3) * breathe;
ctx.shadowColor = s.stroke;
ctx.shadowBlur = 6;
ctx.beginPath();
ctx.moveTo(ringR * breathe - petalLen * 0.3, 0);
ctx.quadraticCurveTo(ringR * breathe, -petalW, ringR * breathe + petalLen * 0.7, 0);
ctx.quadraticCurveTo(ringR * breathe, petalW, ringR * breathe - petalLen * 0.3, 0);
ctx.strokeStyle = s.stroke;
ctx.lineWidth = 1.2;
ctx.globalAlpha = alphaFade * 0.6;
ctx.stroke();
ctx.shadowBlur = 0;
} else if (ring.type === 'lines') {
var lineLen = (15 + Math.sin(t * 0.0007 + f * 0.5) * 8) * breathe;
ctx.shadowColor = s.strokeAlt;
ctx.shadowBlur = 3;
ctx.beginPath();
ctx.moveTo(ringR * breathe - lineLen, 0);
ctx.lineTo(ringR * breathe + lineLen, 0);
ctx.strokeStyle = s.strokeAlt;
ctx.lineWidth = 1;
ctx.globalAlpha = alphaFade * 0.4;
ctx.stroke();
// End dots
ctx.shadowBlur = 6;
ctx.beginPath();
ctx.arc(ringR * breathe - lineLen, 0, 1.5, 0, Math.PI * 2);
ctx.arc(ringR * breathe + lineLen, 0, 1.5, 0, Math.PI * 2);
ctx.fillStyle = s.strokeAlt;
ctx.globalAlpha = alphaFade * 0.5;
ctx.fill();
ctx.shadowBlur = 0;
}

ctx.restore();
}

ctx.restore();
}

// Center dot
ctx.beginPath();
ctx.arc(cx, cy, 4, 0, Math.PI * 2);
ctx.fillStyle = s.dot;
ctx.globalAlpha = 0.8;
ctx.fill();
ctx.globalAlpha = 1;

animId = requestAnimationFrame(draw);
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
// Clear canvas fully before starting
ctx.fillStyle = schemes[currentScheme].bg;
ctx.fillRect(0, 0, canvas.width, canvas.height);
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
hint.innerHTML = 'Movimiento reducido activado · Mostrando vista estática<br>Toca en cualquier lugar para salir';
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