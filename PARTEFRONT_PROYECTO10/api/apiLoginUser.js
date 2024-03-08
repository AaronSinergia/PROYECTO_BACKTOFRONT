import { apiShowAllEvents } from './apiShowAllEvents';

export const apiLoginUser = async () => {
  const username = document.querySelector('#usuario').value;
  const password = document.querySelector('#contraseña').value;

  const apiUrlLogin = 'http://localhost:3000/api/assistants/login';

  const dataLogin = await fetch(apiUrlLogin, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const dataRes = await dataLogin.json();
  localStorage.setItem('user', JSON.stringify(dataRes));

  if (dataLogin.status === 400) {
    alert('El usuario o contraseña no existen');
  } else {
    alert(`Bienvenido ${username}`);
    apiShowAllEvents();
  }
};
