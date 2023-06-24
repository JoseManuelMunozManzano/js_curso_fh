// Propiedades y método básicos de los arreglos
(() => {
  let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
  console.log('Largo: ', juegos.length);

  let primero = juegos[0];
  let ultimo = juegos[juegos.length - 1];
  console.log(primero, ultimo);

  // Recorrer todos los elementos de un array.
  juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
  });

  // Añadir elementos al final de un array.
  // Regresa la nueva longitud del array.
  let nuevaLongitud = juegos.push('F-Zero');
  console.log({ nuevaLongitud, juegos });

  // Añadir elementos al inicio de un array.
  nuevaLongitud = juegos.unshift('Fire Emblem');
  console.log({ nuevaLongitud, juegos });

  // Borrar elemento del final de un array y lo devuelve.
  let juegoBorrado = juegos.pop();
  console.log({ juegoBorrado, juegos });

  // Borrar elemento de un arreglo que no es el primero ni el último.
  // En el método splice() se indica la posición desde donde quiero empezar a borrar y cuántos elementos
  // quiero borrar.
  // Devuelve un nuevo arreglo con los elementos eliminados.
  let pos = 1;
  let juegosBorrados = juegos.splice(pos, 2);
  console.log({ juegosBorrados, juegos });

  // Borrar elemento del inicio de un array y lo devuelve.
  juegoBorrado = juegos.shift();
  console.log({ juegoBorrado, juegos });

  // Saber la posición índice de un elemento en un array.
  // Si no lo encuentra devuelve -1
  // ¿En qué lugar se encuentra el juego Metroid?
  let metroidIndex = juegos.indexOf('Metroid');
  console.log({ metroidIndex });
})();
