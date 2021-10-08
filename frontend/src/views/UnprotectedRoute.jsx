/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { component, useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenStorage from '../db/token';
const tokenStorageService = new TokenStorage();

const UnprotectedRoute = ({ component: Component, ...rest }) => {
  // const [ allergen, getEm ] = useState([])
  const [ isToken, setIsToken ] = useState(false)

  useEffect(async() => {
    const token = await tokenStorageService.getToken();
    if (token) setIsToken(true)
    
  }, [])
  
  

  
  
  return (
    <Route
      {...rest}
      render={() =>
        isToken ? <Redirect to='/main' test='test' /> : <Component {...rest} />
      }
    />
  );
};

export default UnprotectedRoute;
