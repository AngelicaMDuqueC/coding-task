import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CalendarEvents from '../pages/CalendarEvents';
import Login from '../pages/Login';
import Repositories from '../pages/Repositories';

import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div id='app' className='d-flex flex-column min-vh-100'>
      <Router>
        <Header />
        <main role='main' className='flex-grow-1'>
          <Route exact path='/' component={Home} />
          <Route exact path='/events' component={CalendarEvents} />
          <Route exact path='/repositories' component={Repositories} />
          <Route exact path='/login' component={Login} />
        </main>
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    calendar: state.calendar,
    repositories: state.repositories
  };
};

export default connect(mapStateToProps)(App);
