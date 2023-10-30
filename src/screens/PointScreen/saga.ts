import { AnyAction } from 'redux';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios'
import { GET_POINTS_REQUEST} from './constants';
import {getPointsSuccessAction,getPointsFailAction} from './actions'
import {API_URL,API_ROUT_USER} from '../../utils/constants'

const getPointsFromApi = async (token)=>{
  const {data} = await axios.get(API_URL+API_ROUT_USER+'getPoints',{headers: {
    Authorization:`Bearer ${token}`
  }})
  
  return data
}


function* fetchPoints({ token}:AnyAction){
  try {
    const points = yield getPointsFromApi(token)
    yield put(getPointsSuccessAction(points))
  } catch (error) {
    yield put(getPointsFailAction(error))
    
  }
}

export default function* pointScreenSaga() {
  yield takeLatest(GET_POINTS_REQUEST, fetchPoints);
}
