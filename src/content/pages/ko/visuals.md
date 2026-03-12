---
title: "명상 비주얼"
description: "휴식과 집중을 위한 전체 화면 비주얼."
full_width: true
language: "ko"
---

<style>
#visuals-hub {
max-width: 64rem;
margin: 0 auto;
padding: 2rem 1rem 4rem;
}
#visuals-hub .vh-header {
text-align: center;
margin-bottom: 3rem;
}
#visuals-hub .vh-header h1 {
font-size: clamp(1.75rem, 4vw, 2.5rem);
font-weight: 700;
margin-bottom: 0.75rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] #visuals-hub .vh-header h1 {
color: var(--color-dark-text-primary, #f9fafb);
}
#visuals-hub .vh-header p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 1.125rem;
max-width: 36rem;
margin: 0 auto;
}
[data-theme="dark"] #visuals-hub .vh-header p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vh-grid {
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
}
.vh-card {
display: grid;
grid-template-columns: 2.5rem 1fr;
column-gap: 0.875rem;
text-decoration: none;
color: inherit;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 1rem;
padding: 1.25rem;
transition: transform 0.3s, box-shadow 0.3s;
position: relative;
overflow: hidden;
}
[data-theme="dark"] .vh-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.vh-card:hover { transform: none; }
.vh-dot {
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
grid-column: 1;
grid-row: 1;
align-self: center;
}
.vh-card h2 {
font-size: 1.35rem;
font-weight: 700;
margin-bottom: 0.375rem;
color: var(--color-text-primary, #1a2332);
grid-column: 2;
grid-row: 1;
align-self: center;
}
.vh-card .vh-sub,
.vh-card .vh-launch {
grid-column: 1 / -1;
}
[data-theme="dark"] .vh-card h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.vh-card .vh-sub {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.5;
margin-bottom: 0.375rem;
}
[data-theme="dark"] .vh-card .vh-sub {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.vh-launch {
display: flex;
align-items: center;
font-weight: 600;
font-size: 0.9375rem;
color: var(--color-primary, #0f9072);
margin-top: 0.25rem;
min-height: 44px;
}
@media (min-width: 480px) {
.vh-grid {
grid-template-columns: repeat(2, 1fr);
gap: 1.25rem;
}
.vh-card { padding: 1.5rem; }
}
@media (min-width: 768px) {
.vh-grid {
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
}
.vh-card {
padding: 1.75rem;
grid-template-columns: 3rem 1fr;
}
.vh-dot { width: 3rem; height: 3rem; }
}
@media (hover: hover) and (pointer: fine) {
.vh-card:hover {
transform: translateY(-4px);
box-shadow: 0 12px 28px rgba(0,0,0,0.12);
}
.vh-card:hover .vh-launch {
color: var(--color-primary-hover, #0d7d63);
}
}
@media (prefers-reduced-motion: reduce) {
.vh-card { transition: none; }
}
</style>

<div id="visuals-hub">
<div class="vh-header">
<h1>명상 비주얼</h1>
<p>휴식과 집중을 위한 전체 화면 애니메이션. 계정이 필요하지 않습니다.</p>
</div>

<div class="vh-grid">
<a href="/ko/visuals/breathing-orb/" class="vh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#6366f1,#a78bfa)"></div>
<div class="vh-dot" style="background:linear-gradient(135deg,#6366f1,#a78bfa)"></div>
<h2>호흡 오브</h2>
<p class="vh-sub">호흡을 안내하는 맥동하는 오브</p>
<div class="vh-launch"><span>시작 &rarr;</span></div>
</a>

<a href="/ko/visuals/aurora/" class="vh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#22d3ee,#06b6d4)"></div>
<div class="vh-dot" style="background:linear-gradient(135deg,#22d3ee,#06b6d4)"></div>
<h2>오로라</h2>
<p class="vh-sub">흐르는 북극광</p>
<div class="vh-launch"><span>시작 &rarr;</span></div>
</a>

<a href="/ko/visuals/starfield/" class="vh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#1e293b,#475569)"></div>
<div class="vh-dot" style="background:linear-gradient(135deg,#1e293b,#475569)"></div>
<h2>별빛 필드</h2>
<p class="vh-sub">깊은 우주에서 반짝이는 별들</p>
<div class="vh-launch"><span>시작 &rarr;</span></div>
</a>

<a href="/ko/visuals/lava-flow/" class="vh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#f97316,#ef4444)"></div>
<div class="vh-dot" style="background:linear-gradient(135deg,#f97316,#ef4444)"></div>
<h2>용암 흐름</h2>
<p class="vh-sub">합쳐지고 분리되는 방울</p>
<div class="vh-launch"><span>시작 &rarr;</span></div>
</a>

<a href="/ko/visuals/mandala/" class="vh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#eab308,#a855f7)"></div>
<div class="vh-dot" style="background:linear-gradient(135deg,#eab308,#a855f7)"></div>
<h2>만다라</h2>
<p class="vh-sub">회전하는 신성한 기하학</p>
<div class="vh-launch"><span>시작 &rarr;</span></div>
</a>

<a href="/ko/visuals/dividing-cells/" class="vh-card">
<div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#10b981,#22d3ee)"></div>
<div class="vh-dot" style="background:linear-gradient(135deg,#10b981,#22d3ee)"></div>
<h2>세포 분열</h2>
<p class="vh-sub">끊임없이 분열하는 세포</p>
<div class="vh-launch"><span>시작 &rarr;</span></div>
</a>
</div>
</div>
