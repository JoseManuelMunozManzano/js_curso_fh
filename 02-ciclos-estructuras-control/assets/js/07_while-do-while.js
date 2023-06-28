const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// Para que se ejecute el while, su condición debe ser verdadera.
console.warn('While');
while (i < carros.length) {
  console.log(carros[i]);
  i++;
}

console.log('\n');

// Son consideradas false: undefined, null y false
// Así que esto también funciona, ya que carros[4] es undefined.
i = 0;
while (carros[i]) {
  if (i === 1) {
    i++;
    continue;
  }

  if (i === 3) break;

  console.log(carros[i]);
  i++;
}

console.warn('Do While');
// Se ejecuta el bloque interno por lo menos una vez.
i = 0;
do {
  console.log(carros[i]);
  i++;
} while (carros[i]);
