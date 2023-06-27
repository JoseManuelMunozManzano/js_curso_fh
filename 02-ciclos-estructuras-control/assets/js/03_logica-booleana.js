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
