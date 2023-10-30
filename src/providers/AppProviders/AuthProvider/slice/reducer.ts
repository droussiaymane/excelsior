/*
 *
 * AuthProvider reducer
 *
 */

import produce from 'immer';
import {GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_ERROR} from './constants';

export const initialState = {
  token: '',
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const authProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_TOKEN:
      draft.loading = true;
    case GET_TOKEN_SUCCESS:
      draft.loading = false;
      draft.token = action.token;
    case GET_TOKEN_ERROR:
      draft.loading = false;
      draft.error = action.error;
  }
}, initialState);

export default authProviderReducer;
