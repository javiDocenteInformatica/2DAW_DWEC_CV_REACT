// IMPORTACIONES
// import * as scrollTopButton from 'scrollTopButton.js';

// Constantes y Variables GLOBALES
const urlYoutube = "https://youtu.be/6Jfk8ic3KVk?list=PLbaI3dQZLK5BtbhnPRflnjMZLmCFThOoI";


// EVENTO LOAD: espera a que cargue todo el DOM
$(document).ready(function () {

  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');

  // recorro todos los jumbotron (son como tarjetas)
  listaDivCartita.each(

    function (indice) { // recorre cada Cartita

      // evento click por cada jumbotron
      $(this).click(function (evento) {

        let elementoClickado = evento.target;

        if ($(elementoClickado).prop('nodeName').toLowerCase() == 'button') {

          let cadenaElementoTiempo = $(this).find('time').text(); // selector de selector

          let tiempoEn_seg = f_convierteHoraMinutosSegundosEn_seg(cadenaElementoTiempo);

          f_abreYoutubeTiempo(tiempoEn_seg);
        }
      });// fin: nodo.addEventListener('click', function (evento)

      // AÑADE BOOTSTRAP
      // añade el BootStrap a cada carta
      f_anyadeBootStrapCartita($(this));

    }// fin: function (nodo, indice, array)


  );// fin: listaJumbotron.forEach


  // CONTADOR Cartitas
  f_contadorCartitas();




  // botón flecha para subir al principio del todo
  f_scrollTopButton();

});

/** 
  * Función que abre una pestaña nueva en Youtube, en la url concretada, con el tiempo en segundos estipulado por parámetro
  * @param {string} tiempoEn_ms - tiempo en segundos donde empezará el video
  * @return {none} No devuelve nada
  */
const f_abreYoutubeTiempo = function (tiempoEn_ms) {
  let urlConTiempo = `${urlYoutube}&t=${tiempoEn_ms}`;
  window.open(urlConTiempo, '_blank');
}



/**
 * Función que convierte las HORAS, MINUTOS y SEGUNDOS en SEGUNDOS
 * @param {string} cadenaTiempo
 * @returns {string} Segundos totales
 */
const f_convierteHoraMinutosSegundosEn_seg = function (cadenaTiempo) {

  let arrayCadenaTiempo = cadenaTiempo.split(":");

  let horas = Number.parseInt(arrayCadenaTiempo[0]);
  let minutos = Number.parseInt(arrayCadenaTiempo[1]);
  let segundos = Number.parseInt(arrayCadenaTiempo[2]);

  let segundosTotales = (horas * 3600) + (minutos * 60) + (segundos);

  return segundosTotales;
};

// AÑADE BOOTSTRAP A LA CARTITA
const f_anyadeBootStrapCartita = function (divCartita) {
  let tope = 0;

  //fs = font-size
  let fs = 4;
  // añadiendo bootstrap al div padre que contiene el atributo 'cartita'
  $(divCartita).addClass('h-100 p-5 bg-light border rounded-3');

  // padre div cartita: añadiendo boostrap a los li hijos del ul de nivel en nivel
  let lis = $(divCartita).children('ul').children('li');
  while (lis.length != 0) {

    $(lis).addClass(`col-md-8 col-sm-auto fs-${fs}`);

    lis = $(lis).children('ul').children('ul');

    if (fs < 6) {
      fs++;
    }
    if (tope >= 20) {
      break;
    }
    tope++;
  }
  // $(lis1).addClass('col-md-8 col-sm-auto fs-4');

  // // segundo nivel
  // let lis2 = $(lis1).find('ul > li');
  // $(lis2).addClass('col-md-8 col-sm-auto fs-5');

  // // tercer nivel
  // let lis3 = $(lis2).find('ul > li');
  // $(lis3).addClass('col-md-8 col-sm-auto fs-6');


  //etiqueta code
  $(divCartita).find('code').addClass('fs-5');

  // div del botón
  let divButton = $(divCartita).find('button').parent();
  // añadiendo bootstrap al div del botón
  $(divButton).addClass('d-flex align-content-center gap-1');

  // añadiendo bootstrap al span hijo del div del botón
  $(divButton).find('span').addClass('badge bg-danger text-warning fs-3');

  // añadiendo bootstrap al button hijo del div del botón
  $(divButton).find('button').addClass('btn btn-primary btn-lg');


};


// CONTADOR
const f_contadorCartitas = function () {
  // añadir conteo a las 'Cartitas'
  let listaPContador = $('p[contador]');
  listaPContador.each(
    function (indice) {
      $(this).html(indice + 1);
      $(this).addClass(['badge', 'bg-warning', 'text-dark', 'fs-6']);
    }
  );
}



