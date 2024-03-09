import { apiShowAllEvents } from './apiShowAllEvents';

const waitForElement = async (selector) => {
  return new Promise((resolve) => {
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else {
        requestAnimationFrame(checkElement);
      }
    };

    checkElement();
  });
}; // Esto lo he sacado de CHAT GPT, tras buscar la forma de poner el elemento en display flex y no encontrarla

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

    if (username === 'AaronSinergia' && dataLogin.status === 200) {
      const targetElement = await waitForElement('.assistants_bbdd');
      targetElement.style.display = 'flex';
    }
  }
};
