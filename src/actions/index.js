import * as firebase from 'firebase';
import { firebaseApp } from '../../src/firebase';
import {
  EMAIL_TYPE,
  PASSWORD_TYPE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from '../types';

export const emailType = (email) => ({
  type: EMAIL_TYPE,
  email
});

export const passwordType = (password) => ({
  type: PASSWORD_TYPE,
  password
});

export const signupUser = ({ email, password }) => async (dispatch) => {
  try {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        signupUserSuccess(dispatch, user);
        firebase.database().ref(`users/${user.uid}`).update({ email, password });
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      error
    });
  }
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_SUCCESS,
    user
  });
};
