import React, { component, useState, useEffect } from 'react';
import Recipe from './Recipe'

const RecipesList = ({recList}) => {


    const recipes = recList.map((recipe, inx) => {
        console.log(recipe)
        return <Recipe key={inx} id={recipe.id} recipe={recipe} />;
      });

  return (
    <div>

        <ul>{recipes}</ul>
    </div>
  );
};

export default RecipesList;