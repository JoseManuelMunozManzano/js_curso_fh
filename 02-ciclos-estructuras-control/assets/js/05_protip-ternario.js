// Operador ternario como return de funciones.
const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? '2 Dólares' : '10 Dólares');

console.log(elMayor(20, 15));
console.log(tieneMembresia(false));

// El operador ternario es muy útil cuando queremos generar arreglos con alguna condición implícita.
const amigo = false;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  // Función anónima autoinvocada.
  // Se puede ejecutar código de JS aquí dentro, siempre que regrese un valor.
  // La idea de esto es indicar que se puede colocar cualquier cosa dentro de un array, siempre
  // que genere un valor que formará parte del array.
  (() => 'Nick Fury')(),
  elMayor(10, 15),
];

console.log(amigosArr);

// Si tenemos más de una condición
const nota = 82.5; // A+ A B+
const grado =
  nota >= 95
    ? 'A+'
    : nota >= 90
    ? 'A'
    : nota >= 85
    ? 'B+'
    : nota >= 80
    ? 'B'
    : nota >= 75
    ? 'C+'
    : nota >= 70
    ? 'C'
    : 'F';

console.log({ nota, grado });
