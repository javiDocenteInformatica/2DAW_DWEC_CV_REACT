class LI {

  li;
  liText;

  constructor(li) {
    this.li = li;
    this.liText = li.innerHTML;
  }

}


class UL {

  listaLI;

  constructor(ul) {
    listaLI = [];
    for (let li of ul) {
      listaLI.push(new LI(li));
    }

  }

}

class H2 {

  h2;
  h2Text;

  constructor(h2) {
    this.h2 = h2;
    this.h2Text = h2.innerHTML;
  }
}

class Cartita {

  static contador = 1; // cuenta el número de instancias de esta clase
  numCarta; // el número concreto de instancia del objeto que se cree

  h2;
  listaUL;
  listaH3;
  divButton;
  button;
  span;
  time;


  constructor(divCartita) {

    try {
      // h2
      this.h2 = divCartita.querySelector('h2');

      // ul // REVISAR
      this.listaUL = divCartita.querySelectorAll('ul');
      for (let ul of listaUL) {
        this.listaUL.push(new UL(ul));
      }

      // h3
      this.listaH3 = divCartita.querySelectorAll('h3');

      // CONTADOR
      this.numCarta = Cartita.contador;// asigno valor de contador (esto le asignará un número que nos ayudará a identificar el orden de la carta)
      Cartita.incrementaContador(); // incrementa número de carta creado
    } catch (error) {
      console.log(error);
    }


  }


  // incrementa el contador +1
  static incrementaContador() {

    Cartita.contador++;

  }


  cadenaCartita() {
    let cadenaCartita = ``;

    return cadenaCartita;
  }


}