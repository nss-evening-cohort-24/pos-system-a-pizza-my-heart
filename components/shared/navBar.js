import renderToDOM from '../../utils/renderToDom';
import hipHopPizzaImage from '../../image/HHP.png';

const navBar = (user) => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
    <img src="${hipHopPizzaImage}" alt="hip hop pizza wings" class="navbar-brand title image-small" id="hip-hop-pizza-btn">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="view-orders-btn">
                View Orders <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-an-order-btn--${user.uid}">Create an Order</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button">LOGOUT</div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
