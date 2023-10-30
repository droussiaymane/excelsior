/*
 *
 * ProfileScreen actions
 *
 */

import {GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL} from './constants';

export function getUserRequestAction(token) {
  return {
    type: GET_USER_REQUEST,
    token
  };
}
export function getUserSuccessAction(user) {
  return {
    type: GET_USER_SUCCESS,
    user
  };
}
export function getUserFailAction(error) {
  return {
    type: GET_USER_FAIL,
    error
  };
}
