import renderToDOM from '../utils/renderToDom';

const renderEmptyItemsPage = (orderID) => {
  let domString = `
  <h1> Your order is currently empty!</h1>
    `;
  renderToDOM('#pageBody', domString);

  domString = `
    <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary" type="button" id="addItemBtn--${orderID}">Add Item</button>`;
  renderToDOM('#pageBottom', domString);
};

export default renderEmptyItemsPage;
