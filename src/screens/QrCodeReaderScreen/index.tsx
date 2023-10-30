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
  Dimensions,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import Selector from './selectors';
import reducer from './reducer';
import saga from './saga';
import {} from './actions';
import {
  selectAccountsList,
  selectClientDetailsToken,
  selectRecipients,
} from '../../containers/ClientDetails/selectors';
import {makeSelectSignInUser} from '../../screens/SignIn/selectors';

import QRCodeSanner from 'react-native-qrcode-scanner';
import {
  createPaymentAction,
  getClientDetailsAction,
} from '../../containers/ClientDetails/actions';

const {width} = Dimensions.get('screen');

const key = 'QrCodeReaderScreen';

export const QrCodeReaderScreen: React.FC<IQrCodeReaderScreenProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  /* eslint-disable no-unused-vars */
  const stateSelector = createStructuredSelector({
    user: makeSelectSignInUser,
    client: selectClientDetailsToken,
    recipients: selectRecipients,
    accountList: selectAccountsList,
  });
  /* eslint-disable no-unused-vars */
  const {user, client, recipients, accountList} = useSelector(stateSelector);
  const dispatch = useDispatch();

  /* eslint-disable no-unused-vars */

  const ifScanned = (e: any) => {
    console.log({data: e.data});
    setScannedText(JSON.parse(e.data));
    setScanning(false);
  };
  const [scannedText, setScannedText] = useState(null);

  useEffect(() => {
    dispatch(getClientDetailsAction(user.accountNumber));
  }, [user]);

  const [scanning, setScanning] = useState(true);

  const confirmPayment = () => {
    console.log('CONFIRM PAYMENT', {
      recipients: recipients,
      amount: Number(scannedText.amount),
      motif: scannedText.reason,
      customerNumber: user.accountNumber,
      ribSource: accountList[selectedAccountIndex].externalIdentifier,
      customerFullName:
        scannedText?.client?.firstName + ' ' + scannedText?.client?.lastName,
      ribDestination: scannedText?.account?.externalIdentifier,
      userAgent: 'iOS|13.3|3.0.6|iPhone XS|IAM|fr',
      recipient: 'myrecipient',
      recipientDescription: 'any description',
      category: 'CUSTOMER',
    });

    dispatch(
      createPaymentAction({
        amount: Number(scannedText.amount),
        motif: scannedText.reason,
        customerNumber: user.accountNumber,
        ribSource: accountList[selectedAccountIndex].externalIdentifier,
        customerFullName:
          scannedText?.client?.firstName + ' ' + scannedText?.client?.lastName,
        ribDestination: scannedText?.account?.externalIdentifier,
        userAgent: 'iOS|13.3|3.0.6|iPhone XS|IAM|fr',
        // recipient: 'myrecipient',
        // recipientDescription: 'any description',
        category: 'CUSTOMER',
      }),
    );
    setScannedText(null);
    setScanning(true);
  };

  const [selectedAccountIndex, setselectedAccountIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {scanning ? (
          <QRCodeSanner
            onRead={ifScanned}
            reactivate={true}
            permissionDialogMessage="Need Permission to access camera."
            showMarker={true}
            markerStyle={{borderColor: '#fff', borderRadius: 10}}
            cameraStyle={{width: '100%', height: '100%'}}
          />
        ) : (
          <View style={{paddingTop: 20}}>
            <Text>
              <Text
                style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 18}}>
                Receiver Name:{' '}
              </Text>
              {scannedText?.client?.firstName} {scannedText?.client?.lastName}
            </Text>
            <Text>
              <Text
                style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 18}}>
                Receiver Account:{' '}
              </Text>
              {scannedText.account?.customerId}
            </Text>
            <Text>
              <Text
                style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 18}}>
                Receiver RIB:{' '}
              </Text>
              {scannedText.account?.externalIdentifier}
            </Text>
            <Text>
              <Text
                style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 18}}>
                Amount:{' '}
              </Text>
              {scannedText.amount}
            </Text>
            <Text>
              <Text
                style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 18}}>
                Reason:{' '}
              </Text>
              {scannedText.reason}
            </Text>
            <Text
              style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 18}}>
              Select Account to debit
            </Text>
            <FlatList
              data={accountList}
              keyExtractor={(item, index) => item.externalIdentifier}
              renderItem={({item, index}) => (
                <View
                  style={{
                    paddingBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text>{item.externalIdentifier}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      {item.balance.indicativeBalance.toFixed(2)} MAD
                    </Text>
                  </View>
                  {selectedAccountIndex != index ? (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedAccountIndex(index);
                      }}>
                      <Text>Select</Text>
                    </TouchableOpacity>
                  ) : (
                    <Text>[Selected]</Text>
                  )}
                </View>
              )}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  backgroundColor: 'transparent',
                  marginVertical: 4,
                  marginTop: 30,
                  borderColor: 'grey',
                  borderWidth: 2,
                  borderRadius: 12,
                }}
                onPress={() => {
                  confirmPayment();
                }}>
                <Text>Confirm payment</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  backgroundColor: 'transparent',
                  marginVertical: 4,
                  marginTop: 30,
                  borderColor: 'grey',
                  borderWidth: 2,
                  borderRadius: 12,
                }}
                onPress={() => {
                  setScannedText(null);
                  setScanning(true);
                }}>
                <Text>Scan Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginTop: '35%',
  },
  circle: {
    borderColor: '#37B184',
    borderWidth: 2,
    padding: width / 6,
    borderRadius: 1000,
  },
});

export interface IQrCodeReaderScreenProps {}

export default QrCodeReaderScreen;
