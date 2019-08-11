import React from 'react';
import { connect } from 'react-redux';
import { listRepositories } from '../store/actions/repositoriesActions';

const Repositories = () => <h1>Repositories Component</h1>;

const mapDispatchToProps = dispatch => {
  return {
    listRepositories: value => dispatch(listRepositories(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Repositories);
