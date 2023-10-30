/**
 *
 * SignIn
 *
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {StackNavigationProp} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validationSchema';
import {Button} from '../../components/Button';
import ControlledTextInput from '../../components/ControlledTextInput';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import reducer from './reducer';
import {signInAction} from './actions';
import saga from './saga';
import {makeSelectSignInLoading} from './selectors';
import {IMAGES} from '../../assets/assets';

const key = 'signIn';

const stateSelector = createStructuredSelector({
  loading: makeSelectSignInLoading,
});

export const SignIn: React.FC<ISignInScreenProps> = ({navigation}) => {
  const {loading} = useSelector(stateSelector);
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  /* eslint-disable no-unused-vars */
  // const { signIn } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  // const users = useSelector(state => state?.client)
  const {textLogin} = styles;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (values: object) => {
    dispatch(signInAction(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={IMAGES.LOGO}
          style={{width: 300, height: 150, marginBottom: 100}}
          resizeMode="contain"
        />
      </View>
      <ControlledTextInput
        control={control}
        label="Account Number"
        name="accountNumber"
        errorMessage={errors.accountNumber?.message}
        defaultValue=""
      />

      <Button
        label={loading ? 'Loading...' : 'Sign In'}
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    // backgroundColor: '#37B184',
  },
  textLogin: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'grey',
    padding: 40,
  },
});

export interface ISignInScreenProps {
  navigation: StackNavigationProp<any, any>;
}
export default SignIn;
