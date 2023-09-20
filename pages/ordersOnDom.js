import renderToDOM from '../utils/renderToDom';

const noOrders = () => {
  const domString = '<h1>No Orders found.</h1>';
  renderToDOM('#', domString);
};

const ordersOnDom = (array) => {
  const addBtn = '<button type="button" class="add-card-btn" id="add-button">Add an Order</button>';
  renderToDOM('#', addBtn);

  let domString = '';
  if (array.length < 1) {
    domString += '<p>No Orders here!</p>';
  } else {
    array.forEach((e) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id=""></h5>
        <p class="card-text" id=""></p>
        <p class="card-text" id=""></p>
        <p class="card-text" id=""></p>
        <button type="button" id="delete-btn--${e.firebaseKey}" class="delete-btn">Delete</button>
        <button type="button" id="edit-btn--${e.firebaseKey}" class="edit-btn">Edit</button>
      </div>
    </div>`;
    });
  }
  renderToDOM('#', domString);
};

export { noOrders, ordersOnDom };
