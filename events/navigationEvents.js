import createEditForm from '../components/forms/createEditForm';
import { getOrders } from '../api/orders';
// import { showOrders, showEmptyOrdersPage } from '../pages/orders'; --need to know where the Orders page is that Austin is creating so i can edit my hiphoppizzabtn to point there.

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-an-order-btn')) {
      createEditForm(user.uid);
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('hip-hop-pizza-btn')) {
      getOrders(user.uid).then((array) => {
        if (array.length) {
          // showOrders(array);
        } else {
          // showEmptyOrdersPage();
        }
      });
    }
  });
};

export default navigationEvents;
