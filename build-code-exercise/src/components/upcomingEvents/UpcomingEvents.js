import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { Container, Button, Row, Jumbotron } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [validEvents, setValidEvents] = useState(false);

  const getEvents = () => {
    return ApiCalendar.listUpcomingEvents(10)
      .then(({ result }) => {
        const eventsLit = [];
        result.items.forEach(event => {
          const { start, end, summary } = event;
          eventsLit.push({
            start: start.dateTime || start.date,
            end: end.dateTime || end.date,
            title: summary,
            allDay: true
          });
        });
        return eventsLit;
      })
      .catch(err => console.err(err));
  };

  const loadClientWhenGapiReady = timer => {
    if (timer === 0) return;
    if (ApiCalendar.sign) {
      if (window.location.hostname === 'localhost') {
        getEvents().then(eventsLit => {
          setValidEvents(true);
          setEvents(eventsLit);
        });
      }
    } else {
      setTimeout(() => {
        loadClientWhenGapiReady(timer - 1);
      }, 100);
    }
  };

  const loadSingIn = () => {
    ApiCalendar.onLoad(() => {
      ApiCalendar.listenSign(ApiCalendar.sign);
    });
    loadClientWhenGapiReady(100);
  };

  const handleItemClick = (event, name) => {
    event.preventDefault();
    if (name === 'sign-in') {
      loadSingIn();
      ApiCalendar.handleAuthClick();
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  };

  return (
    <Container>
      {validEvents && (
        <div>
          <h2>Your Calendar</h2>
          <Calendar
            localizer={localizer}
            events={events}
            toolbar
            step={60}
            startAccessor='start'
            endAccessor='end'
          />
        </div>
      )}
      {!validEvents && (
        <Row className='d-flex flex-column'>
          <Jumbotron color='white' className='text-center'>
            <h1 className='display-3'>Upcoming Events</h1>
            <br />
            <p className='lead'>Please sign in Google,</p>
            <br />
            <Row className='d-flex justify-content-around'>
              <Button onClick={e => handleItemClick(e, 'sign-in')}>
                Sign in
              </Button>
            </Row>
          </Jumbotron>
        </Row>
      )}
    </Container>
  );
};

export default UpcomingEvents;
