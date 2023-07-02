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
//
// Damos nombre a la función autoinvocada porque hemos hecho un return al final de la misma y necesitaremos
// un nombre para poder hacer referencia a lo que se hace return.
const miModulo = (() => {
  // Este use strict no es estrictamente necesario, pero es bueno añadirlo para decirle a JS que sea estricto
  // a la hora de evaluar el código. Habilita restricciones y ayuda al desarrollo evitando errores comunes.
  // https://www.w3schools.com/js/js_strict.asp
  ('use strict');

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

  // Con este arreglo podemos tener más de un jugador humano sin tener que tocar el código luego.
  // El último jugador será siempre la computadora.
  // Pero tras la optimización del programa, la verdad es que no está preparado para tener más de un jugador humano.
  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');

  /**
   * PROCESO PRINCIPAL
   */
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  /**
   * Crear baraja
   */
  const crearDeck = () => {
    deck = [];

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

    return _.shuffle(deck);
  };

  /**
   * Pedir carta
   */
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas en el deck';
    }
    return deck.pop();
  };

  /**
   * Valor de la carta
   */
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : +valor;
  };

  /**
   * Acumular puntos
   * Turno: 0 = primer jugador y el último será la computadora.
   */
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  /**
   * Crear la carta en HTML
   */
  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = `Carta ${carta}`;
    divCartasJugadores[turno].append(imgCarta);
  };

  /**
   * Indicar con un alert quien gana
   * Notar que está hecho de forma que realmente solo puedo trabajar con 1 jugador y el computador.
   */
  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

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
    }, 100);
  };

  /**
   * Turno de la computadora
   */
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  /**
   * Eventos
   */
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta, 0);

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
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  // Antes de la finalización de la función anónima autoinvocada se puede incluir este return
  // para regresar lo que queramos que se pueda utilizar desde fuera de esta función. Esto es lo
  // único que será público fuera de este módulo.
  return {
    nuevoJuego: inicializarJuego,
  };
})();
