import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import { COLOR } from '../../config';

import Login from './Login';
import Register from './Register';

const TabAuth = TabNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
}, {
  tabBarOptions: {
    inactiveTintColor: COLOR.dask,
    activeTintColor: COLOR.primary,
    tabStyle: {
      height: 100
    },
    indicatorStyle: {
      backgroundColor: COLOR.primary
    },
    style: {
      backgroundColor: '#fff'
    }
  },
});

class Auth extends Component {
  static navigationOptions = () => ({
    header: null
  })
  render() {
    return (
      <TabAuth />
    );
  }
}

export default Auth;
