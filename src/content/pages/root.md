---
title: "GURUKA - Train Your Brain, Sharpen Your Mind"
description: "Science-backed brain training games to improve memory, processing speed, and mental agility. Play daily and track your progress."
full_width: true
blog_grid: true
blog_grid_title: "From the Blog"
blog_grid_limit: 3
---

<style>
.gk-hero {
position: relative;
overflow: hidden;
padding: 5rem 1rem 4rem;
text-align: center;
}
.gk-hero-bg {
position: absolute;
inset: 0;
background: linear-gradient(135deg, #0f9072 0%, #0c6b56 50%, #0a5a48 100%);
opacity: 0.06;
}
.gk-hero .gk-badge {
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.5rem 1rem;
border-radius: 9999px;
background: var(--color-primary, #0f9072);
color: #fff;
font-size: 0.875rem;
font-weight: 500;
margin-bottom: 1.5rem;
opacity: 0.9;
}
.gk-hero h1 {
font-size: clamp(2.25rem, 5vw, 4rem);
font-weight: 700;
line-height: 1.1;
margin: 0 auto 1.5rem;
max-width: 48rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-hero h1 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-hero h1 .gk-gradient {
background: linear-gradient(135deg, #0f9072, #10b981);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}
.gk-hero .gk-desc {
font-size: 1.125rem;
color: var(--color-text-secondary, #4b5b6d);
max-width: 40rem;
margin: 0 auto 2rem;
line-height: 1.7;
}
[data-theme="dark"] .gk-hero .gk-desc {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-cta-row {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
margin-bottom: 3rem;
}
.gk-btn-primary {
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
border-radius: 0.5rem;
background: var(--color-primary, #0f9072);
color: #fff;
font-weight: 600;
font-size: 1.125rem;
text-decoration: none;
transition: transform 0.2s, box-shadow 0.2s;
}
.gk-btn-primary:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(15, 144, 114, 0.3);
}
.gk-btn-secondary {
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
border-radius: 0.5rem;
background: var(--color-bg-secondary, #f0f4f8);
color: var(--color-text-primary, #1a2332);
font-weight: 600;
font-size: 1.125rem;
text-decoration: none;
border: 1px solid var(--color-border, #dfe4ea);
transition: transform 0.2s;
}
[data-theme="dark"] .gk-btn-secondary {
background: var(--color-dark-bg-secondary, #1e293b);
color: var(--color-dark-text-primary, #f9fafb);
border-color: var(--color-dark-border, #334155);
}
.gk-btn-secondary:hover {
transform: translateY(-2px);
}
.gk-stats {
display: flex;
justify-content: center;
gap: 2.5rem;
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.875rem;
}
[data-theme="dark"] .gk-stats {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-stats span {
display: flex;
align-items: center;
gap: 0.5rem;
}
.gk-section {
padding: 4rem 1rem;
max-width: 72rem;
margin: 0 auto;
}
.gk-section-muted {
background: var(--color-bg-secondary, #f0f4f8);
}
[data-theme="dark"] .gk-section-muted {
background: var(--color-dark-bg-secondary, #1e293b);
}
.gk-section-header {
text-align: center;
margin-bottom: 3rem;
}
.gk-section-header h2 {
font-size: clamp(1.5rem, 3vw, 2.25rem);
font-weight: 700;
margin-bottom: 0.75rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-section-header h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-section-header p {
color: var(--color-text-secondary, #4b5b6d);
max-width: 36rem;
margin: 0 auto;
}
[data-theme="dark"] .gk-section-header p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-cards {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1.5rem;
max-width: 60rem;
margin: 0 auto;
}
.gk-card {
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
padding: 1.5rem;
transition: transform 0.3s, box-shadow 0.3s;
text-decoration: none;
color: inherit;
display: block;
}
[data-theme="dark"] .gk-card {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.gk-card:hover {
transform: translateY(-4px);
box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
.gk-card-icon {
width: 3rem;
height: 3rem;
border-radius: 0.75rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
margin-bottom: 1rem;
}
.gk-card h3 {
font-size: 1.25rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-card h3 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-card p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.9375rem;
line-height: 1.5;
margin: 0;
}
[data-theme="dark"] .gk-card p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-benefits {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3rem;
align-items: center;
max-width: 64rem;
margin: 0 auto;
}
@media (max-width: 768px) {
.gk-benefits { grid-template-columns: 1fr; }
}
.gk-benefit-list {
list-style: none;
padding: 0;
margin: 0;
}
.gk-benefit-list li {
display: flex;
align-items: center;
gap: 0.75rem;
font-size: 1.125rem;
margin-bottom: 1rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-benefit-list li {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-benefit-list .gk-check {
color: #10b981;
font-size: 1.25rem;
flex-shrink: 0;
}
.gk-visual {
aspect-ratio: 1;
border-radius: 1rem;
background: linear-gradient(135deg, #0f9072, #0a6e5a);
display: flex;
align-items: center;
justify-content: center;
position: relative;
}
.gk-visual-icon {
font-size: 6rem;
animation: gk-float 6s ease-in-out infinite;
opacity: 0.9;
}
@keyframes gk-float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-12px); }
}
.gk-visual-badge {
position: absolute;
bottom: -1rem;
right: -1rem;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
border-radius: 0.75rem;
padding: 0.75rem 1rem;
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
[data-theme="dark"] .gk-visual-badge {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.gk-visual-badge strong {
display: block;
font-size: 1.5rem;
color: var(--color-primary, #0f9072);
}
.gk-visual-badge span {
font-size: 0.8rem;
color: var(--color-text-secondary, #4b5b6d);
}
[data-theme="dark"] .gk-visual-badge span {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-audiences {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 1.5rem;
max-width: 48rem;
margin: 0 auto;
}
.gk-audience {
text-align: center;
padding: 1.5rem;
border-radius: 1rem;
background: var(--color-bg-primary, #fff);
border: 1px solid var(--color-border, #dfe4ea);
}
[data-theme="dark"] .gk-audience {
background: var(--color-dark-bg-primary, #0f1729);
border-color: var(--color-dark-border, #334155);
}
.gk-audience-emoji {
font-size: 3rem;
margin-bottom: 0.75rem;
display: block;
}
.gk-audience h3 {
font-size: 1.25rem;
font-weight: 700;
margin-bottom: 0.5rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-audience h3 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-audience p {
color: var(--color-text-secondary, #4b5b6d);
font-size: 0.875rem;
margin: 0;
}
[data-theme="dark"] .gk-audience p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
.gk-final-cta {
text-align: center;
padding: 4rem 1rem;
max-width: 48rem;
margin: 0 auto;
}
.gk-final-cta h2 {
font-size: clamp(1.5rem, 3vw, 2.25rem);
font-weight: 700;
margin-bottom: 0.75rem;
color: var(--color-text-primary, #1a2332);
}
[data-theme="dark"] .gk-final-cta h2 {
color: var(--color-dark-text-primary, #f9fafb);
}
.gk-final-cta p {
color: var(--color-text-secondary, #4b5b6d);
margin-bottom: 2rem;
}
[data-theme="dark"] .gk-final-cta p {
color: var(--color-dark-text-secondary, #cbd5e1);
}
</style>

<div class="gk-hero">
<div class="gk-hero-bg"></div>
<div class="gk-badge">&#9733; Science-backed brain training</div>
<h1>Train Your Brain, <span class="gk-gradient">Sharpen Your Mind</span></h1>
<p class="gk-desc">GURUKA offers evidence-based cognitive exercises designed to improve memory, speed, and mental agility. Train daily and track your progress.</p>
<div class="gk-cta-row">
<a href="/games/" class="gk-btn-primary">Start Training Your Brain and Memory &#8594;</a>
<a href="/blog/science/" class="gk-btn-secondary">Learn the Science</a>
</div>
<div class="gk-stats">
<span>&#128101; 10,000+ Users</span>
<span>&#127942; 1M+ Sessions</span>
</div>
</div>

<div class="gk-section-muted">
<div class="gk-section">
<div class="gk-section-header">
<h2>Three Powerful Games</h2>
<p>Each game targets different cognitive skills, backed by neuroscience research</p>
</div>
<div class="gk-cards">
<a href="/games/speed-match/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(15,144,114,0.1); color: #0f9072;">&#9889;</div>
<h3>Speed Match</h3>
<p>Boost processing speed with fast-paced symbol matching</p>
</a>
<a href="/games/memory-matrix/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(245,158,11,0.1); color: #f59e0b;">&#9638;</div>
<h3>Memory Matrix</h3>
<p>Strengthen spatial memory by recalling grid patterns</p>
</a>
<a href="/games/sequence-recall/" class="gk-card">
<div class="gk-card-icon" style="background: rgba(16,185,129,0.1); color: #10b981;">&#9776;</div>
<h3>Sequence Recall</h3>
<p>Train working memory with dual-track sequences</p>
</a>
</div>
</div>
</div>

<div class="gk-section">
<div class="gk-benefits">
<div>
<h2 style="font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; margin-bottom: 1.5rem;">Why Train with GURUKA?</h2>
<ul class="gk-benefit-list">
<li><span class="gk-check">&#10003;</span> Science-backed exercises</li>
<li><span class="gk-check">&#10003;</span> Adaptive difficulty</li>
<li><span class="gk-check">&#10003;</span> Track your progress</li>
<li><span class="gk-check">&#10003;</span> Play anywhere, anytime</li>
</ul>
<a href="/games/" class="gk-btn-primary" style="margin-top: 1rem;">Start Training Free</a>
</div>
<div class="gk-visual">
<div class="gk-visual-icon">&#129504;</div>
<div class="gk-visual-badge">
<strong>20+</strong>
<span>Levels per game</span>
</div>
</div>
</div>
</div>

<div class="gk-section-muted">
<div class="gk-section">
<div class="gk-section-header">
<h2>For Everyone</h2>
<p>GURUKA adapts to your skill level, making it perfect for all ages</p>
</div>
<div class="gk-audiences">
<div class="gk-audience">
<span class="gk-audience-emoji">&#127891;</span>
<h3>Students</h3>
<p>Improve focus and memory for better academic performance</p>
</div>
<div class="gk-audience">
<span class="gk-audience-emoji">&#128188;</span>
<h3>Professionals</h3>
<p>Stay sharp and boost productivity at work</p>
</div>
<div class="gk-audience">
<span class="gk-audience-emoji">&#129491;</span>
<h3>Seniors</h3>
<p>Keep your mind active and maintain cognitive health</p>
</div>
</div>
</div>
</div>

<div class="gk-final-cta">
<h2>Ready to Train?</h2>
<p>Start playing immediately - no account required. Your scores are saved locally.</p>
<a href="/games/" class="gk-btn-primary">&#129504; Play Now - It's Free</a>
</div>
