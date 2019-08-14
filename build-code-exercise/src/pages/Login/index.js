import React, { Fragment, useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  CardText,
  FormFeedback,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';
import * as routes from '../../routes';
import { login } from '../../store/actions/authActions';

import './Login.scss';
import { validatePassword, validateName } from '../../utilities/helpers';

const LogIn = ({ loginAcction, auth }) => {
  const { isLoggedIn, validUser, validPassword } = auth;
  const [invalidName, setInvalidName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = e => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    setInvalidName(!validateName(username));
    setInvalidPassword(!validatePassword(password));
    if (validateName(username) && validatePassword(password)) {
      loginAcction(username, password);
    }
    e.preventDefault();
  };

  return (
    <Fragment>
      {isLoggedIn && <Redirect to={routes.HOME} />}
      <Container className='d-flex flex-column justify-content-center'>
        <Row className='d-flex justify-content-center'>
          <Card>
            <CardHeader>
              <h2>Member Login</h2>
            </CardHeader>
            <CardBody>
              <Form className='d-flex flex-column'>
                <FormGroup>
                  <Label htmlFor='username'>Username</Label>
                  <InputGroup>
                    <Input
                      invalid={invalidName || !validUser}
                      innerRef={usernameRef}
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Username'
                    />
                    <InputGroupAddon addonType='append'>
                      <InputGroupText>
                        <FaUser />
                      </InputGroupText>
                    </InputGroupAddon>
                    {invalidName && (
                      <FormFeedback>That username is invalid</FormFeedback>
                    )}
                    {!validUser && (
                      <FormFeedback>The user dont exist</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='password'>Password</Label>
                  <InputGroup>
                    <Input
                      invalid={invalidPassword || !validPassword}
                      innerRef={passwordRef}
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Password'
                    />
                    <InputGroupAddon addonType='append'>
                      <InputGroupText>
                        <FaLock />
                      </InputGroupText>
                    </InputGroupAddon>
                    {invalidPassword && (
                      <FormFeedback>
                        Min password lenght is 6 characters
                      </FormFeedback>
                    )}
                    {!validPassword && (
                      <FormFeedback>The password is wrong</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <Button onClick={e => handleSubmit(e)}>Login</Button>
              </Form>
            </CardBody>
            <CardFooter className='text-muted'>
              <CardText>
                <Link to='/'>Forgot Password?</Link>
              </CardText>
            </CardFooter>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAcction: (username, password) => dispatch(login(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
