import { SET_USER_INFO } from 'domains/user/data/store/actionTypes';

const initialState = {
  name: 'Jon Doe',
  email: '',
  password: '',
  chosenColor: '',
  agreedToTerms: false,
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
    default: {
      return state;
    }
  }
};
