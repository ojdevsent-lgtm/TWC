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
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const id=link.getAttribute('href');if(!id||id==='#')return;const target=document.querySelector(id);if(!target)return;event.preventDefault();target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});history.replaceState(null,'',id)}));
document.querySelectorAll('a[href^="mailto:"]').forEach(link=>link.addEventListener('click',()=>{link.dataset.clicked='true'}));

/* Premium TWC Assistant: presentation layer only. Live OpenAI calls belong behind a secure server endpoint. */
(function mountAssistant(){
  if(document.getElementById('twcAssistant'))return;
  const style=document.createElement('style');
  style.textContent=`#twcAssistant{position:fixed;right:22px;bottom:22px;z-index:1500;font-family:Inter,sans-serif}.twc-ai-launch{display:flex;align-items:center;gap:10px;border:1px solid rgba(212,175,55,.65);background:rgba(8,19,33,.92);color:#fff;padding:12px 16px;border-radius:999px;box-shadow:0 16px 50px rgba(0,0,0,.4),0 0 35px rgba(212,175,55,.12);cursor:pointer;font-weight:800;backdrop-filter:blur(16px)}.twc-ai-orb{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#f0d26b,#b68b19);color:#07111f;font-size:12px;box-shadow:0 0 20px rgba(212,175,55,.35)}.twc-ai-panel{display:none;width:min(370px,calc(100vw - 32px));margin-bottom:12px;overflow:hidden;border:1px solid #34455d;border-radius:20px;background:linear-gradient(160deg,#0e1b2d,#07111f);box-shadow:0 30px 90px rgba(0,0,0,.55)}.twc-ai-panel.open{display:block;animation:twcIn .22s ease}.twc-ai-head{display:flex;align-items:center;justify-content:space-between;padding:17px 18px;border-bottom:1px solid #23334a}.twc-ai-head strong{font-family:Poppins,sans-serif}.twc-ai-head small{display:block;color:#7f8da1;font-size:10px;margin-top:2px}.twc-ai-close{border:0;background:transparent;color:#8e9caf;font-size:22px;cursor:pointer}.twc-ai-body{padding:18px}.twc-ai-welcome{padding:15px;border:1px solid #273950;border-radius:14px;background:#0b1726;color:#cbd3de;font-size:13px;line-height:1.7}.twc-ai-welcome b{color:#d4af37}.twc-ai-prompts{display:grid;gap:8px;margin-top:12px}.twc-ai-prompt{border:1px solid #26364d;background:#0b1726;color:#bfc9d6;border-radius:10px;padding:11px;text-align:left;cursor:pointer;font-size:12px}.twc-ai-prompt:hover{border-color:#d4af37;color:#fff}.twc-ai-note{font-size:10px;color:#64748a;margin-top:13px;line-height:1.5}.twc-ai-status{display:flex;align-items:center;gap:7px;color:#8da0b7;font-size:10px;margin-top:12px}.twc-ai-status i{width:6px;height:6px;border-radius:50%;background:#78d39a;box-shadow:0 0 10px #78d39a}@keyframes twcIn{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}@media(max-width:640px){#twcAssistant{right:14px;bottom:14px}.twc-ai-launch{padding:11px 14px}.twc-ai-panel{width:calc(100vw - 28px)}}`;
  document.head.appendChild(style);
  const root=document.createElement('div');root.id='twcAssistant';root.innerHTML=`<div class="twc-ai-panel" id="twcAiPanel" role="dialog" aria-label="TWC Assistant"><div class="twc-ai-head"><div><strong>TWC Assistant</strong><small>Intelligent client support</small></div><button class="twc-ai-close" id="twcAiClose" aria-label="Close assistant">×</button></div><div class="twc-ai-body"><div class="twc-ai-welcome"><b>Good to see you.</b><br>I can help you understand TWC, our markets and the next step in your journey.</div><div class="twc-ai-prompts"><button class="twc-ai-prompt">What markets does TWC support?</button><button class="twc-ai-prompt">Explain Forex in simple terms</button><button class="twc-ai-prompt">How do I get started?</button><button class="twc-ai-prompt">I need help from the TWC team</button></div><div class="twc-ai-status"><i></i> Assistant ready · secure server connection planned</div><div class="twc-ai-note">Educational and support assistant. It does not guarantee returns or execute financial transactions.</div></div></div><button class="twc-ai-launch" id="twcAiLaunch" aria-expanded="false" aria-controls="twcAiPanel"><span class="twc-ai-orb">AI</span><span>Ask TWC AI</span></button>`;
  document.body.appendChild(root);
  const panel=root.querySelector('#twcAiPanel'),launch=root.querySelector('#twcAiLaunch'),close=root.querySelector('#twcAiClose');
  const toggle=()=>{const open=panel.classList.toggle('open');launch.setAttribute('aria-expanded',String(open));if(open)close.focus();};
  launch.addEventListener('click',toggle);close.addEventListener('click',toggle);
  root.querySelectorAll('.twc-ai-prompt').forEach(btn=>btn.addEventListener('click',()=>{launch.click();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}));
})();