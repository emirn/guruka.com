---
title: "Ripples - Meditative Visual"
description: "Water ripple circles emanating from random points, overlapping peacefully. Choose a color scheme and watch the ripples expand."
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
background: #060a14;
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
<h1 class="vp-title">Ripples</h1>
<p class="vp-desc">Water ripple circles emanating from random points, overlapping peacefully. Choose a color scheme and watch the ripples expand.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#94a3b8,#3b82f6)"></div>
<span>Moonlight</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f59e0b,#ef4444)"></div>
<span>Sunset</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#10b981,#14b8a6)"></div>
<span>Jade</span>
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
{ name:'Moonlight', bg:'#060a14', ring:['rgba(148,163,184,','rgba(59,130,246,','rgba(203,213,225,'] },
{ name:'Sunset', bg:'#140a05', ring:['rgba(245,158,11,','rgba(239,68,68,','rgba(251,191,36,'] },
{ name:'Jade', bg:'#051410', ring:['rgba(16,185,129,','rgba(20,184,166,','rgba(110,231,183,'] }
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

var ripples = [];
var lastSpawn = 0;
var spawnInterval = 2500;

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

function spawnRipple(time) {
ripples.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
born: time,
maxR: Math.min(canvas.width, canvas.height) * (0.2 + Math.random() * 0.2),
rings: 3 + Math.floor(Math.random() * 3),
colorIdx: Math.floor(Math.random() * 3),
vx: (Math.random() - 0.5) * 1.2,
vy: (Math.random() - 0.5) * 1.2
});
if (ripples.length > 18) ripples.shift();
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;

// Semi-transparent background for trail effect
ctx.fillStyle = s.bg;
ctx.globalAlpha = 0.15;
ctx.fillRect(0, 0, W, H);
ctx.globalAlpha = 1;

// Spawn new ripple
if (t - lastSpawn > spawnInterval) {
spawnRipple(t);
lastSpawn = t;
spawnInterval = 1500 + Math.random() * 2000;
}

if (reducedMotion) {
// Static concentric circles
ctx.fillStyle = s.bg;
ctx.globalAlpha = 1;
ctx.fillRect(0, 0, W, H);
for (var i = 0; i < 5; i++) {
var cx = W * (0.2 + i * 0.15);
var cy = H * (0.3 + (i % 3) * 0.15);
for (var r = 0; r < 3; r++) {
var radius = 30 + r * 25;
ctx.beginPath();
ctx.arc(cx, cy, radius, 0, Math.PI * 2);
ctx.strokeStyle = s.ring[r % 3] + '0.3)';
ctx.shadowColor = s.ring[r % 3] + '0.5)';
ctx.shadowBlur = 8;
ctx.lineWidth = 1.5;
ctx.stroke();
}
}
ctx.shadowBlur = 0;
animId = requestAnimationFrame(draw);
return;
}

// Draw ripples
for (var i = ripples.length - 1; i >= 0; i--) {
var rip = ripples[i];
var age = (t - rip.born) / 1000;
var life = rip.maxR / 60;
var progress = age / life;

if (progress > 1) {
ripples.splice(i, 1);
continue;
}

// Drift center over lifetime
rip.x += rip.vx;
rip.y += rip.vy;

var currentR = progress * rip.maxR;
var fadeOut = 1 - progress;

// Inner glow for young ripples
if (progress < 0.4) {
var glowAlpha = (0.4 - progress) * 0.3 * fadeOut;
var igr = ctx.createRadialGradient(rip.x, rip.y, 0, rip.x, rip.y, currentR * 0.5);
igr.addColorStop(0, s.ring[rip.colorIdx] + (glowAlpha * 0.6).toFixed(3) + ')');
igr.addColorStop(1, s.ring[rip.colorIdx] + '0)');
ctx.beginPath();
ctx.arc(rip.x, rip.y, currentR * 0.5, 0, Math.PI * 2);
ctx.fillStyle = igr;
ctx.fill();
}

for (var ring = 0; ring < rip.rings; ring++) {
var ringR = currentR - ring * 14;
if (ringR < 0) continue;
var alpha = fadeOut * (0.4 - ring * 0.08);
// Pulsing alpha
alpha *= 0.8 + 0.2 * Math.sin(t * 0.002 + rip.born * 0.001 + ring * 1.5);
if (alpha <= 0) continue;

// Pulsing line width
var baseLW = 2 - ring * 0.3;
baseLW += Math.sin(t * 0.003 + ring * 2) * 0.5;
if (baseLW < 0.5) baseLW = 0.5;

var ringColor = s.ring[(rip.colorIdx + ring) % 3] + alpha.toFixed(3) + ')';
ctx.shadowColor = s.ring[(rip.colorIdx + ring) % 3] + '0.6)';
ctx.shadowBlur = 8;

// Sharp ring with shadowBlur glow
ctx.beginPath();
ctx.arc(rip.x, rip.y, ringR, 0, Math.PI * 2);
ctx.strokeStyle = ringColor;
ctx.lineWidth = baseLW;
ctx.stroke();
}
ctx.shadowBlur = 0;
}

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
ripples = [];
lastSpawn = 0;
intro.style.display = 'none';
fs.style.display = 'block';
resize();
// Clear canvas fully on start
ctx.fillStyle = schemes[currentScheme].bg;
ctx.globalAlpha = 1;
ctx.fillRect(0, 0, canvas.width, canvas.height);
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
