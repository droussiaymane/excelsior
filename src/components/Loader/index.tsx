/**
 *
 * Loader
 *
 */

import React from 'react';
import { View,ActivityIndicator,Text,StyleSheet } from 'react-native';

// import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';

export const Loader: React.FC<ILoaderProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#37B184" />
      {/* <FormattedMessage {...messages.header} /> */}
      <Text style={styles.message}>{message?message:'loading'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message:{
    marginTop:"5%"
  }
})
export interface ILoaderProps {message?:string}
export default Loader;
