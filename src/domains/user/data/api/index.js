import { post } from 'app/api/request';

export const submitUserData = async (user) => {
  const response = await post('http://localhost:3001/api/submit', user);
  return response.status === 200;
};
