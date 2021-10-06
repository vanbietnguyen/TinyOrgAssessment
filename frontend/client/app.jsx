import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipePage from './components/Recipes/RecipePage';
import AuthContainer from './views/AuthContainer'
import Login from './components/Auth/Login';
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
            <Route path="/auth" component={AuthContainer} />
            <Route path="/main" component={Home} />
            <Route path="/recipes/:id" component={RecipePage} />
            <Route path="/" component={Login} exact/>
          </Container>

        </main>
        <Footer className="footer" />
      </Router>
    
   
  );
};

export default App;
