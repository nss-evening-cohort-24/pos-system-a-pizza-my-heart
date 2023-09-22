import renderRevenuePage from '../pages/renderRevenuePage';
import renderOrderDetailsPage from '../pages/renderOrderDetailsPage';
import renderCreateItemPage from '../pages/renderCreateItemPage';
import renderEditItemPage from '../pages/renderEditItemPage';
import {
  addItems, getItems, getSingleItems, updateItems
} from '../api/items';
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
      const [, OrderID] = e.target.split('--');
      const payload = {
        name: document.querySelector('#itemNameInput').value,
        price: document.querySelector('#itemPriceInput').value,
        orderID: OrderID
      };
      addItems(payload).then(({ name }) => {
        const patchPayload = { firebasekey: name };
        updateItems(patchPayload).then(() => {
          getItems(OrderID).then((array) => {
            renderOrderDetailsPage(array);
          });
        });
      });
    }

    if (e.target.id.includes('editItemBtn')) {
      document.querySelector('#pageBottom').innerHTML = '';
      const [, itemID] = e.target.id.split('--');
      getSingleItems(itemID).then((itemObj) => renderEditItemPage(itemObj));
    }
    if (e.target.id.includes('deleteItemBtn')) {
      console.warn('Delete Item Button Clicked!');
    }
    if (e.target.id.includes('submitEditItemBtn')) {
      const [, itemID] = e.target.id.split('--');
      getSingleItems(itemID).then((item) => {
        const payload = {
          name: document.querySelector('#itemNameInput').value,
          price: document.querySelector('#itemPriceInput').value,
          firebasekey: itemID,
          orderID: item
        };
        updateItems(payload).then((editedArray) => {
          getItems(editedArray.orderID).then((array) => {
            renderOrderDetailsPage(array);
          });
        });
      });

      // updateItems(payload).then((item) => {
      //   console.warn(item);
      // getItems(item.orderID).then((array) => {
      //   renderOrderDetailsPage(array);
      // });
      // });
      //  TO-DO: API Calls to patch in edits to item array
      // renderOrderDetailsPage();
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
