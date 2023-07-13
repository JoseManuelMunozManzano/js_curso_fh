import { heroes } from '../data/heroes';

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = '5d86371fd55e2e2a30fe1ccbx';

  console.log('Inicio de Componente');

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    // .then(console.log)
    .catch((error) => (element.innerHTML = error));

  findHeroWithTryCatch(id1).then(console.log);

  console.log('Fin del Componente');
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

  // Manejo del error correcto. Si no hemos obtenido ningún heroe no queremos hacer return.
  // Se llama al reject.
  if (!hero) throw `Hero with id ${id} not found`;

  // Un return es que todo salió bien, siempre es llamar al resolve.
  return hero.name;
};

// Mucho cuidado con esto.
// Como tenemos un try - catch, si falla se devuelve lo que tengamos en el catch.
// Y como lo que tenemos en el catch es un return lo TRATA COMO RESOLVE, un exito.
const findHeroWithTryCatch = async (id) => {
  try {
    const hero = heroes.find((hero) => hero.id === id);
    if (!hero) throw `Hero with id ${id} not found`;
    return hero.name;
  } catch (error) {
    // RECORDAR: UN RETURN ES UN EXITO!
    return 'hola mundo';
  }
};
