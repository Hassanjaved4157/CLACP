import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CustomButton from '../Comonents/CustomeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';


const LawsMainContainer = ({children}) => {

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    // Add your search logic here
    console.log('Performing search...');
  };

  return (
   
    <View style = {styles.mainContainer}>

      {/* <View style = {styles.inpContainer}>

      <TextInput placeholder="search by section-id or Name" style = {styles.Inps} placeholderTextColor="#585858" />
      <CustomButton  btnText = "Search" iconType = "faSearch" />
        
      </View> */}
     
      {children}
     </View>
  )
}

export default LawsMainContainer;

const styles = StyleSheet.create({
    mainContainer : {
        width : 'auto',
        height : 750,
        // borderColor : 'red',
        // borderWidth : 3,
        // borderStyle : 'solid',
        marginTop : 3,
        // marginHorizontal : 5
    },

    Inps : {
      width : 'auto',
      height : 50,
      marginVertical : 8, 
      marginHorizontal : 8,
      backgroundColor : '#F8F8F8',
      // backgroundColor : '#5e0acc',
      // borderRadius : 10,
      fontSize : 18,
      textAlign : 'center',
      borderBottomColor : '#743089',
      borderBottomWidth : 6,
      // borderBottomRadius : 5
    },

    inpContainer: {
      width : 'auto',
      flexDirection : 'row',
      justifyContent : 'space-around'
    },

    BtnContainer : {
      // flex: 1,
      flexDirection : 'column',
      // justifyContent : "space-between",
      // alignItems : 'center'
     },
     sigInBtn : {
       width : 'auto',
       height : 50, 
       backgroundColor : '#743089',
       borderColor : '#743089',
       borderWidth : 5,
       borderRadius : 5,
       marginTop : 14,
       flexDirection : 'row',
       justifyContent : 'space-between'
     },
 
     signInBtnText : {
       color : 'white', 
       textAlign : 'center',
       fontSize : 25,
       fontWeight : '900',
       marginTop : 5
     },

     icons : {
      marginTop : 11,
      // borderStyle : 'solid',
      // borderWidth : 3,
      // borderColor : 'red',
      fontWeight : '900'
     }
});
