import React from 'react';
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
  Row
} from 'reactstrap';
// import { connect } from 'react-redux'
// import { signIn } from '../../store/actions/authActions'
// import { Redirect } from 'react-router-dom';
import './SignIn.scss';

const signIn = () => {
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
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <InputGroup>
                  <Input
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
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <InputGroup>
                  <Input
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
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <InputGroup>
                  <Input
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
                </InputGroup>
              </FormGroup>
              <Button>Sign Up</Button>
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

export default signIn;
