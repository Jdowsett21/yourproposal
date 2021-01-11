import { combineReducers } from 'redux';
import emailReducer from '../reducers/emailReducer';
export default combineReducers({
  email: emailReducer,
});
