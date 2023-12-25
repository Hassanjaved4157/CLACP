// ProfilePage.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfilePage = () => {
  const handleEditProfilePhoto = () => {
    // Handle the action for editing the profile photo
    console.log('Editing profile photo');
  };

  const handleOptionPress = (option) => {
    // Handle the action when an option is pressed
    console.log(`Option pressed: ${option}`);
  };

  const handleSignOut = () => {
    // Handle the sign-out action
    console.log('Signing out');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity onPress={handleEditProfilePhoto} style={styles.editIconContainer}>
            <FontAwesome name="pencil" size={18} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../Alll_Images/profilePhoto.jpg')} // Replace with the actual path to your image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <View style={styles.profileView} />
        </View>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.title}
            style={styles.optionItem}
            onPress={() => handleOptionPress(option.title)}
          >
            <FontAwesome name={option.icon} size={24} color="#5e0acc" />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <FontAwesome name="sign-out" size={24} color="#5e0acc" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const options = [
  { title: 'My Profile', icon: 'user' },
  { title: 'Messages', icon: 'envelope' },
  { title: 'Favourites', icon: 'heart' },
  { title: 'Settings', icon: 'gear' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    //   width: 200,
    // height: 200,
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    elevation: 20, // Add elevation for shadow on Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  
  },
  editIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: '#5e0acc',
    borderRadius: 10,
    padding: 5,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileView: {
    width: 100,
    height: 20,
    backgroundColor: '#5e0acc',
    marginTop: 10,
  },
  optionsContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#5e0acc',
    paddingVertical: 15,
    marginHorizontal: 20,
    marginTop: 20,
  },
  signOutText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#5e0acc',
  },
});

export default ProfilePage;
