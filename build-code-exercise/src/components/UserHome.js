import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authActions';
import * as routes from '../routes';

const UserHome = ({ username, logOutAction }) => {
  const handleLogOut = () => {
    logOutAction();
  };

  return (
    <Container>
      <Row className='d-flex flex-column'>
        <Jumbotron color='white' className='text-center'>
          <h1 className='display-3'>
            Welcome back <span className='capitalize'>{username}</span>
          </h1>
          <br />
          <p className='lead'>
            Review the <Link to={routes.CALENDAR}>Upcoming Events</Link> in you
            calendar.
            <br />
            Review your <Link to={routes.REPOS}>Gihub Repos</Link>.
          </p>
          <br />
          <Row className='d-flex flex-column align-items-center'>
            <Button onClick={handleLogOut} className='col-3'>
              Log Out
            </Button>
          </Row>
        </Jumbotron>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOutAction: user => dispatch(logOut(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserHome);
