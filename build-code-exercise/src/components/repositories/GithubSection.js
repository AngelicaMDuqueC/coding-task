import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row } from 'reactstrap';
import { connect } from 'react-redux';
import './GithubSection.scss';
import Repository from './Repository';
import UserGitHub from './setUserGithbu';
import { createToken, getToken } from '../../store/actions/repositoriesActions';
import {validateNumber, validateName } from '../../utilities/helpers'

const getIssuesOfRepositoryQuery = (user, listNumber) => `
  {
    user(login: "${user}" ) {
      name
      url
      repositories(first: ${listNumber}) {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  }
`;

const axiosGitHubGraphQL = token =>
  axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${token}`
    }
  });

const fetchUser = (name, number, token) => {
  return axiosGitHubGraphQL(token).post('', {
    query: getIssuesOfRepositoryQuery(name, number)
  });
};

const GithubSection = ({ repo, createTokenAction, getTokenAction }) => {
  const { haveToken, token } = repo;
  const [invalidName, setInvalidName] = useState(false);
  const nameRef = useRef();
  const [invalidNumber, setInvalidNumber] = useState(false);
  const numberRef = useRef();
  const [validRepo, setValidRepo] = useState(false);
  const [repository, setRepository] = useState([]);

  const handleSubmit = e => {
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    setInvalidName(!validateName(name));
    setInvalidNumber(!validateNumber(number));
    fetchUser(name, number, token)
      .then(result => {
        setValidRepo(true);
        setRepository(result.data.data.user.repositories.edges);
      })
      .catch(err => console.error(err));
    e.preventDefault();
  };

  useEffect(() => {
    if (!haveToken) createTokenAction();
    if (!token) getTokenAction();
  });

  return (
    <Container className='d-flex flex-column justify-content-center'>
      <Row className='d-flex justify-content-center'>
        {!validRepo && <h2>List Your GitHub Repositories</h2>}
        {validRepo && <h2>Your GitHub Repositories</h2>}
      </Row>
      {!validRepo && (
        <Row className='d-flex justify-content-center col-lg-12 col-md-12'>
          <Form className='d-flex flex-column'>
            <UserGitHub
              invalid={invalidName}
              name={nameRef}
              textholder='name'
              textLabel='Github Username'
            />
            <UserGitHub
              invalid={invalidNumber}
              name={numberRef}
              textholder='number'
              textLabel='List repositories number'
            />
            <Button onClick={e => handleSubmit(e)}>Search</Button>
          </Form>
        </Row>
      )}
      <Row className='d-flex flex-column bd-highlight'>
        {validRepo && <Repository repository={repository} />}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    repo: state.repo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTokenAction: token => dispatch(createToken(token)),
    getTokenAction: () => dispatch(getToken())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubSection);
