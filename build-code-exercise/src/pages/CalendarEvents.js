import React from 'react';
import { connect } from 'react-redux';
import { listCalendarEvent } from '../store/actions/calendarActions';

const CalendarEvents = () => <h1>Events Component</h1>;

const mapDispatchToProps = dispatch => {
  return {
    listCalendarEvent: value => dispatch(listCalendarEvent(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CalendarEvents);
