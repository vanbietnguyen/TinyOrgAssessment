import React, { useState } from 'react';
import '../../bootstrap.min.css'
import { Form, Button, Col, Row } from 'react-bootstrap'
import AuthForm  from './AuthForm'
import { Link, Redirect } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import TokenStorage from '../../db/token'
const tokenStorage = new TokenStorage();


const Login = ( {Location, history }) => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [field, setField] = useState([]);
    
      const postLogin = async () => {

        const result = await TokenService.postUserData('/api/users/login/', {
            username: username, 
            password: password
        });

        
        
        if (result.access) {
            tokenStorage.saveToken(result.access, result.allergens, result.firstName, result.bFirstName);
            setIsAuthenticated(true);
            return <Redirect to='/main' />;
          }

        setPassword('')
        return 
      };
      

    const loginHandler = (e) => {
        e.preventDefault()
        if (!username || !password) return 
        postLogin();
    };
  
  if (isAuthenticated) {
    window.location.reload()
    return <Redirect to='/main' />;
  }

  return (
    <AuthForm>
        <h1>Log in</h1>
        <Form onSubmit={loginHandler}>
            <Form.Group controlId='email'>
                <Form.Label> Username</Form.Label>
                <Form.Control
                  type='username'
                  placeholder='Enter username'
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Button type='submit' className="mt-1"variant='primary'>Log in</Button>
        </Form>

        <Row>
            <Col>
              <Link to='/signup'>
                <Button className="mt-1" > Sign up </ Button>
              </Link>
                
            </Col>
        </Row>
    </AuthForm>
  );
};

export default Login;

// {options.map(options => (
//     <option key={option.name} value={option.value}>
//         {option.name}
//     </option>
// ))}