import { heroes } from '../data/heroes';

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id = '5d86371fd55e2e2a30fe1ccb1x';

  // Un callback es una función a que recibe como argumento otra función b que invocamos dentro de la función a
  findHero(id, (hero) => {
    // ¿Qué pasa si el heroe no existe? Tenemos varias posibilidades:
    //  1. Indicar con el asterisco hero?, que heroe es opcional y si no viene informará undefined.
    //        element.innerHTML = hero?.name;
    //  2. Además de indicar opcionalidad, añadir un or para que, en caso de que hero?.name sea undefined,
    //     poder indicar un valor.
    //        element.innerHTML = hero?.name || 'No hay heroe';
    //  3. Aceptar el error y ver por qué es un error. Puede ser un fetch que ha fallado porque hemos
    //     perdido la conexión a Internet. En función del error podemos tomar acciones diferentes.
    element.innerHTML = hero.name;
  });
};

/**
 *
 * @param {String} id
 * @param {(hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  // Una vez tenemos ya el heroe, en vez de devolverlo con return lo que hacemos es llamar al callback.
  // Esto lo hacemos porque la instrucción de arriba puede ser asíncrona y queremos que, una vez termine
  // se ejecute otra cosa, el callback, con el parámetro de heroe.
  callback(hero);
};
