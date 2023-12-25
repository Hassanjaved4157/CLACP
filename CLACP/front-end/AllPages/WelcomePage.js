// WelcomePage.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
  const handleBackToHomePage = () => {
    // Handle navigation back to the main home page
    navigation.navigate('MainHomePage'); // Replace with your actual route name
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Alll_Images/profilePhoto.jpg')} // Replace with the actual path to your image
        style={styles.image}
      />
      <Text style={styles.congratulationsText}>Congratulations!</Text>
      <Text style={styles.messageText}>Your registration process is completed successfully.</Text>
      <TouchableOpacity style={styles.button} onPress={handleBackToHomePage}>
        <Text style={styles.buttonText}>Back to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  congratulationsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#743089',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
