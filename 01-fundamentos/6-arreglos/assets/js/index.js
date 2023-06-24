// Los arreglos contienen un grupo de elementos que generalmente tienen algo en común.
// Usualmente, la información dentro del arreglo es del mismo tipo de dato, pero no siempre sucede.
// Los valores de un array se indican entre corchetes, [var1, var2, ..., varn]
// Los arreglos en JS empiezan en la posición 0
(() => {
  // Una forma que no es común usar para inicializar un array es la siguiente, donde se crea una nueva instancia de Array y
  // se indica que contiene 10 elementos, que ahora mismo están vacíos.
  const arr = new Array(10);
  console.log(arr);

  // Forma que se usa para inicializar un array. No es lo mismo que la instrucción anterior porque ahora nuestro array
  // está vacío, sin elementos.
  const arr2 = [];
  console.log(arr2);

  // Array con valores.
  let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
  console.log({ videojuegos });
  console.log(videojuegos[0]);

  // Arreglo con tipos de datos mezclados.
  // Es un ejemplo, pero no es recomendado, sobre todo la parte de anidar arrays.
  let arregloCosas = [
    true,
    123,
    'José',
    // JS primero ejecuta la operación y luego la inserta en el arreglo.
    1 + 2,
    // Una función puede ser un elemento de un arreglo
    function () {},
    () => {},
    // Un objeto literal
    { a: 1 },
    // Y otro arreglo que tiene a su vez un arreglo
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']],
  ];
  console.log({ arregloCosas });
  console.log(arregloCosas[0]);
  console.log(arregloCosas[2]);
  console.log(arregloCosas[7][3]);
  console.log(arregloCosas[7][4][1]);
})();
