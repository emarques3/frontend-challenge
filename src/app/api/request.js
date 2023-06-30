/*
Here's the place to define possible ways to make network requests.
This should abstract the technology used for its consumers (axios, fetch, etc)
*/

export const get = async (url, options) => fetch(url, options);

export const post = async (url, body) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
