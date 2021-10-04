import React, { component, useEffect, useState } from 'react';
import RecipesService from '../services/RecipesService';
import RecipesList from '../components/Recipes/RecipesList'
const Home = () => {
  const [recList, setRecList] = useState([]);

  useEffect(async () => {
    const result = await RecipesService.getRecipes('/api/recipes');

    // const result = await RecipesService.getRecipes(
    //   'https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/'
    // );
    setRecList(result);
  }, []);

  return (
    <>
      <RecipesList recList={recList}/>
    </>
  );
};

export default Home;
