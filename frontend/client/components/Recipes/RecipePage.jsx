import React, { component, useState, useEffect } from 'react';
import '../../bootstrap.min.css'
import RecipesService from '../../services/RecipesService';
import { Container, Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap'



const RecipePage = ({ match }) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(async () => {
        const result = await RecipesService.getRecipes('/api/recipes');
        // console.log(result, 'in recipe page')
        const recipe = result.find((r) => {
            console.log(r)
            return r._id == match.params.id
          })
          setRecipe(recipe);
    }, []);

  return (
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
              {/* <Card.Img src={recipe.image} />  */}
            <Card.Img src='https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg' /> 

          <Card.Body>

            
            <Card.Title as="div"><strong>{recipe.name}</strong></Card.Title>

            <Card.Text className="my-3">
              
                {/* ingredients */}
                ingredients that are in here!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default RecipePage;