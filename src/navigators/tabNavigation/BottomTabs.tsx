/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import QrCodeScreen from '../../screens/QrCodeScreen';
import {SCREENS} from '../constants';
import TransactionScreen from '../../screens/TransactionScreen';
import QrCodeReaderScreen from '../../screens/QrCodeReaderScreen';

const Tab = createBottomTabNavigator();

const Buttomnavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name={SCREENS.QRCODE}
        component={QrCodeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{}}>
              {/* <Home
                height={20}
                width={30}
                fill={focused ? '#E94C3D' : '#9B8D8D'}
              /> */}
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#E94C3D' : '#9B8D8D',
                  textAlign: 'center',
                }}>
                My Account
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.PAY}
        component={QrCodeReaderScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{}}>
              {/* <Home
                height={20}
                width={30}
                fill={focused ? '#E94C3D' : '#9B8D8D'}
              /> */}
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#E94C3D' : '#9B8D8D',
                  textAlign: 'center',
                }}>
                PAY
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Buttomnavigation;
