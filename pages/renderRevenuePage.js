import renderToDOM from '../utils/renderToDom';

const renderRevenuePage = () => {
  const domString = `
  <br><br/>
  <h1>REVENUE</h1>
  <br><br/>
  <h1>TOTAL REVENUE: $224</h1>
  <br><br/>
  <p>DATE RANGE: 9/22/2023 - 9/23/2023</p>
  <br>
  <p>TOTAL TIPS: $10</p>
  <p>TOTAL CALL IN ORDERS: 2</p>
  <p>TOTAL WALK IN ORDERS: 3</p>
  <br>
  <p>PAYMENT TYPES:</p>
  <p>CASH - 3</p>
  <p>CREDIT - 5</p>
  <p>MOBILE - 2</p>`;

  renderToDOM('#pageBody', domString);
};

export default renderRevenuePage;
