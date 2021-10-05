import axios from 'axios';

class RecipesService {

  static async getRecipes(url) {
    try {
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
