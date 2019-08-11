import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
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
// import { connect } from 'react-redux'
// import { signIn } from '../../store/actions/authActions'
// import { Redirect } from 'react-router-dom';
import './SignIn.scss';

const SignIn = () => {
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidSecondPassword, setInvalidSecondPassword] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const secondPasswordRef = useRef();

  const validateName = name => {
    return name !== '';
  };

  const validateEmail = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = password => {
    return password.length >= 6;
  };

  const validateSecondPassword = (password, secondPassword) => {
    return password === secondPassword && password !== '';
  };

  const handleSubmit = e => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const secondPassword = secondPasswordRef.current.value;
    setInvalidName(!validateName(name));
    setInvalidEmail(!validateEmail(email));
    setInvalidPassword(!validatePassword(password));
    setInvalidSecondPassword(!validateSecondPassword(password, secondPassword));

    e.preventDefault();
  };

  return (
    <Container className='d-flex flex-column justify-content-center'>
      <Row className='d-flex justify-content-center'>
        <Card>
          <CardHeader>
            <h2>Create Account</h2>
            <p className='lead'>
              It&apos;s free and hardly takes more than 30 seconds
            </p>
          </CardHeader>
          <CardBody>
            <Form className='d-flex flex-column'>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <InputGroup>
                  <Input
                    invalid={invalidName}
                    innerRef={nameRef}
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
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <InputGroup>
                  <Input
                    invalid={invalidEmail}
                    innerRef={emailRef}
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                  />
                  <InputGroupAddon addonType='append'>
                    <InputGroupText>
                      <FaEnvelope />
                    </InputGroupText>
                  </InputGroupAddon>
                  {invalidEmail && (
                  <FormFeedback>That email is invalid</FormFeedback>
                )}
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <InputGroup>
                  <Input
                    invalid={invalidPassword}
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
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <InputGroup>
                  <Input
                    invalid={invalidSecondPassword}
                    innerRef={secondPasswordRef}
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    placeholder='Confirm Password'
                  />
                  <InputGroupAddon addonType='append'>
                    <InputGroupText>
                      <FaLock />
                    </InputGroupText>
                  </InputGroupAddon>
                  {invalidSecondPassword && (
                  <FormFeedback>Passwords don&apos;t match</FormFeedback>
                )}
                </InputGroup>
              </FormGroup>
              <Button onClick={e => handleSubmit(e)}>Sign Up</Button>
            </Form>
          </CardBody>
          <CardFooter className='text-muted'>
            <CardText>
              By clicking the Sign Up button, you agree to our
              <br />
              Terms & Conditions, and Privacy Policy.
            </CardText>
          </CardFooter>
        </Card>
      </Row>
      <Row className='d-flex justify-content-center'>
        <div className='text-center'>
          {`Already have an account? `}
          <Link to='/'>Login here</Link>
        </div>
      </Row>
    </Container>
  );
};

// const mapStateToProps = (state) => {
//   return{
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default SignIn;
