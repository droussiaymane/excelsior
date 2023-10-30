// import { AnyAction } from 'redux';
import {put,takeLatest } from 'redux-saga/effects';
import {GET_QRCODE_REQUEST,GET_ORDER_REQUEST} from './constants';
import {getQrCodeSucessAction,getQrCodeFailAction,getOrderSucessAction,getOrderFailAction} from './actions'
import axios from 'axios'
import {API_URL,API_ROUT_USER} from '../../utils/constants'
import { AnyAction } from 'redux';


  // ******************QrCode functions ****************************  
const getQrCodeFromApi = async (token)=>{
  const {data} = await axios.get(API_URL+API_ROUT_USER+'getqr',{headers: {
    Authorization:`Bearer ${token}`
  }})
  return data
}

function* fetchQrCode({token}:AnyAction){
  try {
    const qrCode = yield getQrCodeFromApi(token)
    // console.log(qrCode);
    yield put(getQrCodeSucessAction(qrCode))
  } catch (error) {
    yield put(getOrderFailAction(error))
    console.log(error);
    
  }
}
// ******************Order functions **************************** 

const getOrderFromApi = async (token)=>{
  const {data} = await axios.get(API_URL+API_ROUT_USER+'getlastorder',{headers: {
    Authorization:`Bearer ${token}`
  }})
  return data
}

function* fetchOrder({token}:AnyAction){
  try {
    const order = yield getOrderFromApi(token)
    console.log(order);
    yield put(getOrderSucessAction(order))
  } catch (error) {
    yield put(getOrderFailAction(error))
    console.log('error');
    
  }
}

export default function* qrCodeScreenSaga() {
  yield takeLatest(GET_QRCODE_REQUEST, fetchQrCode);
  yield takeLatest(GET_ORDER_REQUEST, fetchOrder);
}
