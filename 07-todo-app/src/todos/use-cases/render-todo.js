import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

let element;

/**
 * Dado el id del elemento se renderiza ahí
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  // Referencia. La idea es evitar que se salte al DOM siempre, manteniendo la misma referencia y si lo tenemos, no volverlo a buscar.
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = '';

  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
