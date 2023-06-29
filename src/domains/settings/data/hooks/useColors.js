import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColors } from 'domains/settings/data/api';
import { getColorsArray, getColorsLoading } from 'domains/settings/data/store/selectors';
import { setColorsArray, setColorsLoading } from 'domains/settings/data/store/actions';

export const useColors = () => {
  const dispatch = useDispatch();
  const colorsArray = useSelector(getColorsArray);
  const loading = useSelector(getColorsLoading);

  useEffect(() => {
    async function Fecth() {
      const fetchedColors = await fetchColors();
      dispatch(setColorsArray({ colorsArray: fetchedColors }));
    }
    // Supposing once colors are received from server, they'll never change
    if (colorsArray.length === 0) {
      Fecth();
    }
  }, []);

  useEffect(() => {
    if (colorsArray.length > 0) {
      dispatch(setColorsLoading({ loading: false }));
    }
  }, [colorsArray]);

  return { colors: colorsArray, loading };
};
