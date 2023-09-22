import renderRevenuePage from '../pages/renderRevenuePage';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
import renderCreateItemPage from '../pages/renderCreateItemPage';
import renderEditItemPage from '../pages/renderEditItemPage';
import { addItems, getItems, updateItems } from '../api/items';
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
      renderCreateEditOrder();
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
    if (e.target.id.includes('details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getItems(firebaseKey).then((array) => {
        console.warn(array);
        if (array.length) {
          renderOrderDetailsPage(array);
        } else {
          console.warn('nope');
        }
      });
    }
    if (e.target.id.includes('submitAddItemBtn')) {
      // const [, orderID] = e.target.split('--');
      //  TO-DO: Replace the hard-coded parameter below with orderID variable when you're done testing the code.
      const payload = {
        name: document.querySelector('#itemNameInput').value,
        price: document.querySelector('#itemPriceInput').value,
        orderID: '-NejoBZ57ughztNDiuOe'
      };
      addItems(payload).then(({ name }) => {
        const patchPayload = { firebasekey: name };
        updateItems(patchPayload).then(() => {
          getItems('-NejoBZ57ughztNDiuOe').then((array) => {
            renderOrderDetailsPage(array);
          });
        });
      });
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

  document.querySelector('#pageBody').addEventListener('click', (e) => {
    if (e.target.id.includes('close-order-btn')) {
      renderRevenuePage();
    }
  });

  document.querySelector('#pageBottom').addEventListener('click', (e) => {
    if (e.target.id.includes('addItemBtn')) {
      // TO-DO: Activate this line of code and feed the variable into renderCreateItemPage.
      // const [, orderID] = e.target.id.split('--');
      renderCreateItemPage();
      document.querySelector('#pageBottom').innerHTML = '';
    }
    if (e.target.id.includes('goToPaymentBtn')) {
      console.warn('Go to Payment Button Clicked!');
    }
  });
};

export default addEvents;
