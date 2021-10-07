import React, { useEffect, useState } from 'react';
import '../../bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Container, Row, NavText } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Logout from '../Auth/Logout'
import TokenService from '../../services/TokenService';

const Header = ({ isLogin }) => {

  const [firstName, setFirstName] = useState('');
  const [bFirstName, setBFirstName] = useState('');
  const [isToken, setIsToken] = useState(false);

  useEffect(async () => {

    let token = await TokenService.getUserToken()

    if(token) setIsToken(true)
    else return

    let result = await TokenService.getFirstName()
    let resultBb = await TokenService.getBFirstName()
    console.log(result, 'result')
    console.log(resultBb)
    if(result) setFirstName(result);
    if(resultBb) setBFirstName(resultBb)
     
  }, []);

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>

          <LinkContainer to="/main">
            <Navbar.Brand>Tiny Organics</Navbar.Brand>
            
          </LinkContainer>

          <p> {isToken ? `Hi ${firstName} and ${bFirstName}` : `Welcome!`} </p>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <LinkContainer to="/main">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <Link to="/" exact>
                <Logout
                  isToken={isToken}
                />
            </Link>
              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      
    </header>

  );
};

export default Header;
