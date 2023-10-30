import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the pointScreen state domain
 */

const selectPointScreenDomain = (state: any) =>
  state.pointScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PointScreen
 */

const makeSelectPointScreen = () =>
  createSelector(selectPointScreenDomain, substate => substate);

  const makeSelectPointsLoading = createSelector(
    selectPointScreenDomain,
    (substate) => substate.loading,
  );

export default makeSelectPointScreen;
export {selectPointScreenDomain,makeSelectPointsLoading};
