const TOKEN = 'token';
const ALLERGEN = 'allergen'

export default class TokenStorage {
  saveToken(token, allergen) {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(ALLERGEN, allergen);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  getAllergen() {
    return localStorage.getItem(ALLERGEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
    localStorage.clear(ALLERGEN);
  }
}
