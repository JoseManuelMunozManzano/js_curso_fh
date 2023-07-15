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

  if (user.id) {
    throw 'Update not implemented';
    return;
  }

  const updatedUser = await createUser(userToSave);
  return updatedUser;
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
