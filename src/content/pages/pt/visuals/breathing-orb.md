---
title: "Orbe de Respiração - Visual Meditativo"
description: "Um orbe pulsante que guia seu ritmo de respiração."
full_width: true
language: "pt"
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
</style>

<div id="visual-page">
<div id="vp-intro">
<a href="/pt/visuals/" class="vp-back">&larr; Todos os Visuais</a>
<h1 class="vp-title">Orbe de Respiração</h1>
<p class="vp-desc">Orbe pulsante guiando sua respiração. Escolha um esquema de cores.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#4338ca,#7c3aed)"></div>
<span>Crepúsculo</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f97316,#eab308)"></div>
<span>Nascer do Sol</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#059669,#14b8a6)"></div>
<span>Floresta</span>
</button>
</div>
<button class="vp-start" id="vp-start-btn">Iniciar</button>
</div>
<div id="vp-fullscreen" style="display:none">
<canvas id="vp-canvas"></canvas>
<div id="vp-hint">Toque em qualquer lugar para sair</div>
</div>
</div>

<script>
(function() {
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
if (reducedMotion) {
hint.innerHTML = 'Movimento reduzido ativado \u00b7 Exibindo vista estática<br>Toque em qualquer lugar para sair';
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