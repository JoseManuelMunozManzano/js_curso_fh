// Singleton: Es una clase de la que solo vamos a necesitar una instancia global en toda la aplicación.
//     Da igual cuantas instancias cree, siempre va a retornar la misma instancia.
//     Es útil con bases de datos.
class Singleton {
  // Por defecto, cuando se define una variable y no se le asigna valor, este es undefined.
  static #instancia;
  nombre = '';

  // Si no tengo instancia creada, la creo con ese nombre.
  // Si ya tengo instancia creada, no importa el nombre que me manden, yo devuelvo el nombre original
  //    con el que se creó la instancia.
  constructor(nombre = '') {
    if (!Singleton.#instancia) {
      Singleton.#instancia = this;
      this.nombre = nombre;

      // Un constructor puede regresar una instancia de la clase.
      // Por defecto ya lo hace pero me hace falta ponerlo para salir.
      return this;
    }

    // Devolvemos la primera instancia que creamos.
    return Singleton.#instancia;
  }
}

// Todas estas instancias apuntan al mismo objeto, a la misma dirección de memoria.
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
