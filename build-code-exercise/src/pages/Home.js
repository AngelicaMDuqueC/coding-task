import React from 'react';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import UserHome from '../components/UserHome';

const Home = ({ auth }) => {
  const isLoggedIn = auth.isLoggedIn || false;
  const { username } = auth.loggedUser;
  return isLoggedIn ? <UserHome username={username} /> : <Welcome />;
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
