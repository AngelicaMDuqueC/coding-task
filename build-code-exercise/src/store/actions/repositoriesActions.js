import { CREATE_TOKEN, GET_TOKEN } from '../actionTypes';

export const createToken = () => {
  return { type: CREATE_TOKEN };
};

export const getToken = () => {
  return { type: GET_TOKEN };
};
