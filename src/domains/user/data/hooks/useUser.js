import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'domains/user/data/store/selectors';
import { setCurrentValue } from 'domains/user/data/store/actions';

export const useUser = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const setValue = (value) => {
    dispatch(setCurrentValue({ value }));
  };

  return { userName, setValue };
};
