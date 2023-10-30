/*
 *
 * ClientDetails reducer
 *
 */

import produce from 'immer';
import {
  GET_CLIENT_DETAILS_ACTION,
  GET_CLIENT_DETAILS_FAIL_ACTION,
  GET_CLIENT_DETAILS_SUCCESS_ACTION,
  GET_ACCOUNTS_DETAILS_ACTION,
  GET_ACCOUNTS_DETAILS_FAIL_ACTION,
  GET_ACCOUNTS_DETAILS_SUCCESS_ACTION,
  GET_RECIPIENTS_ACTION,
  GET_RECIPIENTS_SUCCESS_ACTION,
  GET_RECIPIENTS_FAIL_ACTION,
} from './constants';

export const initialState = {
  client: '',
  loading: false,
  error: '',
  accountListLoading: false,
  accountList: [],
  accountsListerror: '',
  recipients: [],
  recipientsLoading: false,
  recipientsError: '',
};

/* eslint-disable default-case, no-param-reassign */
const clientDetailsReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_RECIPIENTS_ACTION:
      draft.recipientsLoading = true;
      break;
    case GET_RECIPIENTS_SUCCESS_ACTION:
      draft.recipients = action.recipients;
      draft.recipientsLoading = false;
      break;
    case GET_RECIPIENTS_FAIL_ACTION:
      draft.recipientsError = action.error;
      draft.recipientsLoading = false;
      break;
    case GET_CLIENT_DETAILS_ACTION:
      draft.loading = true;
      break;
    case GET_CLIENT_DETAILS_SUCCESS_ACTION:
      draft.client = action.client;
      draft.loading = false;
      break;
    case GET_CLIENT_DETAILS_FAIL_ACTION:
      draft.error = action.error;
      draft.loading = false;
      break;
    case GET_ACCOUNTS_DETAILS_ACTION:
      draft.accountListLoading = true;
      break;
    case GET_ACCOUNTS_DETAILS_FAIL_ACTION:
      draft.accountListLoading = false;
      draft.accountsListerror = action.error;
      break;
    case GET_ACCOUNTS_DETAILS_SUCCESS_ACTION:
      draft.accountListLoading = false;
      draft.accountList = action.accountList;
      break;
  }
}, initialState);

export default clientDetailsReducer;
