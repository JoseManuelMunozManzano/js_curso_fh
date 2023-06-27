const regresaTrue = () => {
  console.log('Regresa true');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
};

console.warn('Not o la negación !');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

// true si todas las condiciones son true
console.warn('And &&');
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

// && también dispara acciones si la primera condición se cumple
// Pero si la primera condición ya no se cumple se hace un cortocircuito y no se evalúa la segunda condición
// porque JavaScript ya sabe que es falso.
console.log('==========');
// En el ejemplo, regresaTrue() ni se ejecuta porque regresaFalse() YA ES FALSE.
console.log(regresaFalse() && regresaTrue()); // false
// En el ejemplo, regresaFalse() se ejecuta porque regresaTrue() es true.
console.log(regresaTrue() && regresaFalse()); // false

// Este código es perfectamente posible y muy común.
// Estamos diciendo a JS que ejecute la segunda condición solo si la primera es verdadera.
console.log('===== && =====');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false); // false

// Por tanto, con AND, un tip sería poner primero la condición que es más posible que sea false, para que JavaScript
// no tenga que evaluar la segunda condición.

// true si alguna condición es true
console.warn('OR ||');
console.log(true || false); // true
console.log(false || false); // false

// Si la primera condición regresa true ya NO HACE FALTA evaluar la segunda condición porque JS ya sabe
// que el resultado será true. De nuevo se hace el cortocircuito.
console.log(regresaTrue() || regresaFalse()); // true

console.log('4 condiciones', true || true || true || false); // true

// Por tanto, con OR, un tip sería poner primero la condición que es más posible que sea true, para que JavaScript
// no tenga que evaluar la segunda condición.
// O poner la primera condición a false si queremos que ejecute siempre la segunda.

console.warn('Asignaciones');

const soyUndefined = undefined;
const soynull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // 150
console.log({ a1 });

const a2 = false && 'Hola Mundo' && 150; // false
console.log({ a2 });

const a3 = 'Hola' && 'Mundo'; // Mundo
console.log({ a3 });

const a4 = 'Hola' && 'Mundo' && soyFalso && true; // false
console.log({ a4 });

const a5 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
console.log({ a5 });

const a6 = soyFalso || soyUndefined || soynull || 'Ya no soy falso de nuevo' || true; // Ya no soy falso de nuevo
console.log({ a6 });

const a7 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // true (el de la función regresaTrue())
console.log({ a7 });

// La lógica booleana, al final, donde más se usa es para evaluar un if.
// No debería haber más de 3 condiciones. Si hay más, habría que simplificarlo.
// Usar paréntesis en caso de duda.
if (true || true || true || false) {
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}
