
const objetoCartitasSerializado = {};


const f_generalJSON = function () {

  // Declaraciones dependientes del DOM
  let listaDivCartita = $('[cartita]');

  // recorro todos las 'cartitas' (son como tarjetas)
  listaDivCartita.each(

    function (indice) { // recorre cada Cartita



      // JSON
      const cartitaSerializada = f_serializaHTML(this)
      //claves de propiedades computadas (JS) ['cartita' + indice]: https://www.benmvp.com/blog/learning-es6-enhanced-object-literals/
      objetoCartitasSerializado[['cartita' + indice]] = cartitaSerializada;


    }// fin: function (nodo, indice, array)


  );// fin: listaCartitas.forEach


  // Esta función me debe permitir guardar un objeto JS en un fichero .json
  f_guardarObjetoEnFichero(objetoCartitasSerializado);


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
  // let cadenaHTML = elementoHTML.outerText;

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

  // pasamos el objeto JS a JSON
  let objetoJSON = JSON.stringify(objetoJS);
  // console.log(objetoJSON);
  // console.log(objetoJS);

  let blob = new Blob([objetoJSON], { type: 'application/json' });
  console.log(blob);

  // download(objetoJSON, 'cartitas.json', 'application/json');

  peticionAJAX('controller/controladorFichero.php', 'POST', objetoJSON);


};



const peticionAJAX = async function (url = '', method = 'POST', datos = { default: 'vacío' }) {

  let formData = new FormData();
  formData.append('datos', datos);
  // console.log(formData);

  let request = {
    method: method,
    headers: {
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'multipart/form-data'
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  };

  // console.log(request.body.constructor.name);

  let response = await fetch(url, request);
  // console.log(response);
  if (response.ok == false) {
    throw new Error("WARN", response.status);
  }

  let textResponse = await response.text();
  console.log(textResponse);

}













/**
 * Function to download data to a file.
 * https://stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript
 * @param {string} data
 * @param {string} filename
 * @param {string} type
 * @returns {void} no return
 */
/*
function download(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob) // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
*/