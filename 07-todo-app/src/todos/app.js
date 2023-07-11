// El ?raw es una funcionalidad que tiene Vite para importar en crudo el archivo.
// Sin el esto no funciona.
import html from './app.html?raw';

import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases';

// Esto se hace con el único objetivo de evitar colocar strings como identificadores.
// Si el día de mañana esto cambia, solo hay que tocar aquí.
const ElementIDs = {
  ClearCompletedButton: '.clear-completed',
  DestroyButton: 'destroy',
  NewTodoInput: '#new-todo-input',
  TodoList: '.todo-list',
  TodoFilters: '.filtro',
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
  const clearCompletedButton = document.querySelector(ElementIDs.ClearCompletedButton);
  const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

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

  todoListUL.addEventListener('click', (ev) => {
    const isDestroyElement = ev.target.className === ElementIDs.DestroyButton;
    const element = ev.target.closest('[data-id]');
    if (!element || !isDestroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  clearCompletedButton.addEventListener('click', () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener('click', (element) => {
      filtersLIs.forEach((el) => el.classList.remove('selected'));
      element.target.classList.add('selected');

      // Ojo con el hardcode, deberíamos, en app.html crear unos ids y trabajar con ellos.
      // Así si cambia el idioma no perdemos esta funcionalidad.
      switch (element.target.text) {
        case 'Todos':
          todoStore.setFilter(Filters.All);
          break;
        case 'Pendientes':
          todoStore.setFilter(Filters.Pending);
          break;
        case 'Completados':
          todoStore.setFilter(Filters.Completed);
          break;
      }

      displayTodos();
    });
  });
};

// REPETIR QUE LA IDEA DE TODO ESTE MONTAJE ES QUE LA CAPA DE NEGOCIO ESTE DESPEGADA DE NUESTRA APLICACIÓN
