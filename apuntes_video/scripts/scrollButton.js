//Fuente: https://www.delftstack.com/howto/javascript/javascript-scroll-to-bottom-of-div/

//Fuente: https://mdbootstrap.com/docs/standard/extended/back-to-top/


// Esta constante nos va a permitir calcular la diferencia entre dos propiedades que nos permiten calcular cuando estamos al final del documento.
const diferencia = document.documentElement.scrollHeight - document.documentElement.scrollTop;

const f_scrollBottomButton = function () {

  //Get the button
  let buttonBottom = document.getElementById("btn-carry-to-buttom");

  // Obtengo altura del H1 de titulo
  let header = document.querySelector('header');
  let heightHeader = header.offsetHeight;

  // Obtengo la altura del div principal para poder hacer scroll hasta el final

  let divPrincipalScrollHeight = document.querySelector('#principal').scrollHeight;


  // dando estilo al botón
  buttonBottom.style.position = 'fixed';
  buttonBottom.style.top = `${heightHeader + 1}px`;
  buttonBottom.style.right = '20px';
  buttonBottom.style.display = 'block';

  // When the user clicks on the button, scroll to the top of the document
  buttonBottom.addEventListener("click", function () {

    document.documentElement.scrollTop = document.documentElement.scrollHeight - diferencia;
    this.style.display = 'none';

  });
}

// función para scroll TOP
const f_scrollTopButton = function () {

  //Get the button
  let buttonTop = document.getElementById("btn-carry-to-top");

  // dando estilo al botón
  buttonTop.style.position = 'fixed';
  buttonTop.style.bottom = '20px';
  buttonTop.style.right = '20px';
  buttonTop.style.display = 'none';

  // When the user clicks on the button, scroll to the top of the document
  buttonTop.addEventListener("click", function () {
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

}



// EVENTO SCROLL
window.onscroll = function () {
  depura();

  //BOTTOM
  let buttonBottom = document.getElementById("btn-carry-to-buttom");
  // Si el scroll llega al final, el botón no se muestra
  if (document.documentElement.scrollTop == (document.documentElement.scrollHeight - diferencia)) {
    buttonBottom.style.display = "none";
  } else {
    buttonBottom.style.display = "block";
  }

  //TOP
  let buttonTop = document.getElementById("btn-carry-to-top");
  if (document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
};




// FUNCIÓN SÓLO PARA LA DEPURACIÓN

function depura() {
  let divPrincipal = document.querySelector('#principal');


  console.clear();


  console.log(`%c document.body`, 'color:red');
  console.log(`document.body.scrollTop: `, document.body.scrollTop);
  console.log(`document.body.scrollHeight: `, document.body.scrollHeight);

  console.log();

  console.log(`%c document.documentElement`, 'color:yellow');
  console.log(`document.documentElement.scrollTop: `, document.documentElement.scrollTop);
  console.log(`document.documentElement.scrollHeight: `, document.documentElement.scrollHeight);

  console.log();

  console.log(`%c divPrincipal`, 'color:aqua');
  console.log(`divPrincipal.scrollTop: ${divPrincipal.scrollTop}`);
  console.log(`divPrincipal.scrollHeight: ${divPrincipal.scrollHeight}`);
  console.log(`divPrincipal.offsetHeight: ${divPrincipal.offsetHeight}`);

  console.log();

  console.log(`%c RESTA`, 'color:coral');
  console.log(`document.documentElement.scrollHeight - document.documentElement.scrollTop`, document.documentElement.scrollHeight - document.documentElement.scrollTop);


  console.log();
  console.log(`%c IF`, 'color:darkgreen');
  console.log(`document.documentElement.scrollTop < (document.documentElement.scrollHeight - diferencia): `, document.documentElement.scrollTop, '<', (document.documentElement.scrollHeight - diferencia));
}