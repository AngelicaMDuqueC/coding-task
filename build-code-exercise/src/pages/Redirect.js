import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Jumbotron } from 'reactstrap';

const RedirectPage = () => {
  return (
    <Container>
      <Row>
        <Jumbotron className='text-center'>
          <h1 className='display-3'>Ups.. This page is forbidden</h1>
          <br />
          <p className='lead'>
            Please <Link to='/'>Login</Link> first to acces this page
          </p>
        </Jumbotron>
      </Row>
    </Container>
  );
};

export default RedirectPage;
