/**
 *
 * Popup
 *
 */

import React, { useEffect, useState } from 'react';
import { Animated,Modal,Dimensions,SafeAreaView,StyleSheet,StatusBar,Text,TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';


// import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';

export const Popup: React.FC<IPopupProps> = ({visible,children,order}) => {
  const [show,setShow] = useState(visible)
  console.log(order,'pop');
  
  // console.log(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const close=() => {}
  // const show=() => {}
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
    
  },[visible])
  return (
    <Modal transparent visible={show}>
      
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}
          >
            <TouchableOpacity onPress={()=>{
        setShow(false)
      }}>
            <Text >hide</Text>
          </TouchableOpacity>
          {order && 
          <Text>{order?._id}</Text>
          }
          {children}
          
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
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
})
export interface IPopupProps {visible:boolean,children:any,order:any}
export default Popup;
