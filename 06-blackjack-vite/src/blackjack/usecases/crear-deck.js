import _ from 'underscore';

// Exportación individual
// export const miNombre = 'José Manuel';

// Exportación individual
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

// Exportación por defecto. Solo una por módulo.
// export default crearDeck;
