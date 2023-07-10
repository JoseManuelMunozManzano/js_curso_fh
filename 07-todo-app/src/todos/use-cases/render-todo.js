import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

/**
 * Dado el id del elemento se renderiza ahí
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  // TODO: referencia. La idea es evitar que se salte al DOM siempre, manteniendo la misma referencia y si lo tenemos, no volverlo a buscar.
  const element = document.querySelector(elementId);

  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
