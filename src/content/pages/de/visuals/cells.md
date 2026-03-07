---
title: "Living Cells - Meditative Visual"
description: "Organic cells growing, dividing, and drifting like bioluminescent organisms under a microscope. Choose a color scheme and meditate on the rhythm of life."
full_width: true
language: "de"
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
background: #050a12;
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
<a href="/visuals/" class="vp-back">&larr; All Visuals</a>
<h1 class="vp-title">Living Cells</h1>
<p class="vp-desc">Organic cells growing, dividing, and drifting like bioluminescent organisms under a microscope. Choose a color scheme and meditate on the rhythm of life.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#22d3ee,#14b8a6)"></div>
<span>Bioluminescent</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#fb923c,#f97316)"></div>
<span>Organic</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#94a3b8,#e2e8f0)"></div>
<span>Microscope</span>
</button>
</div>
<button class="vp-start" id="vp-start-btn">Start</button>
</div>
<div id="vp-fullscreen" style="display:none">
<canvas id="vp-canvas"></canvas>
<div id="vp-hint">Tap anywhere to exit</div>
</div>
</div>

<script>
(function() {
var schemes = [
{ name:'Bioluminescent', bg:'#050a12',
colors:['#22d3ee','#14b8a6','#06b6d4','#2dd4bf','#67e8f9','#5eead4'],
glow:'rgba(34,211,238,', membrane:'rgba(20,184,166,' },
{ name:'Organic', bg:'#0a0808',
colors:['#fb923c','#f97316','#fbbf24','#f59e0b','#fdba74','#fcd34d'],
glow:'rgba(251,146,60,', membrane:'rgba(249,115,22,' },
{ name:'Microscope', bg:'#020508',
colors:['#94a3b8','#cbd5e1','#64748b','#e2e8f0','#475569','#f1f5f9'],
glow:'rgba(148,163,184,', membrane:'rgba(203,213,225,' }
];
var currentScheme = 0;
var running = false;
var animId = null;
var wakeLock = null;
var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var cells = [];
var maxCells = 10;
var nextId = 0;

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

function makeOrganelles() {
var orgs = [];
var count = 2 + Math.floor(Math.random() * 2);
for (var i = 0; i < count; i++) {
orgs.push({
dist: 0.3 + Math.random() * 0.35,
angle: Math.random() * Math.PI * 2,
speed: (0.0003 + Math.random() * 0.0004) * (Math.random() < 0.5 ? 1 : -1),
size: 0.06 + Math.random() * 0.04
});
}
return orgs;
}

function spawnCell(x, y, r) {
var W = canvas.width, H = canvas.height;
var minDim = Math.min(W, H);
var baseR = r || minDim * (0.04 + Math.random() * 0.03);
cells.push({
id: nextId++,
x: x !== undefined ? x : W / 2,
y: y !== undefined ? y : H / 2,
r: baseR * 0.6,
baseR: baseR,
maxR: baseR * (1.6 + Math.random() * 0.4),
vx: (Math.random() - 0.5) * 0.3,
vy: (Math.random() - 0.5) * 0.3,
phase: Math.random() * Math.PI * 2,
divAngle: Math.random() * Math.PI * 2,
colorIdx: Math.floor(Math.random() * 6),
age: 0,
growthRate: 0.005 + Math.random() * 0.004,
dividing: false,
divProgress: 0,
organelles: makeOrganelles(),
opacity: 0,
born: performance.now()
});
}

function initCells() {
cells = [];
nextId = 0;
// Start with ONE cell at center
spawnCell();
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;
var scaleX = halfW / W, scaleY = halfH / H, scaleR = Math.min(scaleX, scaleY);

// Parse background color
var bgR = parseInt(s.bg.slice(1, 3), 16);
var bgG = parseInt(s.bg.slice(3, 5), 16);
var bgB = parseInt(s.bg.slice(5, 7), 16);

if (reducedMotion) {
// Static render: a few cells, one mid-division
ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);
offCtx.fillStyle = s.bg;
offCtx.fillRect(0, 0, halfW, halfH);
offCtx.globalCompositeOperation = 'lighter';
// Draw static cells on offscreen
for (var i = 0; i < cells.length; i++) {
var c = cells[i];
var cr = c.maxR * 0.8;
var hx = c.x * scaleX, hy = c.y * scaleY, hr = cr * scaleR;
var ci = c.colorIdx % s.colors.length;
if (c.dividing) {
// Show mid-division figure-8
var sep = hr * 0.5;
var a = c.divAngle;
var x1 = hx + Math.cos(a) * sep * 0.5;
var y1 = hy + Math.sin(a) * sep * 0.5;
var x2 = hx - Math.cos(a) * sep * 0.5;
var y2 = hy - Math.sin(a) * sep * 0.5;
var blobR = hr * 0.7;
for (var bi = 0; bi < 2; bi++) {
var bx = bi === 0 ? x1 : x2;
var by = bi === 0 ? y1 : y2;
var grad = offCtx.createRadialGradient(bx, by, 0, bx, by, blobR * 1.8);
grad.addColorStop(0, s.colors[ci] + 'ff');
grad.addColorStop(0.5, s.colors[ci] + 'cc');
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(bx, by, blobR * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
} else {
var grad = offCtx.createRadialGradient(hx, hy, 0, hx, hy, hr * 1.8);
grad.addColorStop(0, s.colors[ci] + 'ff');
grad.addColorStop(0.5, s.colors[ci] + 'cc');
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(hx, hy, hr * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
}
offCtx.globalCompositeOperation = 'source-over';
// Smoothstep threshold
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
ctx.imageSmoothingEnabled = true;
ctx.drawImage(offCanvas, 0, 0, halfW, halfH, 0, 0, W, H);
// Draw nuclei and organelles on top
for (var i = 0; i < cells.length; i++) {
var c = cells[i];
var cr = c.maxR * 0.8;
var ci = c.colorIdx % s.colors.length;
drawOverlay(c.x, c.y, cr, s, ci, c, t, true);
}
// No animation loop for static
return;
}

// Remove cells over max (oldest first, by fading out)
if (cells.length > maxCells) {
cells[0].opacity -= 0.01;
if (cells[0].opacity <= 0) cells.shift();
}

// Cell repulsion
for (var i = 0; i < cells.length; i++) {
for (var j = i + 1; j < cells.length; j++) {
var a = cells[i], b = cells[j];
var dx = b.x - a.x, dy = b.y - a.y;
var dist = Math.sqrt(dx * dx + dy * dy) || 1;
var minDist = a.r + b.r + 8;
if (dist < minDist) {
var force = (minDist - dist) * 0.02;
var nx = dx / dist, ny = dy / dist;
a.vx -= nx * force;
a.vy -= ny * force;
b.vx += nx * force;
b.vy += ny * force;
}
}
}

// Update cells
for (var i = 0; i < cells.length; i++) {
var c = cells[i];

// Fade in
if (c.opacity < 1) c.opacity = Math.min(1, c.opacity + 0.008);

// Drift with sinusoidal wobble
c.vx += Math.sin(t * 0.0004 + c.phase) * 0.005;
c.vy += Math.cos(t * 0.0003 + c.phase + 1) * 0.005;
c.vx *= 0.995;
c.vy *= 0.995;
c.x += c.vx;
c.y += c.vy;

// Boundary bounce
if (c.x - c.r < 0) { c.x = c.r; c.vx = Math.abs(c.vx) * 0.5; }
if (c.x + c.r > W) { c.x = W - c.r; c.vx = -Math.abs(c.vx) * 0.5; }
if (c.y - c.r < 0) { c.y = c.r; c.vy = Math.abs(c.vy) * 0.5; }
if (c.y + c.r > H) { c.y = H - c.r; c.vy = -Math.abs(c.vy) * 0.5; }

// Grow
if (!c.dividing) {
c.r += c.growthRate;
c.age++;
if (c.r >= c.maxR && cells.length < maxCells + 2) {
c.dividing = true;
c.divProgress = 0;
c.divAngle = Math.random() * Math.PI * 2;
}
} else {
c.divProgress += 0.002;
if (c.divProgress >= 1) {
var angle = c.divAngle;
var sepDist = c.r * 0.6;
var newR = c.r * 0.55;
spawnCell(c.x + Math.cos(angle) * sepDist, c.y + Math.sin(angle) * sepDist, newR);
spawnCell(c.x - Math.cos(angle) * sepDist, c.y - Math.sin(angle) * sepDist, newR);
cells[cells.length - 1].opacity = 0.7;
cells[cells.length - 2].opacity = 0.7;
cells.splice(i, 1);
i--;
continue;
}
}
}

// --- Metaball rendering pipeline ---
// 1. Clear offscreen
offCtx.fillStyle = s.bg;
offCtx.fillRect(0, 0, halfW, halfH);

// 2. Draw additive radial gradient blobs
offCtx.globalCompositeOperation = 'lighter';
for (var i = 0; i < cells.length; i++) {
var c = cells[i];
if (c.opacity <= 0) continue;
var ci = c.colorIdx % s.colors.length;
var alpha = c.opacity;

if (c.dividing) {
// Two sub-blobs with increasing separation
var sep = c.divProgress * c.r * 1.2;
var a = c.divAngle;
var subR = c.r * (0.7 + c.divProgress * 0.15);
var x1 = c.x + Math.cos(a) * sep * 0.5;
var y1 = c.y + Math.sin(a) * sep * 0.5;
var x2 = c.x - Math.cos(a) * sep * 0.5;
var y2 = c.y - Math.sin(a) * sep * 0.5;
for (var bi = 0; bi < 2; bi++) {
var bx = (bi === 0 ? x1 : x2) * scaleX;
var by = (bi === 0 ? y1 : y2) * scaleY;
var br = subR * scaleR;
var grad = offCtx.createRadialGradient(bx, by, 0, bx, by, br * 1.8);
grad.addColorStop(0, s.colors[ci] + alphaHex(alpha));
grad.addColorStop(0.5, s.colors[ci] + alphaHex(alpha * 0.8));
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(bx, by, br * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
} else {
var hx = c.x * scaleX, hy = c.y * scaleY, hr = c.r * scaleR;
var grad = offCtx.createRadialGradient(hx, hy, 0, hx, hy, hr * 1.8);
grad.addColorStop(0, s.colors[ci] + alphaHex(alpha));
grad.addColorStop(0.5, s.colors[ci] + alphaHex(alpha * 0.8));
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(hx, hy, hr * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
}
offCtx.globalCompositeOperation = 'source-over';

// 3. Smoothstep threshold
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

// 4. Upscale to main canvas
ctx.imageSmoothingEnabled = true;
ctx.drawImage(offCanvas, 0, 0, halfW, halfH, 0, 0, W, H);

// 5. Draw nuclei and organelles on top of metaball layer
for (var i = 0; i < cells.length; i++) {
var c = cells[i];
if (c.opacity <= 0) continue;
var ci = c.colorIdx % s.colors.length;

if (c.dividing) {
var sep = c.divProgress * c.r * 1.2;
var a = c.divAngle;
var x1 = c.x + Math.cos(a) * sep * 0.5;
var y1 = c.y + Math.sin(a) * sep * 0.5;
var x2 = c.x - Math.cos(a) * sep * 0.5;
var y2 = c.y - Math.sin(a) * sep * 0.5;
var subR = c.r * (0.7 + c.divProgress * 0.15);
ctx.globalAlpha = c.opacity;
drawOverlay(x1, y1, subR, s, ci, c, t, false);
drawOverlay(x2, y2, subR, s, ci, c, t, false);
ctx.globalAlpha = 1;
} else {
ctx.globalAlpha = c.opacity;
drawOverlay(c.x, c.y, c.r, s, ci, c, t, false);
ctx.globalAlpha = 1;
}
}

animId = requestAnimationFrame(draw);
}

function alphaHex(a) {
var v = Math.round(Math.min(1, Math.max(0, a)) * 255);
return (v < 16 ? '0' : '') + v.toString(16);
}

function hexToRgba(hex, a) {
var r = parseInt(hex.slice(1,3), 16);
var g = parseInt(hex.slice(3,5), 16);
var b = parseInt(hex.slice(5,7), 16);
return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function drawOverlay(x, y, r, s, ci, c, t, isStatic) {
// Nucleus — bright dot at cell center
var nucR = r * 0.18;
var nucColor = s.colors[(ci + 1) % s.colors.length];
var ng = ctx.createRadialGradient(x, y, 0, x, y, nucR);
ng.addColorStop(0, hexToRgba(nucColor, 0.8));
ng.addColorStop(0.6, hexToRgba(nucColor, 0.35));
ng.addColorStop(1, hexToRgba(nucColor, 0));
ctx.beginPath();
ctx.arc(x, y, nucR, 0, Math.PI * 2);
ctx.fillStyle = ng;
ctx.fill();

// Organelles
if (c.organelles) {
for (var k = 0; k < c.organelles.length; k++) {
var org = c.organelles[k];
var oAngle = org.angle + (isStatic ? 0 : (t || 0) * org.speed);
var ox = x + Math.cos(oAngle) * r * org.dist;
var oy = y + Math.sin(oAngle) * r * org.dist;
var oSize = r * org.size;
ctx.beginPath();
ctx.arc(ox, oy, oSize, 0, Math.PI * 2);
var orgColor = s.colors[(ci + 2) % s.colors.length];
ctx.fillStyle = hexToRgba(orgColor, 0.4);
ctx.fill();
}
}
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
initCells();
// For reduced-motion static view, add a few extra cells in various states
if (reducedMotion) {
var W = canvas.width, H = canvas.height;
// Add 2 more normal cells
spawnCell(W * 0.3, H * 0.4);
spawnCell(W * 0.7, H * 0.6);
// Make one cell look like it's mid-division
cells[1].dividing = true;
cells[1].divProgress = 0.5;
for (var i = 0; i < cells.length; i++) cells[i].opacity = 1;
}
hideNavFooter();
acquireWakeLock();
if (reducedMotion) {
hint.innerHTML = 'Reduced motion enabled \u00b7 Showing static view<br>Tap anywhere to exit';
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
