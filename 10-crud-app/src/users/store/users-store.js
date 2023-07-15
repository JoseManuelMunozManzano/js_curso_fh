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
  throw new Error('Not implemented');
};

const onUserChanged = () => {
  throw new Error('Not implemented');
};

const reloadPage = async () => {
  throw new Error('Not implemented');
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  // Como users es un objeto, para no mandar la referencia usamos el operador spread.
  getUsers: () => [...state.users],

  // Como currentPage es un primitivo NO PASA POR REFERENCIA, pasa por valor.
  getCurrentPage: () => state.currentPage,
};