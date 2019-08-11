import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/authActions';

const Login = () => <h1>Login Component</h1>;

const mapDispatchToProps = dispatch => {
  return {
    createUser: value => dispatch(createUser(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
