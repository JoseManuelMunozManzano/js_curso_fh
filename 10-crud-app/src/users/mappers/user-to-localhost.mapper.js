// Dada una instancia de mi clase, donde tengo los campos que necesito voy a mapear
// a un registro válido para mi backend.

import { User } from '../models/user';

/**
 *
 * @param {User} user
 */
export const userModelToLocalhost = (user) => {
  const { avatar, balance, firstName, gender, id, isActive, lastName } = user;

  return {
    avatar,
    balance,
    first_name: firstName,
    gender,
    id,
    isActive,
    last_name: lastName,
  };
};
