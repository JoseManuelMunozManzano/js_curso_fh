// En JavaScript, todo lo que no sea un primitivo es un objeto.
// Un objeto literal es un objeto que tienen pares de valores (llave-valor)
// En otros lenguajes de programación se les llama diccionarios.
//
// Los valores de los objetos literales se escriben entre llaves, {llave1: valor1, llave2: valor2, ..., llaven: valorn}
//
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
(() => {
  const personaje = {
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

  // Borrar una propiedad de un objeto literal.
  delete personaje.edad;
  console.log(personaje);

  // Crear una nueva propiedad en el objeto durante la ejecución.
  personaje.casado = true;

  // Trabajar un objeto como si fuera un arreglo, es decir, nombre: 'Tony Stark' sea la posición 0, ...
  // En consola se ve:
  //     0: ['nombre', 'Tony Stark']
  //     1: ['codeName', 'Ironman']
  //     ...
  // Notar que se visualizan en el orden en que fueron creadas, no por orden alfabético.
  // Muy útil para obtener los valores de las claves, por ejemplo.
  const entriesPares = Object.entries(personaje);
  console.log(entriesPares);

  // Evitar que las propiedades del objeto puedan mutar.
  //
  // NOTA IMPORTANTE: Declarando el objeto como constante, lo que se impide es volver a ASIGNAR un valor a personaje,
  // es decir, cambiarle por completo la dirección de memoria.
  // En concreto se impide esto:
  // personaje = { nombre: 'Pepe' };
  //
  // Pero mutar las propiedades de un objeto es otra cosa.
  // Si yo muto nombre, por ejemplo:
  //    personaje.nombre = 'Peter Parker'
  // Lo que está mutando es la dirección de memoria a la que apunta la propiedad nombre, que NO es lo mismo que cambiar
  // la dirección de memoria a la que apunta el objeto personaje.
  // Esto es lo que queremos decir con mutar propiedades.
  // Y para evitar que mute:
  Object.freeze(personaje);

  // NO DA ERROR, pero NO añade la propiedad dinero al objeto literal personaje.
  personaje.dinero = 100000000000;
  // Tampoco va a permitir cambiar el valor de propiedades existentes.
  personaje.nombre = 'Peter Parker';

  // INCONVENIENTE: Object.freeze() congela las propiedades de primer nivel, las directas, pero NO congela las propiedades
  // que aparecen en un objeto o array dentro del objeto personaje, es decir, las de segundo o siguiente nivel.
  // Esto es posible:
  personaje.coords.lat = 1;
  personaje.trajes[1] = 'Mark IV';

  // Para congelar, por ejemplo, el array trajes.
  Object.freeze(personaje.trajes);
  personaje.trajes[1] = 'Mark XX';

  console.log(personaje);

  // Listado de todas las propiedades de un objeto.
  // Devuelve un array con los nombres de las propiedades en el orden en que fueron creadas.
  const propiedades = Object.getOwnPropertyNames(personaje);
  console.log(propiedades);

  // Listado de todos los valores de un objeto.
  // Devuelve un array con los valores de las propiedades en el orden en que fueron creadas.
  const valores = Object.values(personaje);
  console.log(valores);
})();
