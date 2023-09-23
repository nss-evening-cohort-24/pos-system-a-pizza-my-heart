// Import necessary modules
// import createEditForm from '../components/forms/createEditForm';
import { signOut } from '../utils/auth';
import { getOrders } from '../api/orders';
// import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
// import { ordersOnDom } from '../pages/ordersOnDom';
import { showEmptyOrdersPage, showOrders } from '../pages/ordersOnDom';
import renderCreateOrder from '../pages/renderCreateOrder';
// import renderCreateEditOrder from '../pages/renderEditOrder';
import renderHomePage from '../pages/renderHomePage';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-an-order-btn')) {
      const [, uid] = e.target.id.split('--');
      document.querySelector('#pageBottom').innerHTML = '';
      renderCreateOrder(uid);
    }

    if (e.target.id.includes('view-orders-btn')) {
      getOrders(user).then((array) => {
        if (array.length) {
          showOrders(array);
        } else {
          showEmptyOrdersPage();
        }
      });
    }

    if (e.target.id.includes('hip-hop-pizza-btn')) {
      renderHomePage(user);
      document.querySelector('#pageBottom').innerHTML = '';
    }

    if (e.target.id.includes('logout-button')) {
      signOut();
    }
  });
};

export default navigationEvents;
