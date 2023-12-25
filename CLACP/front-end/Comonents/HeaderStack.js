// HeaderStack.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomDrawerContent from './CustomDrawerComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FooterPart from './Footer';

const Drawer = createDrawerNavigator();

const HeaderStack = ({ navigation }) => {

  const openDrawer = () => {
    console.log("Drawer is Opened");
  };

  return (
      <LinearGradient
        colors={['#3498db', '#2c3e50']}
        style={styles.navbar}
      >
        <View style={styles.container}>
          <Text style={styles.title}>CLACP</Text>
          <TouchableOpacity onPress={openDrawer} style={styles.drawerIcon}>
            <Ionicons name="md-menu" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginLeft: 100,
  },
  drawerIcon: {
    padding: 5,
  },
});

export default HeaderStack;
