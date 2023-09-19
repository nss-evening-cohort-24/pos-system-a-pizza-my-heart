import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  logoutButton();
};

export default startApp;
