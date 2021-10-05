import React, { component, useState, useEffect } from 'react';
import Recipe from './Recipe'
import '../../bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

const RecipesList = ({recList}) => {

    const recipes = recList.map((recipe, inx) => {
        return <Recipe key={inx} id={recipe._id} recipe={recipe} />;
      });

  return (
    <Row>{recipes}</Row>
  );
};

export default RecipesList;