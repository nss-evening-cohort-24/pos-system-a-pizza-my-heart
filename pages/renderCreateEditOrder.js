import renderToDOM from '../utils/renderToDom';

const renderCreateEditOrder = (obj = {}) => {
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
      <button type="submit" id="submit-form-btn" class="btn btn-primary mt-3">Submit Order</button>
    </form>`;

  renderToDOM('#pageBody', domString);
};

export default renderCreateEditOrder;
