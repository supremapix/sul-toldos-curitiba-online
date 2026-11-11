function initTornimecSliders(root=document){
 const cleanups=[];
 root.querySelectorAll('.tornimec-slider').forEach(slider=>{
  const images=[...slider.querySelectorAll('.tornimec-photo img')],counter=slider.querySelector('.tornimec-count'),pause=slider.querySelector('[data-pause]'),previous=slider.querySelector('[data-prev]'),next=slider.querySelector('[data-next]');
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let index=0,paused=motion.matches,hover=false,timer=null;
  const title=slider.closest('[data-tornimec-service]').dataset.tornimecService;
  function show(n){index=(n+images.length)%images.length;images.forEach((image,i)=>image.hidden=i!==index);counter.textContent=(index+1)+' / '+images.length;}
  function update(){if(timer)clearInterval(timer);timer=null;pause.textContent=paused?'Reproduzir':'Pausar';pause.setAttribute('aria-label',(paused?'Reproduzir':'Pausar')+' fotos de '+title);pause.setAttribute('aria-pressed',String(paused));if(!paused&&!hover&&!document.hidden&&!slider.contains(document.activeElement))timer=setInterval(()=>show(index+1),5000);}
  const onPrev=()=>{paused=true;show(index-1);update()},onNext=()=>{paused=true;show(index+1);update()},onPause=()=>{paused=!paused;update()},onEnter=()=>{hover=true;update()},onLeave=()=>{hover=false;update()},onFocus=()=>update(),onBlur=()=>setTimeout(update,0),onMotion=()=>{paused=motion.matches;update()};
  previous.addEventListener('click',onPrev);next.addEventListener('click',onNext);pause.addEventListener('click',onPause);slider.addEventListener('mouseenter',onEnter);slider.addEventListener('mouseleave',onLeave);slider.addEventListener('focusin',onFocus);slider.addEventListener('focusout',onBlur);document.addEventListener('visibilitychange',update);motion.addEventListener('change',onMotion);show(0);update();
  cleanups.push(()=>{clearInterval(timer);previous.removeEventListener('click',onPrev);next.removeEventListener('click',onNext);pause.removeEventListener('click',onPause);slider.removeEventListener('mouseenter',onEnter);slider.removeEventListener('mouseleave',onLeave);slider.removeEventListener('focusin',onFocus);slider.removeEventListener('focusout',onBlur);document.removeEventListener('visibilitychange',update);motion.removeEventListener('change',onMotion)});
 });return ()=>cleanups.forEach(fn=>fn());
}

initTornimecSliders();
