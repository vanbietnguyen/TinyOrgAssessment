import React from 'react';
import '../../bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>

          <LinkContainer to="/main">
            <Navbar.Brand src="https://cdn.shopify.com/s/files/1/0018/4650/9667/files/Tiny-Logos-ALL-01_1_6f7a4e61-2612-4f4b-8327-62b0ed2413be_180x.png?v=1624156432">Tiny Organics</Navbar.Brand>
            
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <LinkContainer to="/main">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link>Link</Nav.Link>
            </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>

  );
};

export default Header;
