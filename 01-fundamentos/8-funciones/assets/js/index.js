// El objetivo principal de una función es centralizar la lógica de un procedimiento que podemos ejecutar
// varias veces.
// La diferencia de una función y un método, es que un método es una función que se encuentra dentro de
// un objeto.
//
// Indicar que JavaScript, cuando va a ejecutar este fichero index.js, lo primero que hace es un barrido
// de todo el archivo y saca las referencias de donde están las inicializaciones de variables y funciones.
// En un segundo barrido es cuando ya hace la ejecución.
//
// Pero es buena práctica que las funciones estén declaradas antes de la llamada a las mismas.

(() => {
  //? Primera forma de definir funciones.
  // Usando la palabra clave function.
  // Es la forma tradicional de crear funciones, pero no se recomienda del todo su uso.
  //
  // Vemos que tiene un argumento llamado nombre.
  //
  // Las funciones que usan la palabra clave function para definirlas, internamente cuando se
  // ejecutan tienen un objeto implícito llamado arguments, donde se pueden recuperar todos los
  // parámetros enviados a la función.
  function saludar(nombre) {
    console.log(arguments);
    console.log('Saludar - Hola ' + nombre);
  }

  // Problema del uso de function.
  // Si ahora creo una variable usando var que se llame como la función, el programa falla porque
  // hemos cambiado la dirección de memoria a la que apunta saludar, y ahora NO es una función.
  // Cuando abajo se llama a la función saludar() falla.
  //
  // var saludar = 123;

  // Si declaramos saludar con let nos da otro error, pero diferente, indicando que saludar ya fué
  // declarado.
  // let saludar = 123;

  // Llamadas a la función.
  // Se le pasa el argumento nombre. Si no se envía en la función saludar nombre sería undefined.
  // Vemos que el último ejemplo pasa otros parámetros además del nombre. Todos son recogidos por el
  // objeto arguments.
  saludar();
  saludar('Adri');
  saludar('José Manuel', 44, true, 'España');

  //? Segunda forma de definir funciones.
  // Usando una función anónima.
  // Al usar la palabra clave function también es una forma tradicional de usar una función.
  // Se llama así porque a la derecha de la función no aparece el nombre, pero vemos que la función
  // es asignada a una constante, por lo que la función va a responder al nombre de saludar2.
  const saludar2 = function (nombre) {
    console.log('Saludar2 - Hola ' + nombre);
  };

  // ¿En qué consiste el beneficio de usar funciones anónimas vs funciones tradicionales?
  // Al asignarla a una constante no hay manera de que esa constante pueda ser reutilizada en la
  // aplicación.

  // Llamadas a la función anónima.
  saludar2();
  saludar2('Adri');
  saludar2('José Manuel');

  //? Tercera forma de definir funciones.
  // Usando funciones de flecha o lambda functions.
  // Introducidas en el ES6 o JavaScript del 2015.
  // Es la forma recomendada de crear funciones. Son más eficientes que las funciones tradicionales y
  // evitan los problemas del objeto this.
  const saludarFlecha = (nombre) => {
    console.log('SaludarFlecha - Hola ' + nombre);
  };

  // Llamadas a la función de flecha.
  saludarFlecha();
  saludarFlecha('Adri');
  saludarFlecha('José Manuel');
})();
