import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Auth from './screens/Auth';
import Task from './screens/Tasks';

export const Router = StackNavigator({
  Auth: { screen: Auth },
  Task: { screen: Task }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <Router 
    navigation={addNavigationHelpers({
      dispatch, state: nav
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
