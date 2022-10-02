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

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Alexander";
    }, 0);
    setTimeout(() => {
        text.textContent = "Wilfredo";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Munive";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

//* loader page

// window.addEventListener('load', function(){
//   this.document.getElementById('loader').classList.toggle('loader2')
// })

// window.onload= function(){
//   alert('he cargado completamente la página')
//   $('#loader_container').fadeOut();
//   $('body').removeClass('hidden')
// }

// window.addEventListener('load',()=>{
//   const contenedor_loader = document.querySelector('.loader_container')
//   contenedor_loader.style.opacity = 0
//   contenedor_loader.style.visibility = 'hidden'
  

// })

// $(window).load(function(){
//   $("#loader_container").delay(2000).fadeOut("slow")
// })


// window.onload = function(){          
//     $("#loader").fadeOut(2000); 
// }    

// var $loader = $("#loader");  //referenciamos el div #loader  
// $loader.gSpinner();   //iniciamos la carga    

// window.onload = function(){                                               
// setTimeout(function(){
//     $("#loader_container").fadeOut();
//     $loader.gSpinner("hide")            
// },3000);                                      
// };



// document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

//     menu = document.getElementById("header");
//     body = document.getElementById("container__all");
//     nav = document.getElementById("nav");

// function mostrar_menu(){

//     body.classList.toggle('move_content');
//     menu.classList.toggle('move_content');
//     nav.classList.toggle('move_nav');
// }

// window.addEventListener("resize", function(){

//     if (window.innerWidth > 760)  {
//         body.classList.remove('move_content');
//         menu.classList.remove('move_content');
//         nav.classList.remove('move_nav');
//     }

// });




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


