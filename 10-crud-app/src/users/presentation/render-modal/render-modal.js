// SOLO EN VITE
// Para poder importar un fichero html hay que indicar ?raw
import modalHtml from './render-modal.html?raw';
import './render-modal.css';

// Creamos esta variable porque vamos a necesitar hacer referencia al modal en varios lugares.
let modal;

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderModal = (element) => {
  if (modal) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';

  element.append(modal);
};
