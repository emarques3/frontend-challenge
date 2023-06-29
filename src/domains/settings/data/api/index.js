export const fetchColors = async () => {
  const colors = await fetch('http://localhost:3001/api/colors');
  return colors.json();
};
