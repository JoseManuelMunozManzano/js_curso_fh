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

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');

// Primero vamos a hacer el juego de una forma sencilla con lo que hemos visto hasta el momento.
// Va a ser educativo, pero esta lógica va a tener problemas.
// Luego lo vamos a optimizar.

/**
 * Crear baraja
 */
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

  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

/**
 * Pedir carta
 */
const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }

  const carta = deck.pop();

  return carta;
};

const valorCarta = (carta) => {
  // En JS los strings pueden trabajarse como arreglos. Para obtener el valor de la carta
  // cojo la primera posición. PERO ESTO NO VALE PARA EL VALOR 10S.
  // const valor = carta[0];
  //
  // Usamos substring
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : +valor;
};

/**
 * Eventos
 */
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
});
