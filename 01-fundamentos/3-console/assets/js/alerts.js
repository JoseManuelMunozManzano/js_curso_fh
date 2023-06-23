// Aquí tenemos acceso a la variable miNombre.
// Para que funcione, este script debe estar cargado DESPUES de app.js
// En caso contrario, indicará que miNombre no está definido.
console.log(miNombre);

// Tres tipos de forma de ingreso de usuario.
// Ya no se usan porque hay librerías más bonitas y con muchas funcionalidad.
// Pero es importante conocerlas.
//
// alert, prompt y confirm son instrucciones bloqueantes. Hasta que no respondamos no continuará la ejecución
// de la aplicación. Son métodos que vienen dentro del objeto window, es decir, necesitan del navegador
// para que funcione.
// Ejecutando este código usando Node NO funcionaría. Y, aunque no es lo mismo, en Node existe global,
// que NO es ejecutable en el navegador porque en los navegadores no existe.
//
alert('Hola Mundo');

// prompt retorna un string con lo que sea que el usuario escriba.
// Si no se informa nada se devuelve el string vacío, ''
// Si se pulsa cancelar se devuelve null (null NO es undefined)
let nombre = prompt('¿Cuál es tu nombre?', 'Sin Nombre');
console.log(nombre);
console.log('****' + nombre + '****');

// confirm retorna un booleano (true/false) con la selección hecha por el usuario.
const seleccion = confirm('¿Está seguro de borrar esto?');
console.log(seleccion);
