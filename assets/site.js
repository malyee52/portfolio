(function(){
  var root=document.documentElement, btn=document.getElementById('themeBtn'), KEY='pm-theme';
  try{var t=localStorage.getItem(KEY); if(t==='light'||t==='dark') root.setAttribute('data-theme',t);}catch(e){}
  function cur(){var t=root.getAttribute('data-theme'); if(t) return t; return window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  function label(){btn.textContent=cur()==='dark'?'밝게':'어둡게';}
  label();
  btn.addEventListener('click',function(){var n=cur()==='dark'?'light':'dark'; root.setAttribute('data-theme',n); try{localStorage.setItem(KEY,n);}catch(e){} label();});
  var opened=[];
  window.addEventListener('beforeprint',function(){opened=[];document.querySelectorAll('details').forEach(function(d){if(!d.open){d.open=true;opened.push(d);}});});
  window.addEventListener('afterprint',function(){opened.forEach(function(d){d.open=false;});});
})();
