const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Aquaman'];

console.warn('For Tradicional');
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn('For in');
for (let i in heroes) {
  console.log(heroes[i]);
}

// for of se utiliza para tener acceso a valores de objetos o arrays de manera más sencilla.
console.warn('For of');
for (let heroe of heroes) {
  console.log(heroe);
}
