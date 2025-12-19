
(function(){
  const doc=document;
  const menu=document.getElementById('gridMenu');
  const btn=document.getElementById('menuIcon');

  function open(){ menu.classList.add('active'); menu.setAttribute('aria-hidden','false'); btn.setAttribute('aria-expanded','true'); }
  function close(){ menu.classList.remove('active'); menu.setAttribute('aria-hidden','true'); btn.setAttribute('aria-expanded','false'); }

  if(btn && menu){
    btn.addEventListener('click',e=>{ e.stopPropagation(); menu.classList.contains('active')?close():open(); });
    doc.addEventListener('click',e=>{ if(!menu.contains(e.target) && !btn.contains(e.target)) close(); });
    doc.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
    menu.addEventListener('click',e=>{ const a=e.target.closest('a[href]'); if(a) close(); });
  }
})();
