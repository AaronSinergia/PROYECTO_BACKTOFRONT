import './header.css';

const header = () => {
  const head = document.createElement('header');
  head.className = 'header';

  const h1 = document.createElement('h1');
  h1.innerHTML = 'RESURRECTION EVENT CREATOR';
  h1.className = 'h1';

  const h2 = document.createElement('h2');
  h2.innerHTML = 'INICIO DE SESION';
  h2.className = 'h2';

  head.append(h1);
  head.append(h2);

  return head;
};

export default header;
