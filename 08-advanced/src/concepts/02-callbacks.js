import { heroes } from '../data/heroes';

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id1 = '5d86371fd55e2e2a30fe1ccb1';
  const id2 = '5d86371fd55e2e2a30fe1ccb2';

  // Un callback es una función a que recibe como argumento otra función b que invocamos dentro de la función a
  findHero(id1, (error, hero1) => {
    // ¿Qué pasa si el heroe no existe? Tenemos varias posibilidades:
    //  1. Indicar con el asterisco hero?, que heroe es opcional y si no viene informará undefined.
    //        element.innerHTML = hero?.name;
    //  2. Además de indicar opcionalidad, añadir un or para que, en caso de que hero?.name sea undefined,
    //     poder indicar un valor.
    //        element.innerHTML = hero?.name || 'No hay heroe';
    //  3. Aceptar el error y ver por qué es un error. Puede ser un fetch que ha fallado porque hemos
    //     perdido la conexión a Internet. En función del error podemos tomar acciones diferentes.
    //     Durante muchos años esta ha sido la única manera de trabajar con código semi-asíncrono.
    //     Para poder trabajar de esta forma, la firma de findHero ha cambiado y tenemos que tratar el error.

    if (!hero1) {
      element.innerHTML = error;
      return;
    }

    // El término callback hell se refiere a cuando tenemos muchos callbacks que internamente llaman a otros callbacks y
    // que internamente llaman a otros callbacks...
    // Hay varias técnicas para evitar esto.
    findHero(id2, (error, hero2) => {
      if (!hero2) {
        element.innerHTML = error;
        return;
      }
      element.innerHTML = `${hero1.name} / ${hero2.name}`;
    });
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|Null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  // Nota: Un callback NO detiene la ejecución de la función. De ahí que indiquemos return.
  // No es lo mismo hacer solo el return que el return del callback. Lo primero NO devuelve nada
  // y el return del callback devuelve lo que sea que devuelva el callback y NO QUEREMOS ESO.
  if (!hero) {
    // Solo tenemos el primer parámetro de error.
    callback(`Hero with id ${id} not found.`);
    return; // Regresa undefined
  }

  // Una vez tenemos ya el heroe, en vez de devolverlo con return lo que hacemos es llamar al callback.
  // Esto lo hacemos porque la instrucción de arriba puede ser asíncrona y queremos que, una vez termine
  // se ejecute otra cosa, el callback, con el parámetro de heroe.
  //
  // En un callback el primer parámetro siempre es el error y el segundo el parámetro "real" siempre que exista.
  callback(null, hero);
};
