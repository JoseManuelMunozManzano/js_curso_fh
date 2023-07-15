const superHeroes = [
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
    name: 'Green Lantern',
  },
];

// Para hacer una copia del arreglo y no cambiar el arreglo original (recordar que se pasa por referencia)
// 1. shallow copy usando operador spread: no recomendado a no ser que sepamos que estamos haciendo.
//    Vemos que cambia el valor. Esto es porque dentro del array tenemos objetos QUE SIGUEN SIENDO PASADOS POR REFERENCIA.
//    Si hubiera algún primitivo ese no se cambiaría.
//    Es decir, los shallow copy solo 'PROTEGEN' la primera referencia, en este caso el array, pero no las referencias
//    internas. Para protegerlas habría que hacer, dentro del array, un map para hacer el spread de las propiedades
//    de cada heroe.
//    Pero si dentro de un objeto hubiera otro objeto, esta última referencia volvería a poder cambiarse porque
//    de nuevo se pasa la referencia.
//
//    Se puede usar el operador spread si sabemos que dentro de un array solo tenemos primitivos.
const superHeroesCopy = [...superHeroes];
superHeroesCopy[0].name = 'Aquaman';

// 2. JSON.parse(JSON.stringify(array)): Era la forma que había para romper todas las referencias.
const array2 = JSON.parse(JSON.stringify(superHeroes));

// 3. structuredClone: La nueva forma. Es capaz de romper la referencia de todas las referencias existentes en un array.
const superHeroesCopy2 = structuredClone(superHeroes);
superHeroesCopy2[0].name = 'Green Arrow';

console.table(superHeroes);
console.table(superHeroesCopy);
console.table(superHeroesCopy2);
