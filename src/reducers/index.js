import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';

const reducerApp = combineReducers({
  nav: NavReducer,
  auth: AuthReducer
});

export default reducerApp;
