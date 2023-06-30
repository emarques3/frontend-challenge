import { get } from 'app/api/request';

export const fetchColors = async () => {
  // The caching control could live here, or be moved one level up, making the API requests simpler, allowing to
  // use other tools for caching
  const colors = await get('http://localhost:3001/api/colors', { cache: 'force-cache' });
  return colors.json();
};
