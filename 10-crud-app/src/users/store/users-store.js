import { User } from '../models/user';
import { loadUsersByPage } from '../use-cases/load-users-by-page';

// No se exporta el store porque no queremos que nadie pueda manipularlo directamente desde fuera.
const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
};

const loadPreviousPage = async () => {
  if (state.currentPage === 1) return;

  const users = await loadUsersByPage(state.currentPage - 1);

  state.currentPage -= 1;
  state.users = users;
};

/**
 *
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {
  let wasFound = false;

  state.users = state.users.map((user) => {
    if (user.id === updatedUser.id) {
      wasFound = true;
      return updatedUser;
    }
    return user;
  });

  // Si tenemos menos de 10 usuarios y no lo encontramos lo insertamos directamente
  // porque sabemos que no lo tenemos.
  if (state.users.length < 10 && !wasFound) {
    state.users.push(updatedUser);
  }
};

// Si eliminamos un registro no queremos que se vean 9 registros (salvo que de verdad queden 9 registros en BD)
// Queremos cargar de nuevo para que se vean siempre 10 registros.
const reloadPage = async () => {
  const users = await loadUsersByPage(state.currentPage);
  if (users.length === 0 && state.currentPage !== 1) {
    await loadPreviousPage();
    return;
  }

  state.users = users;
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  // Como users es un objeto, para no mandar la referencia usamos el operador spread.
  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  // Como currentPage es un primitivo NO PASA POR REFERENCIA, pasa por valor.
  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};
