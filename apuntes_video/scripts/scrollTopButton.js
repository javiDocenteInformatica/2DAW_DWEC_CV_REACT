//Fuente: https://mdbootstrap.com/docs/standard/extended/back-to-top/


function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


export const f_scrollTopButton = function () {

  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // dando estilo al botón
  mybutton.style.position = 'fixed';
  mybutton.style.bottom = '20px';
  mybutton.style.right = '20px';
  mybutton.style.display = 'none';

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);


  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
}