import renderToDOM from '../utils/renderToDom';

const renderCreateItemPage = (orderID) => {
  const domString = `
  <form>
    <input class="form-control form-control-lg" type="text" placeholder="Item Name" aria-label=".form-control-lg example" id="itemNameInput" required>
    <input class="form-control form-control-lg" type="text" placeholder="Item Price" aria-label=".form-control-lg example" id="itemPriceInput" required>
    <button type="button" class="btn btn-success btn-lg" id="submitAddItemBtn--${orderID}">Add Item</button>
  </form>`;

  renderToDOM('#pageBody', domString);
};

export default renderCreateItemPage;
