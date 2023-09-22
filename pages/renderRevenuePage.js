import renderToDOM from '../utils/renderToDom';

const renderRevenuePage = () => {
  const domString = `
  <br><br/>
  <h1>REVENUE</h1>
  <br><br/>
  <h1>TOTAL REVENUE: $</h1>
  <br><br/>
  <p>DATE RANGE: </p>
  <br>
  <p>TOTAL TIPS: $</p>
  <p>TOTAL CALL IN ORDERS: </p>
  <p>TOTAL WALK IN ORDERS: </p>
  <br>
  <p>PAYMENT TYPES: </p>
  <p>CASH - </p>
  <p>CREDIT - </p>
  <p>MOBILE - </p>`;

  renderToDOM('#pageBody', domString);
};

export default renderRevenuePage;
