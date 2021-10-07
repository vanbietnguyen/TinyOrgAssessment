import React, { useEffect, useState } from 'react';
import '../../bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Container, Row, NavText } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Logout from '../Auth/Logout'
import TokenService from '../../services/TokenService';

const Header = ({ isLogin, setIsLogin }) => {

  const [firstName, setFirstName] = useState('');
  const [bFirstName, setBFirstName] = useState('');
  const [isToken, setIsToken] = useState(false);
  useEffect(async () => {
    let token = await TokenService.getUserToken()
    if(token) {
      setIsToken(true)
      let firstName = TokenService.getFirstName()
      let bFirstName = TokenService.getBFirstName()
      setFirstName(firstName)
      setBFirstName(bFirstName)
    } 
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

            <LinkContainer to="/" exact>
                <Logout
                  setIsLogin={setIsLogin}
                />
            </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      
    </header>

  );
};

export default Header;
