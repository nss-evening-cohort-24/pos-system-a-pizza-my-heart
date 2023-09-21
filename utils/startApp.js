import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import renderHomePage from '../pages/renderHomePage';
import navigationEvents from '../events/navigationEvents';
import addEvents from '../events/domEvents';
import renderEditItemPage from '../pages/renderEditItemPage';

const startApp = () => {
  domBuilder();
  renderHomePage();
  renderEditItemPage();
  navigationEvents();
  addEvents();
  logoutButton();
};

export default startApp;
