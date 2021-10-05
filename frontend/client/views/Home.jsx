import React, { component, useEffect, useState } from 'react';
import RecipesService from '../services/RecipesService';
import RecipesList from '../components/Recipes/RecipesList'
import '../bootstrap.min.css'
import { Container } from 'react-bootstrap'


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
    <main className="py-3">
      <Container>
        <RecipesList recList={recList}/>
      </Container>
    </main>

  );
};

export default Home;
