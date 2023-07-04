// Estos dos objetos no tienen ninguna obligación de tener las mismas propiedades.
// Incluso podría haberme equivocado, poniendo en el segundo objeto la propiedad nombr en vez de nombre.
// Es muy fácil cometer errores, pero se puede hacer.
const jm = {
  nombre: 'José Manuel',
  edad: 44,
  // Si ahora nos piden crear un método para imprimir los valores que están dentro de esos objetos veremos
  // que esto falla diciendo que nombre no está definido.
  // Arriba existe pero en la función no porque no estén en el mismo scope.
  // Hay que ponerlo como this.nombre, usando la palabra reservada this para hacer referencia al mismo objeto.
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const adri = {
  nombre: 'Adriana',
  edad: 41,
  // Tenemos que copiar aquí el mismo método!!!
  // Si hubiera más objetos tendríamos que copiarlo a cada uno de ellos!!!
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

jm.imprimir();
adri.imprimir();

// Antes de ES6 se implementó una alternativa para crear objetos que tuvieran las mismas propiedades y métodos.
// Esto era algo muy parecido a crear clases en POO.
// JavaScript implementó, hace muchos años, esta forma de hacerlo:
//
// El nombre de la función se indica con la primera letra mayúsculas, lo que indica a los programadores que nos
// va a servir para crear instancias (no es obligatorio, pero entonces era una buena práctica)
//
// El inconveniente de todo esto es que a no ser que se indica de forma clara que la función Persona es para
// crear instancias con la palabra reservada new, otros programadores no van a tener ni idea de que usar
// el new es obligatorio.
//
// Este ejemplo todavía se complicaría aun más si fuera necesario extender propiedades, añadirlas, incluir
// propiedades estáticas o privadas.
//
//! NO SE RECOMIENDA TRABAJAR DE ESTA MANERA A NO SER QUE SE BUSQUE COMPATIBILIDAD CON NAVEGADORES MUY ANTIGUOS!
function Persona(nombre, edad) {
  console.log('Se ejecutó esta línea');

  // this hace referencia al objeto, a la función.
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}

// Con la palabra reservada new se pueden crear nuevas instancias de Persona.
const tania = new Persona('Tania', 42);
// console.log(tania);
tania.imprimir();

const ferney = new Persona('Ferney', 56);
ferney.imprimir();
