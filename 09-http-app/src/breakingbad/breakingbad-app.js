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

  // Faltaba Devolver, del array, el objeto 0.
  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
  element.innerHTML = 'Loading...';

  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next Quote';

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
  };

  fetchQuote().then(renderQuote);
};
