---
title: "Aurora - Meditative Visual"
description: "Northern lights — flowing undulating color bands across the screen. Choose a color scheme and immerse yourself in the aurora."
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
</style>

<div id="visual-page">
<div id="vp-intro">
<a href="/visuals/" class="vp-back">&larr; All Visuals</a>
<h1 class="vp-title">Aurora</h1>
<p class="vp-desc">Northern lights — flowing undulating color bands dancing across the screen. Choose a color scheme and let the aurora wash over you.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#22d3ee,#10b981)"></div>
<span>Arctic</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#a855f7,#ec4899)"></div>
<span>Cosmic</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f472b6,#eab308)"></div>
<span>Dawn</span>
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
{ name:'Arctic', bg:'#020810',
bands:[
{colors:['#22d3ee','#06b6d4'], alpha:0.25, baseY:0.25, amp:0.08, freq:0.003, speed:0.12},
{colors:['#10b981','#059669'], alpha:0.20, baseY:0.30, amp:0.06, freq:0.004, speed:0.09},
{colors:['#22d3ee','#14b8a6'], alpha:0.15, baseY:0.35, amp:0.10, freq:0.002, speed:0.15},
{colors:['#34d399','#06b6d4'], alpha:0.18, baseY:0.28, amp:0.07, freq:0.0035, speed:0.10},
{colors:['#67e8f9','#a7f3d0'], alpha:0.10, baseY:0.22, amp:0.05, freq:0.005, speed:0.06}
]},
{ name:'Cosmic', bg:'#0a0510',
bands:[
{colors:['#a855f7','#7c3aed'], alpha:0.25, baseY:0.25, amp:0.08, freq:0.003, speed:0.12},
{colors:['#ec4899','#be185d'], alpha:0.20, baseY:0.30, amp:0.06, freq:0.004, speed:0.09},
{colors:['#c084fc','#e879f9'], alpha:0.15, baseY:0.35, amp:0.10, freq:0.002, speed:0.15},
{colors:['#8b5cf6','#d946ef'], alpha:0.18, baseY:0.28, amp:0.07, freq:0.0035, speed:0.10},
{colors:['#f0abfc','#c4b5fd'], alpha:0.10, baseY:0.22, amp:0.05, freq:0.005, speed:0.06}
]},
{ name:'Dawn', bg:'#100805',
bands:[
{colors:['#f472b6','#fb923c'], alpha:0.25, baseY:0.25, amp:0.08, freq:0.003, speed:0.12},
{colors:['#eab308','#f59e0b'], alpha:0.20, baseY:0.30, amp:0.06, freq:0.004, speed:0.09},
{colors:['#fb7185','#fbbf24'], alpha:0.15, baseY:0.35, amp:0.10, freq:0.002, speed:0.15},
{colors:['#f9a8d4','#fcd34d'], alpha:0.18, baseY:0.28, amp:0.07, freq:0.0035, speed:0.10},
{colors:['#fda4af','#fde68a'], alpha:0.10, baseY:0.22, amp:0.05, freq:0.005, speed:0.06}
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
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;
var time = t / 1000;

// Background — semi-transparent clear for dreamy ghosting/trail effect
ctx.globalAlpha = 0.08;
ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);
ctx.globalAlpha = 1;

if (reducedMotion) {
// Full opaque clear for static view
ctx.globalAlpha = 1;
ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);
// Static aurora bands
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
animId = requestAnimationFrame(draw);
return;
}

ctx.save();
ctx.globalCompositeOperation = 'screen';

for (var b = 0; b < s.bands.length; b++) {
var band = s.bands[b];
var pulse = 0.75 + 0.25 * Math.sin(time * 0.08 + b * 0.7);
var vertOsc = Math.sin(time * 0.15 + b * 1.1) * 0.04;
ctx.beginPath();

// Build wavy top edge with vertical oscillation
var baseY = H * (band.baseY + vertOsc);
var amp = H * band.amp;
var firstY = 0;
for (var x = 0; x <= W; x += 3) {
var noise1 = Math.sin(x * band.freq + time * band.speed);
var noise2 = Math.sin(x * band.freq * 1.7 + time * band.speed * 0.6 + 2.1);
var noise3 = Math.sin(x * band.freq * 0.5 + time * band.speed * 1.3 + 4.3);
var y = baseY + amp * (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2);
if (x === 0) { ctx.moveTo(x, y); firstY = y; }
else ctx.lineTo(x, y);
}

// Fill downward with gradient — extended bottom edge
ctx.lineTo(W, H * (band.baseY + vertOsc + 0.25));
ctx.lineTo(0, H * (band.baseY + vertOsc + 0.25));
ctx.closePath();

var grad = ctx.createLinearGradient(0, baseY - amp, 0, baseY + H * 0.25);
grad.addColorStop(0, band.colors[0] + hexAlpha(band.alpha * 0.3 * pulse));
grad.addColorStop(0.3, band.colors[0] + hexAlpha(band.alpha * pulse));
grad.addColorStop(0.7, band.colors[1] + hexAlpha(band.alpha * 0.6 * pulse));
grad.addColorStop(1, band.colors[1] + '00');
ctx.shadowColor = band.colors[0];
ctx.shadowBlur = 15;
ctx.fillStyle = grad;
ctx.fill();
ctx.shadowBlur = 0;
}

ctx.restore();

// Subtle stars in background
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
// Full clear on start so trails begin fresh
ctx.globalAlpha = 1;
ctx.fillStyle = schemes[currentScheme].bg;
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
