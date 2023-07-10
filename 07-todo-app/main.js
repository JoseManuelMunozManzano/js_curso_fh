import './style.css';
import { App } from './src/todos/app';
import todoStore from './src/store/todo.store';

// Esta idea de trabajar con el estado desde el inicio de la app está cogida de Redux y Pinia.
todoStore.initStore();

// Donde vamos a renderizar la app.
App('#app');
