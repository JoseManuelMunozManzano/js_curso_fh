const state = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
  },
  {
    id: 3,
    name: 'Flash',
  },
  {
    id: 4,
    name: 'Aquaman',
  },
];

// Esta nueva funcionalidad esta pensada para cuando estamos trabajando con Redux o
// algún tipo de gestor de estado en el que tenemos que regresar un nuevo estado cuando
// hay algún cambio.

const index = 1;
const newName = 'Green Lantern';

// Para cambiar al index 1 el nombre haríamos algo así.
// Y newState es CASI una nueva emisión de mi estado anterior.
// ¿Por qué casi? Por lo mismo que se dijo en el fuente structured-clone.js, porque a partir del segundo
// nivel de objeto, se sigue mandando por referencia, es decir, los objetos (segundo nivel) del array
// (primer nivel) se siguen mandando por referencia.
//
// A pesar de que map me devuelve un nuevo arreglo NO DEVUELVE UNA NUEVA REFERENCIA A LOS OBJETOS INTERNOS.
const newState = state.map((hero, i) => {
  if (i === index) {
    hero.name = newName;
  }

  // Lo que la gente hacía para romper la referencia es un spread.
  // return {...hero};
  return hero;
});

//? Ahora JavaScript nos ofrece el método with de los arreglos, que ayuda a crear un nuevo arreglo
//? y a la vez modifica el índice que queremos (pero no parece que rompa la referencia)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with
const newStateWith = state.with(index, {
  // Indicar que se desestructuran los campos y luego se cambia el name.
  ...state[index],
  name: newName,
});

//? Usando structuredClone SI que devuelve un nuevo array, rompiendo la referencia.
// Aquí se usa junto al array with.
const newStateStructuredClone = structuredClone(state).with(index, {
  // Notar el uso del método at, que funciona igual que la desestructuración.
  // con at() se busca una posición en un arreglo.
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at
  ...state.at(index),
  name: newName,
});

// Esto cambia newState y newStateWith también!!!! pero NO el structuredClone
state[0].name = 'Robin';

console.table(newState);
console.table(newStateWith);
console.table(newStateStructuredClone);

// Sin el método array at() el cálculo de la última posición es estrafalario.
console.log('El último heroe: ', state[state.length - 1]);
// Con el método array at() la primera posición es la 0, la última posición es -1, la penúltima es -2 ...
console.log('El último heroe: ', state.at(-1));
