import { useEffect, useState } from 'react';
import axios from 'axios';

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios.get(`/api/calendar/events`)
      .then((response) => setEvents(response.data.events))
      .catch((err) => setError('Error fetching events: ' + err.message));
  }, []);

  return (
    <div>
      <h2>Calendar Events</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.event_name}</strong> - {event.date} at {event.time} ({event.location})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarEvents;
