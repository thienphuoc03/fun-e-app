/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Constant from './app/utils/Constant';
import HomeScreen from './app/screens/home/HomeScreen';
import SearchScreen from './app/screens/search/SearchScreen';
import RoomScreen from './app/screens/room/RoomScreen';
import AccountScreen from './app/screens/account/AccountScreen';
import QRScanScreen from './app/screens/qrscan/QRScanScreen';
import SearchResultScreen from './app/screens/search/searchResult/SearchResultScreen';
import SignInScreen from './app/screens/auth/SignInScreen';
import SignUpScreen from './app/screens/auth/SignUpScreen';
import ProfileScreen from './app/screens/account/profile/ProfileScreen';
import EditProfileScreen from './app/screens/account/profile/EditProfileScreen';

const SearchStack = createNativeStackNavigator();

function SearchStackScreens() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        option={{
          title: 'Search',
        }}
      />
      <SearchStack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        option={{
          title: 'Search',
        }}
      />
    </SearchStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreens() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        option={{
          title: 'Account',
        }}
      />
      <AccountStack.Screen
        name="Profile"
        component={ProfileScreen}
        option={{
          title: 'Profile',
        }}
      />
      <AccountStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        option={{
          title: 'Edit Profile',
        }}
      />
      <AccountStack.Screen
        name="SignIn"
        component={SignInScreen}
        option={{
          title: 'Sign In',
        }}
      />
      <AccountStack.Screen
        name="SignUp"
        component={SignUpScreen}
        option={{
          title: 'Sign Up',
        }}
      />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Constant.colors.primary,
        headerTitle: getHeaderTitle(route),
        headerStyle: {
          backgroundColor: Constant.colors.white,
        },
        headerTintColor: Constant.colors.textColor,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      })}>
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="TabSearch"
        component={SearchStackScreens}
        options={{
          title: 'Search',
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TabRoom"
        component={RoomScreen}
        options={{
          title: 'Room',
          tabBarLabel: 'Room',
          tabBarIcon: ({color}) => (
            <Icon name="group" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TabAccount"
        component={AccountStackScreens}
        options={{
          title: 'account',
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TabQRScan"
        component={QRScanScreen}
        options={{
          title: 'QR Scan',
          tabBarLabel: 'QR Scan',
          tabBarIcon: ({color}) => (
            <Icon name="qrcode" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? 'home';

  switch (routeName) {
    case 'TabHome':
      return 'TabHome';
    case 'TabSearch':
      return 'TabSearch';
    case 'TabRoom':
      return 'TabRoom';
    case 'TabAccount':
      return 'TabAccount';
    case 'TabQRScan':
      return 'TabQRScan';
  }
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
