// Este css va a afectar de manera global a toda la app. Cuidado!
import usersStore from '../../store/users-store';
import './render-table.css';

// El html lo queremos en memoria. Por eso creamos una variable que vamos a estar modificando.
// Esta variable tiene un scope de módulo. Solo lo que hay en este módulo puede verla (no hacemos export)
let table;

const createTable = () => {
  const table = document.createElement('table');
  const tableHeaders = document.createElement('thead');
  // Más tarde se van a crear los componentes Html en un archivo.
  // Pero el objetivo de esta función es crear la tabla.
  tableHeaders.innerHTML = `
    <tr>
      <th>#ID</th>
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `;

  // Por ahora tbody no tendrá registros, es solo el espacio html para luego tenerlo.
  const tableBody = document.createElement('tbody');
  table.append(tableHeaders, tableBody);
  return table;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
  // En getUsers ya tengo los usuarios. Es síncrono.
  const users = usersStore.getUsers();

  // La primera vez no va a existir
  if (!table) {
    table = createTable();
    // Es append para no destruir lo que tenga elemento, como pasaría con innerHTML
    element.append(table);

    // TODO: listeners a la table
  }

  // Como la tabla ya está cargada, ahora solo tenemos que modificar su cuerpo
  let tableHTML = '';
  users.forEach((user) => {
    tableHTML += `
    <tr>
      <td>${user.id}</td>
      <td>${user.balance}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.isActive}</td>
      <td>
        <a href="#/" data-id="${user.id}">Select</a>
        |
        <a href="#/" data-id="${user.id}">Delete</a>
      </td>
    </tr>
    `;
  });

  // Se puede buscar dentro de un elemento, no solo del document. Al final document es una variable también.
  table.querySelector('tbody').innerHTML = tableHTML;
};
