
(function(){
  const bar=document.querySelector('.scroll-progress');
  function onScroll(){
    const d=document.documentElement;
    const max=d.scrollHeight-d.clientHeight;
    const pct=max>0?(d.scrollTop/max)*100:0;
    if(bar) bar.style.width=pct+'%';
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
})();
