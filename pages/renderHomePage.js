import navBar from '../components/shared/navBar';
import renderToDOM from '../utils/renderToDom';

const renderHomePage = () => {
  navBar();
  const domString = `
    <button type="button" class="btn btn-primary btn-lg" id="viewOrderBtn">View Orders</button>
    <button type="button" class="btn btn-success btn-lg" id="createOrderBtn">Create an Order</button>
    <button type="button" class="btn btn-info btn-lg" id="viewRevenueBtn">View Revenue</button>`;
  renderToDOM('#pageBody', domString);
};

export default renderHomePage;
