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
import SearchResultScreen from './app/screens/searchResult/SearchResultScreen';
import SignInScreen from './app/screens/auth/SignInScreen';
import SignUpScreen from './app/screens/auth/SignUpScreen';

const SearchStack = createNativeStackNavigator();

function SearchStackScreens() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchStack.Screen name="SearchResult" component={SearchResultScreen} />
    </SearchStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreens() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen name="SignIn" component={SignInScreen} />
      <AccountStack.Screen name="SignUp" component={SignUpScreen} />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreens}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Room"
        component={RoomScreen}
        options={{
          tabBarLabel: 'Room',
          tabBarIcon: ({color}) => (
            <Icon name="group" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreens}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="QRScan"
        component={QRScanScreen}
        options={{
          tabBarLabel: 'QRScan',
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
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
    case 'Room':
      return 'Room';
    case 'Account':
      return 'Account';
    case 'QRScan':
      return 'QRScan';
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
