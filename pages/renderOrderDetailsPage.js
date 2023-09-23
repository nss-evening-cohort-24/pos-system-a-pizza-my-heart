import renderToDOM from '../utils/renderToDom';

const renderOrderDetailsPage = (orderID, itemsArray) => {
  let counter = 0;
  itemsArray.forEach((item) => {
    counter += Number(item.price);
  });
  let domString = `
  <h1> Total: $${counter} </h1>`;

  itemsArray.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">PRICE: $${item.price}</p>
            <button type="button" class="btn btn-link" id="editItemBtn--${orderID}--${item.firebasekey}">Edit Item</button>
            <button type="button" class="btn btn-link" id="deleteItemBtn--${orderID}--${item.firebasekey}">Delete Item</button>
    </div>
   `;
  });
  renderToDOM('#pageBody', domString);
  domString = `
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" id="addItemBtn--${orderID}">Add Item</button>
        <button class="btn btn-success" type="button" id="goToPaymentBtn--${orderID}--${counter}">Go to Payment</button>
    </div>
  `;
  renderToDOM('#pageBottom', domString);
};

export default renderOrderDetailsPage;
