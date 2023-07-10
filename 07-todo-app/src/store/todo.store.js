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
  todos: [new Todo('Piedra del alma'), new Todo('Piedra del infinito'), new Todo('Piedra del tiempo')],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore 🥑');
};

const loadStore = () => {
  throw new Error('Not implemented');
};

// Hay dos opciones, o bien recibimos el todo ya completo y solo insertamos o recibimos la descripción
// y montamos el todo. Vamos a coger la última opción.
/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  throw new Error('Not implemented');
};

/**
 * Para ir cambiando el todo.done de true a false y viceversa.
 * @param {String} todoId Es el ID del todo
 */
const toggleTodo = (todoId) => {
  throw new Error('Not implemented');
};

const deleteTodo = (todoId) => {
  throw new Error('Not implemented');
};

const deleteCompleted = () => {
  throw new Error('Not implemented');
};

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented');
};

// Saber el filtro seleccionado
// No queremos exponer al mundo exterior el state porque todos los objetos pasan por referencia y
// cualquier persona podría modificarlo. Cualquier acceso a nuestro state del store tiene que pasar
// por alguna de las funciones controladas por mi.
const getCurrentFilter = () => {
  throw new Error('Not implemented');
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
