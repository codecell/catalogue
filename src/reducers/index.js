import { combineReducers } from 'redux';
import catalogueReducer from './catalogue';

export default combineReducers({
  catalogue: catalogueReducer,
});
