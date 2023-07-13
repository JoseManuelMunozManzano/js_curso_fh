/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const generatorsFunctionsComponent = (element) => {
  console.log('generatorsFunctionsComponent');

  // Usar función generadora
  const myGenerator = myFirstGeneratorFunction();

  // Obtenemos el primer yield y vemos que done: false, es decir que no hemos ejecutado el return.
  console.log(myGenerator.next());
  // Obtenemos el segundo yield
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  // Ejecutado el return. Ahora done: true
  console.log(myGenerator.next());
  // Como ya se ejecutó el return, vemos que el value es ahora undefined y done sigue a true.
  console.log(myGenerator.next());
};

// Las funciones generadores en JS son algo medio nuevo, pero bastante útil.
// Una función generadora genera una secuencia de valores que podemos usar para diferentes casos.
// No puede escribirse con la sintaxis de funciones de flecha, hay que usar la palabra reservada function.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*
function* myFirstGeneratorFunction() {
  // Cuando se ejecuta esta función, al ejecutar el yield se pausa esta función y devuelve el valor
  // que tiene el yield. JS sabe donde se ha pausado esta función.
  // Y nosotros podemos solicitar más valores.
  yield 'Primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';

  return 'Ya no hay valores';
  // Tras el return ya no se ejecuta nada
}
