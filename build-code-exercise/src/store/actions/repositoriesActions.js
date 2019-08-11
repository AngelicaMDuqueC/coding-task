import { LIST_REPOSITORIES } from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const listRepositories = repositories => {
  return dispatch => {
    dispatch({ type: LIST_REPOSITORIES, repositories });
  };
};
