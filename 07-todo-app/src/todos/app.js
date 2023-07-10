// El ?raw es una funcionalidad que tiene Vite para importar en crudo el archivo.
// Sin el esto no funciona.
import html from './app.html?raw';

import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

// Esto se hace con el único objetivo de evitar colocar strings como identificadores.
// Si el día de mañana esto cambia, solo hay que tocar aquí.
const ElementIDs = {
  TodoList: '.todo-list',
};

// Se va a hacer algo parecido a lo que hace React para trabajar.

/**
 *
 * @param {String} elementId Elemento en el que se renderiza la app
 */
export const App = (elementId) => {
  const displayTodos = () => {
    // Obtengo los todos y tengo que renderizarlos en el HTML.
    // Para eso creamos la carpeta use-cases donde estarán los casos de uso, que son
    // funciones independientes que solo hagan una cosa.
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
  };

  // Función anónima autoinvocada IIFE
  // Cuando la función App() se llama
  // NOTA: En el HTML se podría poner variables de esta forma, por ejemplo, {{nombre}} y sustituir
  // por valores. Utilizaríamos esta función para reconstruir el HTML.
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};
