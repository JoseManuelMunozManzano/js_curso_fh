// No se exporta el store porque no queremos que nadie pueda manipularlo directamente desde fuera.
const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new Error('Not implemented');
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
  getUser: () => [...state.users],

  // Como currentPage es un primitivo NO PASA POR REFERENCIA, pasa por valor.
  getCurrentPage: () => state.currentPage,
};
