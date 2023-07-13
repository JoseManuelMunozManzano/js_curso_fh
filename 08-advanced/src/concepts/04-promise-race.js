/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
  element.innerHTML = 'Loading...';

  const renderValue = (value) => {
    element.innerHTML = value;
  };

  // Si tenemos varias promesas y solo queremos el resultado de la primera promesa que se resuelva más rápido
  // podemos usar Promise.race([])
  // Ponemos todas las promesas a competir a ver cual se resuelve antes.
  // Casos de uso: Si tenemos diferentes endpoints que traigan la misma información los podemos poner a competir
  // para ver cual trae antes la información.
  // Si tenemos dos storage y uno de ellos en la nube porque es un espejo podemos ver cual trae la info más rápido.
  Promise.race([
    slowPromise(),
    mediumPromise(),
    mediumPromise(),
    fastPromise(),
    mediumPromise(),
    fastPromise(),
    slowPromise(),
  ]).then(renderValue);
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
