import logedEventPage from '../pages/body/logedEventPage/logedEventPage';

function apiCall() {
  fetch('http://localhost:3000/api/events')
    .then((res) => res.json())
    .then((events) => {
      logedEventPage(events);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

export default apiCall;
