import { useDispatch, useSelector } from 'react-redux';
import {
  getAgreedToTerms,
  getFavoriteColor,
  getUserEmail,
  getUserName,
} from 'domains/user/data/store/selectors';
import {
  setColor,
  setTerms as setTermsAction,
  setUserInfo as setUserInfoAction,
} from 'domains/user/data/store/actions';

export const useUser = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const favoriteColor = useSelector(getFavoriteColor);
  const agreedToTerms = useSelector(getAgreedToTerms);

  const setUserInfo = (value) => {
    dispatch(setUserInfoAction(value));
  };

  const setFavoriteColor = (value) => {
    dispatch(setColor(value));
  };

  const setTerms = (value) => {
    dispatch(setTermsAction(value));
  };

  // TODO: add logic
  const passwordDigits = '*******';

  return {
    agreedToTerms,
    favoriteColor,
    passwordDigits,
    setFavoriteColor,
    setTerms,
    setUserInfo,
    userEmail,
    userName,
  };
};
