import React, { component, useEffect, useState } from 'react';
import '../../bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'


const AuthForm = ({ children }) => {

  return (
    <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  );
};

export default AuthForm;
