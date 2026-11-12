// Language: saved choice > browser language > French
const root = document.documentElement;
let lang = 'fr';
try {
  lang = localStorage.getItem('lang') || (navigator.language || 'fr').slice(0, 2);
} catch (e) {}
if (lang !== 'en') lang = 'fr';

function setLang(l) {
  lang = l;
  root.lang = l;
  document.title = l === 'fr'
    ? 'Djawadou DJOBO — Économiste & Data Analyst'
    : 'Djawadou DJOBO — Economist & Data Analyst';
  try { localStorage.setItem('lang', l); } catch (e) {}
}
setLang(lang);

document.getElementById('langBtn').addEventListener('click', () => setLang(lang === 'fr' ? 'en' : 'fr'));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
