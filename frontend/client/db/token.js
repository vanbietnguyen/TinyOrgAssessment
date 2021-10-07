const TOKEN = 'token';
const ALLERGEN = 'allergen'
const FIRSTNAME = 'firstName'
const BFIRSTNAME = 'bFirstName'

export default class TokenStorage {
  saveToken(token, allergen, firstName, bFirstName) {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(ALLERGEN, allergen);
    localStorage.setItem(FIRSTNAME, firstName),
    localStorage.setItem(BFIRSTNAME, bFirstName);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  getAllergen() {
    return localStorage.getItem(ALLERGEN);
  }

  getFirstName() {
    return localStorage.getItem(FIRSTNAME);
  }

  getBFirstName() {
    return localStorage.getItem(BFIRSTNAME);
  }

  clearToken() {
    localStorage.clear(TOKEN);
    localStorage.clear(ALLERGEN);
  }
}
