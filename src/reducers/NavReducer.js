import { NavigationActions } from 'react-navigation';

import { Router } from '../router';

const firstAction = Router.router.getActionForPathAndParams('Auth');
const taskAction = Router.router.getActionForPathAndParams('Tasks');

const initialState = Router.router.getStateForAction(
  firstAction,
  taskAction
);

const NavReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'Login':
      return ( 
        nextState = Router.router.getStateForAction(
          NavigationActions.back(),
          state
        )
      );

    case 'Task': 
      nextState = Router.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;

    default:
      nextState = Router.router.getStateForAction(action, state);
  }

  return nextState || state;
};

export default NavReducer;

