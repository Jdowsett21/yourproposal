import { combineReducers } from 'redux';
import inViewReducer from './inViewReducer';
import companyReducer from './companyReducer';
export default combineReducers({
  inView: inViewReducer,
  company: companyReducer,
});
