import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the qrCodeScreen state domain
 */

const selectQrCodeScreenDomain = (state: any) =>
  state.qrCodeScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by QrCodeScreen
 */
 const makeSelectQrCode = createSelector(
  selectQrCodeScreenDomain,
  (substate) => substate.qrcode
)
const makeSelectSigQrCodeLoading = createSelector(
  selectQrCodeScreenDomain,
  (substate) => substate.loading,
);
const makeSelectSQrCodError = createSelector(
  selectQrCodeScreenDomain,
  (substate) => substate.errors
)

const makeSelectOrder = createSelector(
  selectQrCodeScreenDomain,
  (substate) => substate.order
)
const makeSelectQrCodeScreen = () =>
  createSelector(selectQrCodeScreenDomain, substate => substate);

export default makeSelectQrCodeScreen;
export {selectQrCodeScreenDomain,makeSelectQrCode,makeSelectSigQrCodeLoading,makeSelectSQrCodError,makeSelectOrder};
