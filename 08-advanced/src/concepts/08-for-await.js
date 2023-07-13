import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
  const id = '5d86371fd55e2e2a30fe1cc4x';

  // Se puede usar await dentro de un if, un for, un while... como una condición.
  //
  // if (await getHeroAsync(id)) {
  //   element.innerHTML = 'Si existe ese héroe';
  //   return;
  // }
  // element.innerHTML = 'No existe ese héroe';

  // Voy a verificar con mi función cada uno de los ids de mi data heroes.
  // Indicar que getHeroesAsync devuelve un arreglo de Promesas.
  const heroIds = heroes.map((hero) => hero.id);
  const heroPromises = getHeroesAsync(heroIds);

  // for await espera a que cada una de las promesas se resuelva.
  for await (const hero of heroPromises) {
    element.innerHTML += `${hero.name} <br>`;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((hero) => hero.id === id);
};
