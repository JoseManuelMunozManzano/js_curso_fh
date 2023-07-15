import { User } from '../models/user';

// Grabación y actualización. Lo que me dice si va a ser uno o lo otro es si tengo id.

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async (userLike) => {
  const user = new User(userLike);

  // TODO: aquí falta un mapper

  if (user.id) {
    throw 'Update not implemented';
    return;
  }

  const updatedUser = await createUser(user);
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
