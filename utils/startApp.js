import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import renderHomePage from '../pages/renderHomePage';
// import navigationEvents from '../events/navigationEvents';
import addEvents from '../events/domEvents';
import renderOrdersOnPage from '../pages/viewOrders';

const startApp = (user) => {
  domBuilder();
  renderHomePage();
  renderOrdersOnPage(user);
  //  navigationEvents();
  addEvents();
  logoutButton();
};

export default startApp;
