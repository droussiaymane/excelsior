import React, {useState} from 'react';

import {
  FlatList,
  Modal,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {IMAGES} from '../../assets/assets';
import {selectClientDetailsToken} from '../../containers/ClientDetails/selectors';

const stateSelector = createStructuredSelector({
  client: selectClientDetailsToken,
});
interface IAccountListComponrntProps {
  accounts: Array<{
    customerType: string;
    customerId: string;
    accountType: string;
    accountClass: string;
    accountNumber: string;
    branchCode: string;
    balance: {
      indicativeBalance: number;
      availableBalance: number;
      accountingBalance: number;
      lastMovementDate: string;
      availableBalanceWithOverDraft: number;
    };
    openingDate: string;
    product: {
      code: string;
      type: string;
      designation: string;
    };
    externalIdentifier: string;
    currency: {
      alphaCode: string;
      numericCode: string;
    };
  }>;
}
const AccountListComponent = ({accounts}: IAccountListComponrntProps) => {
  const {client} = useSelector(stateSelector);
  const [modalProps, setModalProps] = useState({
    show: false,
    data: {},
  });
  const [amountRequested, setAmountRequested] = useState('0');
  const [reasonRequested, setReasonRequested] = useState('');
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalProps.show}
        onRequestClose={() => {
          setModalProps({
            show: false,
            data: {},
          });
        }}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setModalProps({
                show: false,
                data: {},
              });
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              backgroundColor: 'transparent',
            }}>
            <QRCode
              value={JSON.stringify(modalProps.data)}
              size={300}
              logo={IMAGES.LOGO_MINIMIFIED}
              backgroundColor="transparent"
            />
          </View>
        </SafeAreaView>
      </Modal>
      <View>
        <TextInput
          placeholder="Request Payment with Amount"
          style={{
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
            margin: 10,
          }}
          keyboardType="numeric"
          onChangeText={e => {
            setAmountRequested(e);
          }}
          defaultValue={amountRequested}
        />
        <TextInput
          placeholder="Reason"
          style={{
            borderRadius: 10,
            borderColor: 'grey',
            borderWidth: 1,
            margin: 10,
          }}
          onChangeText={e => {
            setReasonRequested(e);
          }}
          defaultValue={reasonRequested}
        />

        <Text style={{textAlign: 'center', paddingVertical: 10}}>
          My Accounts
        </Text>
        <FlatList
          data={accounts}
          contentContainerStyle={{
            marginBottom: 500,
          }}
          keyExtractor={(item, index) => item.externalIdentifier}
          renderItem={({item}) => (
            <View
              style={{
                borderRadius: 15,
                marginHorizontal: 10,
                marginVertical: 10,
                borderWidth: 1,
                borderColor: 'grey',
                padding: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontWeight: 'bold'}}>
                    {item.product.designation}
                  </Text>
                  <Text>{item.externalIdentifier}</Text>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                    setModalProps({
                      show: true,
                      data: {
                        account: item,
                        amount: amountRequested,
                        client: client,
                        reason: reasonRequested,
                      },
                    });
                  }}>
                  <Text>Request Payment</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    padding: 10,
                    fontWeight: 'bold',
                  }}>
                  {item.balance.indicativeBalance.toFixed(2)} MAD
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

export {AccountListComponent};
