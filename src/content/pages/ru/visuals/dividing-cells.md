---
title: "Dividing Cells - Meditative Visual"
description: "Cells growing and dividing in a meditative loop."
full_width: true
language: "ru"
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
<h1 class="vp-title">Dividing Cells</h1>
<p class="vp-desc">Cells dividing endlessly. Choose a color scheme.</p>
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
colors:['#22d3ee','#14b8a6','#06b6d4','#2dd4bf','#67e8f9','#5eead4'] },
{ name:'Organic', bg:'#0a0808',
colors:['#fb923c','#f97316','#fbbf24','#f59e0b','#fdba74','#fcd34d'] },
{ name:'Microscope', bg:'#020508',
colors:['#94a3b8','#cbd5e1','#64748b','#e2e8f0','#475569','#f1f5f9'] }
];
var currentScheme = 0;
var running = false;
var animId = null;
var wakeLock = null;
var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var maxVisible = 8;

var intro = document.getElementById('vp-intro');
var fs = document.getElementById('vp-fullscreen');
var canvas = document.getElementById('vp-canvas');
var ctx = canvas.getContext('2d');
var hint = document.getElementById('vp-hint');
var startBtn = document.getElementById('vp-start-btn');

var offCanvas, offCtx, halfW, halfH;

// State
var centerCell = null; // the cell currently growing/dividing at center
var daughters = [];    // drifting daughter cells
var cycleState = 'GROWING_AT_CENTER'; // GROWING_AT_CENTER, DIVIDING, STAGING_PAUSE
var pauseTimer = 0;
var nextId = 0;

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

function spawnCenterCell() {
var W = canvas.width, H = canvas.height;
var minDim = Math.min(W, H);
var targetR = minDim * (0.06 + Math.random() * 0.02);
centerCell = {
id: nextId++,
x: W / 2,
y: H / 2,
r: targetR * 0.15,
targetR: targetR,
divAngle: Math.random() * Math.PI * 2,
colorIdx: Math.floor(Math.random() * 6),
divProgress: 0,
organelles: makeOrganelles(),
opacity: 0.7,
growTimer: 0
};
cycleState = 'GROWING_AT_CENTER';
}

