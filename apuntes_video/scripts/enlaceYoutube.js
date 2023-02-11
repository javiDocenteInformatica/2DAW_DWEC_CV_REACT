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


const f_eventoClickEnlaceYoutube = function (elementoClickado) {

  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');

  // recorro todos las 'cartitas' (son como tarjetas)
  listaDivCartita.each(

    function (indice) { // recorre cada Cartita

      // evento click por cada 'cartitas'
      $(this).click(function (evento) {

        let elementoClickado = evento.target;

        if ($(elementoClickado).prop('nodeName').toLowerCase() == 'button') {

          let cadenaElementoTiempo = $(this).find('time').text(); // selector de selector

          let tiempoEn_seg = f_convierteHoraMinutosSegundosEn_seg(cadenaElementoTiempo);

          f_abreYoutubeTiempo(tiempoEn_seg);

        }

      });// fin: nodo.addEventListener('click', function (evento)


    }// fin: function (nodo, indice, array)


  );// fin: listaCartitas.forEach
}