// En JavaScript, todo lo que no sea un primitivo es un objeto.
// Un objeto literal es un objeto que tienen pares de valores (llave-valor)
// En otros lenguajes de programación se les llama diccionarios.
//
// Los valores de los objetos literales se escriben entre llaves, {llave1: valor1, llave2: valor2, ..., llaven: valorn}
(() => {
  let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
      lat: 34.034,
      lng: -118.7,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
      zip: '10880, 90265',
      ubicacion: 'Malibu, California',
    },
    // Se pueden indicar nombres de propiedades que contengan espacios en blanco, pero NO es recomendable.
    // En este caso, la propiedad debe ir entre comillas.
    //
    // Lo suyo es usar guiones en vez de espacios, y en este caso TAMBIEN iría entrecomillado,
    // porque JS se cree que queremos hacer una resta entre dos variables.
    //
    // Guión bajo es también posible. En este caso NO hace falta que vaya entrecomillado.
    'ultima pelicula': 'Infinite War',
  };

  // NOTA: En la consola del navegador aparecerán las llaves o propiedades de forma alfabética.
  // Primero codeName, luego coords.. y al final vivo.
  console.log(personaje);

  // Como acceder a las propiedades y arreglos que tenemos dentro de personaje.

  // Accediendo a un valor del objeto literal.
  // Se usa el nombre de la variable seguido de un punto y el nombre de la llave (propiedad)
  console.log('Nombre:', personaje.nombre);

  // Se puede usar la notación de corchete (en vez de punto) para acceder al valor de una propiedad.
  // La propiedad hay que incluirla entre comillas.
  // Se usa menos que la notación con punto.
  console.log('Nombre:', personaje['nombre']);

  console.log('Edad:', personaje.edad);

  // Accediendo a objetos anidados.
  console.log('Coords:', personaje.coords);
  console.log('Latitud:', personaje.coords.lat);

  // Número de trajes.
  console.log('No. trajes:', personaje.trajes.length);

  // Último traje.
  console.log('Último traje:', personaje.trajes[personaje.trajes.length - 1]);

  // Podemos usar una variable para obtener información de un objeto.
  // Ayuda bastante para poder trabajar de forma dinámica con nuestros objetos.
  // En este caso usamos x con el string 'vivo' para acceder a la propiedad vivo del objeto personaje, usando la notación de corchete.
  const x = 'vivo';
  console.log('Vivo', personaje[x]);

  // Para recuperar una propiedad que contiene espacios o el guión, hay que hacerlo usando la notación de corchete obligatoriamente.
  console.log('Última película:', personaje['ultima pelicula']);
})();
