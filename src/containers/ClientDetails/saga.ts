import {AnyAction} from 'redux';
import {
  take,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {
  CREATE_PAYMENT_ACTION,
  CREATE_PAYMENT_FAIL_ACTION,
  GET_ACCOUNTS_DETAILS_ACTION,
  GET_CLIENT_DETAILS_ACTION,
  GET_RECIPIENTS_ACTION,
  GET_RECIPIENTS_SUCCESS_ACTION,
  webService,
} from './constants';
import {
  createPaymentErrorction,
  createPaymentSuccessAction,
  getAccountsDetailsFailAction,
  getAccountsDetailsSuccessAction,
  getClientDetailsFailAction,
  getClientDetailsSuccessAction,
  getRecipientsErrorAction,
  getRecipientsSuccessAction,
} from './actions';
import request from '../../utils/request';
import {selectRecipients} from './selectors';
import shortid from 'shortid';
import {ToastAndroid} from 'react-native';

function* fetchClient({accountNumber}: AnyAction) {
  try {
    const {data} = yield call(
      request.get,
      webService.GET_CLIENT(accountNumber),
    );

    yield put(getClientDetailsSuccessAction(data));
  } catch (error) {
    yield put(getClientDetailsFailAction({error}));
  }
}

function* fetchAccounts({accountNumber}: AnyAction) {
  try {
    const {data} = yield call(
      request.get,
      webService.GET_ACCOUNTS_DETAILS(accountNumber),
    );

    yield put(getAccountsDetailsSuccessAction(data.accountList));
  } catch (error) {
    yield put(getAccountsDetailsFailAction({error}));
  }
}

function* fetchRecipients({accountNumber}: AnyAction) {
  try {
    const {data} = yield call(
      request.get,
      webService.GET_ARECIPIENTS(accountNumber),
    );

    yield put(getRecipientsSuccessAction(data.content));
  } catch (error) {
    yield put(getRecipientsErrorAction({error}));
  }
}

function* createPayment({payload}: AnyAction) {
  try {
    const reciepients = yield select(selectRecipients);
    /**
     * {
        "fullName": "myrecipient2",
        "label": "myrecipient2",
        "rib": "022780000043001041559674",
        "creationDate": "2022-03-27T05:26:39.001"
      }
     */

    const recipient = (reciepients || []).find(
      r => r.rib === payload.ribDestination,
    );

    const dataToSend = {...payload};
    if (recipient) {
      dataToSend.recipient = recipient.label;
      dataToSend.recipientDescription = recipient.fullName;
      const {data} = yield call(
        request.post,
        webService.CREA_PAYMENT,
        dataToSend,
      );
      yield call(request.post, webService.CREATE_TRANSACTION, data);

      yield put(createPaymentSuccessAction(data));

      ToastAndroid.show('Payment with Success ! 👌🏼', ToastAndroid.LONG);
    } else {
      const TEMPORARY_RECIPIENT_DESCRIPTION =
        'TEMPORARY_RECIPIENT_DESCRIPTION' + shortid.generate();
      const TEMPORARY_RECIPIENT_LABEL =
        'TEMPORARY_RECIPIENT_LABEL' + shortid.generate();
      yield call(
        request.post,
        webService.ADD_RECIPIENT(payload.customerNumber),
        {
          fullName: TEMPORARY_RECIPIENT_DESCRIPTION,
          label: TEMPORARY_RECIPIENT_LABEL,
          rib: payload.ribDestination,
        },
      );
      dataToSend.recipient = TEMPORARY_RECIPIENT_LABEL;
      dataToSend.recipientDescription = TEMPORARY_RECIPIENT_DESCRIPTION;
      const {data} = yield call(
        request.post,
        webService.CREA_PAYMENT,
        dataToSend,
      );

      yield call(request.post, webService.CREATE_TRANSACTION, data);
      yield put(createPaymentSuccessAction(data));
      ToastAndroid.show('Payment with Success ! 👌🏼', ToastAndroid.LONG);
    }
  } catch (error) {
    ToastAndroid.show('Technical Error, shit happends ! 🤷🏻‍♂️', ToastAndroid.LONG);
    yield put(createPaymentErrorction({error}));
  }
}

// Individual exports for testing
export default function* clientDetailsSaga() {
  yield takeLatest(GET_CLIENT_DETAILS_ACTION, fetchClient);
  yield takeLatest(GET_ACCOUNTS_DETAILS_ACTION, fetchAccounts);
  yield takeLatest(GET_RECIPIENTS_ACTION, fetchRecipients);
  yield takeLatest(CREATE_PAYMENT_ACTION, createPayment);
}
