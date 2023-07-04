// Según las buenas prácticas, el orden de declaraciones en una clase es el siguiente:
//  1. Propiedades y métodos estáticos.
//  2. Propiedades de la clase.
//  3. Constructor.
//  4. Sets y Gets.
//  5. Métodos.
//
// También hay personas que acostumbran a poner todo lo que es privado al final de la clase.
class Persona {
  comida = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    // La declaración de las propiedades de la clase se pueden dejar directamente en el constructor.
    //
    // Pero si declaramos fuera del constructor una propiedad nueva, no nos olvidemos que si no la
    // inicializamos ni la recogemos en el constructor como argumento, entonces su valor es undefined.
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  // Set
  // Establece un valor.
  // Es como si fuera un método, pero indicando set antes del nombre.
  // Es obligatorio indicar el argumento que recibe y usualmente debería recibir SOLO UN argumento.
  // Para que quede claro que quiero establecer un valor, como parte del nombre del set indico set.
  // No puede tener el mismo nombre de la propiedad que queremos establecer, porque si no crearía
  // un ciclo infinito.
  //
  // Una convención que usan muchos es llamar a la propiedad
  //    _comida
  // para así poder llamar al set:
  // set comida(comida) {this._comida = comida;}
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  // Get
  // Recupera una propiedad.
  // No admite argumentos.
  // Es bueno devolver algo.
  get getComidaFavorita() {
    // No usar aquí dentro la llamada recursiva getComidaFavorita!
    // Es un bucle que acaba dando error.
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Métodos
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice ${this.frase}`);
  }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
spiderman.quienSoy();

// Uso del set.
// Es como si fuera cualquier otra propiedad de mi clase.
// No se le llama con paréntesis ya que eso sería un método.
// Se le asigna un valor como a cualquier otra propiedad.
spiderman.setComidaFavorita = 'El pastel de cereza de la tía May';

// Otra cosa que no me gusta de JavaScript es que se pueden añadir propiedades nuevas fuera de la
// declaración de la clase, de esta forma, y funciona.
spiderman.nemesis = 'Duende Verde';

// Uso del get.
// Es como si fuera cualquier otra propiedad de mi clase.
console.log(spiderman.getComidaFavorita);

console.log(spiderman);
