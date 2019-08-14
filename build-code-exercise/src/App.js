import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Repos from './pages/Repos';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

import Header from './components/Header';
import Footer from './components/Footer';

import * as routes from './routes';

const App = ({ auth }) => {
  const isLoggedIn = auth.isLoggedIn || false;
  const { username } = auth.loggedUser;

  return (
    <div id='app' className='d-flex flex-column min-vh-100'>
      <Router>
        <Header isLoggedIn={isLoggedIn} username={username} />
        <main role='main' className='d-flex flex-grow-1 align-items-center'>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.CALENDAR} component={Calendar} />
          <Route exact path={routes.REPOS} component={Repos} />
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.SIGNUP} component={SignUp} />
          <Route exact path={routes.REDIRECT} component={Redirect} />
        </main>
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
