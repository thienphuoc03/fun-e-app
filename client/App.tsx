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

// screens
import HomeScreen from './app/screens/home/HomeScreen.jsx';
import SearchScreen from './app/screens/search/SearchScreen.jsx';
import RoomScreen from './app/screens/room/RoomScreen.jsx';
import AccountScreen from './app/screens/account/AccountScreen.jsx';
import QRScanScreen from './app/screens/qrscan/QRScanScreen.jsx';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={26} />
            ),
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
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={26} />
            ),
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
    </NavigationContainer>
  );
}

export default App;
