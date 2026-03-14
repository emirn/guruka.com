---
title: "두뇌 훈련 게임"
description: "기억력, 처리 속도, 정신적 민첩성을 훈련하는 무료 두뇌 훈련 게임. 적응형 난이도의 7가지 게임을 플레이하세요."
full_width: true
language: "ko"
---

<style>
#games-hub {
max-width: 64rem;
margin: 0 auto;
padding: 2rem 1rem 4rem;
}
#games-hub .gh-header {
text-align: center;
margin-bottom: 3rem;
}
#games-hub .gh-header h1 {
font-size: clamp(1.75rem, 4vw, 2.5rem);
font-weight: 700;
margin-bottom: 0.75rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] #games-hub .gh-header h1 {
color: var(--color-dark-text-primary, #f9fafb);
}
#games-hub .gh-header p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 1.125rem;
max-width: 36rem;
margin: 0 auto;
}
[data-theme="dark"] #games-hub .gh-header p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gh-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
margin-bottom: 3rem;
}
.gh-game-card {
display: grid;
grid-template-columns: 4rem 1fr;
column-gap: 1rem;
text-decoration: none;
color: inherit;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 1rem;
padding: 2rem;
transition: transform 0.3s, box-shadow 0.3s;
position: relative;
overflow: hidden;
}
[data-theme="dark"] .gh-game-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.gh-game-card:hover {
transform: none;
}
.gh-game-card::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
height: 4px;
}
.gh-game-card.speed-match::before { background: #0f9072; }
.gh-game-card.memory-matrix::before { background: #f59e0b; }
.gh-game-card.sequence-recall::before { background: #10b981; }
.gh-game-card.number-crunch::before { background: #6366f1; }
.gh-game-card.color-clash::before { background: #ec4899; }
.gh-game-card.quick-sort::before { background: #f97316; }
.gh-game-card.pattern-path::before { background: #14b8a6; }
.gh-game-icon {
width: 4rem;
height: 4rem;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.75rem;
margin-bottom: 0;
grid-column: 1;
grid-row: 1;
align-self: center;
}
.gh-game-card h2 {
font-size: 1.5rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
grid-column: 2;
grid-row: 1;
align-self: center;
}
.gh-game-card .gh-skill,
.gh-game-card .gh-desc,
.gh-game-card .gh-play-btn,
.gh-game-card .gh-best {
grid-column: 1 / -1;
}
[data-theme="dark"] .gh-game-card h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gh-game-card .gh-skill {
display: inline-block;
font-size: 0.75rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
padding: 0.25rem 0.75rem;
border-radius: 9999px;
margin-bottom: 0.5rem;
}
.speed-match .gh-skill { background: rgba(15,144,114,0.1); color: #0f9072; }
.memory-matrix .gh-skill { background: rgba(245,158,11,0.1); color: #f59e0b; }
.sequence-recall .gh-skill { background: rgba(16,185,129,0.1); color: #10b981; }
.number-crunch .gh-skill { background: rgba(99,102,241,0.1); color: #6366f1; }
.color-clash .gh-skill { background: rgba(236,72,153,0.1); color: #ec4899; }
.quick-sort .gh-skill { background: rgba(249,115,22,0.1); color: #f97316; }
.pattern-path .gh-skill { background: rgba(20,184,166,0.1); color: #14b8a6; }
.gh-game-card .gh-desc {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.6;
margin-bottom: 0.75rem;
}
[data-theme="dark"] .gh-game-card .gh-desc {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gh-play-btn {
display: inline-flex;
align-items: center;
gap: 0.5rem;
font-weight: 600;
font-size: 0.9375rem;
color: var(--color-primary, #0f9072);
min-height: 44px;
}
.gh-play-btn::after {
content: '\2192';
transition: transform 0.2s;
}
.gh-best:empty {
display: none;
}
.gh-best {
margin-top: 0.75rem;
padding-top: 0.75rem;
border-top: 1px solid var(--color-border, #dfe4ea);
font-size: 0.8125rem;
color: var(--color-text-secondary, #4b5b6d);
}
[data-theme="dark"] .gh-best {
border-color: var(--color-dark-border, #334155);
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gh-best strong {
color: var(--color-primary, #0f9072);
}
.gh-info {
text-align: center;
padding: 2rem;
background: var(--color-bg-secondary, #f0f4f8);
border-radius: 1rem;
}
[data-theme="dark"] .gh-info {
background: var(--color-dark-bg-secondary, #1e293b);
}
.gh-info h3 {
font-size: 1.25rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gh-info h3 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gh-info p {
color: var(--color-text-secondary, #4b5b6d);
max-width: 32rem;
margin: 0 auto;
font-size: 0.9375rem;
}
[data-theme="dark"] .gh-info p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
</style>

<div id="games-hub">
<div class="gh-header">
<h1>&#129504; 두뇌 훈련 게임</h1>
<p>무료, 광고 없음. 점수는 로컬에 저장됩니다 - 계정 불필요.</p>
</div>

<div class="gh-grid">
<a href="/ko/games/speed-match/" class="gh-game-card speed-match">
<div class="gh-game-icon" style="background: rgba(15,144,114,0.1); color: #0f9072;">&#9889;</div>
<h2>Speed Match</h2>
<span class="gh-skill">처리 속도</span>
<p class="gh-desc">심볼을 비교하여 처리 속도를 테스트하세요. 현재 심볼이 이전 것과 같은가요? 시간이 다 되기 전에 빠르게 반응하세요!</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-speed-match"></div>
</a>

<a href="/ko/games/memory-matrix/" class="gh-game-card memory-matrix">
<div class="gh-game-icon" style="background: rgba(245,158,11,0.1); color: #f59e0b;">&#9638;</div>
<h2>Memory Matrix</h2>
<span class="gh-skill">공간 기억력</span>
<p class="gh-desc">그리드에서 하이라이트된 셀의 패턴을 관찰하고 기억으로 재현하세요. 레벨이 올라가면 그리드가 커지고 패턴이 복잡해집니다.</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-memory-matrix"></div>
</a>

<a href="/ko/games/sequence-recall/" class="gh-game-card sequence-recall">
<div class="gh-game-icon" style="background: rgba(16,185,129,0.1); color: #10b981;">&#9776;</div>
<h2>Sequence Recall</h2>
<span class="gh-skill">작업 기억력</span>
<p class="gh-desc">하나씩 표시되는 색의 순서를 기억하고 올바른 순서로 재현하세요. 상위 레벨에서는 계산 방해와 듀얼 트랙 과제가 추가됩니다.</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-sequence-recall"></div>
</a>

<a href="/ko/games/number-crunch/" class="gh-game-card number-crunch">
<div class="gh-game-icon" style="background: rgba(99,102,241,0.1); color: #6366f1;">&#129518;</div>
<h2>Number Crunch</h2>
<span class="gh-skill">암산</span>
<p class="gh-desc">시간 제한 내에 빠진 요소가 있는 방정식을 풀어보세요. 상위 레벨에서는 답의 변환이 필요한 규칙 수정자가 추가됩니다.</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-number-crunch"></div>
</a>

<a href="/ko/games/color-clash/" class="gh-game-card color-clash">
<div class="gh-game-icon" style="background: rgba(236,72,153,0.1); color: #ec4899;">&#127912;</div>
<h2>Color Clash</h2>
<span class="gh-skill">억제 조절</span>
<p class="gh-desc">색 이름이 다른 잉크 색으로 표시됩니다. 현재 규칙에 따라 올바른 답을 탭하세요. 잉크 색인지, 단어의 의미인지. 규칙이 바뀝니다!</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-color-clash"></div>
</a>

<a href="/ko/games/quick-sort/" class="gh-game-card quick-sort">
<div class="gh-game-icon" style="background: rgba(249,115,22,0.1); color: #f97316;">&#128451;</div>
<h2>Quick Sort</h2>
<span class="gh-skill">과업 전환</span>
<p class="gh-desc">좌우로 스와이프하여 아이템을 카테고리로 분류하세요. 몇 라운드마다 분류 규칙이 바뀌어 정신적 유연성이 시험됩니다.</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-quick-sort"></div>
</a>

<a href="/ko/games/pattern-path/" class="gh-game-card pattern-path">
<div class="gh-game-icon" style="background: rgba(20,184,166,0.1); color: #14b8a6;">&#129513;</div>
<h2>Pattern Path</h2>
<span class="gh-skill">패턴 인식</span>
<p class="gh-desc">시각 패턴의 나열에서 빠진 조각을 찾으세요. 색, 크기, 회전이 변하는 형태 속에서 규칙을 찾아 올바른 답을 선택하세요.</p>
<span class="gh-play-btn">플레이하기</span>
<div class="gh-best" id="best-pattern-path"></div>
</a>
</div>

<div class="gh-info">
<h3>플레이 방법</h3>
<p>각 게임은 20단계의 난이도로 당신의 실력에 맞춰집니다. 최고의 결과를 위해 매일 15~20분, 7가지 게임 모두를 훈련하세요. 개인 최고 기록은 브라우저에 저장됩니다.</p>
</div>
</div>

<script>
(function() {
var games = ['speed-match', 'memory-matrix', 'sequence-recall', 'number-crunch', 'color-clash', 'quick-sort', 'pattern-path'];
games.forEach(function(game) {
var best = localStorage.getItem('guruka_' + game + '_best');
var el = document.getElementById('best-' + game);
if (el && best) {
el.innerHTML = '개인 최고: <strong>' + Number(best).toLocaleString() + '</strong> 포인트';
}
});
})();
</script>

<style>
/* ── Mobile-first responsive ── */
.gh-grid {
grid-template-columns: 1fr;
gap: 1rem;
margin-bottom: 2rem;
}
#games-hub .gh-header {
margin-bottom: 1.5rem;
}
.gh-game-card {
padding: 1.25rem;
grid-template-columns: 2.5rem 1fr;
column-gap: 0.875rem;
}
.gh-game-icon {
width: 2.5rem;
height: 2.5rem;
font-size: 1.25rem;
border-radius: 0.75rem;
}
.gh-game-card h2 {
font-size: 1.2rem;
margin-bottom: 0.25rem;
}
.gh-game-card .gh-skill {
display: none;
}
.gh-game-card .gh-desc {
display: none;
}
.gh-play-btn {
min-height: 36px;
font-size: 0.875rem;
}
.gh-best {
margin-top: 0.5rem;
padding-top: 0.5rem;
font-size: 0.75rem;
}
.gh-info {
padding: 1.25rem;
}
.gh-info h3 {
font-size: 1.1rem;
}
.gh-info p {
font-size: 0.875rem;
}
@media (min-width: 480px) {
.gh-grid {
grid-template-columns: repeat(2, 1fr);
gap: 1.25rem;
}
}
@media (min-width: 768px) {
.gh-grid {
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
margin-bottom: 3rem;
}
#games-hub .gh-header {
margin-bottom: 3rem;
}
.gh-game-card {
padding: 2rem;
grid-template-columns: 4rem 1fr;
column-gap: 1rem;
}
.gh-game-icon {
width: 4rem;
height: 4rem;
font-size: 1.75rem;
border-radius: 1rem;
}
.gh-game-card h2 {
font-size: 1.5rem;
margin-bottom: 0.5rem;
}
.gh-game-card .gh-skill {
display: inline-block;
}
.gh-game-card .gh-desc {
display: block;
-webkit-line-clamp: unset;
overflow: visible;
}
.gh-play-btn {
min-height: 44px;
font-size: 0.9375rem;
}
.gh-best {
margin-top: 0.75rem;
padding-top: 0.75rem;
font-size: 0.8125rem;
}
.gh-info {
padding: 2rem;
}
.gh-info h3 {
font-size: 1.25rem;
}
.gh-info p {
font-size: 0.9375rem;
}
}
@media (hover: hover) and (pointer: fine) {
.gh-game-card:hover {
transform: translateY(-6px);
box-shadow: 0 16px 32px rgba(0,0,0,0.12);
}
.gh-game-card:hover .gh-play-btn::after {
transform: translateX(4px);
}
}
@media (prefers-reduced-motion: reduce) {
.gh-game-card {
transition: none;
}
}
</style>
