import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the qrCodeScreen state domain
 */

const selectQrCodeScreenDomain = (state: any) =>
  state.QrCodeReaderScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by QrCodeScreen
 */
// const makeSelectQrCode = createSelector(
//   selectQrCodeScreenDomain,
//   substate => substate.qrcode,
// );

const makeSelectQrCodeScreen = () =>
  createSelector(selectQrCodeScreenDomain, substate => substate);

export default makeSelectQrCodeScreen;
export {selectQrCodeScreenDomain};