function spawnDaughter(x, y, r, angle, colorIdx, organelles) {
daughters.push({
id: nextId++,
x: x,
y: y,
r: r,
vx: Math.cos(angle) * 0.15,
vy: Math.sin(angle) * 0.15,
phase: Math.random() * Math.PI * 2,
colorIdx: colorIdx,
organelles: organelles,
opacity: 1,
age: 0,
fading: false,
fadeAge: 0
});
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;
var scaleX = halfW / W, scaleY = halfH / H, scaleR = Math.min(scaleX, scaleY);

var bgR = parseInt(s.bg.slice(1, 3), 16);
var bgG = parseInt(s.bg.slice(3, 5), 16);
var bgB = parseInt(s.bg.slice(5, 7), 16);

if (reducedMotion) {
ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);
offCtx.fillStyle = s.bg;
offCtx.fillRect(0, 0, halfW, halfH);
offCtx.globalCompositeOperation = 'lighter';
// Draw a center cell mid-division and a couple daughters
var midR = Math.min(W, H) * 0.07;
var ci = 0;
// Two sub-blobs for figure-8
var sep = midR * 0.6;
var a = Math.PI * 0.25;
for (var bi = 0; bi < 2; bi++) {
var bx = (W / 2 + Math.cos(a) * sep * (bi === 0 ? 1 : -1)) * scaleX;
var by = (H / 2 + Math.sin(a) * sep * (bi === 0 ? 1 : -1)) * scaleY;
var br = midR * 0.7 * scaleR;
var grad = offCtx.createRadialGradient(bx, by, 0, bx, by, br * 1.8);
grad.addColorStop(0, s.colors[ci] + 'ff');
grad.addColorStop(0.5, s.colors[ci] + 'cc');
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(bx, by, br * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
// Two static daughters
var dPositions = [[W * 0.25, H * 0.35], [W * 0.72, H * 0.65]];
for (var di = 0; di < 2; di++) {
var dx = dPositions[di][0] * scaleX, dy = dPositions[di][1] * scaleY;
var dr = midR * 0.5 * scaleR;
var grad = offCtx.createRadialGradient(dx, dy, 0, dx, dy, dr * 1.8);
grad.addColorStop(0, s.colors[2] + 'cc');
grad.addColorStop(0.5, s.colors[2] + '99');
grad.addColorStop(1, s.colors[2] + '00');
offCtx.beginPath();
offCtx.arc(dx, dy, dr * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
offCtx.globalCompositeOperation = 'source-over';
// Smoothstep
var imgData = offCtx.getImageData(0, 0, halfW, halfH);
var d = imgData.data;
for (var j = 0; j < d.length; j += 4) {
var brightness = d[j] + d[j + 1] + d[j + 2];
if (brightness > 220) { d[j + 3] = 255; }
else if (brightness > 120) {
var tt = (brightness - 120) / 100;
tt = tt * tt * (3 - 2 * tt);
d[j] = Math.round(bgR + (d[j] - bgR) * tt);
d[j + 1] = Math.round(bgG + (d[j + 1] - bgG) * tt);
d[j + 2] = Math.round(bgB + (d[j + 2] - bgB) * tt);
d[j + 3] = 255;
} else { d[j] = bgR; d[j + 1] = bgG; d[j + 2] = bgB; d[j + 3] = 255; }
}
offCtx.putImageData(imgData, 0, 0);
ctx.imageSmoothingEnabled = true;
ctx.drawImage(offCanvas, 0, 0, halfW, halfH, 0, 0, W, H);
// Draw nuclei on the two figure-8 blobs
for (var bi = 0; bi < 2; bi++) {
var nx = W / 2 + Math.cos(a) * sep * (bi === 0 ? 1 : -1);
var ny = H / 2 + Math.sin(a) * sep * (bi === 0 ? 1 : -1);
drawNucleus(nx, ny, midR * 0.7, s, ci, t, true);
}
for (var di = 0; di < 2; di++) {
drawNucleus(dPositions[di][0], dPositions[di][1], midR * 0.5, s, 2, t, true);
}
return;
}

// --- UPDATE LOGIC ---

// Force-fade oldest daughters if over max
while (daughters.length > maxVisible) {
var oldest = daughters[0];
oldest.fading = true;
oldest.opacity -= 0.05;
if (oldest.opacity <= 0) daughters.shift();
else break;
}

// Update daughters
for (var i = daughters.length - 1; i >= 0; i--) {
var dc = daughters[i];
dc.age++;

// Sinusoidal wobble drift
dc.x += dc.vx + Math.sin(t * 0.0002 + dc.phase) * 0.06;
dc.y += dc.vy + Math.cos(t * 0.00015 + dc.phase + 1) * 0.06;
dc.vx *= 0.997;
dc.vy *= 0.997;

// Soft boundary bounce
if (dc.x - dc.r < 0) { dc.x = dc.r; dc.vx = Math.abs(dc.vx) * 0.5; }
if (dc.x + dc.r > W) { dc.x = W - dc.r; dc.vx = -Math.abs(dc.vx) * 0.5; }
if (dc.y - dc.r < 0) { dc.y = dc.r; dc.vy = Math.abs(dc.vy) * 0.5; }
if (dc.y + dc.r > H) { dc.y = H - dc.r; dc.vy = -Math.abs(dc.vy) * 0.5; }

// Start fading after ~18 seconds (1080 frames at 60fps)
if (dc.age > 1080 && !dc.fading) dc.fading = true;
if (dc.fading) {
dc.opacity -= 0.003;
if (dc.opacity <= 0) { daughters.splice(i, 1); continue; }
}
}

// Daughter-daughter repulsion
for (var i = 0; i < daughters.length; i++) {
for (var j = i + 1; j < daughters.length; j++) {
var a = daughters[i], b = daughters[j];
var dx = b.x - a.x, dy = b.y - a.y;
var dist = Math.sqrt(dx * dx + dy * dy) || 1;
var minDist = a.r + b.r + 6;
if (dist < minDist) {
var force = (minDist - dist) * 0.015;
var nx = dx / dist, ny = dy / dist;
a.vx -= nx * force; a.vy -= ny * force;
b.vx += nx * force; b.vy += ny * force;
}
}
}

// Center cell lifecycle
if (cycleState === 'GROWING_AT_CENTER') {
if (!centerCell) spawnCenterCell();
var cc = centerCell;
// Grow from tiny to targetR over ~3s (180 frames)
cc.growTimer++;
var growProgress = Math.min(1, cc.growTimer / 180);
// Ease out
growProgress = 1 - (1 - growProgress) * (1 - growProgress);
cc.r = cc.targetR * (0.15 + 0.85 * growProgress);
// Subtle breathing wobble at center
cc.x = W / 2 + Math.sin(t * 0.001) * 1.5;
cc.y = H / 2 + Math.cos(t * 0.0008) * 1.5;

if (cc.growTimer >= 180) {
cycleState = 'DIVIDING';
cc.divProgress = 0;
}
} else if (cycleState === 'DIVIDING') {
var cc = centerCell;
// divProgress 0→1 over ~12s: 0.0014/frame * 60fps ≈ 0.084/s → ~12s
cc.divProgress += 0.0014;
// Keep at center with wobble
cc.x = W / 2 + Math.sin(t * 0.001) * 1.5;
cc.y = H / 2 + Math.cos(t * 0.0008) * 1.5;

if (cc.divProgress >= 1) {
// Spawn two daughters
var angle = cc.divAngle;
var sepDist = cc.r * 0.9;
var newR = cc.r * 0.55;
spawnDaughter(cc.x + Math.cos(angle) * sepDist, cc.y + Math.sin(angle) * sepDist, newR, angle, cc.colorIdx, makeOrganelles());
spawnDaughter(cc.x - Math.cos(angle) * sepDist, cc.y - Math.sin(angle) * sepDist, newR, angle + Math.PI, cc.colorIdx, makeOrganelles());
centerCell = null;
cycleState = 'STAGING_PAUSE';
pauseTimer = 0;
}
} else if (cycleState === 'STAGING_PAUSE') {
pauseTimer++;
// ~1.5s pause (90 frames)
if (pauseTimer >= 90) {
spawnCenterCell();
}
}

// --- RENDER ---

// 1. Clear offscreen
offCtx.fillStyle = s.bg;
offCtx.fillRect(0, 0, halfW, halfH);

// 2. Draw additive radial gradients
offCtx.globalCompositeOperation = 'lighter';

// Draw daughters
for (var i = 0; i < daughters.length; i++) {
var dc = daughters[i];
if (dc.opacity <= 0) continue;
var ci = dc.colorIdx % s.colors.length;
var hx = dc.x * scaleX, hy = dc.y * scaleY, hr = dc.r * scaleR;
var grad = offCtx.createRadialGradient(hx, hy, 0, hx, hy, hr * 1.8);
grad.addColorStop(0, s.colors[ci] + alphaHex(dc.opacity));
grad.addColorStop(0.5, s.colors[ci] + alphaHex(dc.opacity * 0.8));
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(hx, hy, hr * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}

// Draw center cell
if (centerCell) {
var cc = centerCell;
var ci = cc.colorIdx % s.colors.length;

if (cycleState === 'DIVIDING') {
// Two sub-blobs with separation based on divProgress
var dp = cc.divProgress;
var sepFactor;
if (dp < 0.3) {
// Elongation phase: 0 → 0.4 * r
sepFactor = (dp / 0.3) * 0.4;
} else if (dp < 0.7) {
// Figure-8 phase: 0.4 → 1.0 * r
sepFactor = 0.4 + ((dp - 0.3) / 0.4) * 0.6;
} else {
// Pinch & split: 1.0 → 1.8 * r (accelerating)
var splitP = (dp - 0.7) / 0.3;
splitP = splitP * splitP; // accelerate
sepFactor = 1.0 + splitP * 0.8;
}

var sep = cc.r * sepFactor;
var a = cc.divAngle;
var x1 = cc.x + Math.cos(a) * sep * 0.5;
var y1 = cc.y + Math.sin(a) * sep * 0.5;
var x2 = cc.x - Math.cos(a) * sep * 0.5;
var y2 = cc.y - Math.sin(a) * sep * 0.5;

// Sub-blob radius: slightly smaller as they separate
var subR = cc.r * (0.75 - dp * 0.15);

var overlapScale = 0.5 + 0.5 * Math.min(1, sepFactor / 1.2);
for (var bi = 0; bi < 2; bi++) {
var bx = (bi === 0 ? x1 : x2) * scaleX;
var by = (bi === 0 ? y1 : y2) * scaleY;
var br = subR * scaleR;
var grad = offCtx.createRadialGradient(bx, by, 0, bx, by, br * 1.8);
grad.addColorStop(0, s.colors[ci] + alphaHex(cc.opacity * overlapScale));
grad.addColorStop(0.5, s.colors[ci] + alphaHex(cc.opacity * 0.8 * overlapScale));
grad.addColorStop(1, s.colors[ci] + '00');
offCtx.beginPath();
offCtx.arc(bx, by, br * 1.8, 0, Math.PI * 2);
offCtx.fillStyle = grad;
offCtx.fill();
}
} else {
// Single blob
var hx = cc.x * scaleX, hy = cc.y * scaleY, hr = cc.r * scaleR;
var grad = offCtx.createRadialGradient(hx, hy, 0, hx, hy, hr * 1.8);
grad.addColorStop(0, s.colors[ci] + alphaHex(cc.opacity));
grad.addColorStop(0.5, s.colors[ci] + alphaHex(cc.opacity * 0.8));
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

// 4. Upscale
ctx.imageSmoothingEnabled = true;
ctx.drawImage(offCanvas, 0, 0, halfW, halfH, 0, 0, W, H);

// 5. Draw nuclei and organelles on top at full resolution

// Daughters
for (var i = 0; i < daughters.length; i++) {
var dc = daughters[i];
if (dc.opacity <= 0) continue;
ctx.globalAlpha = dc.opacity;
drawNucleus(dc.x, dc.y, dc.r, s, dc.colorIdx % s.colors.length, t, false);
drawOrganelles(dc.x, dc.y, dc.r, s, dc.colorIdx % s.colors.length, dc.organelles, t, false);
ctx.globalAlpha = 1;
}

// Center cell
if (centerCell) {
var cc = centerCell;
var ci = cc.colorIdx % s.colors.length;
ctx.globalAlpha = cc.opacity;

if (cycleState === 'DIVIDING') {
var dp = cc.divProgress;
var sepFactor;
if (dp < 0.3) sepFactor = (dp / 0.3) * 0.4;
else if (dp < 0.7) sepFactor = 0.4 + ((dp - 0.3) / 0.4) * 0.6;
else { var sp = (dp - 0.7) / 0.3; sp = sp * sp; sepFactor = 1.0 + sp * 0.8; }
var sep = cc.r * sepFactor;
var a = cc.divAngle;
var x1 = cc.x + Math.cos(a) * sep * 0.5;
var y1 = cc.y + Math.sin(a) * sep * 0.5;
var x2 = cc.x - Math.cos(a) * sep * 0.5;
var y2 = cc.y - Math.sin(a) * sep * 0.5;
var subR = cc.r * (0.75 - dp * 0.15);

// Nucleus animation during division
if (dp < 0.25) {
// Elongating single ellipse — draw as stretched nucleus
var nucR = subR * 0.18;
var stretch = 1 + dp * 4;
ctx.save();
ctx.translate(cc.x, cc.y);
ctx.rotate(a);
ctx.scale(stretch, 1 / Math.sqrt(stretch));
drawNucleus(0, 0, subR, s, ci, t, false);
ctx.restore();
} else if (dp < 0.35) {
// Cross-fade from ellipse to two dots
var fadeT = (dp - 0.25) / 0.1;
// Fading single
ctx.globalAlpha = cc.opacity * (1 - fadeT);
drawNucleus(cc.x, cc.y, subR, s, ci, t, false);
// Appearing pair
ctx.globalAlpha = cc.opacity * fadeT;
drawNucleus(x1, y1, subR, s, ci, t, false);
drawNucleus(x2, y2, subR, s, ci, t, false);
ctx.globalAlpha = cc.opacity;
} else {
// Two separate nuclei
drawNucleus(x1, y1, subR, s, ci, t, false);
drawNucleus(x2, y2, subR, s, ci, t, false);
}

// Organelles split between the two halves
var halfOrg = Math.floor(cc.organelles.length / 2);
drawOrganelles(x1, y1, subR, s, ci, cc.organelles.slice(0, halfOrg), t, false);
drawOrganelles(x2, y2, subR, s, ci, cc.organelles.slice(halfOrg), t, false);
} else {
drawNucleus(cc.x, cc.y, cc.r, s, ci, t, false);
drawOrganelles(cc.x, cc.y, cc.r, s, ci, cc.organelles, t, false);
}
ctx.globalAlpha = 1;
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

function drawNucleus(x, y, r, s, ci, t, isStatic) {
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
}

function drawOrganelles(x, y, r, s, ci, organelles, t, isStatic) {
if (!organelles) return;
for (var k = 0; k < organelles.length; k++) {
var org = organelles[k];
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
daughters = [];
centerCell = null;
nextId = 0;
spawnCenterCell();
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
