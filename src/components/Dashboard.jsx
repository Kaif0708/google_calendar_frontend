// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';

// const Dashboard = () => {
//   const [searchParams] = useSearchParams();
//   const userId = searchParams.get('user');
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState('');
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;

//   useEffect(() => {
//     axios.get(`${backendUrl}/api/calendar/events`, { withCredentials: true })
//       .then((response) => setEvents(response.data.events))
//       .catch((err) => setError('Error fetching events: ' + err.message));
//   }, []);

//   return (
//     <div>
//       <h2>Welcome User: {userId}</h2>
//       <h3>Calendar Events</h3>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ul>
//         {events.map((event, index) => (
//           <li key={index}>
//             <strong>{event.event_name}</strong> - {event.date} at {event.time} ({event.location})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('user');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  // const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

  useEffect(() => {
    axios.get("https://google-calendar-backend-sand.vercel.app/api/calendar/events", { withCredentials: true })
      .then((response) => {
        console.log(response.data); // Check actual response
        setEvents(response.data.events || []); // Safely handle events
      })
      .catch((err) => setError('Error fetching events: ' + err.message));
  }, [backendUrl]);

  return (
    <div>
      <h2>Welcome User: {userId}</h2>
      <h3>Calendar Events</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {Array.isArray(events) && events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.event_name}</strong> - {event.date} at {event.time} ({event.location})
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default Dashboard;
