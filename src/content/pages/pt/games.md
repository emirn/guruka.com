---
title: "Jogos de Treinamento Cerebral"
description: "Jogue jogos gratuitos de treinamento cerebral para melhorar memoria, velocidade de processamento e agilidade mental. Sete jogos com dificuldade adaptativa."
full_width: true
language: "pt"
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
<h1>&#129504; Jogos de Treinamento Cerebral</h1>
<p>Grátis e sem anúncios irritantes. Suas pontuações são salvas localmente - sem necessidade de conta.</p>
</div>

<div class="gh-grid">
<a href="/pt/games/speed-match/" class="gh-game-card speed-match">
<div class="gh-game-icon" style="background: rgba(15,144,114,0.1); color: #0f9072;">&#9889;</div>
<h2>Speed Match</h2>
<span class="gh-skill">Velocidade de Processamento</span>
<p class="gh-desc">Teste sua velocidade de processamento comparando simbolos. O simbolo atual e igual ao anterior? Responda rapido antes que o tempo acabe!</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-speed-match"></div>
</a>

<a href="/pt/games/memory-matrix/" class="gh-game-card memory-matrix">
<div class="gh-game-icon" style="background: rgba(245,158,11,0.1); color: #f59e0b;">&#9638;</div>
<h2>Memory Matrix</h2>
<span class="gh-skill">Memoria Espacial</span>
<p class="gh-desc">Observe um padrao de celulas destacadas em uma grade e recrie-o de memoria. A grade fica maior e os padroes mais complexos conforme voce sobe de nivel.</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-memory-matrix"></div>
</a>

<a href="/pt/games/sequence-recall/" class="gh-game-card sequence-recall">
<div class="gh-game-icon" style="background: rgba(16,185,129,0.1); color: #10b981;">&#9776;</div>
<h2>Sequence Recall</h2>
<span class="gh-skill">Memoria de Trabalho</span>
<p class="gh-desc">Memorize uma sequencia de cores mostradas uma a uma e depois lembre-as na ordem correta. Niveis mais altos adicionam distracoes matematicas e desafios de dupla trilha.</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-sequence-recall"></div>
</a>

<a href="/pt/games/number-crunch/" class="gh-game-card number-crunch">
<div class="gh-game-icon" style="background: rgba(99,102,241,0.1); color: #6366f1;">&#129518;</div>
<h2>Number Crunch</h2>
<span class="gh-skill">Calculo Mental</span>
<p class="gh-desc">Resolva equacoes com elementos faltantes sob pressao de tempo. Niveis mais altos adicionam modificadores de regras que exigem transformacao mental das respostas.</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-number-crunch"></div>
</a>

<a href="/pt/games/color-clash/" class="gh-game-card color-clash">
<div class="gh-game-icon" style="background: rgba(236,72,153,0.1); color: #ec4899;">&#127912;</div>
<h2>Color Clash</h2>
<span class="gh-skill">Controle Inibitorio</span>
<p class="gh-desc">Uma palavra de cor aparece em uma cor de tinta diferente. Toque na resposta correta com base na regra atual — cor da tinta ou significado da palavra. As regras mudam!</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-color-clash"></div>
</a>

<a href="/pt/games/quick-sort/" class="gh-game-card quick-sort">
<div class="gh-game-icon" style="background: rgba(249,115,22,0.1); color: #f97316;">&#128451;</div>
<h2>Quick Sort</h2>
<span class="gh-skill">Alternancia de Tarefas</span>
<p class="gh-desc">Classifique elementos em categorias deslizando para esquerda ou direita. A regra de classificacao muda a cada poucas rodadas, desafiando sua flexibilidade mental.</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-quick-sort"></div>
</a>

<a href="/pt/games/pattern-path/" class="gh-game-card pattern-path">
<div class="gh-game-icon" style="background: rgba(20,184,166,0.1); color: #14b8a6;">&#129513;</div>
<h2>Pattern Path</h2>
<span class="gh-skill">Reconhecimento de Padroes</span>
<p class="gh-desc">Encontre a peca que falta em uma sequencia de padroes visuais. Formas mudam em cor, tamanho e rotacao — identifique a regra e escolha o complemento correto.</p>
<span class="gh-play-btn">Jogar Agora</span>
<div class="gh-best" id="best-pattern-path"></div>
</a>
</div>

<div class="gh-info">
<h3>Como Funciona</h3>
<p>Cada jogo se adapta ao seu nivel com 20 niveis de dificuldade. Treine 15-20 minutos diarios nos sete jogos para melhores resultados. Seus recordes pessoais sao salvos no seu navegador.</p>
</div>
</div>

<script>
(function() {
var games = ['speed-match', 'memory-matrix', 'sequence-recall', 'number-crunch', 'color-clash', 'quick-sort', 'pattern-path'];
games.forEach(function(game) {
var best = localStorage.getItem('guruka_' + game + '_best');
var el = document.getElementById('best-' + game);
if (el && best) {
el.innerHTML = 'Recorde Pessoal: <strong>' + Number(best).toLocaleString() + '</strong> pontos';
}
});
})();
</script>

<style>
/* ── Mobile-first responsive ── */
.gh-game-card {
padding: 1.5rem;
grid-template-columns: 3.25rem 1fr;
}
.gh-game-icon {
width: 3.25rem;
height: 3.25rem;
}
.gh-game-card .gh-desc {
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
@media (min-width: 768px) {
.gh-game-card {
padding: 2rem;
grid-template-columns: 4rem 1fr;
}
.gh-game-icon {
width: 4rem;
height: 4rem;
}
.gh-game-card .gh-desc {
-webkit-line-clamp: unset;
overflow: visible;
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
