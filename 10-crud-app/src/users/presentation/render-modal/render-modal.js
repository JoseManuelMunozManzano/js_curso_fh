// SOLO EN VITE
// Para poder importar un fichero html hay que indicar ?raw
import modalHtml from './render-modal.html?raw';
import './render-modal.css';

// Creamos esta variable porque vamos a necesitar hacer referencia al modal en varios lugares.
let modal, form;

// TODO: cargar usuario por id
export const showModal = () => {
  // Si existe modal elimina la clase hide-modal
  modal?.classList.remove('hide-modal');
};

export const hideModal = () => {
  modal?.classList.add('hide-modal');

  // TODO: Reset del formulario
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderModal = (element) => {
  if (modal) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';
  form = modal.querySelector('form');

  modal.addEventListener('click', (ev) => {
    if (ev.target.className !== 'modal-container') return;

    hideModal();
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log('Formulario enviado');
  });

  element.append(modal);
};
