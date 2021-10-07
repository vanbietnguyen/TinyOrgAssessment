// eslint-disable-next-line no-unused-vars
import React, { component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenStorage from '../db/token';
const tokenStorageService = new TokenStorage();

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = tokenStorageService.getToken();
  let isToken = false;
  if (token) isToken = true;

  return (
    <div>
            <Route {...rest} render={props => (
                isToken ?
                <Component  {...props} />: 
                <Redirect exact from="/main" to="/" />
            )} />
        </div>
  );
};

export default ProtectedRoute;
