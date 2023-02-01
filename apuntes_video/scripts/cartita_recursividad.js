

let principal = document.querySelector('#principal');

// f_datosCartitaHTML();



/**
 * Inserta un elemento html {hijo} en el elemento {padre}, en el {lugar} indicado
 * @param {any} lugar
 * @param {any} hijo
 * @param {any} padre
 * @returns {none}
 */
const f_insertaComponente = function (lugar, hijo, padre) {
  padre.insertAdjacentHTML(lugar, hijo);
}


const f_cadenaHTMLCarta = function () {
  let cadenaResultado = `
			<div class="h-100 p-5 bg-light border rounded-3" cartita>
				`;
  // <h2>Estructura del curso</h2>
  // <ul>
  // 	<li class="col-md-8 fs-4">Conceptos básicos de React</li>
  // 	<li class="col-md-8 fs-4">Descargar e instalar Node.js</li>
  // 	<li class="col-md-8 fs-4">JavaScript XML (JSX)</li>
  // 	<li class="col-md-8 fs-4">Estructura básica de una aplicación de React</li>
  // </ul>
  // <h3>Proyectos</h3>
  // <ul>
  // 	<li class="col-md-8 fs-5">Proyecto 1: Clon de testimonios de freeCodeCamp.</li>
  // 	<li class="col-md-8 fs-5">Proyecto 2: Contador de clics.</li>
  // 	<li class="col-md-8 fs-5">Proyecto 3: Calculadora.</li>
  // 	<li class="col-md-8 fs-5">Proyecto 4: Aplicación de tareas</li>
  // </ul>
  // <h3>Estructura del curso</h3>
  // <ul>
  // 	<li class="col-md-8 fs-5">Componentes de clase</li>
  // 	<li class="col-md-8 fs-5">Adaptar los primeros dos proyectos con componentes de clase:</li>
  // 	<ul>
  // 		<li class="col-md-8 fs-5">Clon de testimonios de freeCodeCamp.</li>
  // 		<li class="col-md-8 fs-5">Contador de clics.</li>
  // 	</ul>
  // </ul>
  cadenaResultado += `
			<div class="d-flex align-content-center gap-1">
				<button class="btn btn-primary btn-lg" type="button">Enlace</button>
				<span class="badge bg-danger text-warning" style="font-size: 1.5em;"><time>00:02:21</time></span>
			</div>
		</div>
		`;


  return cadenaResultado;
}


const f_datosCartitaHTML = function () {

  let arrayObjetoDatos = [

    {// elemento 1
      h2: 'Estructura del curso',
      ul: {
        li: [
          'Conceptos básicos de React',
          'Descargar e instalar Node.js',
          'JavaScript XML (JSX)',
          'Estructura básica de una aplicación de React'
        ]
      }
    },// fin elemento 1

    {// elemento 2
      h3: 'Proyectos',
      ul: {
        li: [
          'Proyecto 1: Clon de testimonios de freeCodeCamp.',
          'Proyecto 2: Contador de clics.',
          'Proyecto 3: Calculadora.',
          'Proyecto 4: Aplicación de tareas'
        ]
      }
    },// fin elemento 2


    {// elemento 3
      h3: 'Estructura del curso',
      ul: {
        li: [
          'Componentes de clase',
          'Adaptar los primeros dos proyectos con componentes de clase:',
          {
            ul: {
              li: [
                'Clon de testimonios de freeCodeCamp.',
                'Contador de clics.'
              ]
            }
          }
        ]
      }
    }// fin elemento 3

  ]; // fin: arrayObjetoDatos{}

  let cadenaResultado = '';
  // const etiquetas = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li', 'code'];

  const f_recorreObjeto = function (arrayObjetoDatos, etiqueta = '0') {

    for (let [clave, valor] of Object.entries(arrayObjetoDatos)) {

      // if (typeof clave == 'string' && valor.constructor.name.toLowerCase() == 'array') {
      // 	etiqueta = clave;
      // }

      // console.log(`clave: ${clave} =>, valor: ${valor}`);
      // console.log();


      switch (valor.constructor.name.toLowerCase()) {

        case 'array':
        case 'object':

          if (!isNaN(clave)) { // si clave ES NUMÉRICA (array indexado)

            f_recorreObjeto(valor);

          } else {// si clave NO es NÚMERICA (array asociativo: <li>)

            // Necesito este bucle para poder realizar bien la apertura y cierre de las etiquetas <li></li>, si no, me crea una etiqueta de apertura y cierre de más: <li> <li></li> </li>
            for (let [clave2, valor2] of Object.entries(valor)) {

              cadenaResultado += `<${clave}>`;
              // console.log(`%c <${clave}>`, `color: Aqua`);

              f_recorreObjeto(valor2, clave2);

              cadenaResultado += `</${clave}>`;
              // console.log(`%c </${clave}>`, `color: Aqua`);

            }

          }

          break; //fin case: 'array' 'object'

        case 'string':

          if (isNaN(etiqueta)) { // si etiqueta no es un número

            clave = etiqueta;

          } else { // si etiqueta es un número

          }

          cadenaResultado += `<${clave}>`;
          cadenaResultado += `${valor}`;
          cadenaResultado += `</${clave}>`;

          // console.log(`%c <${clave}> %c${valor} %c</${clave}>`, `color: Aqua`, `color: DeepPink`, `color: Aqua`);

          break;// fin case: 'string'


        default:

          break;// fin case: default

      }// fin: switch

    }// fin: for Object.entries()

  }; // fin: f_recorreObjeto()



  f_recorreObjeto(arrayObjetoDatos);

  // console.log('\n\n');
  // console.log(`%c ${cadenaResultado} `, `color: yellow`);
  // document.write(`${cadenaResultado}`);

  return cadenaResultado;

}; // fin: f_cadenaDatosHTML()

