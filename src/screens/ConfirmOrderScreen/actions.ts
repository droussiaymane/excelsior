/*
 *
 * ConfirmOrderScreen actions
 *
 */

import {CONFIRM_ORDER_REQUEST,CONFIRM_ORDER_SUCCESS,CONFIRM_ORDER_FAIL} from './constants';

export function confirmOrderRequestAction(payload:any) {
  return {
    type: CONFIRM_ORDER_REQUEST,
    payload
  };
}
export function confirmOrderSuccessAction(transaction) {
  return {
    type: CONFIRM_ORDER_SUCCESS,
    transaction
  };
}
export function confirmOrderFailAction(error) {
  return {
    type: CONFIRM_ORDER_FAIL,
    error
  };
}
