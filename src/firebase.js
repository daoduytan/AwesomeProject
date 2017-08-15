import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBOWcF4u-9Ir7i2mcNiXZ8xKgNsR6wXWD8',
  authDomain: 'myapp-d9c24.firebaseapp.com',
  databaseURL: 'https://myapp-d9c24.firebaseio.com',
  projectId: 'myapp-d9c24',
  storageBucket: 'myapp-d9c24.appspot.com',
  messagingSenderId: '101362281404'
};

export const firebaseApp = firebase.initializeApp(config);

