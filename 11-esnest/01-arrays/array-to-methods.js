const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];

// De nuevo todo esto está muy relacionado a las copias, modificaciones, obtener elementos,
// con los problemas derivados de que todos los objetos se pasan por referencia.

//? sort() y reversed()
// Al usar este método estamos ordenando tanto el original como la copia.
// const heroesCopy = heroes;
// heroes.sort();
//
// NOTA: Para ordenar descendente de la manera antigua, sin usar métodos to
// heroes.sort();
// heroes.reverse();

//? toSorted() y toReversed()
// Se han creado en JavaScript métodos que empiezan por to, capitalizan la siguiente letra y el método queda en pasado.
// Ejemplo: toSorted()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
// toSorted() regresa un nuevo arreglo. El arreglo original NO se modifica.
const sortedHeroes = heroes.toSorted();
const reversedHeroes = sortedHeroes.toReversed();

console.table(heroes);
// console.table(heroesCopy);
console.table(sortedHeroes);
console.table(reversedHeroes);

//? splice()
// Se indica donde se empieza y los elementos que se quieren eliminar.
// Los elementos eliminados se devuelven en la variable hero.
// En heroes, en lugar de esos elementos borrado, se indica qué se quiere añadir (se añade uno)
// Problema: MUTA NUESTRO ARREGLO ORIGINAL
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
const deletedHeroes = heroes.splice(0, 2, 'Green Lantern');

console.table({ deletedHeroes });
console.table(heroes);

//? toSpliced()
// CREA UN NUEVO ARREGLO SIN MUTAR EL ORIGINAL.
// Funciona algo diferente al método splice()
// El método toSpliced() regresa el nuevo arreglo con las modificaciones.
// Los elementos eliminados SE PIERDEN.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced
const heroes2 = ['Batman', 'Superman', 'Flash', 'Aquaman'];
const deletedHeroes2 = heroes2.toSpliced(0, 2, 'Green Lantern');

console.table({ deletedHeroes2 });
console.table(heroes2);
