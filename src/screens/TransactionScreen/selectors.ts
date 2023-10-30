import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the transactionScreen state domain
 */

const selectTransactionScreenDomain = (state: any) =>
  state.transactionScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TransactionScreen
 */

const makeSelectTransactionScreen = () =>
  createSelector(selectTransactionScreenDomain, substate => substate);

  const makeSelectTransactionsScreen = 
  createSelector(selectTransactionScreenDomain, substate => substate.transactions?.order);

export default makeSelectTransactionScreen;
export {selectTransactionScreenDomain,makeSelectTransactionsScreen};
