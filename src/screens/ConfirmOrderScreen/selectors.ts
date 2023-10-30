import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the confirmOrderScreen state domain
 */

const selectConfirmOrderScreenDomain = (state: any) =>
  state.confirmOrderScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConfirmOrderScreen
 */

const makeSelectConfirmOrderScreen = () =>
  createSelector(selectConfirmOrderScreenDomain, substate => substate);

export default makeSelectConfirmOrderScreen;
export {selectConfirmOrderScreenDomain};
