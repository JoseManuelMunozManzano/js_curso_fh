// Extends Clases y Subclases (Herencia)
class Persona {
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
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

// Vamos a manejar lo que hace único a Heroe y vamos a extender de la clase Persona para manejar
// lo demás.
class Heroe extends Persona {
  clan = 'Sin clan';

  // Si implemento el constructor entonces tenemos que llamar al constructor del padre.
  // Si no lo implemento, por defecto ya se le llama.
  constructor(nombre, codigo, frase) {
    // super() hace referencia a la clase que extiende directamente, en este caso Persona.
    // Debe aparecer antes de cualquier propiedad/método que use this. Si no da error.
    super(nombre, codigo, frase);

    this.clan = 'Los Avengers';
  }

  // Sobreescribiendo un método existente en la clase padre.
  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);

    // Para llamar al método del padre se usa super de nuevo.
    super.quienSoy();
  }
}

// Tenemos acceso a todas las propiedades y métodos de Persona a partir de la clase Heroe.
// const spiderman = new Heroe();
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
console.log(spiderman);
spiderman.quienSoy();
