import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/auth/SignInScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import AccountScreen from '../../screens/account/AccountScreen';

const AccountStack = createNativeStackNavigator();

const AccountStackScreens = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreens;

const styles = StyleSheet.create({});
