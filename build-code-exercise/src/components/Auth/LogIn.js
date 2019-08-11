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
import './LogIn.scss';

const Login = () => {
  const [invalidName, setInvalidName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const validateName = name => {
    return name !== '';
  };

  const validatePassword = password => {
    return password.length >= 6;
  };

  const handleSubmit = e => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    setInvalidName(!validateName(name));
    setInvalidPassword(!validatePassword(password));

    e.preventDefault();
  };

  return (
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
              <Button onClick={e => handleSubmit(e)}>Sign Up</Button>
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
//     Login: (creds) => dispatch(Login(creds))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;
