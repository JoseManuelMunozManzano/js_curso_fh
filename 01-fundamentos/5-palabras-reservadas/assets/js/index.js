// Otra recomendación a la hora de crear nombres de archivos es con palabras separadas con guión.
// Ejemplo de nombre (en vez de index.js que también es recomendado) sería palabras-reservadas.js
// No indicar números, por ejemplo: 5-palabras-reservadas.js
// Aquí lo hago en las carpetas para saber el orden de estudio.
//
// https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0
//
// Palabras reservadas son palabras que tienen un uso específico. Solo deben usarse para lo que fueron creadas.
// Ver documento palabras_reservadas.pdf
(() => {
  // Error de sintaxis. No se puede crear una variable con el nombre const porque JavaScript la tiene reservada
  // para crear constantes.
  //
  // let const = 123;

  // Estas variables si son permitidas, pero no es buena práctica usar variables que contengan caracteres especiales.
  // No usar la ñ como nombres de variables.
  const π = Math.PI;
  console.log(π);

  let 〱〱 = 2;

  // Caracteres permitidos.
  // $, _, números pero no como primera letra de la variable.
  let objeto$;
  let _a;
  let _;
  let objeto123;
  let $;

  // No se pueden iniciar las variables con números y no pueden contener puntos.
  // En JS un punto indica que se quiere acceder a una propiedad o método de ese objeto.
  // let 1a;
  // let a.b;

  // Si queremos indicar que un precio es 99.99 hacerlo con _
  // let precio99.99;
  let precio99_99;
})();
