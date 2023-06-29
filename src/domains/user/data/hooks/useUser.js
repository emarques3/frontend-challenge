import { useDispatch, useSelector } from 'react-redux';
import {
  getAgreedToTerms,
  getFavoriteColor,
  getUserPassword,
  getUserEmail,
  getUserName,
} from 'domains/user/data/store/selectors';
import {
  setColor,
  setTerms as setTermsAction,
  setUserInfo as setUserInfoAction,
} from 'domains/user/data/store/actions';
import { submitUserData } from 'domains/user/data/api';
import { useNavigate } from 'react-router-dom';
import SuccessRoute from 'pages/Success/route';
import ErrorRoute from 'pages/Error/route';

export const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const userPassword = useSelector(getUserPassword);
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

  const submit = async () => {
    const success = await submitUserData({
      name: userName,
      email: userEmail,
      password: userPassword ?? 'xxxxx',
      color: favoriteColor,
      terms: agreedToTerms,
    });

    const page = success ? SuccessRoute : ErrorRoute;
    navigate(page.path);
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
    submit,
    userEmail,
    userName,
  };
};
