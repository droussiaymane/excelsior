/**
 *
 * QrCodeScreen
 *
 */

import React, {useEffect, useState} from 'react';
// import Popup from '../../components/Popup'
import Popup from '../../screens/ConfirmOrderScreen';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import Selector, {
  makeSelectSigQrCodeLoading,
  makeSelectSQrCodError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  selectClientDetailsToken,
  selectAccountsList,
  selectAccountListLoading,
} from '../../containers/ClientDetails/selectors';
import {makeSelectSignInUser} from '../../screens/SignIn/selectors';

import QRCode from 'react-native-qrcode-svg';
import {
  getAccountsDetailsAction,
  getClientDetailsAction,
  getRecipientsAction,
} from '../../containers/ClientDetails/actions';
import {ClientDetailsComponent} from '../../components/ClientDetails';
import {AccountListComponent} from '../../components/AccountList';

const key = 'qrCodeScreen';

export const QrCodeScreen: React.FC<IQrCodeScreenProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  /* eslint-disable no-unused-vars */
  const stateSelector = createStructuredSelector({
    user: makeSelectSignInUser,
    client: selectClientDetailsToken,
    accountsList: selectAccountsList,
    accountListLoading: selectAccountListLoading,
  });
  /* eslint-disable no-unused-vars */
  const {user, client, accountsList, accountListLoading} =
    useSelector(stateSelector);
  const dispatch = useDispatch();

  /* eslint-disable no-unused-vars */

  useEffect(() => {
    dispatch(getClientDetailsAction(user.accountNumber));
    dispatch(getAccountsDetailsAction(user.accountNumber));
    dispatch(getRecipientsAction(user.accountNumber));
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <ClientDetailsComponent client={client} />
      {accountListLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <AccountListComponent accounts={accountsList} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export interface IQrCodeScreenProps {}

export default QrCodeScreen;
