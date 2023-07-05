// Propiedades y métodos privados

class Rectangulo {
  // Para evitar cambiar este valor por fuera de esta clase es para lo que queremos usar propiedades privadas.
  // Para hacer una propiedad privada se usa #
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;

    // Solo se puede llamar a métodos privados dentro de la clase.
    this.#calcularArea();
  }

  // También se pueden crear métodos privados usando #
  #calcularArea() {
    console.log(this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10, 15);
// Con las propiedades privadas queremos evitar hacer esto.
// Da error, pero si la propiedad no fuera privada, podría hacerse.
// rectangulo.#area = 100;
//
// Tampoco podemos llamar a métodos privados.
//console.log(rectangulo.#calcularArea());

console.log(rectangulo);
