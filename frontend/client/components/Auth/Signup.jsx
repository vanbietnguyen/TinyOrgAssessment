import React, { component, useEffect, useState } from 'react';
import '../../bootstrap.min.css'
import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap'
import AuthForm  from './AuthForm'
import { Link, Redirect } from 'react-router-dom';
import RecipesService from '../../services/RecipesService'
import TokenService from '../../services/TokenService';
import TokenStorage from '../../db/token'
const tokenStorage = new TokenStorage();


const Signup = () => {

    const [ username, setUsername ] = useState('')
    const [ firstName, setfirstName ] = useState('')
    const [ lastName, setlastName ] = useState('')
    const [ bFirstName, setbFirstName ] = useState('')
    const [ bLastName, setbLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showError, setShowError] = useState(false);
    const [ allergens, setAllergens ] = useState([])
    const [ allergenList, setAllergenList ] = useState([])
    
    useEffect(async () => {
      const result = await RecipesService.getRecipes('/api/recipes/allergens');
      
      let list = result.reduce((acc, curr) => {
        acc.push(curr.name)
        return acc
      }, [])
      
      setAllergenList(list)
    }, []);

    const allergenHandler = (e) => {
 
      let picked = e.target.value

      if(allergens.includes(picked)) {
        let ind = allergens.indexOf(picked)

        if(ind === 0) return setAllergens(allergens.slice(ind + 1))
        if(ind === allergens.length - 1) return setAllergens(allergens.slice(0, ind))
        else {
          let newCopy = allergens.slice(0, ind).concat(allergens.slice(ind + 1))
          return setAllergens(newCopy)
        }
      }
      let newCopy = allergens
      newCopy.push(picked)
      return setAllergens(newCopy)
    };
      const postSignup = async () => {
        if(!allergens) setAllergens(['none'])

        const result = await TokenService.postUserData('/api/users/signup/', {
            name: username,
            email: email, 
            firstName: firstName,
            lastName: lastName,
            bFirstName: bFirstName,
            bLastName: bLastName,
            password: password,
            allergens: allergens
        });

        console.log(result, 'result')
        if (result.token) {
            tokenStorage.saveToken(result.token, result.allergens);
            setIsAuthenticated(true);
          }

        setPassword('')
        return setShowError(true);
      };
      

    const SignupHandler = (e) => {
        e.preventDefault()
        if (!username || !password) return setShowError(true);
        postSignup();
    };
  
  if (isAuthenticated) {
    window.location.reload()
    return <Redirect to='/main' />;
  }

  return (
    <AuthForm>
        <h1>Sign up</h1>
        <Form onSubmit={SignupHandler}>
            <Form.Group className='my-3' controlId='username'>
                <Form.Label> Username</Form.Label>
                <Form.Control
                  type='username'
                  // placeholder='Enter username'
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group className='my-3' controlId='first_name'>
                <Form.Label> first name</Form.Label>
                <Form.Control
                  type='text'
                  // placeholder='Enter first name'
                  value={firstName}
                  onChange={(e)=> setfirstName(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group className='my-3' controlId='first_name'>
                <Form.Label> last name</Form.Label>
                <Form.Control
                  type='text'
                  // placeholder='Enter last name'
                  value={lastName}
                  onChange={(e)=> setlastName(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group className='my-3' controlId='babyfname'>
                <Form.Label> baby's first name</Form.Label>
                <Form.Control
                  type='text'
                  // placeholder={`Enter baby's first name`}
                  value={bFirstName}
                  onChange={(e)=> setbFirstName(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group className='my-3' controlId='babylname'>
                <Form.Label> baby's last name</Form.Label>
                <Form.Control
                  type='text'
                  // placeholder={`Enter baby's last name`}
                  value={bLastName}
                  onChange={(e)=> setbLastName(e.target.value)}
                >

                </Form.Control>

            </Form.Group>


            <Form.Group className='my-3' controlId='email'>
                <Form.Label> email</Form.Label>
                <Form.Control
                  type='email'
                  // placeholder='Enter email'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group className='my-3' controlId='password'>
                <Form.Label> password</Form.Label>
                <Form.Control
                  type='password'
                  // placeholder='Enter password'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                >

               </Form.Control>
            </Form.Group>
            
            
           
            <Card className="p-2 m-2">
                <Form.Group multiple className="mb-3" onChange={allergenHandler}>
                    {allergenList.map((allergen, i) => (
                        <div key={i} className="mb-3">
                            <Form.Check 
                                type='checkbox'
                                id={i}
                                label={allergen}
                                value={allergen}
                            />
                        </div>
                    ))}
                </Form.Group>
            </Card>
            <Button type='submit' variant='primary'>Register</Button>
        </Form>

    </AuthForm>
  );
};

export default Signup;

// {options.map(options => (
//     <option key={option.name} value={option.value}>
//         {option.name}
//     </option>
// ))}