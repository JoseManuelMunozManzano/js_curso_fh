import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user';

// Grabación y actualización. Lo que me dice si va a ser uno o lo otro es si tengo id.

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async (userLike) => {
  const user = new User(userLike);

  if (!user.firstName || !user.lastName) throw `First & last name required`();

  // Hay que mandarle al backend la información como el la está esperando,
  // es decir, con campo first_name y last_name en vez de firstName y lastName
  // que es como trabajamos en nuestra app.
  const userToSave = userModelToLocalhost(user);

  let userUpdated;

  if (user.id) {
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }

  // Y volvemos a pasar un mapper para convertirlo a datos con lo que nosotros trabajamos.
  return localhostUserToModel(userUpdated);
};

/**
 *
 * @param {Like<User>} user
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const newUser = await res.json();
  console.log({ newUser });

  return newUser;
};

/**
 *
 * @param {Like<User>} user
 */
const updateUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
  // La diferencia entre PUT y PATCH es que con PUT reemplazamos todo el objeto
  // y con PATCH actualizamos solo lo que le envío.
  // Pero al final depende de como esté construido el backend.
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const updatedUser = await res.json();
  console.log({ updatedUser });

  return updatedUser;
};
