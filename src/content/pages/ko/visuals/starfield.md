---
title: "별빛 필드 - 확언 비주얼"
description: "깊은 우주를 떠도는 반짝이는 별들. 맞춤 확언 텍스트를 추가하세요. 브라우저에 비공개로 저장됩니다."
full_width: true
language: "ko"
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
<a href="/ko/visuals/" class="vp-back">&larr; 모든 비주얼</a>
<h1 class="vp-title">별빛 필드</h1>
<p class="vp-desc">깊은 우주에서 반짝이는 별들.</p>
<div class="vp-schemes">
<button class="vp-scheme" data-scheme="0" aria-pressed="true">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#1e293b,#475569)"></div>
<span>딥 스페이스</span>
</button>
<button class="vp-scheme" data-scheme="1" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#4c1d95,#a855f7)"></div>
<span>네뷸라</span>
</button>
<button class="vp-scheme" data-scheme="2" aria-pressed="false">
<div class="vp-scheme-dot" style="background:linear-gradient(135deg,#78350f,#f59e0b)"></div>
<span>따뜻한 코스모스</span>
</button>
</div>
<div class="vp-affirmation">
<div class="vp-aff-header"><label for="vp-aff-input" class="vp-aff-label">확언 텍스트 (선택 사항)</label><div class="vp-aff-presets"><button type="button" class="vp-aff-presets-btn" id="vp-aff-presets-btn" aria-expanded="false">프리셋 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="vp-aff-menu" id="vp-aff-menu"></div></div></div>
<textarea id="vp-aff-input" class="vp-aff-textarea" rows="2" maxlength="300" placeholder="선택 사항. 확언을 입력하세요. 텍스트가 한 줄씩 표시됩니다."></textarea>
</div>
<div class="vp-pace">
<div class="vp-pace-label">속도 <span id="vp-pace-val">보통</span></div>
<input type="range" id="vp-pace-input" class="vp-pace-slider" min="0" max="4" step="1" value="2">
</div>
<button class="vp-start" id="vp-start-btn">시작</button>
</div>
<div id="vp-fullscreen" style="display:none">
<canvas id="vp-canvas"></canvas>
<div id="vp-hint">아무 곳이나 탭하여 종료</div>
</div>
</div>

<script>
(function() {
var VISUAL_SLUG = 'starfield';
var currentAffId = null;
var paceLabels = ["매우 느림","느림","보통","빠름","매우 빠름"];
var currentPace = 2;
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

// Pace slider
var paceInput = document.getElementById('vp-pace-input');
var paceVal = document.getElementById('vp-pace-val');
paceInput.addEventListener('input', function() {
currentPace = parseInt(paceInput.value);
paceVal.textContent = paceLabels[currentPace];
});

// Preset examples dropdown
var affPresets = [
{title:'없음',text:''},
{title:'평온과 명확함',text:'내 마음은 평온하고 맑다\n통제할 수 없는 것을 내려놓는다\n나는 이 순간에 존재한다'},
{title:'자신감',text:'나는 나 자신과 내 능력을 뿰는다\n나는 좋은 것을 받을 자격이 있다\n나는 매일 더 강해진다'},
{title:'내려놓기',text:'더 이상 도움이 되지 않는 것을 내려놓는다\n나 자신과 다른 사람을 용서한다\n평화를 위한 공간을 만든다'},
{title:'감사',text:'이 순간에 감사한다\n풍요로움이 내 삶에 흐른다\n소박한 것들에 감사한다'},
{title:'집중과 에너지',text:'내 집중력은 날카록고 안정적이다\n목적을 가지고 에너지를 쓴다\n의지를 가지고 앞으로 나아간다'},
{title:'수면과 휴식',text:'쉬어도 된다고 나에게 허락한다\n숨을 쉴 때마다 몸이 이완된다\n평화로운 잠 속으로 빠져든다'},
{title:'금연',text:'내 폐는 매일 깨끗해지고 있다\n나는 어떤 갈망보다 강하다\n모든 호흡이 승리이다'}
];
var presetsBtn = document.getElementById('vp-aff-presets-btn');
var presetsMenu = document.getElementById('vp-aff-menu');
var menuHtml = '';
for (var pi = 0; pi < affPresets.length; pi++) {
menuHtml += '<button class="vp-aff-menu-item" data-preset="' + pi + '"><div class="vp-aff-menu-item-title">' + affPresets[pi].title + '</div>' + (affPresets[pi].text ? affPresets[pi].text.split('\n')[0] + '…' : '텍스트 지우기') + '</button>';
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
hint.innerHTML = '모션 감소 활성화 · 정적 뷰 표시 중<br>아무 곳이나 탭하여 종료';
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