import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrders = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const addOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebasekey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleOrders = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebasekey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteOrders = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebasekey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getOrders, addOrders, updateOrders, getSingleOrders, deleteOrders
};
