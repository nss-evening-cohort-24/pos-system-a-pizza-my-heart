const addEvents = () => {
  document.querySelector('#pageBody').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      console.warn('View Order Button Clicked!');
    }
    if (e.target.id.includes('createOrderBtn')) {
      console.warn('Create Order Button Clicked!');
    }
    if (e.target.id.includes('viewRevenueBtn')) {
      console.warn('View Revenue Button Clicked!');
    }
  });
};

export default addEvents;
