// El nombre localhost-user es porque podemos tener tantos mappers como fuentes de datos.
// Es decir, podemos tener otro mapper para producción, etc.
// Vamos a transformar la data que nos llega desde el backend a un objeto User con el que
// podamos trabajar en nuestro modelo.

// Un mapper es una función que recibe nuestro objeto o algo que luce como nuestro objeto
// y genera una instanacia.

import { User } from '../models/user';

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
  const { avatar, balance, first_name, gender, id, isActive, last_name } = localhostUser;

  return new User({
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  });
};
