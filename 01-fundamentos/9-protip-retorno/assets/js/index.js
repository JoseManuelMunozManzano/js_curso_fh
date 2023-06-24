(() => {
  // Desde ES6, si el nombre de la propiedad es exactamente el mismo que el nombre de la variable, no
  // hace falta especificarlo dos veces (nombre: nombre,)
  // Solo indicando el nombre de la propiedad JavaScript ya sabe que se le asigna el valor de la variable
  // que tiene el mismo nombre que la propiedad.
  //
  // Cuando se hace return de un objeto en una línea sin indicar el return, hay que envolver el objeto
  // entre paréntesis para que JavaScript no piense que las llaves son el cuerpo de la función.
  const crearPersona = (nombre, apellido) => ({ nombre, apellido });

  const persona = crearPersona('José Manuel', 'Muñoz Manzano');
  console.log(persona);

  // Ya hemos visto el objeto arguments anteriormente, para recuperar todos los parámetros con los
  // que se ha llamado a la función independientemente de que aparezcan como argumentos o no.
  function imprimeArgumentos() {
    console.log(arguments);
  }

  imprimeArgumentos(10, true, false, 'Adri', 'Hola');

  // Esto NO se puede hacer en una función de flecha. El objeto arguments NO EXISTE en funciones de flecha.
  // Para que una función de flecha pueda trabajar con una cantidad variable de parámetros se puede usar
  // el parámetro rest (...) para obtenerlos.
  // Las cosas que tenemos que tener en cuenta para trabajar con el parámetro rest son las siguientes:
  //    - El parámetro rest tiene que ser el último.
  //    - Los parámetros que vayan antes del parámetro rest no van en el parámetro rest, son independientes.
  const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
  };

  const argumentos = imprimeArgumentos2(10, true, false, 'Adri', 'Hola');
  console.log({ argumentos });

  // Obtener cada uno de los argumentos del parámetro rest en una variable.
  // No olvidar que el valor 10 va al parámetro edad y no lo devolvemos.
  const [casado, vivo, nombre1, saludo] = imprimeArgumentos2(10, true, false, 'Adri', 'Hola');
  console.log({ casado, vivo, nombre1, saludo });

  // Obteniendo solo alguno de los valores devueltos como array.
  const [, vivo2, , saludo2] = imprimeArgumentos2(10, true, false, 'Adri', 'Hola');
  console.log({ vivo2, saludo2 });

  // Obteniendo valores devueltos cuando es objeto
  const { nombre, apellido } = crearPersona('José Manuel', 'Muñoz Manzano');
  console.log(nombre, apellido);

  // Obteniendo solo alguno de los valores devueltos cuando es objeto y cambiando el nombre
  const { apellido: nuevoApellido } = crearPersona('José Manuel', 'Muñoz Manzano');
  console.log(nuevoApellido);

  //? Desestructuración de argumentos
  // En la función, entre llaves, se indica, de un objeto, las propiedades que vamos a usar.
  // Con eso evitamos escribir personaje.nombre,... y solo hace falta escribir la variable nombre.
  // Además, si alguna de las propiedades no viene, podemos poner un valor por defecto.
  const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  };

  // Sin desestructuración
  // const imprimePropiedades = (personaje) => {

  const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
    // Sin desestructuración ni valores por defecto, habría que hacer esto.
    // edad = edad || 0;

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
  };

  imprimePropiedades(tony);
})();
