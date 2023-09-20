import renderToDOM from '../utils/renderToDom';

const renderRevenuePage = () => {
  const domString = `
  <h1>REVENUE</h1>`;

  renderToDOM('#pageBody', domString);
};

export default renderRevenuePage;
