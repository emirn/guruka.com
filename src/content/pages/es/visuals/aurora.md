---
title: "Aurora - Visual Meditativa"
description: "Bandas de colores de auroras boreales fluyendo por la pantalla. Añade tu propio texto de afirmación, almacenado de forma privada en tu navegador."
full_width: true
language: "es"
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
background: #020810;
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
<a href="/es/visuals/" class="vp-back">&larr; Todas las Visuales</a>
<h1 class="vp-title">Aurora</h1>
<p class="vp-desc">Luces del norte fluyendo. Elige un esquema de colores.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#22d3ee,#10b981)"></div>
<span>Ártico</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#a855f7,#ec4899)"></div>
<span>Cósmico</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f472b6,#eab308)"></div>
<span>Alba</span>
</button>
</div>
<div class="vp-affirmation">
<div class="vp-aff-header"><label for="vp-aff-input" class="vp-aff-label">Texto de afirmación (opcional)</label><button type="button" class="vp-aff-presets-btn" id="vp-aff-presets-btn" aria-expanded="false">preajustes <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="vp-aff-menu" id="vp-aff-menu"></div></div>
<textarea id="vp-aff-input" class="vp-aff-textarea" rows="3" maxlength="300" placeholder="opcional. Introduce afirmaciones aquí. El texto se mostrará línea por línea."></textarea>
</div>
<div class="vp-pace">
<div class="vp-pace-label">Ritmo <span id="vp-pace-val">Normal</span></div>
<input type="range" id="vp-pace-input" class="vp-pace-slider" min="0" max="4" step="1" value="2">
<div class="vp-pace-ends"><span>Lento</span><span>Rápido</span></div>
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
var VISUAL_SLUG = 'aurora';
var currentAffId = null;
var paceLabels = ["Muy lento","Lento","Normal","Rápido","Muy rápido"];
var currentPace = 2;
var schemes = [
{ name:'Arctic', bg:'#020810',
bands:[
{colors:['#22d3ee','#06b6d4'], alpha:0.15, baseY:0.25, amp:0.08, freq:0.003, speed:0.12},
{colors:['#10b981','#059669'], alpha:0.12, baseY:0.30, amp:0.06, freq:0.004, speed:0.09},
{colors:['#22d3ee','#14b8a6'], alpha:0.09, baseY:0.35, amp:0.10, freq:0.002, speed:0.15},
{colors:['#34d399','#06b6d4'], alpha:0.11, baseY:0.28, amp:0.07, freq:0.0035, speed:0.10},
{colors:['#67e8f9','#a7f3d0'], alpha:0.06, baseY:0.22, amp:0.05, freq:0.005, speed:0.06}
]},
{ name:'Cosmic', bg:'#0a0510',
bands:[
{colors:['#a855f7','#7c3aed'], alpha:0.15, baseY:0.25, amp:0.08, freq:0.003, speed:0.12},
{colors:['#ec4899','#be185d'], alpha:0.12, baseY:0.30, amp:0.06, freq:0.004, speed:0.09},
{colors:['#c084fc','#e879f9'], alpha:0.09, baseY:0.35, amp:0.10, freq:0.002, speed:0.15},
{colors:['#8b5cf6','#d946ef'], alpha:0.11, baseY:0.28, amp:0.07, freq:0.0035, speed:0.10},
{colors:['#f0abfc','#c4b5fd'], alpha:0.06, baseY:0.22, amp:0.05, freq:0.005, speed:0.06}
]},
{ name:'Dawn', bg:'#100805',
bands:[
{colors:['#f472b6','#fb923c'], alpha:0.15, baseY:0.25, amp:0.08, freq:0.003, speed:0.12},
{colors:['#eab308','#f59e0b'], alpha:0.12, baseY:0.30, amp:0.06, freq:0.004, speed:0.09},
{colors:['#fb7185','#fbbf24'], alpha:0.09, baseY:0.35, amp:0.10, freq:0.002, speed:0.15},
{colors:['#f9a8d4','#fcd34d'], alpha:0.11, baseY:0.28, amp:0.07, freq:0.0035, speed:0.10},
{colors:['#fda4af','#fde68a'], alpha:0.06, baseY:0.22, amp:0.05, freq:0.005, speed:0.06}
]}
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

var offCanvas, offCtx, halfW, halfH;

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
{title:'Sueño y descanso',text:'Me doy permiso para descansar\nMi cuerpo se relaja con cada respiración\nMe dejo llevar hacia un sueño tranquilo'},
{title:'Dejar de fumar',text:'Mis pulmones están más limpios cada día\nSoy más fuerte que cualquier antojo\nCada respiración es una victoria'}
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
var W = canvas.width, H = canvas.height;
halfW = Math.floor(W * 0.75);
halfH = Math.floor(H * 0.75);
offCanvas = document.createElement('canvas');
offCanvas.width = halfW;
offCanvas.height = halfH;
offCtx = offCanvas.getContext('2d');
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;
var time = t / 1000;

// Parse background color for smoothstep
var bgR = parseInt(s.bg.slice(1, 3), 16);
var bgG = parseInt(s.bg.slice(3, 5), 16);
var bgB = parseInt(s.bg.slice(5, 7), 16);

if (reducedMotion) {
ctx.globalAlpha = 1;
ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);
for (var b = 0; b < s.bands.length; b++) {
var band = s.bands[b];
var y = H * band.baseY;
var grad = ctx.createLinearGradient(0, y - H * 0.1, 0, y + H * 0.15);
grad.addColorStop(0, band.colors[0] + '00');
grad.addColorStop(0.3, band.colors[0] + hexAlpha(band.alpha));
grad.addColorStop(0.7, band.colors[1] + hexAlpha(band.alpha * 0.7));
grad.addColorStop(1, band.colors[1] + '00');
ctx.shadowColor = band.colors[0];
ctx.shadowBlur = 15;
ctx.fillStyle = grad;
ctx.fillRect(0, y - H * 0.1, W, H * 0.25);
}
ctx.shadowBlur = 0;
return;
}

