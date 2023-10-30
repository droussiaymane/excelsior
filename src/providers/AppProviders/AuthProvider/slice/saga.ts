import {takeLatest, call, put, select} from 'redux-saga/effects';

import {GET_TOKEN} from './constants';
import {getTokenErrorAction, getTokenSuccessAction} from './actions';

import request from '../../../../utils/request';
import base64 from 'react-native-base64';

const qs = require('qs');

export function* getToken() {
  try {
    const reqData = qs.stringify({grant_type: 'client_credentials'});

    const config = {
      method: 'post',
      url: 'https://api.sgmaroc.com/auth/realms/realm-api/protocol/openid-connect/token',
      headers: {
        Authorization:
          'Basic ZmludGVjLWJmZjpjMjRlMWRiYy01N2VmLTRkOTgtYTVlMi1kOWRlYWI0NjU3YTU=',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: reqData,
    };

    const {data} = yield call(request, config);

    console.log(data);

    yield put(getTokenSuccessAction(data.access_token));
  } catch (error) {
    yield put(getTokenErrorAction(error));
  }
}

export default function* confirmOrderScreenSaga() {
  yield takeLatest(GET_TOKEN, getToken);
}
