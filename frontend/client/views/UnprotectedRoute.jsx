import React, { component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenStorage from '../db/token';
const tokenStorageService = new TokenStorage();

const UnprotectedRoute = ({ component: Component, ...rest }) => {
  
  let isToken = false;
  const token = tokenStorageService.getToken();
  if (token) {
    isToken = true;
    console.log(isToken, 'istoken')
  }
  
  return (
    <Route
      {...rest}
      render={() =>
        token ? <Redirect to='/main' /> : <Component {...rest} />
      }
    />
  );
};

export default UnprotectedRoute;
