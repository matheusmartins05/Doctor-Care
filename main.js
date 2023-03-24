const cabecalho = document.querySelector('.cabecalho');


function ativaFuncoes(){
  showBackToTopButtonOnScroll();
  showNavOnScroll();
}


function showNavOnScroll(){
  if (scrollY > 0) {
    cabecalho.classList.add('scroll')
  }
  else{
    cabecalho.classList.remove('scroll')
  }
}



function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
    #home
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #sobre,
    #sobre header,
    #sobre .content`);



