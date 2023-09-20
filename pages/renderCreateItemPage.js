import navBar from '../components/shared/navBar';
import renderToDOM from '../utils/renderToDom';

const renderCreateItemPage = () => {
  navBar();
  const domString = `
    <input class="form-control form-control-lg" type="text" placeholder="Item Name" aria-label=".form-control-lg example">
    <input class="form-control form-control-lg" type="text" placeholder="Item Price" aria-label=".form-control-lg example">`;

  renderToDOM('#pageBody', domString);
};

export default renderCreateItemPage;
import navBar from '../components/shared/navBar';
import renderToDOM from '../utils/renderToDom';

const renderCreateItemPage = () => {
  navBar();
  const domString = `
    <input class="form-control form-control-lg" type="text" placeholder="Item Name" aria-label=".form-control-lg example" id="itemNameInput">
    <input class="form-control form-control-lg" type="text" placeholder="Item Price" aria-label=".form-control-lg example" id="itemPriceInput">
    <button type="button" class="btn btn-success btn-lg" id="addEditItemBtn">Add/Edit</button>`;

  renderToDOM('#pageBody', domString);
};

export default renderCreateItemPage;
