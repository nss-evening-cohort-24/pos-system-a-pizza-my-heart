import renderToDOM from '../utils/renderToDom';

const showEmptyOrdersPage = () => {
  const domString = '<h1>No Orders found.</h1>';
  renderToDOM('#pageBody', domString);
};

const showOrders = (array) => {
  let domString = '';
  if (array.length < 1) {
    domString += '<p>No Orders here!</p>';
  } else {
    array.forEach((e) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="ordername">${e.orderName}</h5>
        <p class="card-text" id="orderstatus">${e.status}</p>
        <p class="card-text" id="customerphone">${e.customerPhone}</p>
        <p class="card-text" id="customeremail">${e.customerEmail}</p>
        <p class="card-text" id="customernumber">${e.customerNumber}</p>
        <p class="card-text" id="orderstatus">${e.isPhone}</p>
        <button type="button" id="details-btn--${e.firebasekey}" class="details-btn">Details</button>
        <button type="button" id="delete-btn--${e.firebasekey}" class="delete-btn">Delete</button>
        <button type="button" id="edit-btn--${e.firebasekey}" class="edit-btn">Edit</button>
      </div>
    </div>`;
    });
  }
  renderToDOM('#pageBody', domString);
};

export { showEmptyOrdersPage, showOrders };
