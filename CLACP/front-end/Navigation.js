// import "react-native-gesture-handler";

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Text, View } from "react-native";

// import HomePage from "./AllPages/HomePage";
// import Lawyers from "./AllPages/Lawyers";
// import Login from "./AllPages/Login";
// import SignUp from "./AllPages/SignUp";
// import Notifications from "./AllPages/Notfications";
// import OtpPage from "./AllPages/OtpPage";

// import ForgotPassword from './ProfilePages/ForgotPassword';
// import UpdatePassword from './ProfilePages/UpdatePassword';
// import UpdateProfilePhoto from './ProfilePages/UpdateProfilePhoto';

// import { Octicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import { Pressable } from "react-native";



// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


// const screenOptions = {
//     tabBarShowLabel : false, 
//     headerShow : false, 
//     tabBarStyle : {
//       position : 'absolute',
//       bottom : 0, 
//       right : 0,
//       left : 0, 
//       elevation : 0,
//       height : 60,
//       backgroundColor : '#fff'
//     },
//     headerShown: false, 
//   }

//   const screenOptionsforHeader = {
//     tabBarShowLabel : false, 
//     headerShow : false, 
//     tabBarStyle : {
//       position : 'absolute',
//       top: 0, 
//       right : 0,
//       left : 0, 
//       elevation : 0,
//       height : 60,
//       backgroundColor : '#5e0acc'
//     },
//     // headerShown: false, 
//   }

//   const HomeStackGroup = () => {
//     return (
//       <Stack.Navigator initialRouteName={HomePage}
//       screenOptions={{
//         headerShown : false
//         // headerStyle : {
//         //   backgroundColor : "#6a51ae",
//         // },
//         // headerTintColor : "#fff",
//         // headerTitleStyle: {fontWeight : "bold", alignItems : 'center', justifyContent : 'center'},
//         // headerRight : () => {
//         //   <Pressable onPress={() => alert("Menu Button Pressed! ")}>
//         //     <Text style = {{color : "#fff", fontSize : 16}}> Menu </Text>
//         //   </Pressable>
//         // },
//         // contentStyle : {
//         //   backgroundColor : "#e8e4f3"
//         // },
//       }}
//       >
//         <Stack.Screen name="Laws" component={HomePage} />
//         <Stack.Screen name="Lawyers" component={Lawyers} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//       </Stack.Navigator>
//     );
// }

// const TabGroup = () => {
// return (
//     <Tab.Navigator screenOptions={screenOptions}>
//              <Tab.Screen
//           name='Laws'
//           component={HomePage}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                 <Octicons name="law" size={24} color={focused ? "#16247d" : "#111"} />
//                 {/* <Entypo name="home" size={24} color={focused ? "#16247d" : "#111"} /> */}
//                 <Text style={{ fontSize: 14, color: '#16247d', fontWeight : '800' }}> Laws </Text>
//               </View>
//             ),
//           }}
//         />
//            <Tab.Screen
//           name='Lawyers'
//           component={Lawyers}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: 'center', alignItems: 'center' }}>

//             <FontAwesome name="group" size={24} color={focused ? "#16247d" : "#111"} />
//                 <Text style={{ fontSize: 14, color: '#16247d' , fontWeight : '800' }}> Lawyers </Text>
//               </View>
//             ),
//           }}
//         />

//      <Tab.Screen
//           name='Login'
//           component={Login}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: 'center', alignItems: 'center' }}>

//             <FontAwesome name="user" size={24} color= {focused ? "#16247d" : "#111"} /> 
//                 <Text style={{ fontSize: 14, color: '#16247d', fontWeight : '800' }}> Login</Text>
//               </View>
//             ),
//           }}
//         />
        
//        <Tab.Screen
//           name='SignUp'
//           component={SignUp}
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                 <Entypo name="add-user" size={24} color= {focused ? "#16247d" : "#111"} />
//                 <Text style={{ fontSize: 14, color: '#16247d', fontWeight : '800' }}> SignUp </Text>
//               </View>
//             ),
//           }}
//         />
//         {/* <Tab.Screen name = "Notifications" component={Notfications} /> */}
//     </Tab.Navigator>
// );

// }


// export const DrawerGroup = () => {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
//       <Drawer.Screen name="UpdatePassword" component={UpdatePassword} />
//       <Drawer.Screen name="UpdateProfilePhoto" component={UpdateProfilePhoto} />
//     </Drawer.Navigator>
//   )
// }

// const Navigation = ({props}) => {
//   return (
//     <NavigationContainer>
//       {/* <HomeStackGroup /> */}
//       {/* <DrawerGroup /> */}
//       <TabGroup />
//     </NavigationContainer>
//   )
// }

// export default Navigation;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Define your screens for the drawer navigator
import Laws from './AllPages/HomePage';
import Profile from './ProfilePages/Profile';
import Messages from './ProfilePages/Messages';
import Favourites from './ProfilePages/Favourites';
import SettingsComponent from './ProfilePages/Settings';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => (
  <View style={styles.drawerContainer}>
    {/* Stylish drawer content */}
    <Text style={styles.drawerHeader}>Drawer Header</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.drawerItem}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text style={styles.drawerItem}>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
      <Text style={styles.drawerItem}>Messages</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
      <Text style={styles.drawerItem}>Favorites</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Text style={styles.drawerItem}>Settings</Text>
    </TouchableOpacity>
  </View>
);

const Navigation = () => {
  const [searchText, setSearchText] = useState('');

  const openDrawer = () => {
    // Implement drawer opening logic
    console.log('Drawer opened');
  };

  const handleSearch = () => {
    // Implement search logic
    console.log('Search button clicked with text:', searchText);
  };

  return (
    <View style={styles.navbarContainer}>
      {/* CLACP Text - Navigate to 'Laws' page */}
      <TouchableOpacity onPress={() => console.log('Navigate to Laws')}>
        <Text style={styles.clacpText}>CLACP</Text>
      </TouchableOpacity>

      {/* Search Icon - Open TextInput for 'Laws' page */}
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="search" size={25} color="#000" style={styles.icon} />
      </TouchableOpacity>

      {/* Circle Image - Open Drawer Navigator */}
      <TouchableOpacity onPress={openDrawer}>
        <Image
          source={require('./Alll_Images/profilePhoto.jpg')}
          style={styles.circleImage}
        />
      </TouchableOpacity>

      {/* Drawer Navigator */}
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerStyle={styles.drawerStyle}
        >
          <Drawer.Screen name="Home" component={Laws} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Messages" component={Messages} />
          <Drawer.Screen name="Favorites" component={Favourites} />
          <Drawer.Screen name="Settings" component={SettingsComponent} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  clacpText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 15,
  },
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  drawerStyle: {
    width: 250,
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Navigation;

