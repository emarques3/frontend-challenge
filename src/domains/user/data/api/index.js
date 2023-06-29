export const submitUserData = async (user) => {
  const response = await fetch('http://localhost:3001/api/submit', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status === 200;
};
