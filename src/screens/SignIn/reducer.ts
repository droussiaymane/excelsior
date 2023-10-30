/*
 *
 * SignIn reducer
 *
 */

import produce from 'immer';
import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL} from './constants';

export const initialState = {
  user: {},
  // payload: {},
  loading: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = produce((draft, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      draft.loading = false;
      draft.user = {
        accountNumber: action.accountNumber,
      };
    case SIGN_IN_SUCCESS:
      draft.loading = false;
      draft.user = action.user;

    case SIGN_IN_FAIL:
      draft.loading = false;
      draft.error = action.payload;
  }
}, initialState);

export default signInReducer;
