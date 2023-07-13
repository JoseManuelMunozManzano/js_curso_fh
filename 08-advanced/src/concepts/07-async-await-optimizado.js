/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const asyncAwaitOptimizadoComponent = async (element) => {
  // Va a tardar en mostrar los resultados 4,5 sg.
  console.time('Start');
  const value1 = await slowPromise();
  const value2 = await mediumPromise();
  const value3 = await fastPromise();

  element.innerHTML = `
  value1: ${value1} <br>
  value2: ${value2} <br>
  value3: ${value3} <br>
  `;
  console.timeEnd('Start');

  // Pero cada una de las promesas es independiente de las otras.
  // No tiene sentido que se ejecuten en secuencia ralentizando mi programa.
  // Para resolver esto podemos usar de nuevo: Promise.all([])
  // Y como regresa una promesa indicamos el await para que espere a obtener los resultados.
  // Promise.all espera hasta que tiene el resultado de todas las promesas.
  // Vemos ahora en consola que el tiempo de espera es el mismo que la promesa que mayor timeout tiene,
  // es decir, 2 sg.
  // Y no olvidar que siempre se puede envolver en un try-catch para manejar las excepciones (los rejects)
  console.time('Start_All');

  const [valueA1, valueA2, valueA3] = await Promise.all([slowPromise(), mediumPromise(), fastPromise()]);

  element.innerHTML = `
  valueA1: ${valueA1} <br>
  valueA2: ${valueA2} <br>
  valueA3: ${valueA3} <br>
  `;
  console.timeEnd('Start_All');
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow Promise');
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Medium Promise');
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fast Promise');
    }, 1000);
  });
