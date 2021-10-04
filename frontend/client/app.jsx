import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './views/Register'

import './global.scss';

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer className="footer" />
    </Router>
  );
};

export default App;
