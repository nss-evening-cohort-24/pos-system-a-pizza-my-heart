import client from '../utils/client';

const endpoint = client.databaseURL;

const getItems = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const postItems = (payload) => new Promise((resolve, reject) => {
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

const patchItems = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${payload.firebaseKey}.json`, {
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

const getSingleItems = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteItems = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
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
  getItems, postItems, patchItems, getSingleItems, deleteItems
};
