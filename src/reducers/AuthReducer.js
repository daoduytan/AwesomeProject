import {
  EMAIL_TYPE,
  PASSWORD_TYPE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../types';

const InitalState = {
  email: '',
  password: '',
  error: null,
  user: null
};

export default (state = InitalState, action) => {
  switch (action.type) {
    case EMAIL_TYPE: 
      return { ...state, email: action.email, error: null };
    case PASSWORD_TYPE: 
      return { ...state, password: action.password, error: null };
    case SIGNUP_SUCCESS: 
      return { ...state, user: action.user, email: '', password: '' };
    case SIGNUP_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