var scaleX = halfW / W, scaleY = halfH / H;

// 1. Clear offscreen with background
offCtx.fillStyle = s.bg;
offCtx.fillRect(0, 0, halfW, halfH);

// 2. Draw bands on offscreen with 'screen' compositing
offCtx.save();
offCtx.globalCompositeOperation = 'screen';

for (var b = 0; b < s.bands.length; b++) {
var band = s.bands[b];
var pulse = 0.75 + 0.25 * Math.sin(time * 0.08 + b * 0.7);
var vertOsc = Math.sin(time * 0.04 + b * 1.1) * 0.04;
offCtx.beginPath();

var baseY = halfH * (band.baseY + vertOsc);
var amp = halfH * band.amp;
for (var x = 0; x <= halfW; x += 3) {
var realX = x / scaleX;
var noise1 = Math.sin(realX * band.freq + time * band.speed);
var noise2 = Math.sin(realX * band.freq * 1.7 + time * band.speed * 0.6 + 2.1);
var noise3 = Math.sin(realX * band.freq * 0.5 + time * band.speed * 1.3 + 4.3);
var y = baseY + amp * (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2);
if (x === 0) offCtx.moveTo(x, y);
else offCtx.lineTo(x, y);
}

offCtx.lineTo(halfW, halfH * (band.baseY + vertOsc + 0.25));
offCtx.lineTo(0, halfH * (band.baseY + vertOsc + 0.25));
offCtx.closePath();

var grad = offCtx.createLinearGradient(0, baseY - amp, 0, baseY + halfH * 0.25);
grad.addColorStop(0, band.colors[0] + hexAlpha(band.alpha * 0.3 * pulse));
grad.addColorStop(0.3, band.colors[0] + hexAlpha(band.alpha * pulse));
grad.addColorStop(0.7, band.colors[1] + hexAlpha(band.alpha * 0.6 * pulse));
grad.addColorStop(1, band.colors[1] + '00');
offCtx.fillStyle = grad;
offCtx.fill();
}

offCtx.restore();

// 3. Smoothstep threshold on offscreen pixel data
var imgData = offCtx.getImageData(0, 0, halfW, halfH);
var d = imgData.data;
for (var j = 0; j < d.length; j += 4) {
var brightness = d[j] + d[j + 1] + d[j + 2];
if (brightness > 220) {
d[j + 3] = 255;
} else if (brightness > 120) {
var tt = (brightness - 120) / 100;
tt = tt * tt * (3 - 2 * tt);
d[j] = Math.round(bgR + (d[j] - bgR) * tt);
d[j + 1] = Math.round(bgG + (d[j + 1] - bgG) * tt);
d[j + 2] = Math.round(bgB + (d[j + 2] - bgB) * tt);
d[j + 3] = 255;
} else {
d[j] = bgR; d[j + 1] = bgG; d[j + 2] = bgB; d[j + 3] = 255;
}
}
offCtx.putImageData(imgData, 0, 0);

// 4. Upscale to main canvas with smoothing
ctx.imageSmoothingEnabled = true;
ctx.drawImage(offCanvas, 0, 0, halfW, halfH, 0, 0, W, H);

// 5. Draw stars on main canvas at full resolution (stays crisp)
for (var i = 0; i < 60; i++) {
var sx = (Math.sin(i * 127.1 + 311.7) * 0.5 + 0.5) * W;
var sy = (Math.sin(i * 269.5 + 183.3) * 0.5 + 0.5) * H * 0.6;
var sa = 0.2 + 0.3 * Math.abs(Math.sin(time * 0.5 + i));
ctx.beginPath();
ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255,255,255,' + sa + ')';
ctx.fill();
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