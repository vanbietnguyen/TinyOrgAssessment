import React, { component, useState, useEffect } from 'react';
import '../../bootstrap.min.css'
import RecipesService from '../../services/RecipesService';
import { Container, Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap'



const RecipePage = ({ match }) => {
    const [recipe, setRecipe] = useState([]);
    const [allergens, setAllergens] = useState([]);
    

    useEffect(async () => {
        const result = await RecipesService.getRecipes('/api/recipes');
        // console.log(result, 'in recipe page')
        const recipe = await result.find((r) => {
            console.log(r)
            return r._id == match.params.id
          })
          setRecipe(recipe);
    }, []);

    useEffect(async () => {
      const result = await RecipesService.getRecipes('/api/recipes');
      
      const recipe = await result.find((r) => {
          return r._id == match.params.id
        })

        // setAllergens(recipe.allergen)
        // recipe.allergens.map((a) => allergenArray.push(a))
        setAllergens(recipe.allergens)

  }, []);

    // const allergenDiv = 
  


  return (
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
              {/* <Card.Img src={recipe.image} />  */}
            <Card.Img src='https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg' /> 

          <Card.Body>

            
            <Card.Title as="div"><strong>{recipe.name}</strong></Card.Title>
            
             {allergens.length ? allergens.map((a , i) => <Card.Text key={i}>{a}</Card.Text>) : 'none' }
          
          </Card.Body>
        </Card>
      </Col>
  );
};

export default RecipePage;