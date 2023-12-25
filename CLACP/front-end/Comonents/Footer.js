import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomePage from "../AllPages/HomePage";
import Login from '../AllPages/Login';
import SignUp from '../AllPages/SignUp';
import Lawyers from '../AllPages/Lawyers';
import Notifications from "../AllPages/Notfications";
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

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

const FooterPart = () => {
  return (
    // <NavigationContainer>

       <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name='Laws'
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 12, color: '#16247d', fontWeight : '800' }}> Laws </Text>
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
                {/* <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} /> */}
                <Entypo name="wallet" size={24} color={focused ? "#16247d" : "#111"}/>
                <Text style={{ fontSize: 12, color: '#16247d' , fontWeight : '800' }}> Lawyers </Text>
              </View>
            ),
          }}
        />

      <Tab.Screen
          name='Notifications'
          component={Notifications}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ 
                top : Platform.OS == "ios" ? -10 : -20, 
                width : Platform.OS == "ios" ? 50 : 60,
                height : Platform.OS == "ios" ? 50 : 60,
                borderRadius : Platform.OS == "ios" ? 25 : 30,
                alignItems : "center",
                justifyContent : "center",
                backgroundColor : "#16247d" 
                }}>
            <FontAwesome name="exchange" size={24} color="#fff" />
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
                {/* <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} /> */}
                <MaterialIcons name="stacked-line-chart" size={24} color= {focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 12, color: '#16247d', fontWeight : '800' }}> Login</Text>
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
                {/* <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} /> */}
                <Ionicons name="settings" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 12, color: '#16247d', fontWeight : '800' }}> SignUp </Text>
              </View>
            ),
          }}
        />
        
      </Tab.Navigator>
      // </NavigationContainer>
  )
}

export default FooterPart;

