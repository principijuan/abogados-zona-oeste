// selecciona la imagen de bienvenida
var imagenBienvenida = document.querySelector(".bienvenida");

// selecciona la barra de navegación
var navbar = document.querySelector(".nav_bar");

// obtiene la altura de la imagen de bienvenida
var bienvenida = imagenBienvenida.offsetHeight;

// agrega un evento de desplazamiento a la ventana
window.addEventListener("scroll", function () {
  // obtiene la posición actual de desplazamiento
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  // si el usuario se ha desplazado más allá de la imagen de bienvenida
  if (scrollPosition > bienvenida) {
    // agrega la clase 'fixed' a la barra de navegación
    navbar.classList.add("fixed");
  } else {
    // de lo contrario, elimina la clase 'fixed' de la barra de navegación
    navbar.classList.remove("fixed");
  }
});
