class LI {

  li;

  constructor(liText) {
    this.li = `<li>${li}</li>`;
  }



}


class UL {
  listaLI;

  constructor(listaLI) { //rest parameter
    listaLI = [];
    for (const li of listaLI)
      listaLI.push(new LI(li)); // spread 
  }

}



class Cartita {

  divPrincipalCartita;
  static contador = 1;
  h2;
  listaUL;
  divPadreButton;
  buttonEnlace;
  span;
  time;




  constructor(h2Titulo, listaUL) {
    Cartita.incrementaContador(h2Titulo);

    // div principal contenedor, que representa la carta
    this.divPrincipalCartita +=
      `
    <div class="h-100 p-5 bg-light border rounded-3" cartita>
    `;

    // contador
    this.divPrincipalCartita +=
      `
      <p>${Cartita.contador}</p>
      `;


    // h2
    this.h2 = `<h2>${h2Titulo}</h2>`;
    this.divPrincipalCartita +=
      `
      ${this.h2}
      `;

    // ul
    this.listaUL = [];
    for (let ul of listaUL) {
      this.listaUL.push(new UL(ul));
    }
git
    this.divPrincipalCartita +=
      `
      ${this.h2}
      `;






    this.divPrincipalCartita += `</div>`; //fin: divPrincipalCartita

    Cartita.incrementaContador();

  }


  // incrementa el contador +1
  static incrementaContador() {

    Cartita.contador++;

  }


}