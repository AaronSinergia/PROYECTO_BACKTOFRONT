import apiCall from '../api/apiCall';
import logedEventPage from '../pages/body/logedEventPage/logedEventPage';

const basicAccess = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const h2 = document.querySelector('.h2');
  h2.remove();

  apiCall();
  const logedPage = logedEventPage();

  main.appendChild(logedPage);
};

export default basicAccess;
