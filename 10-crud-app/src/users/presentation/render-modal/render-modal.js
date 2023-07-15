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

  // Limpia la información del formulario
  form?.reset();
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

    // Usamos formData() para evitar tener que hacer document.querySelector de cada uno
    // de los elementos del formulario.
    // La idea es aliviar el trabajo, evitando muchas referencias.
    const formData = new FormData(form);

    // Los campos check, si se desactivan, no aparecen en el formData. Se añade.
    // Otra forma de solucionar esto es, en nuestro model, indicar que si no viene
    // isActive por defecto su valor es false.
    if (!formData.get('isActive')) {
      formData.append('isActive', 'off');
    }

    const userLike = {};

    // NOTA: iterator va a ser de esta forma: ['firstName', '']
    //   La key (propiedad name del html) y su value siempre como string
    // for (const iterator of formData) {}
    for (const [key, value] of formData) {
      // El balance es numérico
      if (key === 'balance') {
        userLike[key] = +value;
        continue;
      }

      if (key === 'isActive') {
        userLike[key] = value === 'on' ? true : false;
        continue;
      }

      userLike[key] = value;
    }

    // console.log(userLike);
    // TODO: guardar usuario

    hideModal();
  });

  element.append(modal);
};
