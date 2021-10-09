import axios from 'axios';
// const baseUrl = 'http://127.0.0.1:8000'

class RecipesService {

  static async getRecipes(url) {
    try {
      // let newUrl = baseUrl + url
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log(
        'There was an error getting recipes',
        error
      );
      return error;
    }
  }

  
}


export default RecipesService;
