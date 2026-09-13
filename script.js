const body=document.body;
const themeToggle=document.getElementById('themeToggle');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
const glow=document.querySelector('.cursor-glow');

if(localStorage.getItem('sandhya-theme')==='dark'){body.classList.add('dark');themeToggle.textContent='☾'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const dark=body.classList.contains('dark');themeToggle.textContent=dark?'☾':'☼';localStorage.setItem('sandhya-theme',dark?'dark':'light')});
menuToggle.addEventListener('click',()=>{navLinks.classList.toggle('mobile-open')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('mobile-open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const style=document.createElement('style');
style.textContent=`@media(max-width:900px){.nav-links.mobile-open{display:flex;position:absolute;top:72px;left:0;right:0;flex-direction:column;padding:20px;background:rgba(255,255,255,.94);backdrop-filter:blur(20px);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow)}.dark .nav-links.mobile-open{background:rgba(17,18,26,.96)}}`;
document.head.appendChild(style);
