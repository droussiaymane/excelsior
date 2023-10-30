import { AnyAction } from 'redux';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GET_TRANSACTION_REQUEST } from './constants';
import { getTransactionSuccessAction,getTransactionFailtAction } from './actions';
import {API_URL,API_ROUT_TRANSACTION} from '../../utils/constants'
import axios from 'axios'

const getTransactionsFromApi =async (token)=>{
  const {data} = await axios.get(API_URL+API_ROUT_TRANSACTION,{headers: {
    Authorization:`Bearer ${token}`
  }})
  // console.log(token);
  
  return data
}
export function* fechTransaction( {token} : AnyAction) {
try {
  const transactions = yield getTransactionsFromApi(token)
  // console.log(transactions);
  
  yield put(getTransactionSuccessAction(transactions))
} catch (error) {
  yield put(getTransactionFailtAction(error))
}
}

// Individual exports for testing
export default function* transactionScreenSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_TRANSACTION_REQUEST, fechTransaction);
}
