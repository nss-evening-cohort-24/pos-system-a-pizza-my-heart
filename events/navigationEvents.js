// Import necessary modules
// import createEditForm from '../components/forms/createEditForm';
import { signOut } from '../utils/auth';
import { getOrders } from '../api/orders';
// import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
// import { ordersOnDom } from '../pages/ordersOnDom';
import { showEmptyOrdersPage, showOrders } from '../pages/ordersOnDom';
// import renderCreateEditOrder from '../pages/renderCreateEditOrder';
import renderCreateEditOrder from '../pages/renderCreateEditOrder';
import renderHomePage from '../pages/renderHomePage';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-an-order-btn')) {
      document.querySelector('#pageBottom').innerHTML = '';
      renderCreateEditOrder();
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
      renderHomePage();
    }

    if (e.target.id.includes('logout-button')) {
      signOut();
    }
  });
};

export default navigationEvents;
