import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="pageBody"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
