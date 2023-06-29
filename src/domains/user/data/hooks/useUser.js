import { useDispatch, useSelector } from 'react-redux';
import {
  getAgreedToTerms,
  getChosenColor,
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
  const chosenColor = useSelector(getChosenColor);
  const agreedToTerms = useSelector(getAgreedToTerms);

  const setUserInfo = (value) => {
    dispatch(setUserInfoAction(value));
  };

  const setChosenColor = (value) => {
    dispatch(setColor(value));
  };

  const setTerms = (value) => {
    dispatch(setTermsAction(value));
  };

  return { userName, userEmail, setUserInfo, chosenColor, agreedToTerms, setChosenColor, setTerms };
};
