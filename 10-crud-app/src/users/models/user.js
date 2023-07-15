// Este es el objeto de Usuario que vamos a manejar en la aplicación, y es la representación del
// usuario en la BD.
// No es la data del backend, sino la que yo necesito para trabajar (siempre con variable camelCase)
// Como el usuario que me devuelve el backend no va a hacer match por los campos first_name y last_name,
// necesitamos el mapper.

export class User {
  // La ventaja de desestructurar es que si queremos podemos poner valores por defecto.
  /**
   * El constructor recibe la data más o menos como la estoy esperando.
   * @param {Like<User>} userDataLike
   */
  constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
    this.id = id;
    this.isActive = isActive;
    this.balance = balance;
    this.avatar = avatar;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
}
