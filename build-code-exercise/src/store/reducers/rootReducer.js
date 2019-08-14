import { combineReducers } from 'redux';
import authReducer from './authReducer';
import repositoriesReducer from './repositoriesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  repo: repositoriesReducer
});

export default rootReducer;