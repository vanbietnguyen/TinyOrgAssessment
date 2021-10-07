import React, { component, useEffect, useState } from 'react';
import RecipesService from '../services/RecipesService';
import RecipesList from '../components/Recipes/RecipesList'
import '../bootstrap.min.css'
import { Container } from 'react-bootstrap'
import TokenService from '../services/TokenService';

const Home = ({ setIsLogin }) => {
  const [recList, setRecList] = useState([]);

  useEffect(async () => {
    let token = await TokenService.getUserToken()
    if(token) return setIsLogin(true);
    return TokenService.logout()
  }, []);

  useEffect(async () => {

    let token = await TokenService.getUserToken()
    if(!token) return 

    const recipes = await RecipesService.getRecipes('/api/recipes');
    let allergens = await TokenService.getUserAllergens()
    if(allergens) {
      let parsedRecipes = recipes.reduce((acc, curr) => {

          let isBad = false
    
          if(!acc.includes(curr)) {
            for(let allergen of allergens) {
              if(curr.allergens.includes(allergen)) isBad = true
            }
          }
    
          isBad ? acc : acc.push(curr)
          return acc
        }, [])

      setRecList(parsedRecipes);
    } 
  }, []);

  return (
    <main className="py-3">
      <Container>
        <RecipesList recList={recList}/>
      </Container>
    </main>

  );
};

export default Home;
