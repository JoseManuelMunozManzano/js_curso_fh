(() => {
  // En JavaScript todo es un objeto, salvo los primitivos.

  // String
  let nombre = 'Peter Parker';
  console.log(nombre);

  // Cambiando el valor de la variable. Lo que se cambia es la dirección de memoria a la que apunta la variable.
  nombre = 'Ben Parker';
  console.log(nombre);

  // Qué tipo de dato es el valor al que apunta una variable. JavaScript infiere el tipo automáticamente.
  console.log(typeof nombre);

  // JavaScript es de tipado débil, es decir, nombre antes era un string y ahora es un number.
  nombre = 123;
  console.log(typeof nombre);

  // Booleanos
  let esMarvel = true;
  console.table(typeof esMarvel);

  // Números
  let edad = 44;
  console.log(typeof edad);

  // JavaScript no hace diferencias entre números con o sin decimales (enteros o flotantes).
  // En JavaScript, para números, solo tenemos el tipo primitivo number.
  edad = 44.4001;
  console.log(typeof edad);

  // JavaScript considera buena práctica usar camelCase, es decir, primera palabra en minúsculas y, cuando es una combinación
  // de palabras, a partir de la segunda, la primera letra de cada nueva palabra en mayúsculas.
  // Undefined
  let superPoderDeSpiderman;
  // Si la variable está declarada, pero no se ha inicializado con ningún valor, su tipo es undefined.
  console.log(typeof superPoderDeSpiderman);

  // null
  let soyNull = null;
  // Aunque el tipo debería ser null, el resultado es object, y por eso mucha gente considera null como un objeto
  // en vez de un primitivo.
  console.log(typeof soyNull);

  // symbol
  // Identifica propiedades de manera única.
  // En este ejemplo, aunque se han creado exactamente igual, symbol1 !== symbol2
  let symbol1 = Symbol('a');
  let symbol2 = Symbol('a');

  console.log(typeof symbol1);
  console.log(typeof symbol2);

  console.log(symbol1 === symbol2);
})();
