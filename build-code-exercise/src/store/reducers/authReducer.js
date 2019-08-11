/* eslint-disable no-console */
import { CREATE_USER, CREATE_USER_ERROR } from '../actionTypes';

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state };
    case CREATE_USER_ERROR:
      console.log(action.err);
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
