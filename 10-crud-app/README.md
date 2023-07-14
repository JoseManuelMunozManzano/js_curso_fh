# 10-crud-app

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

Para la parte del servidor se ha instalado JSON Server: https://www.npmjs.com/package/json-server

La data se ha dejado en /server/db.json y hay una copia db-copy.json por si perdemos la data de prueba, poder recuperarla fácilmente.

Se ha informado un nuevo script en package.json: `"server": "json-server server/db.json -p3001 --watch"`

Pasos para trabajar con este proyecto.

1. Clonar
2. Instalar: `npm i`
3. Ejecutar la parte server: `npm run server`
4. Ejecutar la parte front: `npm run dev`
