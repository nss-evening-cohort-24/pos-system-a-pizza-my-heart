import renderToDOM from '../utils/renderToDom';

const renderCreateEditOrder = (obj = {}, orderID) => {
  const domString = `
  <form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'create-order'}" class="new-order-form">
      <div class="form-group">
        <label for="text">customer name</label>
        <input type="text" class="form-control" id="order-name" placeholder="Enter customer name" value="${obj.orderName || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">customer Phone number</label>
        <input type="text" class="form-control" id="customer-phone" placeholder="Enter customer phone number" value="${obj.customerPhone || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">customer email</label>
        <input type="languageortech" class="form-control" id="customer-email" aria-describedby="languageortech" placeholder="Enter customer email" value="${obj.customerEmail || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">phone-in or walk-in</label>
        <input type="text" class="form-control" id="order-type" placeholder="phone-in or walk-in?" value="${obj.orderType || ''}" required>
      </div>
      <input type="checkbox" id="orderStatus" name="orderStatus" value="${obj.status || ''}">
      <label for="orderStatus">Active Order</label><br>
      <button type="submit" id="submit-form-btn--${orderID}" class="btn btn-primary mt-3">Submit Order</button>
    </form>`;

  renderToDOM('#pageBody', domString);
};

export default renderCreateEditOrder;
