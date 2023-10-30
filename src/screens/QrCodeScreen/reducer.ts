/*
 *
 * QrCodeScreen reducer
 *
 */

import produce from 'immer';
import {GET_QRCODE_REQUEST,GET_QRCODE_SUCCESS,GET_QRCODE_FAIL,GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL} from './constants';

export const initialState = {
  qrcode:{},
  errors:'',
  loading:false,
  order:{},
  errorsOrder:'',
  loadingOrder:false
};

/* eslint-disable default-case, no-param-reassign */
const qrCodeScreenReducer = produce((draft, action) => {
  
  switch (action.type) {
    case GET_QRCODE_REQUEST:
      draft.loading = true;
    case GET_QRCODE_SUCCESS:
      draft.loading = false;
      draft.qrcode = action.qrcode;
    case GET_QRCODE_FAIL:
      draft.errors = action.error
      draft.loading = false;
      case GET_ORDER_REQUEST:
      draft.loadingOrder = true;
    case GET_ORDER_SUCCESS:
      draft.loadingOrder = false;
      draft.order = action.order;
    case GET_ORDER_FAIL:
      draft.errorsOrder = action.error
      draft.loadingOrder = false;
  }
}, initialState);

export default qrCodeScreenReducer;
