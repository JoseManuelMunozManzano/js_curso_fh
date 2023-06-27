//? Paso por valor
// Cuando estamos trabajando con primitivos cualquier tipo de asignación o cuando lo mandamos a una función
// como argumento, los mandamos por valor, es decir, no estamos afectando el mismo lugar por memoria, estamos
// pasando únicamente el valor.

let a = 10;
let b = a;
// Cambiamos el valor
a = 30;

console.log({ a, b });

//? Paso por referencia
// En JavaScript todos los objetos son pasados por referencia.
let juan = { nombre: 'Juan' };
let ana = juan;

// Con esta instrucción cambiamos el nombre de los objetos juan y ana. Ahora ambos valen Ana.
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
};

let peter = { nombre: 'Peter' };
// Al mandar un objeto a una función, este objeto pasa por referencia. Cualquier modificación que se haga
// al objeto va a afectar a los objetos peter y tony (a este en concreto si se hace el return de persona).
let tony = cambiaNombre(peter);

console.log({ peter, tony });

//? ¿Cómo resolvemos esto?
// Si queremos crear una copia de un objeto, es decir, que la copia NO APUNTE a la misma dirección de memoria
// se puede usar el operador spread (separación de elementos) que rompe la referencia que hay en JavaScript, es decir,
// ahora juan y ana2 apuntan a direcciones de memoria distintas.
juan = { nombre: 'Juan' };
let ana2 = { ...juan };
ana2.nombre = 'Ana';

console.log({ juan, ana2 });

// En una función, la forma de arreglarlo es convertir los argumentos a un objeto y usar el operador spread.
// NOTA: El operador spread es más rápido que usar otras posibilidades.
const cambiaNombre2 = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
};

peter = { nombre: 'Peter' };
tony = cambiaNombre2(peter);
console.log({ peter, tony });

//? Arreglos
let frutas = ['Manzana', 'Pera', 'Piña'];
let otrasFrutas = frutas;

// Se añade esta fruta a los dos arrays.
otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

//? Para solucionar esto
// Hacer la asignación indicando que es un nuevo arreglo, es decir, entre corchetes y usar el operador spread
// para separar cada uno de los elementos que vienen en el arreglo y retornarlo de una manera independiente
// rompiendo la relación.
frutas = ['Manzana', 'Pera', 'Piña'];

// Medimos el rendimiento
console.time('spread');
otrasFrutas = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

// OTRA FORMA DE ROMPER LA RELACIÓN consiste en usar la función slice() sin usar argumentos.
// slice() corta el arreglo.
frutas = ['Manzana', 'Pera', 'Piña'];

// Medimos el rendimiento
console.time('slice');
otrasFrutas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
