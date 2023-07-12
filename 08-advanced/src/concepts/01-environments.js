/**
 * Donde vamos a renderizar el elemento
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = (element) => {
  // Usualmente en las aplicaciones de Node vamos a tener la variables de entorno en una variable llamada process.env
  // console.log(process.env.API_KEY);
  // Desafortunadamente, Vite no trabaja con el objeto global process. No lo tenemos en Vite.

  // Con Vite, las variables de entorno se obtienen de la siguiente forma:
  // console.log(import.meta.env);

  const html = `
    Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD} <br/>
    KEY: ${import.meta.env.VITE_API_KEY} <br/>
    URL: ${import.meta.env.VITE_BASE_URL} <br/>
  `;

  element.innerHTML = html;
};
