// import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './AllPages/HomePage';
import Login from './AllPages/Login';
import SignUp from './AllPages/SignUp';
import Lawyers from './AllPages/Lawyers';
import Notifications from './AllPages/Notfications';
import HeaderStack from './Comonents/HeaderStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawerContent from './Comonents/CustomDrawerComponent';

// import { View, Text} from 'react-native';

// // import { createDrawerNavigator } from '@react-navigation/drawer';

// import { Ionicons } from '@expo/vector-icons';
// import { Platform } from 'react-native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import Laws from './AllPages/HomePage';
// import Lawyers from './AllPages/Lawyers';
// import Chat from './AllPages/Chat';
// import Login from './AllPages/Login';
// import SignUp from './AllPages/SignUp';
// import Notfications from './AllPages/Notfications';
// import HeaderParts from './Comonents/HeaderParts';
import "react-native-gesture-handler";
import Navigation from './Navigation';
import WelcomePage from './AllPages/WelcomePage';
import ProfilePage from './ProfilePages/ProfilePage';
import OtpPage from './AllPages/OtpPage';
import FooterPart from './Comonents/Footer';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import AppNavigation from './Navigations/AppNavigation';
// import FontAw

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const Drawer = createDrawerNavigator(); 

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} 
//       screenOptions={drawerOptions}/>}>
//         {/* Define your screens here */}
//         {/* For example: */}
//         <Drawer.Screen name="MyProfile" component={() => <View><Text>My Profile Screen</Text></View>} />
//         <Drawer.Screen name="Messages" component={() => <View><Text>Messages Screen</Text></View>} />
//         <Drawer.Screen name="Favourites" component={() => <View><Text>Favourites Screen</Text></View>} />
//         <Drawer.Screen name="Settings" component={() => <View><Text>Settings Screen</Text></View>} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


export default function App() {

  const drawerOptions = {
    drawerStyle: { backgroundColor: '#3498db', width: 280,  },
    header: (props) => <HeaderStack {...props} />,
    drawerPosition : "right",
    // contentComponent : ProfilePage
  };

  return (
    <AppNavigation />

    // <NavigationContainer>
    //  <Stack.Navigator initialRouteName="Home"  
    //  drawerContent={(props) => {
    //    return <CustomDrawerContent {...props} /> }} >
        
    //      <Drawer.Screen name="Home" component={FooterPart} />
    //      <Drawer.Screen name="SignUp" component={SignUp} />;
    //  </Stack.Navigator>
    //  {/* <FooterPart /> */}
    //  </NavigationContainer>
  );
}
    
    
    
    // <Home />
    // <SignUp />
    // <ProfilePage />
    // <Navigation />
    // <WelcomePage />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
//   );
// }


// export default App;

    // <NavigationContainer>
     
    // </NavigationContainer>
  // );

// }
