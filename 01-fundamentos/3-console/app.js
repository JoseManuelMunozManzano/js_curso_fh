// Función anónima autoinvocada (() => {}) ()
// Con esto, si es distintos archivos tengo las mismas variables no me da error indicando que ya existe.
(() => {
  let a = 10,
    b = 20,
    c = 30,
    x = a + b;

  // console es un objeto y log es el método.
  console.log('a', a);
  console.info('b', b);
  console.warn('c', c);
  console.error('x', x);

  // {a} es un objeto.
  console.log({ a });

  // Cambiando el CSS del texto como se va a ver en la consola.
  // %c es para incrustar un estilo.
  console.log('%c Mis variables', 'color: blue; font-weight: bold');

  let c1 = 'Hola ',
    d1 = 'Spiderman';

  // Para imprimir muchas variables, muy útil si estas variables tienen un orden lógico.
  // console.table puede recibir un array [] o un objeto {}
  //
  // Si es un objeto, se crea una tabla con el index, que es la variable que se está usando, y el valor, con el valor de las variables.
  // Si es un array, se crea una tabla con el index, que es un numérico que empieza en cero, y el valor, con el valor de las variables.
  console.table({ a, b, c1, d1, x });

  const saludo = c1 + d1;
  console.log(saludo);
})();
