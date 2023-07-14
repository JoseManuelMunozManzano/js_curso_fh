import { heroes } from '../data/heroes';

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const generatorsAsyncComponent = async (element) => {
  const heroGenerator = getHeroGenerator();
  let isFinished = false;

  do {
    const { value, done } = await heroGenerator.next();
    isFinished = done;

    // Para evitar que escriba el undefined del return de la función generadora.
    if (!isFinished) element.innerHTML = value;
  } while (!isFinished);
};

// Vamos a emitir secuencialmente todos los valores del arreglo de heroes
async function* getHeroGenerator() {
  for (const hero of heroes) {
    // Vamos a demorar 1sg entre cada una de las emisiones.
    await sleep();
    yield hero.name;
  }

  // Recordar que siempre hay un return implícito a undefined.
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};
