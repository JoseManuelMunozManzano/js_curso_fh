# JAVASCRIPT MODERNO: GUIA PARA DOMINAR EL LENGUAJE

Del curso JavaScript de DevTalles: https://cursos.devtalles.com/courses/javascript-moderno

Ver también: https://github.com/JoseManuelMunozManzano/node_curso_fh/tree/main/02-fundamentos_js

### 01-fundamentos

Inicio del curso de JavaScript viendo lo más básico.

Vamos a ver:

- Hola Mundo en JavaScript
- Creación de variables y constantes
- Introducción a la consola de JavaScript
- Depuración y breakpoints
- Problemas con la declaración de variables con var
- Prompts, alerts, confirms.
- ¿Qué son los primitivos?
- Palabras reservadas
- Arreglos
- Objetos literales
- Funciones básicas
- Funciones de flecha
- Retorno de las funciones
- Ejercicios y ejemplos con cada tipo expuesto

### 02-ciclos-estructuras-control

Seguimos viendo los ciclos y estructuras de control.

Vamos a ver:

- Estructuras de control de flujo
- Paso de variables por valor y por referencia
- Romper referencia de objetos
- If y Else
- Un poco sobre lógica booleana
- Operadores y operadores de asignación
- Operador condicional ternario
- Diferentes usos del operador condicional ternario
- Switch
- While
- Do While
- For
  - For in
  - For of

### 03-blackjack

Hacemos el juego de BlackJack, que consiste en intentar sumar 21, jugando contra el ordenador.

Vamos a ver:

- Trabajar con arreglos
- Mezclar los valores de los arreglos
- Introducción a la manipulación del DOM
- Eventos
- Crear imágenes en la página
- Realizar la lógica para implementar un competidor de cartas
- Patrón módulo
- Minimizar el código de forma manual (luego lo haremos de forma automática)
- Optimizaciones y protección de código

### 04-classes

Vamos a ver como se usan las clases en JavaScript.

- Problematica de prototipos
- Clases
- Sets
- Gets
- Métodos estáticos
- Gets estáticos
- ESNext: Propiedades privadas (aún no soportado completamente)
- Singletons
- Multiples constructores

### 05-vite-app

Vamos a realizar un proyecto de ejemplo JavaScript usando Vite.

Vite es parecido a Webpack y nos ayuda a trabajar en nuestra aplicación con diferentes herramientas para automatizar procesos.

Para crear este proyecto hemos hecho lo siguiente:

```
npm create vite
```

Y hemos seleccionado el nombre de proyecto vite-app, el framework Vanilla y la variante JavaScript.

Luego hemos renombrado el proyecto vite-app por 05-vite-app.

Entramos al proyecto recien renombrado y ejecutamos para empezar a andar el proyecto:

```
npm install
npm run dev
```

Para hacer el build de la aplicación para realizar el despliegue, ejecutar:

```
npm run build
```

### 06-blackjack-vite

Es la misma aplicación que hicimos de blackjack pero ahora se va a hacer usando Vite y con una fuerte refactorización.

Para crear este proyecto hemos hecho lo siguiente:

```
npm create vite
```

Y hemos seleccionado el nombre de proyecto blackjack-vite, el framework Vanilla y la variante JavaScript.

Luego hemos renombrado el proyecto blackjack-vite por 06-blackjack-vite.

Entramos al proyecto recien renombrado y ejecutamos para empezar a andar el proyecto:

```
npm install
npm run dev
```

Para hacer el build de la aplicación para realizar el despliegue, ejecutar:

```
npm run build
```

Despliegue en https://www.netlify.com/

### 07-todo-app

Nuevo proyecto de Vite. Es una Todo App y vamos a aprender:

- Scopes
- Variables locales
- Store global
- Módulos
- LocalStorage
- Session Storage
- Despliegues
- Vite
- Documentación de funciones

NOTA: Proyecto creado con el comando `npm create vite@latest` con nombre todo-app en Vanilla JavaScript.

### 08-advanced

Nuevo proyecto de Vite donde vamos a aprender lo relacionado a Callbacks, promesas y generadores.

- Variables de entorno
- Callbacks y callback hell
- Promises y promise hell
- Async, async - await
- Evitar los callback o promise hells
- Funciones generadoras
- Funciones generadoras asíncronas

### 09-http-app

Vamos a crear una pequeña aplicación que se conecta a un backend, el cual nos regresará información que usaremos en nuestra aplicación.

El objetivo es aprender las bases de las peticiones http.

NOTA: Proyecto creado con el comando `npm create vite@latest` con nombre html-app en Vanilla JavaScript.

### 10-crud-app

Esta app aplica todo lo aprendido hasta el momento, que va desde documentación, generación de elementos, async-await, store, fetch y mucho más.

En concreto:

- Operaciones CRUD
  - Create
  - Read
  - Update
  - Delete
- Sin frameworks o librerías externas
- Modals
- Mappers
- Clases
- Utilizar conversiones
- Código limpio
- Comprender las funcionalidades básicas de un Restful API de un backend
- Montar un backend de pruebas
- Generar y utilizar un store central para nuestro estado de la aplicación
- Documentación de funciones

NOTAS: Proyecto creado con el comando `npm create vite@latest` con nombre crud-app en Vanilla JavaScript.

Luego hemos renombrado el proyecto a 10-crud-app

### 11-esnext

Nuevo proyecto cuyo objetivo es aprender las nuevas funcionalidades ESNEXT. En concreto:

- structuredClone
- Array With
- Métodos to

NOTAS: Proyecto creado con el comando `npm create vite@latest` con nombre esnext en Vanilla JavaScript.

Luego hemos renombrado el proyecto a 11-esnext
