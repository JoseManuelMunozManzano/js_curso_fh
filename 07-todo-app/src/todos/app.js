// El ?raw es una funcionalidad que tiene Vite para importar en crudo el archivo.
// Sin el esto no funciona.
import html from './app.html?raw';

// Se va a hacer algo parecido a lo que hace React para trabajar.

/**
 *
 * @param {String} elementId Elemento en el que se renderiza la app
 */
export const App = (elementId) => {
  // Función anónima autoinvocada IIFE
  // Cuando la función App() se llama
  // NOTA: En el HTML se podría poner variables de esta forma, por ejemplo, {{nombre}} y sustituir
  // por valores. Utilizaríamos esta función para reconstruir el HTML.
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
