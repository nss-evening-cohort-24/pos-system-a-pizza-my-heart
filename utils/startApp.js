import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import renderHomePage from '../pages/renderHomePage';
import navigationEvents from '../events/navigationEvents';
import addEvents from '../events/domEvents';
// import renderCreateItemPage from '../pages/renderCreateItemPage';

const startApp = () => {
  domBuilder();
  renderHomePage();
  navigationEvents();
  // renderCreateItemPage();
  addEvents();
  logoutButton();
};

export default startApp;
