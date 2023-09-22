import renderToDOM from '../utils/renderToDom';

const renderCloseOrderPage = (obj = {}) => {
  const domString = `
    <form id="${obj.firebaseKey}" class="close-order-form">
      <div class="form-group">
        <label for="payment-type">Payment Type</label>
        <select class="form-select" id="payment-type" required>
          <option value="" disabled selected>Open this select menu</option>
          <option value="${obj.isPhone || ''}">phone</option>
          <option value="${obj.isPhone || ''}">in-person</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tip-amount">Tip Amount</label>
        <input type="number" class="form-control" id="tip-amount" placeholder="Enter Tip Amount" value="${obj.tipTotal || ''}" required step="1" min="0">
      </div>
      <button type="submit" id="close-order-btn" class="btn btn-primary mt-3">Close Order</button>
    </form>`;

  renderToDOM('#pageBody', domString);
};

export default renderCloseOrderPage;
