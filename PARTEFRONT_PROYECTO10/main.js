import header from './pages/header/header';
import body from './pages/body/body';
import './style.css';
import footer from './pages/footer/footer';

export const appMainBody = () => {
  const appID = document.querySelector('#app');

  const mainHeader = header();
  const mainBody = body();
  const mainFooter = footer();

  appID.append(mainHeader);
  appID.append(mainBody);
  appID.append(mainFooter);
};

appMainBody();
