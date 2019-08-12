import { CREATE_USER} from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createUser = user => {
  return (dispatch) => {
        dispatch({ type: CREATE_USER, user });
  };
};
