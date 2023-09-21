// Import necessary modules
// import createEditForm from '../components/forms/createEditForm';
import { signOut } from '../utils/auth';
import { getOrders } from '../api/orders';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
// import { ordersOnDom } from '../pages/ordersOnDom';
// import { showOrders, showEmptyOrdersPage } from '../pages/orders';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-an-order-btn')) {
      console.warn('Create Order Button Clicked!');
      renderOrderDetailsPage();
    }

    if (e.target.id.includes('view-orders-btn')) {
      console.warn('View Orders Button Clicked!');
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
