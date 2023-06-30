export const get = async (url, options) => fetch(url, options);

export const post = async (url, body) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
