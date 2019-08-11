import { LIST_CALENDAR_EVENT } from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const listCalendarEvent = calendarEvent => {
  return dispatch => {
    dispatch({ type: LIST_CALENDAR_EVENT, calendarEvent });
  };
};
