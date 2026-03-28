---
title: "Lava Flow - Affirmation Visual"
description: "Mesmerizing blobs merging and separating. Add your own affirmation text for a personal visual meditation."
full_width: true
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
margin-bottom: 0.5rem;
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
<a href="/visuals/" class="vp-back">&larr; All Visuals</a>
<h1 class="vp-title">Lava Flow</h1>
<p class="vp-desc">Blobs merging and separating.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#f97316,#ef4444)"></div>
<span>Magma</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#06b6d4,#d946ef)"></div>
<span>Neon</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#059669,#84cc16)"></div>
<span>Emerald</span>
</button>
</div>
<div class="vp-affirmation">
<div class="vp-aff-header"><label for="vp-aff-input" class="vp-aff-label">Affirmation text (optional)</label><div class="vp-aff-presets"><button type="button" class="vp-aff-presets-btn" id="vp-aff-presets-btn" aria-expanded="false">presets <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="vp-aff-menu" id="vp-aff-menu"></div></div></div>
<textarea id="vp-aff-input" class="vp-aff-textarea" rows="2" maxlength="300" placeholder="optional. Enter affirmations here. Text will display one line after another."></textarea>
</div>
<div class="vp-pace">
<div class="vp-pace-label">Pace <span id="vp-pace-val">Normal</span></div>
<input type="range" id="vp-pace-input" class="vp-pace-slider" min="0" max="4" step="1" value="2">
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
var VISUAL_SLUG = 'lava-flow';
var currentAffId = null;
var paceLabels = ["Very slow","Slow","Normal","Fast","Very fast"];
var currentPace = 2;
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

// Pace slider
var paceInput = document.getElementById('vp-pace-input');
var paceVal = document.getElementById('vp-pace-val');
paceInput.addEventListener('input', function() {
currentPace = parseInt(paceInput.value);
paceVal.textContent = paceLabels[currentPace];
});

// Preset examples dropdown
var affPresets = [
{title:'None',text:''},
{title:'Calm & clarity',text:'My mind is calm and clear\nI release what I cannot control\nI am present in this moment'},
{title:'Self-confidence',text:'I believe in myself and my abilities\nI am worthy of good things\nI grow stronger every day'},
{title:'Letting go',text:'I let go of what no longer serves me\nI forgive myself and others\nI make space for peace'},
{title:'Gratitude',text:'I am grateful for this moment\nAbundance flows into my life\nI appreciate the simple things'},
{title:'Focus & energy',text:'My focus is sharp and steady\nI channel my energy with purpose\nI move forward with intention'},
{title:'Sleep & rest',text:'I give myself permission to rest\nMy body relaxes with each breath\nI drift into peaceful sleep'},
{title:'Quit smoking',text:'My lungs are cleaner every day\nI am stronger than any craving\nEvery breath is a victory'}
];
var presetsBtn = document.getElementById('vp-aff-presets-btn');
var presetsMenu = document.getElementById('vp-aff-menu');
var menuHtml = '';
for (var pi = 0; pi < affPresets.length; pi++) {
menuHtml += '<button class="vp-aff-menu-item" data-preset="' + pi + '"><div class="vp-aff-menu-item-title">' + affPresets[pi].title + '</div>' + (affPresets[pi].text ? affPresets[pi].text.split('\n')[0] + '…' : 'Clear text') + '</button>';
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
hint.innerHTML = 'Reduced motion enabled · Showing static view<br>Tap anywhere to exit';
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
// Pre-fill default affirmation text
var affInput = document.getElementById('vp-aff-input');
if (!affInput.value) {
affInput.value = 'My mind is calm and clear\nI release what I cannot control\nI am present in this moment';
}
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