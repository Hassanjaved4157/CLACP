import { View, Text, Settings, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../ProfilePages/Profile";
import { Ionicons } from "@expo/vector-icons";
import BottomTabNavigator from "./BottomTabNavigator";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProfilePage from "../ProfilePages/ProfilePage";
import Messages from "../ProfilePages/Messages";
import Favourites from "../ProfilePages/Favourites";
import SettingsComponent from "../ProfilePages/Settings";
import HomePage from "../AllPages/HomePage";


const optionStyle = {
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

  const handleImageUpdate = () => {
    console.log('Image updated');
  };

  const handleNavigation = (screenName) => {
    console.log(`Navigating to ${screenName}`);
    // After handling the navigation, close the drawer content
  };

  const handleSignOut = () => {
    console.log('Signing out');
    // Add your sign out logic here
  };


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={
      (props) => {
        return (
          <View style={{ flex: 1, backgroundColor: 'smokeWhite', padding: 20 }}>
          {/* New container with border radius */}
          <View
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              marginBottom: 20,
              backgroundColor: 'dark',
              padding: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            {/* Your profile image and update button */}
            <View
              style={{
                height: 150,
                width: 150,
                borderRadius: 75,
                backgroundColor: 'dark',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            >
              {/* Your profile image (replace 'your-profile-image.jpg' with the actual image source) */}
              <Image
                source={require('../Alll_Images/profilePhoto.jpg')}
                style={{ width: '100%', height: '100%', borderRadius: 75 }}
              />
              {/* Pencil icon for image update */}
              <TouchableOpacity
                onPress={handleImageUpdate}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <FontAwesome name="pencil" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Text style = {{color : "#25D366", fontSize : 20, marginTop : 3, textAlign : 'center', fontWeight : 'bold'}}> Hassan Rajpoot </Text>
          </View>

          <View style = {{marginTop : 0}}>
           <DrawerItemList {...props} />
            </View>

            <TouchableOpacity
          onPress={handleSignOut}
          style={{
            ...optionStyle,
            marginTop: 'auto',
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#5e0acc',
          }}
        >
          <FontAwesome name="sign-out" size={20} color="#5e0acc" style={{ marginRight: 10 }} />
          <Text style={{ color: '#5e0acc' }}>Sign Out</Text>
        </TouchableOpacity>

          </View>
        )
      }
    }
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 250,
          paddingTop: 20,
        },
        headerStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
        headerTintColor: "black",
        drawerLabelStyle: {
          // color : "5e0acc",
          color: "#5e0acc",
          fontSize: 20,
          marginLeft: -20,
          fontWeight: "bold",
        },
        drawerPosition: "right"
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: ({ focused }) => {
            return <FontAwesome name="home" size={24} color="#5e0acc" />;
          },
        }}
        component={BottomTabNavigator}
      />

      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          headerShadowVisible: false,
          drawerIcon: ({ focused }) => {
            return <FontAwesome name="user" size={24} color="#5e0acc" />;
          },
        }}
        component={ProfilePage}
      />
      <Drawer.Screen
        name="Messages"
        options={{
          drawerLabel: "Messages",
          title: "Messages",
          headerShadowVisible: false,
          drawerIcon: ({ focused }) => {
            return <FontAwesome name="envelope" size={24} color="#5e0acc" />;
          },
        }}
        component={Messages}
      />

      <Drawer.Screen
        name="Favourites"
        options={{
          drawerLabel: "Favourites",
          title: "Favourites",
          headerShadowVisible: false,
          drawerIcon: ({ focused }) => {
            return <FontAwesome name="heart" size={24} color="#5e0acc" />;
          },
        }}
        component={Favourites}
      />

      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerShadowVisible: false,
          drawerIcon: ({ focused }) => {
            return <FontAwesome name="gear" size={24} color="#5e0acc" />;
          },
        }}
        component={SettingsComponent}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
