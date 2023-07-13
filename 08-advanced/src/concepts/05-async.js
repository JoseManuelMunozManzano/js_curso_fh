import { heroes } from '../data/heroes';

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = '5d86371fd55e2e2a30fe1ccb';
  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));
};

// Con la palabra reservada async cambia por completo como funciona la función.
// En vez de devolver un objeto, devuelve una Promise.
// Se convierte en una promesa que resuelve lo que sea que pongamos en el return.
/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  return hero?.name;
};
