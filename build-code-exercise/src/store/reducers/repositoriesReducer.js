import { CREATE_TOKEN, GET_TOKEN } from '../actionTypes';

const initState = {
  haveToken: false,
  token: ''
};

const repositoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_TOKEN: {
      const token = '940637c25bdf71aac41ef79f56ad3030da87e6ff';
      localStorage.setItem('token', JSON.stringify(token));
      return { ...state, haveToken: true };
    }
    case GET_TOKEN: {
      const token = JSON.parse(localStorage.getItem('token'));
      return { ...state, token };
    }
    default:
      break;
  }
  return state;
};

export default repositoriesReducer;