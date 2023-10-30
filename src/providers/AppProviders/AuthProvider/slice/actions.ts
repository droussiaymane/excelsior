/**
 *
 */

import {GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_ERROR} from './constants';

export const getTokenAction = () => ({type: GET_TOKEN});
export const getTokenSuccessAction = (token: string) => ({
  type: GET_TOKEN_SUCCESS,
  token,
});
export const getTokenErrorAction = (error: any) => ({
  type: GET_TOKEN_ERROR,
  error,
});
