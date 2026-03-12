---
title: "Flujo de Lava - Visual Meditativa"
description: "Gotas de lava flotando, fusionándose y separándose."
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
background: #0d0505;
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
</style>

<div id="visual-page">
<div id="vp-intro">
<a href="/es/visuals/" class="vp-back">&larr; Todas las Visuales</a>
<h1 class="vp-title">Flujo de Lava</h1>
<p class="vp-desc">Gotas fusionándose y separándose. Elige un esquema de colores.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f97316,#ef4444)"></div>
<span>Magma</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#06b6d4,#d946ef)"></div>
<span>Neón</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#059669,#84cc16)"></div>
<span>Esmeralda</span>
</button>
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
var schemes = [
{ name:'Magma', bg:'#0d0505', colors:['#ff4500','#ff6b35','#ffaa00','#ff2200','#ff8c00','#cc3300','#ff5500'] },
{ name:'Neon', bg:'#050510', colors:['#00e5ff','#e040fb','#2979ff','#00bcd4','#d500f9','#448aff','#18ffff'] },
{ name:'Emerald', bg:'#050d08', colors:['#00c853','#1de9b6','#76ff03','#00e676','#64ffda','#69f0ae','#b2ff59'] }
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

var blobs = [];
var offCanvas, offCtx, halfW, halfH;

function initBlobs() {
blobs = [];
var W = canvas.width, H = canvas.height;
halfW = Math.floor(W * 0.75);
halfH = Math.floor(H * 0.75);
offCanvas = document.createElement('canvas');
offCanvas.width = halfW;
offCanvas.height = halfH;
offCtx = offCanvas.getContext('2d');
var minDim = Math.min(W, H);
var blobCount = Math.max(9, Math.min(Math.floor(minDim / 100), 15));
for (var i = 0; i < blobCount; i++) {
blobs.push({
x: 0.15 * W + Math.random() * 0.7 * W,
y: Math.random() * H,
vx: (Math.random() - 0.5) * 0.1,
vy: -(0.075 + Math.random() * 0.075),
baseR: minDim * (0.04 + Math.random() * 0.04),
phase: Math.random() * Math.PI * 2
});
}
}

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (running) initBlobs();
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;

// Clear offscreen
offCtx.fillStyle = s.bg;
offCtx.fillRect(0, 0, halfW, halfH);

// Update and draw blobs on offscreen canvas at half res
for (var i = 0; i < blobs.length; i++) {
var b = blobs[i];
var r = b.baseR + Math.sin(t * 0.0004 + b.phase) * 12;

if (!reducedMotion) {
b.x += b.vx + Math.sin(t * 0.000075 + b.phase) * 0.15;
b.y += b.vy + Math.cos(t * 0.0001 + b.phase) * 0.15;

// Wrap vertically: when blob fully exits top, respawn at bottom
if (b.y + r * 2 < 0) {
b.y = H + r * 2;
b.x = 0.15 * W + Math.random() * 0.7 * W;
}
// Soft horizontal wrap
if (b.x < -r) b.x = W + r;
if (b.x > W + r) b.x = -r;
}

// Draw radial gradient blob on offscreen at 3/4 resolution
var scaleX = halfW / W, scaleY = halfH / H;
var hx = b.x * scaleX, hy = b.y * scaleY, hr = r * Math.min(scaleX, scaleY);
var ci = i % s.colors.length;
var grad = offCtx.createRadialGradient(hx, hy, 0, hx, hy, hr * 1.8);
grad.addColorStop(0, s.colors[ci] + 'ff');
grad.addColorStop(0.5, s.colors[ci] + 'cc');
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.globalCompositeOperation = 'lighter';
offCtx.beginPath();
offCtx.arc(hx, hy, hr * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
offCtx.globalCompositeOperation = 'source-over';

// Apply smoothstep threshold for metaball effect (smooth edges)
var imgData = offCtx.getImageData(0, 0, halfW, halfH);
var d = imgData.data;
var bgR = parseInt(s.bg.slice(1, 3), 16);
var bgG = parseInt(s.bg.slice(3, 5), 16);
var bgB = parseInt(s.bg.slice(5, 7), 16);
for (var j = 0; j < d.length; j += 4) {
var brightness = d[j] + d[j + 1] + d[j + 2];
if (brightness > 220) {
d[j + 3] = 255;
} else if (brightness > 120) {
// Smoothstep interpolation between background and blob color
var tt = (brightness - 120) / 100;
tt = tt * tt * (3 - 2 * tt); // smoothstep
d[j] = Math.round(bgR + (d[j] - bgR) * tt);
d[j + 1] = Math.round(bgG + (d[j + 1] - bgG) * tt);
d[j + 2] = Math.round(bgB + (d[j + 2] - bgB) * tt);
d[j + 3] = 255;
} else {
d[j] = bgR; d[j + 1] = bgG; d[j + 2] = bgB; d[j + 3] = 255;
}
}
offCtx.putImageData(imgData, 0, 0);

// Scale up to main canvas
ctx.imageSmoothingEnabled = true;
ctx.drawImage(offCanvas, 0, 0, halfW, halfH, 0, 0, W, H);

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
initBlobs();
hideNavFooter();
acquireWakeLock();
if (reducedMotion) {
hint.innerHTML = 'Movimiento reducido activado \u00b7 Mostrando vista estática<br>Toca en cualquier lugar para salir';
}
hint.style.opacity = '1';
setTimeout(function() { hint.style.opacity = '0'; }, reducedMotion ? 5000 : 3000);
animId = requestAnimationFrame(draw);
}

function stop() {
running = false;
if (animId) { cancelAnimationFrame(animId); animId = null; }
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
})();
</script>
