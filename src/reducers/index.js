import { combineReducers } from 'redux';
import catalogueReducer from './catalogue';


export const reducers = combineReducers({
  catalogue: catalogueReducer,
})