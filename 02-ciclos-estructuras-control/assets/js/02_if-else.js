let a = 6;

// El if debe evaluar a un booleano, un true o false, pero hay excepciones que son:
// undefined, null, una asignación
if (a >= 10) {
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

const hoy = new Date();
// 0: Domingo, 1: Lunes, ... 6: Sábado
let dia = hoy.getDay();

console.log({ dia });

// Esto no regresa un booleano, esto regresa una asignación.
// La asignación regresa el valor de lo que estamos asignando, es decir, ahora dia vale 0.
// En las condiciones no se debe usar el igual.
if ((dia = 0)) {
  console.log('Domingo');
} else {
  console.log('No es domingo');
}

// El doble igual evalua si dia es igual al VALOR '1', pero sin importar el tipo, es decir 1 == '1'
// No se debe usar tampoco.
if (2 == '2') {
  console.log('Domingo');
} else {
  console.log('No es domingo');
}

// El triple igual evalua valores internos y tipado. Tanto el valor como el tipado debe ser el mismo.
// También se le llama operador idéntico.
// Es el que debe usarse SIEMPRE.
if (2 === '2') {
  console.log('Domingo');
} else {
  console.log('No es domingo');
}

// else if
dia = hoy.getDay();

if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');
} else if (dia === 2) {
  console.log('Martes');
} else {
  console.log('No es lunes, martes ni domingo...');
}
