// SOLO EN VITE
// Para poder importar un fichero html hay que indicar ?raw
import modalHtml from './render-modal.html?raw';
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';

import './render-modal.css';

// Creamos esta variable porque vamos a necesitar hacer referencia al modal en varios lugares.
let modal, form;
// Para saber si hubo información cargada o se ha pulsado el botón +
let loadedUser = {};

/**
 *
 * @param {String|Number} id
 */
export const showModal = async (id) => {
  // Si existe modal elimina la clase hide-modal
  modal?.classList.remove('hide-modal');
  loadedUser = {};

  if (!id) return;
  const user = await getUserById(id);
  setFormValues(user);
};

export const hideModal = () => {
  modal?.classList.add('hide-modal');

  // Limpia la información del formulario
  form?.reset();
};

/**
 * Establecemos los valores del usuario
 * @param {User} user
 */
const setFormValues = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;
  loadedUser = user;
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';
  form = modal.querySelector('form');

  modal.addEventListener('click', (ev) => {
    if (ev.target.className !== 'modal-container') return;

    hideModal();
  });

  form.addEventListener('submit', async (ev) => {
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

    const userLike = { ...loadedUser };

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
    await callback(userLike);

    hideModal();
  });

  element.append(modal);
};
