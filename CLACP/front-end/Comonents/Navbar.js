import { View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { DrawerGroup } from '../Navigation';
// import { useState } from 'react';
import Navigation from '../Navigation';

const Navbar = () => {
  return (
    <View style = {styles.mainConatiner}>
       
       <View style={styles.header1MainContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.ClacpText}> CLACP </Text>
        </TouchableOpacity>

        <View style={styles.imageIconContainer}>
          <FontAwesomeIcon icon={faSearch} size={27} color='white' style={styles.icons} />
          <TouchableOpacity style={styles.imageContainer} >
            <Image
              source={require('../Alll_Images/profilePhoto.jpg')}
              style={{ width: '100%', height: '100%', borderRadius: 50,}} 
              />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({
    mainConatiner : {
            width : '100%',
            height : 110,
            // backgroundColor : '#264653',
            backgroundColor : 'black',
            paddingTop : 27,
            borderStyle : 'solid',
            borderBottomColor : '#9A4EAE',
    },

    header1MainContainer : {
        width : '100%',
        height : 60,
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 3,
        marginTop : 3
      },
  
      ClacpText : {
        fontSize : 40, 
        color : 'hsla(360 100% 100% / 1.0)',
        fontWeight : '700',
        fontFamily: 'System',
        fontStyle : 'italic',
        marginTop : 5,

        textShadowColor: '#25D366',
         textShadowOffset: { width: 5, height: 5 },
          textShadowRadius: 10
  
      },

      imageIconContainer :{
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : 120,
        marginRight : 5,
        // borderStyle : 'solid',
        // borderWidth : 4,
        // borderColor : 'yellow'
    },

    imageContainer : {
        width : 60,
        height : 60,
        // borderStyle : 'solid',
       borderRadius : 50,
        // borderWidth : 4,
        // borderColor : '#25D366',
      overflow : 'hidden',
      marginRight : 10
      },

    // image : {
    //     // width : '100%',
    //     // height : '100%'
    //     flex: 1,
    //   width: undefined, // Set width and height to undefined to use flex property
    //   height: undefined,
    //   }
      icons : {
        marginTop : 20,
        marginRight : 50,
      }
});