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
    // Caching is being handled in the API level
    Fecth();
  }, []);

  useEffect(() => {
    if (colorsArray.length > 0) {
      dispatch(setColorsLoading({ loading: false }));
    }
  }, [colorsArray]);

  return { colors: colorsArray, loading };
};
