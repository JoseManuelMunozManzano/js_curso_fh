// Un store es un espacio especial que va a tener centralizada la información.
// En vez de ir recogiendo los valores del DOM, guardaré estos valores en el store.
// Se pueden usar librerías para esto, como Redux o Pinia, pero para aprender más JavaScript,
// lo vamos a hacer todo en Vanilla JS.
//
// Otra cosa importante del store es que no está amarrado a nuestro HTML. Si el día de mañana
// quisiéramos usar React podríamos usar este mismo store tal y como está sin ningún problema.
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
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
    new Todo('Piedra del tiempo'),
    new Todo('Piedra del poder'),
    new Todo('Piedra de la realidad'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore 🥑');
};

const loadStore = () => {
  throw new Error('Not implemented');
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      // Para no regresar una referencia al objeto puedo utilizar el spread operator.
      // Con este devuelve un objeto nuevo que tiene todos los valores de state.todos.
      return { ...state.todos };
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

// Hay dos opciones, o bien recibimos el todo ya completo y solo insertamos o recibimos la descripción
// y montamos el todo. Vamos a coger la última opción.
/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');

  state.todos.push(new Todo(description));
};

/**
 * Para ir cambiando el todo.done de true a false y viceversa.
 * @param {String} todoId Es el ID del todo
 */
const toggleTodo = (todoId) => {
  // Este map no es muy eficiente.
  // Sería más eficiente usar un find, cambiarlo y luego insertarlo en la posición en la que se encontró.
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  if (!Object.keys(Filters).includes(newFilter)) {
    throw new Error(`Option ${newFilter} is not valid`);
  }

  state.filter = newFilter;
};

// Saber el filtro seleccionado
// No queremos exponer al mundo exterior el state porque todos los objetos pasan por referencia y
// cualquier persona podría modificarlo. Cualquier acceso a nuestro state del store tiene que pasar
// por alguna de las funciones controladas por mi.
const getCurrentFilter = () => {
  // Con este string no hay problema de que nos cambien el estado.
  // También podría haberse indicado para romper la relación: return state.filter.toString();
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
