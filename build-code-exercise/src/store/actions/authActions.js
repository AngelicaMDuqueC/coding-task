import { CREATE_USER, CREATE_USER_ERROR } from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createUser = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('user')
      .add({
        ...user
      })
      .then(() => {
        dispatch({ type: CREATE_USER, user });
      })
      .catch(err => {
        dispatch({ type: CREATE_USER_ERROR, err });
      });
  };
};
