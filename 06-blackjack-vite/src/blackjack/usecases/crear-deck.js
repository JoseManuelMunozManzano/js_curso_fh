import _ from 'underscore';

// Exportación individual
// export const miNombre = 'José Manuel';

// Exportación individual
//
// Con JS no hay forma de saber los tipos de datos.
// Los desarrolladores están un poco ciegos a la hora de usar esta función.
// La solución es TypeScript.
// Pero como estamos en un curso de puro JS vamos a documentar el uso de estas
// funciones usando JSDoc Comments
// https://jsdoc.app/

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  // Validaciones
  // En TypeScript esto no haría falta hacerlo porque ya saltarían errores en tiempo de desarrollo.
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

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
