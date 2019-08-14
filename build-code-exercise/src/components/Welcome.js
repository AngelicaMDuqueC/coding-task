import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Jumbotron } from 'reactstrap';
import * as routes from '../routes';

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Jumbotron color='white' className='text-center'>
          <h1 className='display-3'>Welcome to HelloBuild Coding Challenge</h1>
          <br />
          <p className='lead'>
            In this web app you can review a list all repositories in your
            github account.
            <br />
            Also you can list all your upcoming events for the next month.
            <br />
            To use these functionalities your registered email must be
            associated to your google and github accounts.
            <br />
            <Link to={routes.SIGNUP}>Sign Up</Link> to start.
          </p>
        </Jumbotron>
      </Row>
    </Container>
  );
};

export default Welcome;
