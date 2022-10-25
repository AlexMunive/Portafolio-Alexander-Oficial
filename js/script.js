var check=document.querySelector('.check');
check.addEventListener('click', idioma);


function idioma(){
  let id=check.checked;
  if(id==true){
    location.href="es/index.html";
  }else{
    location.href="../index.html";
  }
}

//* dark mode
function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


//* header

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



//* sección portafolio 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("project_section_global");
var btns = document.getElementsByClassName("btn_project");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active_project");
    current[0].className = current[0].className.replace(" active_project", "");
    this.className += " active_project";
  });
}



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

//* ventana modal

//* PROJECTO 1 FRONTEND

const projecto1_open = document.getElementById('projecto1_open');
const modal_container_projecto1 = document.getElementById('modal_container');
const projecto1_close = document.getElementById('projecto1_close');

projecto1_open.addEventListener('click', () => {
  modal_container_projecto1.classList.add('showA');  
});

projecto1_close.addEventListener('click', () => {
  modal_container_projecto1.classList.remove('showA');
});


//* PROJECTO 2 FRONTEND

const projecto2_open = document.getElementById('projecto2_open');
const modal_container_projecto2 = document.getElementById('modal_containerB');
const projecto2_close = document.getElementById('projecto2_close');

projecto2_open.addEventListener('click', () => {
  modal_container_projecto2.classList.add('showA');  
});

projecto2_close.addEventListener('click', () => {
  modal_container_projecto2.classList.remove('showA');
});


//* PROJECTO 3 FRONTEND

const projecto3_open = document.getElementById('projecto3_open');
const modal_container_projecto3 = document.getElementById('modal_containerC');
const projecto3_close = document.getElementById('projecto3_close');

projecto3_open.addEventListener('click', () => {
  modal_container_projecto3.classList.add('showA');  
});

projecto3_close.addEventListener('click', () => {
  modal_container_projecto3.classList.remove('showA');
});


//* PROJECTO 4 FRONTEND

const projecto4_open = document.getElementById('projecto4_open');
const modal_container_projecto4 = document.getElementById('modal_containerD');
const projecto4_close = document.getElementById('projecto4_close');

projecto4_open.addEventListener('click', () => {
  modal_container_projecto4.classList.add('showA');  
});

projecto4_close.addEventListener('click', () => {
  modal_container_projecto4.classList.remove('showA');
});


//* PROJECTO 5 FRONTEND


const projecto5_open = document.getElementById('projecto5_open');
const modal_container_projecto5 = document.getElementById('modal_containerE');
const projecto5_close = document.getElementById('projecto5_close');

projecto5_open.addEventListener('click', () => {
  modal_container_projecto5.classList.add('showA');  
});

projecto5_close.addEventListener('click', () => {
  modal_container_projecto5.classList.remove('showA');
});


//* PROJECTO 6 FRONTEND

const projecto6_open = document.getElementById('projecto6_open');
const modal_container_projecto6 = document.getElementById('modal_containerF');
const projecto6_close = document.getElementById('projecto6_close');

projecto6_open.addEventListener('click', () => {
  modal_container_projecto6.classList.add('showA');  
});

projecto6_close.addEventListener('click', () => {
  modal_container_projecto6.classList.remove('showA');
});


//* PROJECTO 1 BACKEND

const projecto1_B_open = document.getElementById('projecto1_B_open');
const modal_container_B1 = document.getElementById('modal_container_B1');
const projecto1_B_close = document.getElementById('projecto1_B_close');

projecto1_B_open.addEventListener('click', () => {
  modal_container_B1.classList.add('showA');  
});

projecto1_B_close.addEventListener('click', () => {
  modal_container_B1.classList.remove('showA');
});


//* PROJECTO 2 BACKEND

const projecto2_B_open = document.getElementById('projecto2_B_open');
const modal_container_B2 = document.getElementById('modal_container_B2');
const projecto2_B_close = document.getElementById('projecto2_B_close');

projecto2_B_open.addEventListener('click', () => {
  modal_container_B2.classList.add('showA');  
});

projecto2_B_close.addEventListener('click', () => {
  modal_container_B2.classList.remove('showA');
});