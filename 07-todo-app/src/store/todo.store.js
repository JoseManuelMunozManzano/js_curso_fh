// Un store es un espacio especial que va a tener centralizada la información.
// En vez de ir recogiendo los valores del DOM, guardaré estos valores en el store.
// Se pueden usar librerías para esto, como Redux o Pinia, pero para aprender más JavaScript,
// lo vamos a hacer todo en Vanilla JS.
//
// Otra idea sería usar la biblioteca RxJS y tratar estos objetos como objetos reactivos, es decir,
// sabríamos cuando cambian.

import { Todo } from '../todos/models/todo.model';

// Enumeración con los tipos de filtro, para tenerlas centralizadas.
const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

// Como va a lucir el estado global de mi app.
const state = {
  todos: [new Todo('Piedra del alma'), new Todo('Piedra del infinito'), new Todo('Piedra del tiempo')],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore 🥑');
};

export default {
  initStore,
};
