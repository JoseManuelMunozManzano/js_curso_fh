import './render-add-button.css';

// IMPORTANTE!!!
// Este botón no es muy reutilizable debido al CSS, que va a generar el botón siempre en el mismo sitio.
// Este botón tampoco sería reutilizable si dentro del evento click indicásemos que hacer.
//
// Si queremos que el botón sea reutilizable, además del problema CSS, podemos requerir un segundo argumento,
// el callback, para ejecutar lo que queramos cuando se pulse click.

// Así que aunque realmente no va a ser reutilizable, se deja así para mostrar como sería un botón reutilizable.

/**
 *
 * @param {HTMLDivElement} element
 * @param {() => void} callback
 */
export const renderAddButton = (element, callback) => {
  // fab es floating action button
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');

  element.append(fabButton);

  // Delegamos el evento click al padre. El padre me indica la acción a realizar.
  fabButton.addEventListener('click', () => {
    if (!callback) return;
    callback();
  });
};
