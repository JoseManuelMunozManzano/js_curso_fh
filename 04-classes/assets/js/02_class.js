// Las clases en JavaScript ahora se parecen bastante a las clases en Java, pero tienen particularidades
// que las hacen únicas, no siempre para bueno.

// Todas las clases por defecto ya vienen con 'use strict' implementado.
// No hace falta ni indicarlo.
class Persona {
  // Las definiciones de las propiedades de la clase pueden ir aquí.
  nombre = '';
  codigo = '';
  frase = '';

  // El constructor es el único método que retorna una instancia de un objeto y NO RETORNA undefined.
  // Se pueden inicializar los valores de las propiedades en el constructor.
  //
  // Se pueden indicar valores por defecto para evitar problemas si quieren crear una instancia sin mandar
  // alguno de los parámetros.
  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    // También podemos indicar un error si se quiere instanciar una Persona sin mandar el argumento nombre.
    // Esto NO lo hace JS automáticamente.
    if (!nombre) throw Error('Necesitamos el nombre');

    // Para hacer referencia a la propiedad codigo es NECESARIO indicar la palabra reservada this
    // En caso contrario JS creerá que es otra variable dentro del scope del constructor, en este caso.
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}

// Crear nueva instancia de la clase.
// Notar que estamos llamando sin argumentos. JS NO falla y toma esas propiedades con valor undefined.
// Esto no me gusta, pero es lo que hay.
const spiderman = new Persona();
console.log(spiderman);

// Nueva instancia.
const jm = new Persona('José Manuel', 'JM', 'Siempre estudiando!');
console.log(jm);
