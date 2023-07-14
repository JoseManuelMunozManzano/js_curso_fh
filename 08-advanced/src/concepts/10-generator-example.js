// Contador usando un generador que nos da el siguiente id

/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const generatorExampleComponent = (element) => {
  const genId = idGenerator();

  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener('click', renderButton);
};

// Ejemplo de uso de generador. Dar valor secuencial, en vez de usar UUID
function* idGenerator() {
  let currentId = 0;

  while (true) {
    yield ++currentId;
  }
}
