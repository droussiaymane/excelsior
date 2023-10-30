/*
 *
 * TransactionScreen reducer
 *
 */

import produce from 'immer';
import {GET_TRANSACTION_REQUEST,GET_TRANSACTION_SUCCESS,GET_TRANSACTION_FAIL} from './constants';

export const initialState = {
  loading: false,
  transactions:[],
  error:""
};

/* eslint-disable default-case, no-param-reassign */
const transactionScreenReducer = produce((draft, action) => {
  
  switch (action.type) {
    case GET_TRANSACTION_REQUEST:
      draft.loading=true
    case GET_TRANSACTION_SUCCESS:
      draft.loading=false
      draft.transactions=action.transactions
    case GET_TRANSACTION_FAIL:
      draft.loading=false
      draft.error=action.error
  }
}, initialState);

export default transactionScreenReducer;
