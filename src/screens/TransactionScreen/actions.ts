/*
 *
 * TransactionScreen actions
 *
 */

import {GET_TRANSACTION_REQUEST,GET_TRANSACTION_SUCCESS,GET_TRANSACTION_FAIL} from './constants';

export function getTransactionRequestAction(token) {
  return {
    type: GET_TRANSACTION_REQUEST,
    token
  };
}
export function getTransactionSuccessAction(transactions) {
  return {
    type: GET_TRANSACTION_SUCCESS,
    transactions
  };
}
export function getTransactionFailtAction(error) {
  return {
    type: GET_TRANSACTION_FAIL,
    error
  };
}
