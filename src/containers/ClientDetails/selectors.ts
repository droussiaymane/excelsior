import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the clientDetails state domain
 */

const selectClientDetailsDomain = state => state.clientDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ClientDetails
 */

const makeSelectClientDetails = () =>
  createSelector(selectClientDetailsDomain, substate => substate);

const selectClientDetailsToken = createSelector(
  selectClientDetailsDomain,
  substate => substate.client,
);
const selectAccountsList = createSelector(
  selectClientDetailsDomain,
  substate => substate.accountList,
);
const selectAccountListLoading = createSelector(
  selectClientDetailsDomain,
  substate => substate.accountListLoading,
);
const selectRecipients = createSelector(
  selectClientDetailsDomain,
  substate => substate.recipients,
);
const selectRecipientsLoading = createSelector(
  selectClientDetailsDomain,
  substate => substate.recipientsLoading,
);

export default makeSelectClientDetails;
export {
  selectClientDetailsDomain,
  selectAccountsList,
  selectClientDetailsToken,
  selectAccountListLoading,
  selectRecipients,
  selectRecipientsLoading,
};
