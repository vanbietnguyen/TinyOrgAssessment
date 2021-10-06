import React, { component, useState, useEffect } from 'react';
import '../../bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Recipe = ({ id, recipe }) => {
  
  const allergens = recipe.allergens.map((allergen, inx) => {
    return <Card.Text key={inx}>{allergen}</Card.Text> ;
  });
  // const allergens = recipe.allergens.map((a) => console.log(a))

  return (
 
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Link to={`/recipes/${id}`}>
                {/* <Card.Img src={recipe.image} />  */}
              <Card.Img src='https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg' /> 
            </Link>

            <Card.Body>

              <Link to={`/recipes/${id}`}>
                <Card.Title as="div"><strong>{recipe.name}</strong></Card.Title>
              </Link> 
                  {allergens}
            </Card.Body>
          </Card>
        </Col>
  );
};

export default Recipe;