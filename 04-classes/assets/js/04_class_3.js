// Las propiedades y métodos estáticos nos permiten usar dichas propiedades y métodos sin necesidad de instanciar
// la clase.
class Persona {
  // To-do lo estático se suele indicar justo debajo del nombre de la clase.
  //
  // El guión bajo no tiene nada que ver con hacerla estática o no.
  // Es la palabra reservada static la que indica que esta propiedad es estática.
  // En este ejercicio, esta propiedad me va a servir para saber cuántas instancias de esta clase he creado.
  static _conteo = 0;

  // get estático.
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  // Método estático.
  // No podemos hacer referencia a las propiedades de la instancia (las de abajo) porque no obtendremos
  // ningún valor.
  static mensaje() {
    // Esto devuelve undefined porque no hay instancia, luego el this no se refiere a nada.
    // En otros lenguajes de programación esto daría error.
    console.log(this.nombre);

    console.log('Hola a todos, soy un método estático');
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre = ' Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    // No se usa this porque eso haría referencia a la instancia y esta propiedad es de la clase.
    // Se accede a esta propiedad usando el nombre de la clase.
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
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
// Vemos que no aparecen las propiedades estáticas (si aparecen en el prototype)
console.log(spiderman);

const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// Cambiar valor y uso de propiedades estáticas. Se usa el nombre de la clase.
// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
// Uso de get estático.
console.log(Persona.conteo);
// Uso de método estático.
Persona.mensaje();

// Esto no es aconsejable, pero se pueden definir propiedades estáticas fuera de la clase.
// Consiste en trabajar con mi clase Persona (que es al final un objeto) como un objeto literal.
// Lo aconsejable es definir todas las propiedades/métodos dentro de la clase, para dejar claro COMO es mi clase.
Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);
