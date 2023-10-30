/*
 *
 * ClientDetails constants
 *
 */

export const GET_CLIENT_DETAILS_ACTION =
  'app/ClientDetails/GET_CLIENT_DETAILS_ACTION';
export const GET_CLIENT_DETAILS_SUCCESS_ACTION =
  'app/ClientDetails/GET_CLIENT_DETAILS_SUCCESS_ACTION';
export const GET_CLIENT_DETAILS_FAIL_ACTION =
  'app/ClientDetails/GET_CLIENT_DETAILS_FAIL_ACTION';

export const GET_ACCOUNTS_DETAILS_ACTION =
  'app/ClientDetails/GET_ACCOUNTS_DETAILS_ACTION';
export const GET_ACCOUNTS_DETAILS_SUCCESS_ACTION =
  'app/ClientDetails/GET_ACCOUNTS_DETAILS_SUCCESS_ACTION';
export const GET_ACCOUNTS_DETAILS_FAIL_ACTION =
  'app/ClientDetails/GET_ACCOUNTS_DETAILS_FAIL_ACTION';

export const GET_RECIPIENTS_ACTION = 'app/ClientDetails/GET_RECIPIENTS_ACTION';
export const GET_RECIPIENTS_SUCCESS_ACTION =
  'app/ClientDetails/GET_RECIPIENTS_SUCCESS_ACTION';
export const GET_RECIPIENTS_FAIL_ACTION =
  'app/ClientDetails/GET_RECIPIENTS_FAIL_ACTION';

export const CREATE_PAYMENT_ACTION = 'app/ClientDetails/CREATE_PAYMENT_ACTION';

export const CREATE_PAYMENT_SUCCESS_ACTION =
  'app/ClientDetails/CREATE_PAYMENT_SUCCESS_ACTION';

export const CREATE_PAYMENT_FAIL_ACTION =
  'app/ClientDetails/CREATE_PAYMENT_FAIL_ACTION';

export const webService = {
  GET_CLIENT: accountNumber =>
    'https://api.sgmaroc.com/api/tiers/customer-service/v1/customers/detail?customerNumber=' +
    accountNumber,
  GET_ACCOUNTS_DETAILS: accountNumber =>
    'https://api.sgmaroc.com/api/tiers/customer-service/v1/customers/' +
    accountNumber +
    '/products',
  GET_ARECIPIENTS: accountNumber =>
    'https://api.sgmaroc.com/api/transaction/transfer-service/v1/recipients/customers/' +
    accountNumber,
  ADD_RECIPIENT: accountNumber =>
    'https://api.sgmaroc.com/api/transaction/transfer-service/v1/recipients/customers/' +
    accountNumber,
  CREA_PAYMENT:
    'https://api.sgmaroc.com/api/transaction/transfer-service/v1/transfers/beneficiary',
  CREATE_TRANSACTION: 'https://www.excelsior-network.com/api/api-aymane/add',
};
