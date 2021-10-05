import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipePage from './components/Recipes/RecipePage';
import Recipe from './components/Recipes/Recipe';
import Register from './views/Register'
import Home from './views/Home'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './global.scss';

const App = () => {
  return (
    
      <Router>
        <Header />
        <main className="py-3">

          <Container>
            <Route path="/Register" component={Register} />
            <Route path="/" component={Home} exact />
            <Route path="/recipe/:id" component={RecipePage} />
          </Container>

        </main>
        <Footer className="footer" />
      </Router>
    
   
  );
};

export default App;
