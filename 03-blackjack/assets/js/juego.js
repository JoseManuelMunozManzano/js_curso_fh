/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas o Espadas)
 */

// Nota: Para utilizar funciones que JS no tiene se hace uso de la librería underscore.js
// https://underscorejs.org/
// Nos descargamos la versión UMD (Production) con botón derecho y Guardar enlace como...
// Y utilizamos _.shuffle
// https://underscorejs.org/#shuffle

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Primero vamos a hacer el juego de una forma sencilla con lo que hemos visto hasta el momento.
// Va a ser educativo, pero esta lógica va a tener problemas.
// Luego lo vamos a optimizar.
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();
