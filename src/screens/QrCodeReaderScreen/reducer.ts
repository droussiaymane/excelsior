/*
 *
 * QrCodeScreen reducer
 *
 */

import produce from 'immer';
import {DEFAULT_ACTION} from './constants';

export const initialState = {
  qrcode: {},
  errors: '',
  loading: false,
  order: {},
  errorsOrder: '',
  loadingOrder: false,
};

/* eslint-disable default-case, no-param-reassign */
const qrCodeScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
  }
}, initialState);

export default qrCodeScreenReducer;
