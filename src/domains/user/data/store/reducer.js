import { SET_USER_INFO, SET_COLOR, SET_TERMS_AGREEMENT } from 'domains/user/data/store/actionTypes';

const initialState = {
  name: 'Jon Doe',
  email: 'a@b.com',
  password: '',
  favoriteColor: 'red',
  agreedToTerms: true,
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
    case SET_TERMS_AGREEMENT: {
      const { agreedToTerms } = action.payload;

      return {
        ...state,
        agreedToTerms,
      };
    }
    default: {
      return state;
    }
  }
};
