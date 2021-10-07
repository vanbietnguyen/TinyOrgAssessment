import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipePage from './components/Recipes/RecipePage';
import AuthContainer from './views/AuthContainer'
import Login from './components/Auth/Login';
import Home from './views/Home'
import ProtectedRoute from './views/ProtectedRoute'
import UnprotectedRoute from './views/UnprotectedRoute'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './global.scss';

const App = () => {
  return (
    
      <Router>
        <Header />
        <main className="py-3">

          <Container>
            <UnprotectedRoute path="/auth" component={AuthContainer} />
            <ProtectedRoute path="/main" component={Home} />
            <ProtectedRoute path="/recipes/:id" component={RecipePage} />
            <UnprotectedRoute path="/" component={Login} exact/>
          </Container>

        </main>
        <Footer className="footer" />
      </Router>
    
   
  );
};

export default App;
