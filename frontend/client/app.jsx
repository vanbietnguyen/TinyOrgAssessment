import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipePage from './components/Recipes/RecipePage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './views/Home'
import ProtectedRoute from './views/ProtectedRoute'
import UnprotectedRoute from './views/UnprotectedRoute'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './global.scss';

const App = () => {

  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin)
  return (
    
      <Router>
        <Header 
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <main className="py-3">

          <Container>

            <ProtectedRoute 
              path="/main" 
              component={Home} 
              // isLogin={isLogin}
              // setLogin={setIsLogin}
            />
            <ProtectedRoute path="/recipes/:id" component={RecipePage} />
            <UnprotectedRoute path="/" component={Login} exact/>
            <UnprotectedRoute path="/signup" component={Signup} exact/>
          </Container>

        </main>
        <Footer className="footer" />
      </Router>
    
   
  );
};

export default App;
