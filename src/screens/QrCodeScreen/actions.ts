/*
 *
 * QrCodeScreen actions
 *
 */

import {
  GET_QRCODE_REQUEST, 
  GET_QRCODE_SUCCESS, 
  GET_QRCODE_FAIL, 
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL
} from './constants';


  // *******************qrCode Actions***********
   
export function getQrCodeRequestAction(token) {
  return {
    type: GET_QRCODE_REQUEST,
    token
  };
}
export function getQrCodeSucessAction(qrcode) {
  return {
    type: GET_QRCODE_SUCCESS,
    qrcode
  };
}
export function getQrCodeFailAction(error) {
  return {
    type: GET_QRCODE_FAIL,
    error
  };
}

  // ****************Order Actions****************

export function getOrderRequestAction(token) {
  return {
    type: GET_ORDER_REQUEST,
    token
  };
}
export function getOrderSucessAction(order) {
  return {
    type: GET_ORDER_SUCCESS,
    order
  };
}
export function getOrderFailAction(error) {
  return {
    type: GET_ORDER_FAIL,
    error
  };
}
