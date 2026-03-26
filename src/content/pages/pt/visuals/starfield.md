---
title: "Campo Estelar - Visual Meditativo"
description: "Estrelas cintilando no espaço profundo."
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
background: #020510;
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
<h1 class="vp-title">Campo Estelar</h1>
<p class="vp-desc">Estrelas cintilando no espaço profundo. Escolha um esquema de cores.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#1e293b,#475569)"></div>
<span>Espaço Profundo</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#4c1d95,#a855f7)"></div>
<span>Nebulosa</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#78350f,#f59e0b)"></div>
<span>Cosmos Quente</span>
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
{ name:'Deep Space', bg:'#020510', starColor:'rgba(200,220,255,', glowColor:'rgba(80,100,180,0.015)', shootColor:'rgba(200,220,255,' },
{ name:'Nebula', bg:'#0a0515', starColor:'rgba(220,200,255,', glowColor:'rgba(160,80,200,0.03)', shootColor:'rgba(200,160,255,' },
{ name:'Warm Cosmos', bg:'#0a0805', starColor:'rgba(255,220,160,', glowColor:'rgba(180,120,60,0.015)', shootColor:'rgba(255,200,100,' }
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

var starsBack = [], starsMid = [], starsFront = [];
var shootingStars = [];
var lastShootTime = 0;

function initStars() {
starsBack = []; starsMid = []; starsFront = [];
shootingStars = [];
var W = canvas.width, H = canvas.height;
for (var i = 0; i < 200; i++) {
starsBack.push({ x: Math.random() * W, y: Math.random() * H, size: 0.5 + Math.random() * 1, baseAlpha: 0.3 + Math.random() * 0.4, phase: Math.random() * Math.PI * 2 });
}
for (var i = 0; i < 100; i++) {
starsMid.push({ x: Math.random() * W, y: Math.random() * H, size: 1 + Math.random() * 1.5, baseAlpha: 0.4 + Math.random() * 0.4, phase: Math.random() * Math.PI * 2 });
}
for (var i = 0; i < 50; i++) {
starsFront.push({ x: Math.random() * W, y: Math.random() * H, size: 1.5 + Math.random() * 2, baseAlpha: 0.6 + Math.random() * 0.4, phase: Math.random() * Math.PI * 2 });
}
}

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (running) initStars();
}

function drawStarLayer(stars, speed, t, s, W, H) {
for (var i = 0; i < stars.length; i++) {
var st = stars[i];
var twinkle = st.baseAlpha * (0.5 + 0.5 * Math.sin(t * 0.001 + st.phase));
// Glow for larger stars
if (st.size > 2) {
ctx.beginPath();
ctx.arc(st.x, st.y, st.size * 3, 0, Math.PI * 2);
ctx.fillStyle = s.starColor + (twinkle * 0.15).toFixed(3) + ')';
ctx.fill();
}
ctx.beginPath();
ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
ctx.fillStyle = s.starColor + twinkle.toFixed(3) + ')';
ctx.fill();
}
}

function draw(t) {
if (!running) return;
var s = schemes[currentScheme];
var W = canvas.width, H = canvas.height;

ctx.fillStyle = s.bg;
ctx.fillRect(0, 0, W, H);

// Subtle center glow
var glow = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.5);
glow.addColorStop(0, s.glowColor);
glow.addColorStop(1, 'transparent');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, W, H);

// Draw star layers with parallax speeds
drawStarLayer(starsBack, 0.025, t, s, W, H);
drawStarLayer(starsMid, 0.06, t, s, W, H);
drawStarLayer(starsFront, 0.12, t, s, W, H);

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
initStars();
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