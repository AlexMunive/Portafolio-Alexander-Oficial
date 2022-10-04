window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }

}

//* efecto maquina de escribir

const text = document.querySelector(".strong_div3");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "React";
    }, 0);
    setTimeout(() => {
        text.textContent = "Node.js";
    }, 4000);//1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 8000);



//* sección portafolio modal




//* sección header


const navBar = document.getElementById('navBar')
const btnMenu = document.getElementById('btnMenu')
const heroMenu = document.getElementById('heroMenu')
const sections = document.querySelectorAll('section[id]')
const form = document.getElementById('form')

/* Header agregar/quitar fondo */
window.addEventListener('scroll', function () {
  if (window.scrollY >= 60) {
    navBar.classList.add('nav-fixed')
  } else {
    navBar.classList.remove('nav-fixed')
  }
})

/* Menu Navbar */
btnMenu.addEventListener('click', function () {
  heroMenu.classList.toggle('active')
})

heroMenu.addEventListener('click', function (e) {
  if (e.target.matches('.hero__nav-link')) {
    heroMenu.classList.remove('active')
  }
})

/* Secciones con ID */
window.addEventListener('scroll', function (e) {
  const scrollY = window.pageYOffset

  for (const section of sections) {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 58
    const sectionId = section.getAttribute('id')

    const current = document.querySelector('.hero__nav-link[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      current.classList.add('active')
    } else {
      current.classList.remove('active')
    }
  }
})


