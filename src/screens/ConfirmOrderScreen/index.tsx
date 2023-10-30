/**
 *
 * ConfirmOrderScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { Animated, Modal, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectConfirmOrderScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import {confirmOrderRequestAction} from './actions';
// import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';

import Icon from 'react-native-vector-icons/FontAwesome'

const stateSelector = createStructuredSelector({
  confirmOrderScreen: makeSelectConfirmOrderScreen(),
});

const key = 'confirmOrderScreen';
const { width } = Dimensions.get('screen')

export const ConfirmOrderScreen: React.FC<IConfirmOrderScreenProps> = ({ visible, order,token }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const {_id,used_points,gain_points,amount,store} = order
  // console.log(typeof(used_points));
  
  /* eslint-disable no-unused-vars */
  const { confirmOrderScreen } = useSelector(stateSelector);
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(visible)
  /* eslint-enable no-unused-vars */
  console.log(token);

  // console.log(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const validate = () => {
    let type = order?.used_points ? 'points':'cash'
    const info ={
      id_order:_id,
      token,
      type
    }
    console.log('validate');
    // console.log(info);
    dispatch(confirmOrderRequestAction(info))
  }
  const toggleModal = () => {
    if (visible) {
      setShow(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }
  useEffect(() => {
    toggleModal()

  }, [])
  return (
    <Modal transparent visible={show}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}
        >
          <View style={styles.close}>
            <TouchableOpacity onPress={() => {
              setShow(false)
            }}>
              <Icon name="close" size={20} color='#37B184' />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            {order &&
              <>
                <Text style={styles.message}>a payment from the {store?.name}  {amount} dh pending validation</Text>
                {used_points>0 && <Text style={{ fontSize: 15 }}>used Point : -{order?.used_points}</Text>}
                {gain_points>0 && <Text style={{ fontSize: 15 }}>gain Point : +{order?.gain_points}</Text>}
              </>
            }
            <View style={styles.btns}>
              <TouchableOpacity onPress={() => {
                validate()
              }}>
                <Text style={styles.btnText}>validate</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setShow(false)
              }}>
                <Text style={styles.btnText}>refuser</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,

  },
  close: {
    flexDirection: 'row-reverse',
    marginVertical: 8,
    padding:4
  },
  modalBody: {
    alignItems: 'center'
  },
  btns: {
    flexDirection: 'row',
    width: '116%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#37B184',
    paddingVertical: "7%",
    paddingHorizontal: '20%',
    marginTop: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,

  },
  btnText: {
    color: 'white',
    fontSize: 18
  },
  message: {
    fontSize: 15,
    marginVertical: 5
  }
});


export interface IConfirmOrderScreenProps { visible: boolean, children: any, order?: any,token:string }



export default ConfirmOrderScreen;
