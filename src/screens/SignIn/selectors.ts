import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signIn state domain
 */

const selectSignInDomain = (state: any) => state.signIn || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignIn
 */
const makeSelectSignInUser = createSelector(
  selectSignInDomain,
  (substate) => substate.user
)
const makeSelectTokenUser = createSelector(
  selectSignInDomain,
  (substate) => substate?.user?.token
)
const makeSelectSignInLoading = createSelector(
  selectSignInDomain,
  (substate) => substate.loading,
);
const makeSelectSignInError = createSelector(
  selectSignInDomain,
  (substate) => substate.error
)
const makeSelectSignPayload = createSelector(
  selectSignInDomain,
  (substate) => substate.payload,
);
const makeSelectSignIn = () =>
  createSelector(selectSignInDomain, substate => substate);

export default makeSelectSignIn;
export { selectSignInDomain, makeSelectSignInUser, makeSelectSignPayload, makeSelectSignInLoading, makeSelectSignInError, makeSelectTokenUser };
