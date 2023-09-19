// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import loginButton from '../components/loginButton';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
