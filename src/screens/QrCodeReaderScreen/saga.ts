// import { AnyAction } from 'redux';
import {put, takeLatest} from 'redux-saga/effects';
import {DEFAULT_ACTION} from './constants';
import {} from './actions';
import axios from 'axios';
import {API_URL, API_ROUT_USER} from '../../utils/constants';
import {AnyAction} from 'redux';

// ******************QrCode functions ****************************
// const getQrCodeFromApi = async token => {
//   const {data} = await axios.get(API_URL + API_ROUT_USER + 'getqr', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return data;
// };

export default function* qrCodeScreenSaga() {
  // yield takeLatest(DEFAULT_ACTION, getQrCodeFromApi);
}
