// Esto es un componente, una pieza reutilizable de mi aplicación.
// Aquí vamos a renderizar nuestra aplicación.

/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  // Esta es la respuesta completa, con el body, los headers, el status...
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');

  // Este es el body de la petición.
  const data = await res.json();
  console.log(data);

  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
  element.innerHTML = 'Loading...';

  const quote = await fetchQuote();
  element.innerHTML = 'Tenemos data!!';
};
