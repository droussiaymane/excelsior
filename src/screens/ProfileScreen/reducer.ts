/*
 *
 * ProfileScreen reducer
 *
 */

import produce from 'immer';
import {GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL} from './constants';

export const initialState = {
  user:{},
  error:"",
  loading:false
};

/* eslint-disable default-case, no-param-reassign */
const profileScreenReducer = produce((draft, action) => {
  
  switch (action.type) {
    case GET_USER_REQUEST:
      draft.loading=true
    case GET_USER_SUCCESS:
      draft.loading=false
      draft.user=action.user
    case GET_USER_FAIL:
      draft.loading=false
      draft.error=action.error
  }
}, initialState);

export default profileScreenReducer;
