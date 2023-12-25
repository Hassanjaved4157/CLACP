// CustomDrawerContent.js
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


const optionStyle = {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }

const CustomDrawerContent = ({ navigation }) => {
    const handleImageUpdate = () => {
      console.log('Image updated');
    };
  
    const handleNavigation = (screenName) => {
      console.log(`Navigating to ${screenName}`);
      navigation.navigate(screenName);
      // After handling the navigation, close the drawer content
    };
  
    const handleSignOut = () => {
      console.log('Signing out');
      // Add your sign out logic here
    };
  
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
        </View>
  
        {/* Navigation options */}
        <TouchableOpacity onPress={() => handleNavigation('MyProfile')} style={optionStyle}>
          <FontAwesome name="user" size={20} color="#5e0acc" style={{ marginRight: 10 }} />
          <Text style={{ color: '#5e0acc' }}>My Profile</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleNavigation('Messages')} style={optionStyle}>
          <FontAwesome name="envelope" size={20} color="#5e0acc" style={{ marginRight: 10 }} />
          <Text style={{ color: '#5e0acc' }}>Messages</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleNavigation('Favourites')} style={optionStyle}>
          <FontAwesome name="star" size={20} color="#5e0acc" style={{ marginRight: 10 }} />
          <Text style={{ color: '#5e0acc' }}>Favourites</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => handleNavigation('Settings')} style={optionStyle}>
          <FontAwesome name="cog" size={20} color="#5e0acc" style={{ marginRight: 10 }} />
          <Text style={{ color: '#5e0acc' }}>Settings</Text>
        </TouchableOpacity>
  
        {/* Sign Out button */}
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
    );
  };
  
  export default CustomDrawerContent;
  