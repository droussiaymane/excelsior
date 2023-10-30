import { AnyAction } from 'redux';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_USER_REQUEST } from './constants';
import { getUserSuccessAction,getUserFailAction } from './actions';
import {API_URL,API_ROUT_USER} from '../../utils/constants'
import axios from 'axios'

const getUser = async ({token}:any)=>{
  const {data} =await axios.get(API_URL+API_ROUT_USER+'getUser',{headers:{
    Authorization:`Bearer ${token}`
  }})
  
  return data
}

export function* defaultEffect(token: AnyAction) {
try {
  const {user} = yield getUser(token)
  yield put(getUserSuccessAction(user)) 
} catch (error) {
  yield put(getUserFailAction(error))
}
}

// Individual exports for testing
export default function* profileScreenSaga() {
  yield takeLatest(GET_USER_REQUEST, defaultEffect);
}
