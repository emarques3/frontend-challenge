import { useEffect, useState } from 'react';
import { fetchColors } from 'domains/settings/data/api';

export const useColors = () => {
  // TODO: initialize with colors from store, if any
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function Fecth() {
      const fetchedColors = await fetchColors();
      // TODO: set colors in store to avoid empty state
      setColors(fetchedColors);
    }
    Fecth();
  }, []);

  return { colors };
};
