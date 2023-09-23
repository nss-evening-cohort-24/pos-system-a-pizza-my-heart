import renderRevenuePage from '../pages/renderRevenuePage';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
import renderCreateItemPage from '../pages/renderCreateItemPage';
import renderEditItemPage from '../pages/renderEditItemPage';
import {
  addItems, getItems, getSingleItems, updateItems, deleteItems
} from '../api/items';
import {
  addOrders, deleteOrders, getOrders, getSingleOrders, updateOrders
} from '../api/orders';
import { showOrders, showEmptyOrdersPage } from '../pages/ordersOnDom';
import renderCreateEditOrder from '../pages/renderEditOrder';
import renderCreateOrder from '../pages/renderCreateOrder';
import renderCloseOrderPage from '../pages/renderCloseOrderPage';
import renderOrdersOnPage from '../pages/viewOrders';
import renderEmptyItemsPage from '../pages/renderEmptyItemsPage';

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
      document.querySelector('#pageBottom').innerHTML = '';
      renderCreateOrder();
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
          renderOrderDetailsPage(firebaseKey, array);
        } else {
          renderEmptyItemsPage(firebaseKey);
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

  document.querySelector('#pageBody').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('close-order-btn')) {
      const [, tiplessTotal] = e.target.id.split('--');
      const tipValue = (document.querySelector('#tip-amount').value);
      const finalTotal = Number(tiplessTotal) + Number(tipValue);
      console.warn(finalTotal);
      renderRevenuePage();
    }
    if (e.target.id.includes('create-order')) {
      const orderPayload = {
        orderName: document.querySelector('#order-name').value,
        status: document.querySelector('#orderStatus').checked,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        isPhone: document.querySelector('#order-type').value,
        uid: user.uid
      };
      addOrders(orderPayload).then(({ name }) => {
        const patchPayload = { firebasekey: name };
        updateOrders(patchPayload).then(() => {
          renderOrdersOnPage(user);
          console.warn(patchPayload);
        });
      });
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
      const [, , orderTotal] = e.target.id.split('--');
      renderCloseOrderPage(orderTotal);
      document.querySelector('#pageBottom').innerHTML = '';
    }
  });
};

export default addEvents;
