import React, { component, useState, useEffect } from 'react';

const Recipe = ({ id, recipe }) => {

  return (
    <div>
        <li className="recipe">{recipe.name}</li>
    </div>
  );
};

export default Recipe;