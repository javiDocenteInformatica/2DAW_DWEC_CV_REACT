/*
FUNCION: 
Te devuelve un objeto JS con una clave y como valor el elementoHTML serializado.
Básicamente para serializar el elementoHTML usamos la propiedad 'outerHTML' del elemento HTML, que nos devolverá el código HTML del elemento como cadena.
*/
const serializaHTML = function (elementoHTML) {
  // tipo del elemento: https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
  // console.log(elementoHTML.constructor.name);

  let cadenaHTML = elementoHTML.outerHTML;

  //claves de propiedades computadas (JS) ['cartita' + indice]: https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/
  // let objetoHTML = { ['cartita' + indice]: cadenaHTML }; 

  // console.log(objetoHTML);

  return cadenaHTML;


};