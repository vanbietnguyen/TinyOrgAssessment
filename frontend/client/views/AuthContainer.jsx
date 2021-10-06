import React, { component, useEffect, useState } from 'react';
import '../bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'


const AuthContainer = () => {

  return (
    <div>
        <Login />
        <Signup />
    </div>

  );
};

export default AuthContainer;
