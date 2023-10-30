import {AnyAction} from 'redux';
import {takeLatest, call, put, select} from 'redux-saga/effects';
import {CONFIRM_ORDER_REQUEST} from './constants';
import {confirmOrderSuccessAction, confirmOrderFailAction} from './actions';
import {API_URL, API_ROUT_TRANSACTION} from '../../utils/constants';

import request from '../../utils/request';

const confirmeOrder = async ({id_order, type, token}: any) => {
  const {data} = await request.post(
    API_ROUT_TRANSACTION,
    {id_order, type},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};
export function* defaultEffect({payload}: AnyAction) {
  // console.log({ payload });
  try {
    const transaction = yield confirmeOrder(payload);
    console.log(transaction);

    yield put(confirmOrderSuccessAction(transaction));
  } catch (error) {
    yield put(confirmOrderFailAction(error));
  }
}

export default function* confirmOrderScreenSaga() {
  yield takeLatest(CONFIRM_ORDER_REQUEST, defaultEffect);
}
