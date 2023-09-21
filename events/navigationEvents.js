// Import necessary modules
// import createEditForm from '../components/forms/createEditForm';
import { signOut } from '../utils/auth';
import { getOrders } from '../api/orders';
// import { ordersOnDom } from '../pages/ordersOnDom';
import { showEmptyOrdersPage, showOrders } from '../pages/ordersOnDom';
import renderCreateEditOrder from '../pages/renderCreateEditOrder';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-an-order-btn')) {
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
      getOrders().then((array) => {
        if (array.length) {
          // Depending on your actual code, you may want to uncomment and call functions here.
          // showOrders(array);
        } else {
          // Depending on your actual code, you may want to uncomment and call functions here.
          // showEmptyOrdersPage();
        }
      });
    }

    if (e.target.id.includes('logout-button')) {
      signOut();
    }
  });
};

export default navigationEvents;
