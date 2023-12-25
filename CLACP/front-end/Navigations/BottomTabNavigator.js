import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from '../AllPages/SignUp';
import Login from '../AllPages/Login';
import Lawyers from '../AllPages/Lawyers';
import HomePage from '../AllPages/HomePage';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

 const screenOptions = {
    tabBarShowLabel : false, 
    headerShow : false, 
    tabBarStyle : {
      position : 'absolute',
      bottom : 0, 
      right : 0,
      left : 0, 
      elevation : 0,
      height : 60,
      backgroundColor : '#fff'
    },
    headerShown: false, 
  }


const BottomTabNavigator = () => {
  return (
       <Tab.Navigator screenOptions={screenOptions}>
             <Tab.Screen
          name='Laws'
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Octicons name="law" size={24} color={focused ? "#16247d" : "#111"} />
                {/* <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} /> */}
                <Text style={{ fontSize: 14, color: '#16247d', fontWeight : '800' }}> Laws </Text>
              </View>
            ),
          }}
        />
           <Tab.Screen
          name='Lawyers'
          component={Lawyers}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <FontAwesome name="group" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 14, color: '#16247d' , fontWeight : '800' }}> Lawyers </Text>
              </View>
            ),
          }}
        />

     <Tab.Screen
          name='Login'
          component={Login}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <FontAwesome name="user" size={24} color= {focused ? "#16247d" : "#111"} /> 
                <Text style={{ fontSize: 14, color: '#16247d', fontWeight : '800' }}> Login</Text>
              </View>
            ),
          }}
        />
        
       <Tab.Screen
          name='SignUp'
          component={SignUp}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Entypo name="add-user" size={24} color= {focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 14, color: '#16247d', fontWeight : '800' }}> SignUp </Text>
              </View>
            ),
          }}
        />
        {/* <Tab.Screen name = "Notifications" component={Notfications} /> */}
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;