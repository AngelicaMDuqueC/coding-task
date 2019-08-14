import { CREATE_USER, LOG_OUT, LOGIN } from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createUser = user => {
  return { type: CREATE_USER, user };
};

export const logOut = () => {
  return { type: LOG_OUT };
};

export const login = (username, password) => {
  return { type: LOGIN, userData: { username, password } };
};
