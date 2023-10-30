import React, {FC, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../constants';
import SignIn from '../../screens/SignIn';
import QrCode from '../../screens/QrCodeScreen';
import {navigationRef} from '../../utils/routNavigation';
import {createStructuredSelector} from 'reselect';

import {iOSStyleStackNavigatorOptions} from '../configs';
import Buttomnavigation from '../tabNavigation/BottomTabs';

const Stack = createStackNavigator();

const InitialNavigator: FC<IInitialNavigatorProps> = ({}) => {
  const stateSelector = createStructuredSelector({});

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREENS.SIGNUP}
        screenOptions={{...iOSStyleStackNavigatorOptions, headerShown: false}}>
        <Stack.Screen name={SCREENS.SIGNUP} component={SignIn} />
        {/* <Stack.Screen name={SCREENS.QRCODE} component={QrCode} /> */}
        <Stack.Screen name={SCREENS.TAB} component={Buttomnavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const
export type IInitialNavigatorProps = {initialRout?: string};
export {InitialNavigator};
