/**
 *
 * TransactionScreen
 *
 */

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({});

const key = 'transactionScreen';

export const TransactionScreen: React.FC<ITransactionScreenProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  return <Text> Transactions </Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    padding: '2%',
    paddingLeft: '5%',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
  storeName: {
    width: '60%',
  },
  storeNameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    width: '40%',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(255,149,21)',
  },
  cardBody: {
    flexDirection: 'row',
    marginBottom: '5%',
    width: '90%',
  },
  cardItemDanger: {
    backgroundColor: 'rgba(220, 53, 69,0.4)',
    borderRadius: 10,
    paddingHorizontal: 10,
    // marginHorizontal:"5%",
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  itemTextDanger: {
    color: 'rgba(220, 53, 69,0.9)',
  },
  cardItemSuccess: {
    backgroundColor: 'rgba(40, 167, 69,0.4)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '5%',
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  itemTextSuccess: {
    color: 'rgba(40, 167, 69,0.9)',
  },
  cardItemAmount: {
    backgroundColor: 'rgba(0, 123, 255,0.4)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '5%',
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    width: '30%',
    alignItems: 'center',
  },
  itemTextAmount: {
    color: 'rgba(0, 123, 255,0.9)',
  },
  cardFooter: {
    flexDirection: 'row',
  },
  amount: {
    width: '20%',
  },
  amountText: {},
  defaulPoint: {
    width: '80%',
    // alignItems: 'flex-end',
    paddingVertical: 10,
  },
  defaulPointZone: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#37B184',
    color: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  defaulPointText: {
    color: '#fff',
    fontSize: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export interface ITransactionScreenProps {}

export default TransactionScreen;
