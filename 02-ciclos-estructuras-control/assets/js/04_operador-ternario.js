/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web para consultar si está abierto hoy
const dia = 1; // 0: domingo... 1: lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// Con if
// if (dia === 0 || dia === 6) {
// Aquí un tip
if ([0, 6].includes(dia)) {
  console.log('Fin de semana');
  horaApertura = 9;
} else {
  console.log('Día de semana');
  horaApertura = 11;
}

//? Con Operador ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// Con if
if (horaActual >= horaApertura) {
  mensaje = 'Está abierto';
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

//? Con Operador ternario
mensaje = horaActual >= horaApertura ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
