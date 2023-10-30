/*
 *
 * PointScreen reducer
 *
 */

import produce from 'immer';
import {GET_POINTS_REQUEST,GET_POINTS_SUCCESS,GET_POINTS_FAIL} from './constants';

export const initialState = {
  points:[],
  errors:'',
  loading:false
};

/* eslint-disable default-case, no-param-reassign */
const pointScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_POINTS_REQUEST:
      draft.loading=true
    case GET_POINTS_SUCCESS:
      draft.loading=false
      draft.points=action.points

    case GET_POINTS_REQUEST:
      draft.loading=false
      draft.error=action.error
  }
}, initialState);

export default pointScreenReducer;
