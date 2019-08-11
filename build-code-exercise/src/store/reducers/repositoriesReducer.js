import { LIST_REPOSITORIES } from '../actionTypes';

const initState = {};

const repositoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case LIST_REPOSITORIES:
      break;

    default:
      break;
  }
  return state;
};

export default repositoriesReducer;
