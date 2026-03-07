---
title: "Mandala - Meditative Visual"
description: "Slowly rotating sacred geometry with evolving symmetry."
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
</style>

<div id="visual-page">
<div id="vp-intro">
<a href="/visuals/" class="vp-back">&larr; All Visuals</a>
<h1 class="vp-title">Mandala</h1>
<p class="vp-desc">Rotating sacred geometry. Choose a color scheme.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#eab308,#f59e0b)"></div>
<span>Golden</span>
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
{ radius: 0.68, folds: 12, speed: 0.00005, dir: -1, type: 'lines' }
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
