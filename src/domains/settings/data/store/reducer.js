import { SET_COLORS, SET_COLORS_LOADING } from 'domains/settings/data/store/actionTypes';

const initialState = {
  colorsArray: [],
  loading: true,
};

export const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS: {
      const { colorsArray } = action.payload;

      return {
        ...state,
        colorsArray,
      };
    }
    case SET_COLORS_LOADING: {
      const { loading } = action.payload;

      return {
        ...state,
        loading,
      };
    }
    default: {
      return state;
    }
  }
};
