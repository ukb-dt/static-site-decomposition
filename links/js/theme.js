
(function(){
  const html=document.documentElement;
  const logo=document.getElementById('logo');
  const toggleBtn=document.getElementById('toggle-theme');
  const LIGHT_LOGO='https://abikesa.github.io/logos/assets/ukubona-light.png';
  const DARK_LOGO='https://abikesa.github.io/logos/assets/ukubona-dark.png';

  function setTheme(theme){
    html.setAttribute('data-theme', theme);
    try{ localStorage.setItem('theme', theme); }catch(_){}
    if(logo) logo.src=(theme==='dark')?DARK_LOGO:LIGHT_LOGO;
    if(toggleBtn) toggleBtn.textContent=(theme==='dark')?'🌙':'🌞';
  }

  function initTheme(){
    try{
      const saved=localStorage.getItem('theme');
      const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
      return saved || (prefersDark ? 'dark':'light');
    }catch{return 'dark';}
  }

  setTheme(initTheme());

  if(toggleBtn){
    toggleBtn.addEventListener('click',()=>{
      const current=html.getAttribute('data-theme');
      setTheme(current==='dark'?'light':'dark');
    });
  }
})();
