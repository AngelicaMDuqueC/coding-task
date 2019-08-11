import { combineReducers } from 'redux';
import authReducer from './authReducer';
import calendarReducer from './calendarReducer';
import repositoriesReducer from './repositoriesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  repositories: repositoriesReducer
});

export default rootReducer;
