import React, { component, useState, useEffect } from 'react';
import '../../bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Recipe = ({ id, recipe }) => {

  return (
 
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Link to={`/recipe/${id}`}>
                {/* <Card.Img src={recipe.image} />  */}
              <Card.Img src='https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg' /> 
            </Link>

            <Card.Body>

              <Link to={`/recipe/${id}`}>
                <Card.Title as="div"><strong>{recipe.name}</strong></Card.Title>
              </Link> 

             
              <Card.Text className="my-3">
                
                  {/* ingredients */}
                  ingredients that are in here!
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  );
};

export default Recipe;