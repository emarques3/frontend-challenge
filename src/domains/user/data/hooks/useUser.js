import { useDispatch, useSelector } from 'react-redux';
import {
  getAgreedToTerms,
  getFavoriteColor,
  getLoading,
  getUserPassword,
  getUserEmail,
  getUserName,
} from 'domains/user/data/store/selectors';
import {
  setColor,
  setLoading as setLoadingAction,
  setTerms as setTermsAction,
  setUserInfo as setUserInfoAction,
  reset as resetAction,
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
  const loading = useSelector(getLoading);

  const reset = () => {
    dispatch(resetAction());
  };

  const setUserInfo = (value) => {
    dispatch(setUserInfoAction(value));
  };

  const setFavoriteColor = (value) => {
    dispatch(setColor(value));
  };

  const setLoading = (value) => {
    dispatch(setLoadingAction({ loading: value }));
  };

  const setTerms = (value) => {
    dispatch(setTermsAction(value));
  };

  const submit = async () => {
    const success = await submitUserData({
      name: userName,
      email: userEmail,
      password: userPassword,
      color: favoriteColor,
      terms: agreedToTerms,
    });

    const page = success ? SuccessRoute : ErrorRoute;
    navigate(page.path);
    setLoading(false);
  };

  const passwordDigits = '•'.repeat(userPassword.length);

  return {
    agreedToTerms,
    favoriteColor,
    loading,
    passwordDigits,
    reset,
    setFavoriteColor,
    setLoading,
    setTerms,
    setUserInfo,
    submit,
    userEmail,
    userName,
    userPassword,
  };
};
