
const arrayCartitasSerializado = {};


const f_generalJSON = function () {

  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');

  // recorro todos las 'cartitas' (son como tarjetas)
  listaDivCartita.each(

    function (indice) { // recorre cada Cartita



      // JSON
      const cartitaSerializada = f_serializaHTML(this)
      //claves de propiedades computadas (JS) ['cartita' + indice]: https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/
      arrayCartitasSerializado[['cartita' + indice]] = cartitaSerializada;


    }// fin: function (nodo, indice, array)


  );// fin: listaCartitas.forEach

  console.log(arrayCartitasSerializado);


  // Esta función me debe permitir guardar un objeto JS en un fichero .json
  f_guardarObjetoEnFichero();






};


/**
 * Función que serializa un elemento HTML (lo transforma en cadena).
 * Básicamente para serializar el elementoHTML usamos la propiedad 'outerHTML' del elemento HTML, que nos devolverá el código HTML del elemento como cadena.
 * @param {HTMLDivElement} elementoHTML
 * @returns {string} cadenaHTML
 */
const f_serializaHTML = function (elementoHTML) {
  // tipo del elemento: https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
  // console.log(elementoHTML.constructor.name);

  let cadenaHTML = elementoHTML.outerHTML;

  //claves de propiedades computadas (JS) ['cartita' + indice]: https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/
  // let objetoHTML = { ['cartita' + indice]: cadenaHTML }; 

  // console.log(objetoHTML);

  return cadenaHTML;


};

/**
 * Función que recibe un objeto JS y lo almacena en un fichero JSON.
 * @param {Object} objetoJS
 * @returns {void} no return
 */
const f_guardarObjetoEnFichero = function (objetoJS) {

};
