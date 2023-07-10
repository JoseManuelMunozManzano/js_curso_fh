// El ?raw es una funcionalidad que tiene Vite para importar en crudo el archivo.
// Sin el esto no funciona.
import html from './app.html?raw';

import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

// Esto se hace con el único objetivo de evitar colocar strings como identificadores.
// Si el día de mañana esto cambia, solo hay que tocar aquí.
const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
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

  // Referencias HTML
  // Tenemos que crearlo aquí, debajo del IIFE, porque el IIFE es síncrono y ahí se crea el elemento en el HTML.
  // Si lo hiciera arriba del IIFE, las referencias NO estarían creadas en el DOM.
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);

  // Listeners
  newDescriptionInput.addEventListener('keyup', (ev) => {
    // Si no es Return o no hay nada escrito salimos
    if (ev.keyCode !== 13) return;
    if (ev.target.value.trim().length === 0) return;

    todoStore.addTodo(ev.target.value);
    displayTodos();
    ev.target.value = '';
  });

  todoListUL.addEventListener('click', (ev) => {
    // Como podemos hacer click tanto en el check como en el botón destroy, indicamos
    // que realmente queremos el elemento HTML más cercano, siempre hacia el padre, que tenga ese data attribute.
    // Así obtenemos el id.
    const element = ev.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });
};

// REPETIR QUE LA IDEA DE TODO ESTE MONTAJE ES QUE LA CAPA DE NEGOCIO ESTE DESPEGADA DE NUESTRA APLICACIÓN
