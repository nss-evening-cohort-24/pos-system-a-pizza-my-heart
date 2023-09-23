import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import renderHomePage from '../pages/renderHomePage';
import navigationEvents from '../events/navigationEvents';
import addEvents from '../events/domEvents';
// import renderCloseOrderPage from '../pages/renderCloseOrderPage';

const startApp = (user) => {
  domBuilder();
  renderHomePage(user);
  navigationEvents(user);
  // renderCloseOrderPage();
  addEvents(user);
  logoutButton();
};

export default startApp;
