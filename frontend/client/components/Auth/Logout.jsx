import React from 'react';
import '../../bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TokenService from '../../services/TokenService';
import TokenStorage from '../../db/token'
const tokenStorage = new TokenStorage();

const Logout = ({ setIsLogin }) => {

    const signOutHandler = () => {
        TokenService.logout();
        setIsLogin(false);
        window.location.reload() 
    };



  return (
        <Button className='' onClick={() => signOutHandler()}> Logout </ Button>
  );
};

export default Logout;
