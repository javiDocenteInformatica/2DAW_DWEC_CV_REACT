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








// AÑADE BOOTSTRAP A LA CARTITA
const f_anyadeBootStrapCartita = function () {


  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');

  // recorro todos las 'cartitas' (son como tarjetas)
  listaDivCartita.each(

    function (indice) { // recorre cada Cartita

      let tope = 0;

      //fs = font-size
      let fs = 4;
      // añadiendo bootstrap al div padre que contiene el atributo 'cartita'
      $(this).addClass('h-100 p-5 bg-light border rounded-3');

      // padre div cartita: añadiendo boostrap a los li hijos del ul de nivel en nivel
      let lis = $(this).children('ul').children('li');
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
      $(this).find('xmp').addClass('fs-5 text-danger m-0 p-0');

      // div del botón
      let divButton = $(this).find('button').parent();
      // añadiendo bootstrap al div del botón
      $(divButton).addClass('d-flex align-content-center gap-1');

      // añadiendo bootstrap al span hijo del div del botón
      $(divButton).find('span').addClass('badge bg-danger text-warning fs-3');

      // añadiendo bootstrap al button hijo del div del botón
      $(divButton).find('button').addClass('btn btn-primary btn-lg');


    }// fin: function (nodo, indice, array)


  );// fin: listaCartitas.forEach

};