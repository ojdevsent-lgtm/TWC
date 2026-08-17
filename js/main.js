const menuBtn=document.getElementById('menuBtn');
const closeBtn=document.getElementById('closeBtn');
const mobileMenu=document.getElementById('mobileMenu');
const overlay=document.getElementById('menuOverlay');
const header=document.querySelector('.header');

function setMenu(open){
  if(!mobileMenu)return;
  mobileMenu.classList.toggle('active',open);
  overlay?.classList.toggle('active',open);
  document.body.classList.toggle('menu-open',open);
  mobileMenu.setAttribute('aria-hidden',String(!open));
  menuBtn?.setAttribute('aria-expanded',String(open));
  if(open) closeBtn?.focus(); else menuBtn?.focus();
}

menuBtn?.addEventListener('click',()=>setMenu(true));
closeBtn?.addEventListener('click',()=>setMenu(false));
overlay?.addEventListener('click',()=>setMenu(false));
document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileMenu?.classList.contains('active'))setMenu(false)});
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>20),{passive:true});

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const id=link.getAttribute('href');
  if(!id||id==='#')return;
  const target=document.querySelector(id);
  if(!target)return;
  event.preventDefault();
  target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  history.replaceState(null,'',id);
}));

document.querySelectorAll('a[href^="mailto:"]').forEach(link=>link.addEventListener('click',()=>{link.dataset.clicked='true'}));