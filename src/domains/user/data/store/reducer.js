import {
  RESET,
  SET_COLOR,
  SET_LOADING,
  SET_TERMS_AGREEMENT,
  SET_USER_INFO,
} from 'domains/user/data/store/actionTypes';

const initialState = {
  name: 'Jon Doe',
  email: 'a@b.com',
  password: '',
  favoriteColor: 'red',
  agreedToTerms: true,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      const { name, email, password } = action.payload;

      return {
        ...state,
        name,
        email,
        password,
      };
    }
    case SET_COLOR: {
      const { favoriteColor } = action.payload;

      return {
        ...state,
        favoriteColor,
      };
    }
    case SET_LOADING: {
      const { loading } = action.payload;

      return {
        ...state,
        loading,
      };
    }
    case SET_TERMS_AGREEMENT: {
      const { agreedToTerms } = action.payload;

      return {
        ...state,
        agreedToTerms,
      };
    }
    case RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
