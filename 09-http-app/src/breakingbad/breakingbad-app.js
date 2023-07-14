// Esto es un componente, una pieza reutilizable de mi aplicación.
// Aquí vamos a renderizar nuestra aplicación.

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = (element) => {
  document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
  element.innerHTML = 'Loading...';
};
