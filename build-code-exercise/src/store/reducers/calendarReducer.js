import { LIST_CALENDAR_EVENT } from '../actionTypes';

const initState = {};

const calendarReducer = (state = initState, action) => {
  switch (action.type) {
    case LIST_CALENDAR_EVENT:
      break;

    default:
      break;
  }
  return state;
};

export default calendarReducer;
