export default class Validator {
  validateUsername(user) {
    this.user = user;
    return /^[a-zA-Z][a-zA-Z0-9-]+$/.test(this.user) && !/\d{4}/.test(this.user);
  }
}
