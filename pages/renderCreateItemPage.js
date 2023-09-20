import renderToDOM from '../utils/renderToDom';

const renderCreateItemPage = () => {
  const domString = `
    <input class="form-control form-control-lg" type="text" placeholder="Item Name" aria-label=".form-control-lg example" id="itemNameInput">
    <input class="form-control form-control-lg" type="text" placeholder="Item Price" aria-label=".form-control-lg example" id="itemPriceInput">
    <button type="button" class="btn btn-success btn-lg" id="addItemBtn">Add Item</button>`;

  renderToDOM('#pageBody', domString);
};

export default renderCreateItemPage;
