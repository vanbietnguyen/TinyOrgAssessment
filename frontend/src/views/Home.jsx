/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import RecipesService from '../services/RecipesService';
import RecipesList from '../components/Recipes/RecipesList'
import '../bootstrap.min.css'
import { Container } from 'react-bootstrap'
import TokenService from '../services/TokenService';

const Home = () => {

  const [recList, setRecList] = useState([]);
  
  useEffect(async () => {
    let token = await TokenService.getUserToken()
    if(token) return 
    return TokenService.logout()
  }, []);

  useEffect(async () => {

    let token = await TokenService.getUserToken()
    if(!token) return 

    const recipes = await RecipesService.getRecipes('/api/recipes');
    let allergens = await TokenService.getUserAllergens()
    let allergensArray = allergens.split(',')
    
    if(allergens) {
      let parsedRecipes = recipes.reduce((acc, curr) => {

          let isBad = false
    
          if(!acc.includes(curr)) {
            for(let allergen of allergensArray) {
              if(curr.allergens.includes(allergen)) isBad = true
            }
          }
    
          // eslint-disable-next-line no-unused-expressions
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
