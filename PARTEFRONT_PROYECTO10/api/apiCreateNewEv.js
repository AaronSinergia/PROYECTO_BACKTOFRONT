export const apiCreateNewEv = async (ev) => {
  ev.preventDefault();

  const sendNewEvent = {
    img: ev.srcElement.form[0].value,
    title: ev.srcElement.form[1].value,
    date: ev.srcElement.form[2].value,
    location: ev.srcElement.form[3].value,
    description: ev.srcElement.form[4].value,
  };

  const newEvent = JSON.stringify(sendNewEvent);

  const apiUrlNewEvent = 'http://localhost:3000/api/events/';

  await fetch(apiUrlNewEvent, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newEvent,
  });
};
