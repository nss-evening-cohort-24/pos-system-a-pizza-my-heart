import renderToDOM from '../utils/renderToDom';

const renderOrderDetailsPage = (array) => {
  let domString = `
  <h1> Total: $80.00 </h1>`;

  const itemCards = array.forEach(`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" class="btn btn-link" id="editItemBtn">Edit Item</button>
            <button type="button" class="btn btn-link" id="deleteItemBtn">Delete Item</button>
    </div>
   `);
  domString += itemCards;
  renderToDOM('#pageBody', domString);
  domString = `
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" id="addItemBtn">Add Item</button>
        <button class="btn btn-success" type="button" id="goToPaymentBtn">Go to Payment</button>
    </div>
  `;
  renderToDOM('#pageBottom', domString);
};

export default renderOrderDetailsPage;
