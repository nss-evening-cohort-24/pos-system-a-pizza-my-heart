import renderRevenuePage from '../pages/renderRevenuePage';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
import renderCreateItemPage from '../pages/renderCreateItemPage';
import renderEditItemPage from '../pages/renderEditItemPage';
import { deleteOrders, getOrders, getSingleOrders } from '../api/orders';
import { showOrders, showEmptyOrdersPage } from '../pages/ordersOnDom';
import renderCreateEditOrder from '../pages/renderCreateEditOrder';

const addEvents = (user) => {
  document.querySelector('#pageBody').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders(user).then((array) => {
        if (array.length) {
          showOrders(array);
        } else {
          showEmptyOrdersPage();
        }
      });
    }
    if (e.target.id.includes('createOrderBtn')) {
      console.warn('Create Order Button Clicked!');
    }
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrders(firebaseKey).then(() => {
          getOrders(user).then((array) => {
            if (array.length) {
              showOrders(array);
            } else {
              showEmptyOrdersPage();
            }
          });
        });
      }
    }
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrders(firebaseKey).then((obj) => renderCreateEditOrder(obj));
    }
    if (e.target.id.includes('viewRevenueBtn')) {
      renderRevenuePage();
    }
    if (e.target.id.includes('addItemBtn')) {
      const itemName = document.querySelector('#itemNameInput').value;
      const itemPrice = document.querySelector('#itemPriceInput').value;
      console.warn(`Item Name: ${itemName} Item Price: ${itemPrice}`);
      renderOrderDetailsPage();
    }
    if (e.target.id.includes('editItemBtn')) {
      console.warn('Edit Item Button Clicked!');
      document.querySelector('#pageBottom').innerHTML = '';
      renderEditItemPage();
    }
    if (e.target.id.includes('deleteItemBtn')) {
      console.warn('Delete Item Button Clicked!');
    }
    if (e.target.id.includes('submitEditItemBtn')) {
      const editedItemName = document.querySelector('#itemNameInput').value;
      const editedItemPrice = document.querySelector('#itemPriceInput').value;
      console.warn(`Name: ${editedItemName}  Price: ${editedItemPrice}`);
      //  TO-DO: API Calls to patch in edits to item array
      renderOrderDetailsPage();
    }
  });

  document.querySelector('#pageBottom').addEventListener('click', (e) => {
    if (e.target.id.includes('addItemBtn')) {
      renderCreateItemPage();
      document.querySelector('#pageBottom').innerHTML = '';
    }
    if (e.target.id.includes('goToPaymentBtn')) {
      console.warn('Go to Payment Button Clicked!');
    }
  });
};

export default addEvents;
