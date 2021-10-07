import axios from 'axios';
import TokenStorage from '../db/token';
const tokenStorageService = new TokenStorage();

class TokenService {
  static async postUserData(url, userData) {
    try {
      let result = await axios.post(url, userData);
      console.log(result.data)
      return result.data;
    } catch (error) {
      console.log('this error is from User Service: ', error);
      return { error: true };
    }
  }

  static async getUserAllergens() {
    try {
      const token = tokenStorageService.getToken();
      if(token) {
        const allergens = tokenStorageService.getAllergen()
        return allergens
      }
      
    } catch (error) {
      console.log('There was an error getting user token: ', error);
      return { error: 'unauthenticated' };
    }
  }

  static async getUserToken() {
    try {
      const token = tokenStorageService.getToken();
      return token
    } catch (error) {
      console.log('There was an error getting user token: ', error);
      return { error: 'unauthenticated' };
    }
  }

  static logout() {
    tokenStorageService.clearToken();
  }
}

export default TokenService;
