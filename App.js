import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducerApp from './src/reducers';

import AppWithNavigationState from './src/router';

const store = createStore(reducerApp, applyMiddleware(thunk));

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
         <AppWithNavigationState />
      </Provider>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('MyApp', () => Root);
