// Constantes y Variables GLOBALES
const urlYoutube = "https://youtu.be/6Jfk8ic3KVk?list=PLbaI3dQZLK5BtbhnPRflnjMZLmCFThOoI";


// EVENTO LOAD: espera a que cargue todo el DOM
window.onload = function () {

  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');




  // recorro todos los jumbotron (son como tarjetas)
  listaDivCartita.each(

    function (indice) {

      // evento click por cada jumbotron
      $(this).click(function (evento) {

        let elementoClickado = evento.target;

        if (elementoClickado.nodeName.toLowerCase() == 'button') {

          let cadenaElementoTiempo = $(this).$('time').text();

          let tiempoEn_ms = f_convierteHoraMinutosSegundosEn_seg(cadenaElementoTiempo);

          f_abreYoutubeTiempo(tiempoEn_ms);
        }
      });// fin: nodo.addEventListener('click', function (evento)

    }// fin: function (nodo, indice, array)

  );// fin: listaJumbotron.forEach



  // CONTADOR
  // añadir conteo a las 'Cartitas'
  let listaPContador = $('[cartita] p[contador]');
  listaPContador.each(
    function (indice) {
      $(this).html(indice + 1);
      $(this).addClass(['badge', 'bg-warning', 'text-dark', 'fs-6']);
    }
  );

}

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



