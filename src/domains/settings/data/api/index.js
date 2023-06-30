export const fetchColors = async () => {
  // The caching control could be moved one level up, making the API requests simpler, allowing to
  // use other stuff for caching
  const colors = await fetch('http://localhost:3001/api/colors', { cache: 'force-cache' });
  return colors.json();
};
