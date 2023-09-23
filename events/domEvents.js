import renderRevenuePage from '../pages/renderRevenuePage';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
import renderCreateItemPage from '../pages/renderCreateItemPage';
import renderEditItemPage from '../pages/renderEditItemPage';
import {
  addItems, getItems, getSingleItems, updateItems, deleteItems
} from '../api/items';
import {
  addOrders, deleteOrders, getOrders, getSingleOrders
} from '../api/orders';
import { showOrders, showEmptyOrdersPage } from '../pages/ordersOnDom';
import renderCreateEditOrder from '../pages/renderCreateEditOrder';
import renderCloseOrderPage from '../pages/renderCloseOrderPage';
import renderOrdersOnPage from '../pages/viewOrders';

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
      const [, OrderID] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#itemNameInput').value,
        price: document.querySelector('#itemPriceInput').value,
        orderID: OrderID
      };
      addItems(payload).then(({ name }) => {
        const patchPayload = { firebasekey: name };
        updateItems(patchPayload).then(() => {
          getItems(OrderID).then((array) => {
            renderOrderDetailsPage(OrderID, array);
          });
        });
      });
    }

    if (e.target.id.includes('editItemBtn')) {
      document.querySelector('#pageBottom').innerHTML = '';
      console.warn(e.target.id);
      const [, orderID, itemID] = e.target.id.split('--');
      getSingleItems(itemID).then((itemObj) => renderEditItemPage(itemObj, orderID));
    }

    if (e.target.id.includes('deleteItemBtn')) {
      console.warn('Delete Item Button Clicked!');
      const [, orderID, itemID] = e.target.id.split('--');
      deleteItems(itemID).then(() => {
        getItems(orderID).then((array) => {
          renderOrderDetailsPage(orderID, array);
        });
      });
    }
    if (e.target.id.includes('submitEditItemBtn')) {
      const [, orderid, itemID] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#itemNameInput').value,
        price: document.querySelector('#itemPriceInput').value,
        firebasekey: itemID,
        orderID: orderid
      };
      updateItems(payload).then(() => {
        getItems(orderid).then((array) => {
          console.warn(array);
          renderOrderDetailsPage(orderid, array);
        });
      });
    }
  });

  document.querySelector('#pageBody').addEventListener('click', (e) => {
    if (e.target.id.includes('close-order-btn')) {
      renderRevenuePage();
    }
    if (e.target.id.includes('submit-form-btn')) {
      const orderPayload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        orderType: document.querySelector('#order-type').value
      };
      addOrders(orderPayload).then(renderOrdersOnPage(user));
    }
  });

  document.querySelector('#pageBottom').addEventListener('click', (e) => {
    if (e.target.id.includes('addItemBtn')) {
      const [, orderID] = e.target.id.split('--');
      renderCreateItemPage(orderID);
      document.querySelector('#pageBottom').innerHTML = '';
    }
    if (e.target.id.includes('goToPaymentBtn')) {
      console.warn('Go to Payment Button Clicked!');
      renderCloseOrderPage();
      document.querySelector('#pageBottom').innerHTML = '';
    }
  });
};

export default addEvents;
