import './logedEventPage.css';

const logedEventPage = (events) => {
  const gridEvents = document.createElement('div');
  gridEvents.className = 'grid_div';

  for (const data of events) {
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = data.title;

    // const title = document.createElement('h3');
    // title.innerHTML = dato.title;
    // const date = document.createElement('h3');
    // date.innerHTML = dato.date;
    // const location = document.createElement('h3');
    // location.innerHTML = dato.location;
    // const description = document.createElement('h3');
    // description.innerHTML = dato.description;
    // const assistants = document.createElement('h3');
    // assistants.innerHTML = dato.assistants;

    gridEvents.appendChild(img);
    // gridEvents.appendChild(title);
    // gridEvents.appendChild(date);
    // gridEvents.appendChild(location);
    // gridEvents.appendChild(description);
    // gridEvents.appendChild(assistants);
  }

  return gridEvents;
};

export default logedEventPage;
