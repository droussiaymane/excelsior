/*
 *
 * ConfirmOrderScreen reducer
 *
 */

import produce from 'immer';
import {CONFIRM_ORDER_REQUEST,CONFIRM_ORDER_SUCCESS,CONFIRM_ORDER_FAIL} from './constants';

export const initialState = {
  loading: false,
  transaction:{},
  error:""
};

/* eslint-disable default-case, no-param-reassign */
const confirmOrderScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case CONFIRM_ORDER_REQUEST:
      draft.loading = true;
    case CONFIRM_ORDER_SUCCESS:
      draft.loading = false;
      draft.transaction = action.transaction;
    case CONFIRM_ORDER_FAIL:
      draft.loading = false;
      draft.error = action.error;
  }
}, initialState);

export default confirmOrderScreenReducer;
