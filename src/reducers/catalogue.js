import { FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from '../actions/types'


const catalogueReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_CATALOGUE_SUCCESS:
      return {
        ...state,
        catalogue: action.payload
      }
  default:
    return state;}
}

export default catalogueReducer;