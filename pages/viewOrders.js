import { getOrders } from '../api/orders';
import { showEmptyOrdersPage, showOrders } from './ordersOnDom';

const renderOrdersOnPage = (user) => {
  getOrders(user).then((array) => {
    if (array.length) {
      showOrders(array);
    } else {
      showEmptyOrdersPage();
    }
  });
};
export default renderOrdersOnPage;
