import { combineReducers } from 'redux';
import emailReducer from '../reducers/emailReducer';
import inViewReducer from './inViewReducer';
export default combineReducers({
  email: emailReducer,
  inView: inViewReducer,
});
