// El patrón módulo nos permite una encapsulación del código, es decir, este queda como en un contenedor privado y
// nadie de fuera podrá manipular nuestras variables ni llamar funciones desde la consola.
//
// Sintaxis del patrón módulo: Se usa la palabra reservada function o una función de flecha.
// Al final lo que queremos es crear una función anónima.
// Se envuelve esa función entre paréntesis y después de ese último paréntesis, para llamar a la función,
// se escriben otros dos paréntesis.
//
// Esto se llama función anónima autoinvocada.
// Lo que hace es crear un nuevo scope sin referencia por nombre, por lo que NO es posible llamar a este
// objeto directamente.
(() => {
  // Este use strict no es estrictamente necesario, pero es bueno añadirlo para decirle a JS que sea estricto
  // a la hora de evaluar el código. Habilita restricciones y ayuda al desarrollo evitando errores comunes.
  // https://www.w3schools.com/js/js_strict.asp
  //
  // Por ejemplo, si abajo, en vez de indicar const personajes, le quito el const, es decir, solo dejo
  // personajes, con use strict en la consola me va a aparecer un error indicando que personajes no está
  // definido.
  // personajes = ['Ana', 'Mercy', 'Mei'];
  //
  // Sin use strict ese código funcionaría.
  ('use strict');

  // Si en la consola escribimos la variable personajes veremos que indica que NO está definida,
  // es decir, el código es seguro.
  const personajes = ['Ana', 'Mercy', 'Mei'];
  console.log(personajes);
})();

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Primero vamos a hacer el juego de una forma sencilla con lo que hemos visto hasta el momento.
// Va a ser educativo, pero esta lógica va a tener problemas.
// Luego lo vamos a optimizar.
//
// PROBLEMAS DE ESTE CODIGO
// Como tengo todo el código en el objeto global no está protegido y los usuarios pueden acceder en la consola
// del navegador a todas las variables del código.
// Por ejemplo, los usuarios pueden llamar directamente, en la consola, a la función turnoComputadora(21)
// con la máxima puntuación, asegurándose no perder, haciendo trampas.
// Otra trampa es, accediendo a la variable global deck en la consola, saber las cartas que me van a salir, y puedo
// descartar las que me vengan mal usando la función deck.pop()
//
// Se va a proteger nuestro juego y vamos a hacer optimizaciones al código usando el patrón módulo.
//
// El patrón módulo nos permite una encapsulación del código, es decir, este queda como en un contenedor privado y
// nadie de fuera podrá manipular nuestras variables ni llamar funciones desde la consola.

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
 * Turno de la computadora
 */
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora += valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    // <img class="carta" src="./assets/cartas/10C.png" alt="Carta" />;
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = `Carta ${carta}`;
    divCartasComputadora.append(imgCarta);

    // Si el jugador sacó más de 21 entonces con la primera carta
    // la computadora gana.
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  // Este resultado aparece antes que las cartas.
  // Esta solución no es muy buena.
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana');
    }
  }, 30);
};

/**
 * Eventos
 */
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  // <img class="carta" src="./assets/cartas/10C.png" alt="Carta" />;
  const imgCarta = document.createElement('img');
  imgCarta.classList.add('carta');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.alt = `Carta ${carta}`;
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
  console.clear();
  deck = [];
  deck = crearDeck();

  puntosJugador = 0;
  puntosHTML[0].innerText = 0;
  puntosComputadora = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});