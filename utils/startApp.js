import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
// import renderHomePage from '../pages/renderHomePage';
import navigationEvents from '../events/navigationEvents';
import addEvents from '../events/domEvents';
import { getItems } from '../api/items';

// import renderCreateEditOrder from '../pages/renderCreateEditOrder';
// import renderCreateItemPage from '../pages/renderCreateItemPage';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';

const startApp = (user) => {
  domBuilder();
  renderHomePage();
  navigationEvents(user);
  addEvents(user);
  logoutButton();
  getItems('-NejoBZ57ughztNDiuOe').then((array) => {
    renderOrderDetailsPage(array);
  });
};

export default startApp;
