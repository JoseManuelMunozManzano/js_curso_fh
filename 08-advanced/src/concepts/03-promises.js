import { heroes } from '../data/heroes';

// Una promesa es un acuerdo entre dos partes a través de la cual una de ellas se compromete a realizar algo
// y vamos a avisar a la persona a la que le hicimos la promesa cuando acabamos el trabajo o notificarle
// que no hemos sido capaces de cumplir esa promesa.

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  console.log('promiseComponent');
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  // Las promesas se pueden crear de varias maneras.
  // Esta es muy típica, devolviendo un promise (TENEMOS QUE DEVOLVER EL PROMISE!!)
  // Los argumentos son:
  //   - resolve: Es una función que va a tener el valor producto de mi promesa cuando la cumplimos.
  //   - reject: Es una función en la que indicamos que no hemos sido capaces de cumplir la promesa.
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    // Solo podemos emitir un resolve (el primero), incluso aunque indiquemos más de uno.
    // Pero la ejecución de la función sigue.
    // Por eso es mejor incluir un return para salir.
    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};
