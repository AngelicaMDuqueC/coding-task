/* eslint-disable no-console */
import { CREATE_USER, LOG_OUT, LOGIN } from '../actionTypes';

const initState = {
  validUser: true,
  validEmail: true,
  validPassword: true,
  isLoggedIn: false,
  loggedUser: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      let newState = { ...state };
      const { user } = action;
      const { username, email } = user;
      const id = JSON.parse(localStorage.getItem('usersCount')) || 0;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const prevUsername = users.filter(u => u.username === username);
      if (prevUsername.length) {
        newState = { ...state, validUser: false, validEmail: true };
      } else {
        const prevEmail = users.filter(u => u.email === email);
        if (prevEmail.length) {
          newState = { ...state, validUser: true, validEmail: false };
        } else {
          const creationDate = new Date().getTime();
          const newUser = { ...user, id, creationDate };
          newState = {
            ...state,
            loggedUser: newUser,
            isLoggedIn: true,
            validUser: true,
            validEmail: true
          };

          localStorage.setItem('users', JSON.stringify([...users, newUser]));
          localStorage.setItem('usersCount', JSON.stringify(id + 1));
        }
      }
      return { ...newState };
    }
    case LOG_OUT: {
      return {
        ...state,
        loggedUser: {},
        isLoggedIn: false
      };
    }
    case LOGIN: {
      let newState = { ...state };
      const { username, password } = action.userData;
      console.log(username, password);
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.filter(
        u => u.username === username || u.email === username
      );
      if (!user.length) {
        newState = { ...state, validUser: false, validPassword: true };
      } else if (user[0].password !== password) {
        newState = { ...state, validUser: true, validPassword: false };
      } else {
        newState = {
          ...state,
          validUser: true,
          validPassword: true,
          isLoggedIn: true,
          loggedUser: user[0]
        };
      }
      return { ...newState };
    }
    default:
      return { ...state };
  }
};

export default authReducer;