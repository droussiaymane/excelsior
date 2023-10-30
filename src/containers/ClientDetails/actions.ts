/*
 *
 * ClientDetails actions
 *
 */

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
  CREATE_PAYMENT_ACTION,
  CREATE_PAYMENT_SUCCESS_ACTION,
  CREATE_PAYMENT_FAIL_ACTION,
} from './constants';

export function createPaymentAction(payload: any) {
  return {
    type: CREATE_PAYMENT_ACTION,
    payload,
  };
}

export function createPaymentSuccessAction(transaction: any) {
  return {
    type: CREATE_PAYMENT_SUCCESS_ACTION,
    transaction,
  };
}

export function createPaymentErrorction(error: any) {
  return {
    type: CREATE_PAYMENT_FAIL_ACTION,
    error,
  };
}

export function getRecipientsAction(accountNumber: string) {
  return {
    type: GET_RECIPIENTS_ACTION,
    accountNumber,
  };
}

export function getRecipientsSuccessAction(recipients) {
  return {
    type: GET_RECIPIENTS_SUCCESS_ACTION,
    recipients,
  };
}

export function getRecipientsErrorAction(error) {
  return {
    type: GET_RECIPIENTS_FAIL_ACTION,
    error,
  };
}

export function getAccountsDetailsAction(accountNumber: string) {
  return {
    type: GET_ACCOUNTS_DETAILS_ACTION,
    accountNumber,
  };
}

export function getAccountsDetailsSuccessAction(accountList: Array<any>) {
  return {
    type: GET_ACCOUNTS_DETAILS_SUCCESS_ACTION,
    accountList,
  };
}

export function getAccountsDetailsFailAction(error) {
  return {
    type: GET_ACCOUNTS_DETAILS_FAIL_ACTION,
    error,
  };
}

export function getClientDetailsAction(accountNumber) {
  return {
    type: GET_CLIENT_DETAILS_ACTION,
    accountNumber,
  };
}
export function getClientDetailsSuccessAction(client: Array<any>) {
  return {
    type: GET_CLIENT_DETAILS_SUCCESS_ACTION,
    client,
  };
}
export function getClientDetailsFailAction(error) {
  return {
    type: GET_CLIENT_DETAILS_FAIL_ACTION,
    error,
  };
}
