import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import OtpPage from '../AllPages/OtpPage';
import WelcomePage from '../AllPages/WelcomePage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false}}
      initialRouteName='Main'
      >
        <Stack.Screen name='Main' component={DrawerNavigator} />
        <Stack.Screen name='OtpPage' component={OtpPage} />
        <Stack.Screen name='WelcomePage' component={WelcomePage} />
        {/* <Stack.Screen name='' component={DrawerNavigator} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;