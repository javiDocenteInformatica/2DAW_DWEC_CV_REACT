// IMPORTACIONES
// import * as scrollTopButton from 'scrollTopButton.js';

// Constantes y Variables GLOBALES
const urlYoutube = "https://youtu.be/6Jfk8ic3KVk?list=PLbaI3dQZLK5BtbhnPRflnjMZLmCFThOoI";



// EVENTO LOAD: espera a que cargue todo el DOM
$(document).ready(function () {

  // botón flecha para bajar al final del todo
  f_scrollBottomButton();

  // botón flecha para subir al principio del todo
  f_scrollTopButton();

  // AÑADE BOOTSTRAP
  // añade el BootStrap a cada carta
  f_anyadeBootStrapCartita();

  // CONTADOR Cartitas
  f_contadorCartitas();

  // Añade enlace a tiempo concreto de YouTube a cada botón de 'cartita'
  f_eventoClickEnlaceYoutube();



  // JSON
  f_generalJSON();




});










