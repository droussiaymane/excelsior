/*
 *
 * SignIn actions
 *
 */

import { DEFAULT_ACTION, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from './constants';

export function signInAction(payload:object) {
  return {
    type: SIGN_IN_REQUEST,
    payload
  };
}
export function signInSuccessAction(user:object) {
  return {
    type: SIGN_IN_SUCCESS,
    user
  };
}
export function signInErrorAction(error:object) {
  return {
    type: SIGN_IN_FAIL,
    error
  };
}
