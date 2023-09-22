import renderToDOM from '../utils/renderToDom';

const renderEditItemPage = (obj = {}) => {
  const domString = `
    <input class="form-control form-control-lg" type="text" placeholder="Item Name" aria-label=".form-control-lg example" id="itemNameInput" value="${obj.name}">
    <input class="form-control form-control-lg" type="text" placeholder="Item Price" aria-label=".form-control-lg example" id="itemPriceInput" value="${obj.price}">
    <button type="button" class="btn btn-success btn-lg" id="submitEditItemBtn--${obj.firebasekey}">Edit Item</button>`;

  renderToDOM('#pageBody', domString);
};

export default renderEditItemPage;
