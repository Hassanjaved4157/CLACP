import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Appbar } from 'react-native-paper';

const HaderPart = () => {
  return (
  <View style = {styles.HeaderMainContainer}>
    <FontAwesomeIcon icon={faArrowLeft} size={40} color='#743089' style={styles.icons}/>
    <View style = {styles.imageContainer}>
    <Image source={require('../Alll_Images/homePageLogo5.png')} style = {styles.image} />
    </View>
    <FontAwesomeIcon icon={faBars} size={40} color='#743089'style={styles.icons} />
  </View>
  )
}

export default HaderPart;

const styles = StyleSheet.create({
    HeaderMainContainer : {

    backgroundColor: '#fff', 
    borderRadius: 15, 
    margin: 2,
    marginVertical : 10,
    elevation: 20, 
    height : 65,
    paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    // Box shadow 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4

    },

    imageContainer : {
    width : 250,
    height : 55,
    marginTop : 2
    },

    image : {
    width : '100%',
    height : '100%'
    },

    icons : {
    marginVertical : 15,
    fontWeight : '900'
    }
});
