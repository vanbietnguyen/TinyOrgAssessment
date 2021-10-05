import React from 'react';
import '../../bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>

          <LinkContainer to="/">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <LinkContainer to="/">
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
