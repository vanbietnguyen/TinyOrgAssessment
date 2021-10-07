import React, { component, useEffect, useState } from 'react';
import '../../bootstrap.min.css'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import AuthForm  from './AuthForm'
import AllergenSelect from './AllergenSelect'
import { Link, Redirect } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import TokenStorage from '../../db/token'
const tokenStorage = new TokenStorage();


const LoginDraft = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [showError, setShowError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userNameHandler = (e) => {
    setUserData((userData) => ({
      ...userData,
      username: e.target.value,
    }));
  };

  const passwordHandler = (e) => {
    setUserData((userData) => ({
      ...userData,
      password: e.target.value,
    }));
  };

  const postSignIn = async () => {
    const pwInput = document.querySelector('.signin_pw');
    const result = await TokenService.postUserData(
      '/api/users/login/',
      userData
    );
    if (result.access) {
      tokenStorage.saveToken(result.access);
      return setIsAuthenticated(true);
    }
    setUserData((userData) => ({
      ...userData,
      password: '',
    }));
    pwInput.focus();
    return setShowError(true);
  };

  const userSignIn = () => {
    if (!userData.username || !userData.password) {
      return setShowError(true);
    }
    postSignIn();
  };

  if (isAuthenticated) {
    window.location.reload() 
    return <Redirect to='/main' />;
  }

  return (
    <div className='login_page'>
      <div className='login_wallpaper'>
        <p className='login_head'>Welcome back!</p>
        <p className='login_intro'>You are almost in the promise land</p>
        <Link to='/signup'>
          <button className='login_wall_btn'>SIGN UP</button>
        </Link>
      </div>
      <div className='signin_page'>
        <p className='signin_head'>Sign in to Dockure</p>
        <form className='signin_form'>
          <input
            className='signin_input'
            placeholder='Username'
            type='text'
            value={userData.username}
            onChange={userNameHandler}
          ></input>
          <input
            className='signin_input signin_pw'
            placeholder='Password'
            type='password'
            value={userData.password}
            onChange={passwordHandler}
          ></input>
          {showError && (
            <div className='login_error'>Invalid username or password</div>
          )}
        </form>
        {/* <a className='signin_forgotPW'>Forgot your password?</a> */}
        <button className='signin_btn' onClick={(e) => userSignIn()}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default LoginDraft;



// {options.map(options => (
//     <option key={option.name} value={option.value}>
//         {option.name}
//     </option>
// ))}