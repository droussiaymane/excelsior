/*
 *
 * PointScreen actions
 *
 */

import {GET_POINTS_REQUEST,GET_POINTS_SUCCESS,GET_POINTS_FAIL} from './constants';

export function getPointsRequestAction(token) {
  return {
    type: GET_POINTS_REQUEST,
    token
  };
}
export function getPointsSuccessAction(points) {
  return {
    type: GET_POINTS_SUCCESS,
    points
  };
}
export function getPointsFailAction(error) {
  return {
    type: GET_POINTS_FAIL,
    error
  };
}
