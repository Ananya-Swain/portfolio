
    // Populate avatar initials if no image found
    (function(){
      const name = 'Ananya Swain';
      const avatar = document.getElementById('avatar');
      if(!avatar.querySelector('img')){
        const initials = name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase();
        avatar.textContent = initials;
      }
      document.getElementById('name').textContent = name;

      // Hook project modals
      document.querySelectorAll('.project').forEach(card=>{
        card.addEventListener('click', ()=>{
          const title = card.dataset.title;
          const desc = card.dataset.desc;
          const link = card.dataset.link;
          document.getElementById('modalTitle').textContent = title;
          document.getElementById('modalDesc').textContent = desc;
          const r = document.getElementById('modalRepo');
          r.href = link;
          r.textContent = 'View repository';
          document.getElementById('modalBackdrop').style.display = 'flex';
        })
      })
      document.getElementById('modalClose').addEventListener('click', ()=>document.getElementById('modalBackdrop').style.display = 'none');
      document.getElementById('modalBackdrop').addEventListener('click',(e)=>{ if(e.target===document.getElementById('modalBackdrop')) document.getElementById('modalBackdrop').style.display='none'});

      // Smooth scrolling for nav
      document.querySelectorAll('nav a[href^="#"]').forEach(a=>{
        a.addEventListener('click', e=>{
          e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        })
      })

      // If you'd like to customize the content programmatically, here's where to do it.
    })();