import renderRevenuePage from '../pages/renderRevenuePage';

const addEvents = () => {
  document.querySelector('#pageBody').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      console.warn('View Order Button Clicked!');
    }
    if (e.target.id.includes('createOrderBtn')) {
      console.warn('Create Order Button Clicked!');
    }
    if (e.target.id.includes('viewRevenueBtn')) {
      renderRevenuePage();
    }
    if (e.target.id.includes('addEditItemBtn')) {
      const itemName = document.querySelector('#itemNameInput').value;
      const itemPrice = document.querySelector('#itemPriceInput').value;
      console.warn(`Item Name: ${itemName} Item Price: ${itemPrice}`);
    }
  });
};

export default addEvents;
