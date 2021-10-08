/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { component, useState, useEffect } from 'react';
import '../../bootstrap.min.css'
import RecipesService from '../../services/RecipesService';
import { Card,  } from 'react-bootstrap'



const RecipePage = ({ match }) => {
    const [recipe, setRecipe] = useState([]);
    const [allergens, setAllergens] = useState([]);
    

    useEffect(async () => {
        const result = await RecipesService.getRecipes('/api/recipes');
        // console.log(result, 'in recipe page')
        const recipe = await result.find((r) => {
            console.log(r)
            return r._id = match.params.id
          })
          setRecipe(recipe);
    }, []);

    useEffect(async () => {
      const result = await RecipesService.getRecipes('/api/recipes');
      
      const recipe = await result.find((r) => {
          // eslint-disable-next-line eqeqeq
          return r._id == match.params.id
        })
        
        console.log(recipe)
        setAllergens(recipe.allergens)

  }, []);

  return (

        <Card className="my-3 p-3 rounded justify-content-md-center">
              {/* <Card.Img src={recipe.image} />  */}
            <Card.Img src={recipe.image} />

          <Card.Body>

            
            <Card.Title as="div"><strong>{recipe.name}</strong></Card.Title>
            
             {allergens.length ? allergens.map((a , i) => <Card.Text key={i}>{a}</Card.Text>) : 'none' }
          
          </Card.Body>
        </Card>
  );
};

export default RecipePage;