import { heroes } from '../data/heroes';

// No se puede usar await fuera de funciones que no son asíncronas. Por eso se dice
// que el await siempre va a estar envuelto en una función asíncrona.

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  const id1 = '5d86371f2343e37870b91ef1';
  const id2 = '5d86371f1efebc31def272e2';

  // Con async-await podemos tomar los valores de las funciones asíncronas
  // como si fueran funciones tradicionales síncronas.
  //
  // Sin await, hero1 es una promesa.
  // Con await, hero1 es el objeto ya producto resuelto de mi función. Se espera a que termine!
  //
  // Con esto ya no existen los callback hell.
  const { name: name1 } = await findHero(id1);
  const { name: name2 } = await findHero(id2);

  // Problema: Si la búsqueda del primer heroe se demora segundo y medio y la del segundo heroe
  //    se demora otro segundo y medio, entonces esta línea va a empezar a ejecutarse 3sg después.
  // Este problema no tenemos por qué tenerlo si una promesa no depende de la otra.
  // Es obligatorio seguir este camino si una promesa depende del resultado de la anterior.
  element.innerHTML = `${name1} / ${name2}`;
};

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `hero not found`;

  return hero;
};
