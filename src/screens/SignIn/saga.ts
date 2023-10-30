import {AnyAction} from 'redux';
import {
  take,
  call,
  put,
  select,
  takeEvery,
  all,
  takeLatest,
} from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from './constants';
import axios from 'axios';
import {navigate} from '../../utils/routNavigation';
import {signInSuccessAction, signInErrorAction} from './actions';
import {loadState, saveState} from '../../utils/localstorage';
import {SCREENS} from '../../navigators/constants';
import {API_URL, API_ROUT_USER} from '../../utils/constants';

const signInUser = async (info: any) => {
  const {data} = await axios.post(API_URL + API_ROUT_USER + 'login', info);

  return data;
};

function* fetchUser({payload}: AnyAction) {
  // console.log(payload);

  try {
    yield put(signInSuccessAction(payload));
    navigate(SCREENS.TAB);

    // const user:any= {} =  yield signInUser(payload)

    // yield put(signInSuccessAction(user))

    // yield saveState('token',user.token)
    // navigate(SCREENS.TAB,{token:user.token})
  } catch (error) {
    yield put(signInErrorAction(error.response.data));
    console.log(error.response.data);
  }
}

export default function* signInSaga() {
  yield takeLatest(SIGN_IN_REQUEST, fetchUser);
}
