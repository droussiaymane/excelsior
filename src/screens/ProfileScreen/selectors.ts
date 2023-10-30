import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the profileScreen state domain
 */

const selectProfileScreenDomain = (state: any) =>
  state.profileScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileScreen
 */

const makeSelectProfileScreen = () =>
  createSelector(selectProfileScreenDomain, substate => substate);

  const makeSelectUserScreen = 
  createSelector(selectProfileScreenDomain, (substate) => substate.user);

  const makeSelectOrder = createSelector(
    selectProfileScreenDomain,
    (substate) => substate.user
  )

export default makeSelectProfileScreen;
export {selectProfileScreenDomain,makeSelectUserScreen,makeSelectOrder};
