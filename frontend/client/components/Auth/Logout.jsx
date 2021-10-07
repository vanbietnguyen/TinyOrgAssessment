import React from 'react';
import '../../bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TokenService from '../../services/TokenService';

const Logout = ({ isToken }) => {

    const signOutHandler = () => {
        TokenService.logout();
        window.location.reload() 
    };



  return (
        <Button size="sm" onClick={() => signOutHandler()}> {isToken ? 'Logout' : 'refresh'} </ Button>
  );
};

export default Logout;
