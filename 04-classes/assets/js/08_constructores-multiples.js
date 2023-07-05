// Constructores múltiples
// JavaScript no soporta múltiples constructores, porque en JS una clase sólo puede tener un constructor,
// pero se puede hacer algo parecido.
class Persona {
  // La idea para hacer algo parecido a tener múltiples constructores, es que este método estático cree
  // una instancia de Persona utilizando el constructor, pero recibiendo un argumento diferente.
  // Manipulo el argumento para poder usar el constructor.
  //
  // Es muy útil para crear instancias de diferentes formas.
  // Al hacer peticiones HTTP y en función de la respuesta querramos crear alguna instancia.
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

// Necesitamos un constructor para esta firma
const nombre1 = 'José M.',
  apellido1 = 'Muñoz',
  pais1 = 'España';

// Necesitamos también otro constructor para esta firma
const adri = {
  nombre: 'Adriana',
  apellido: 'Acosta',
  pais: 'España',
};

const persona1 = new Persona(nombre1, apellido1, pais1);
// Usando nuestro método estático para crear una instancia.
const persona2 = Persona.porObjeto(adri);

persona1.getInfo();
persona2.getInfo();
