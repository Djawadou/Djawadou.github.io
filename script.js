// Language: saved choice > browser language > French
const root = document.documentElement;
let lang = 'fr';
try {
  lang = localStorage.getItem('lang') || (navigator.language || 'fr').slice(0, 2);
} catch (e) {}
if (lang !== 'en') lang = 'fr';

const words = {
  fr: ['économiste', 'data analyst', 'futur doctorant', 'passionné de stats', 'amoureux du terrain'],
  en: ['an economist', 'a data analyst', 'a future PhD student', 'a stats enthusiast', 'a fieldwork lover']
};
let i = 0;
const rot = document.getElementById('rotWord');

function setLang(l) {
  lang = l;
  root.lang = l;
  document.title = l === 'fr'
    ? 'Djawadou DJOBO — Économiste & Data Analyst'
    : 'Djawadou DJOBO — Economist & Data Analyst';
  rot.textContent = words[l][i % words[l].length];
  try { localStorage.setItem('lang', l); } catch (e) {}
}
setLang(lang);

document.getElementById('langBtn').addEventListener('click', () => setLang(lang === 'fr' ? 'en' : 'fr'));

// Rotating word
setInterval(() => {
  rot.classList.add('out');
  setTimeout(() => {
    i++;
    rot.textContent = words[lang][i % words[lang].length];
    rot.classList.remove('out');
  }, 300);
}, 2400);

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
