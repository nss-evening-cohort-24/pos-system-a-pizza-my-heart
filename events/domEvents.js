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
  });
};

export default addEvents;
