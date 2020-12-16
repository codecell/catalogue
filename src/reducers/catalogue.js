import { FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from '../actions/types';

const initialState = {
  catalogue: [],
  apiError: '',
};

/* eslint-disable no-console */

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOGUE_SUCCESS:
      return {
        ...state,
        catalogue: action.payload,
        apiError: '',
      };
    case FETCH_CATALOGUE_FAILURE:
      return {
        ...state,
        catalogue: [],
        apiError: action.apiError,
      };
    default:
      return state;
  }
};

export default catalogueReducer;
