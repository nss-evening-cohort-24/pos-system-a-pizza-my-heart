import client from '../utils/client';

const endpoint = client.databaseURL;

const getItems = (item) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="orderID"&equalTo="${item.orderID}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const addItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
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

const updateItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${payload.firebasekey}.json`, {
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

const getSingleItems = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebasekey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteItems = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebasekey}.json`, {
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
  getItems, addItems, updateItems, getSingleItems, deleteItems
};
