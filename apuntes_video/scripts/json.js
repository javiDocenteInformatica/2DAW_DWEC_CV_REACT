
const arrayCartitasSerializado = [];


const f_generalJSON = function () {

  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');

  // recorro todos las 'cartitas' (son como tarjetas)
  listaDivCartita.each(

    function (indice) { // recorre cada Cartita



      // JSON
      const cartitaSerializada = f_serializaHTML(this)
      //claves de propiedades computadas (JS) ['cartita' + indice]: https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/
      arrayCartitasSerializado.push({ ['cartita' + indice]: cartitaSerializada });


    }// fin: function (nodo, indice, array)


  );// fin: listaCartitas.forEach

  console.log(arrayCartitasSerializado);
};


/*
FUNCION: 
Te devuelve un objeto JS con una clave y como valor el elementoHTML serializado.
Básicamente para serializar el elementoHTML usamos la propiedad 'outerHTML' del elemento HTML, que nos devolverá el código HTML del elemento como cadena.
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
