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

// Utilizando var la variable la estamos colocando en un objeto global llamado window y es mala práctica.
var miNombre = 'José Manuel';
console.log({ miNombre: window.miNombre });

// Primer problema del uso de var
//
// Es mala práctica porque sin saberlo podemos sustituir una variable que existe en window, por ejemplo outerWidth.
// Y ese es el valor que va a tener, aunque no tenga nada que ver con el dato que debería mostrar en realidad, en
// este caso el ancho de la ventana.
// Esto hace que ocurran errores muy difíciles de corregir.
//
// Para evitar este problema, usar siempre let o const para definir variables, ya que no sobreescriben las variables
// que se encuentran en el objeto global window
var outerWidth = 1000000;

// Segundo problema del uso de var
//
// Puedo declarar una variable DESPUES de usarla!!
// Con esto no da error de variable no definida, que es un error que está bien, sino que el resultado es undefined.
// Definiendo abajo la variable con let, SI que da un error muy descriptivo:
// Cannot access 'miNuevoNombre' before initilization
console.log(miNuevoNombre);

var miNuevoNombre = 'Adriana';

// Así que ahora mismo solo se usa var para incrementar la compatibilidad con navegadores antiguos.

// NOTA: Para tener más ordenado nuestro proyecto se suele crear una estructura de directorios de la siguiente manera:
//    assets
//       css
//       js     --> Aquí irá nuestro código JavaScript
//
// Esto también depende mucho de la librería o framework utilizado.
