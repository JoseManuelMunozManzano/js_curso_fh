// Arhivo de barril
// Es un archivo que TIENE que llamarse index.js y que aglutina todas las exportaciones del directorio.
//
// Ahora, donde importemos alguna de estas funciones, haremos referencia solo a ./usecases, porque por defecto ya tiene
// en cuenta el fichero index.js, y solo importaremos de un sitio.
export { crearDeck } from './crear-deck';
export { pedirCarta } from './pedir-carta';
export { turnoComputadora } from './turno-computadora';
export { valorCarta } from './valor-carta';
