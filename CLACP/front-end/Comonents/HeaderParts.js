import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUsers, faMessage, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
// import { useNavigation } from '@react-navigation/native';

const HeaderParts = ({ title,onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.header1MainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={styles.ClacpText}> CLACP </Text>
        </TouchableOpacity>

        <View style={styles.imageIconContainer}>
          {/* <FontAwesomeIcon icon={faSearch} size={27} color='#25D366' style={styles.icons} /> */}
          <TouchableOpacity style={styles.imageContainer} onPress={navigation.toggleDrawer}>
            <Image
              source={require('../Alll_Images/profilePhoto.jpg')}
              style={{ width: '100%', height: '100%', borderRadius: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.header2MainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Laws')}>
          <View style={styles.navLinksContainer}>
            <FontAwesomeIcon icon={faBalanceScale} color='#25D366' size={40} />
            <Text style={styles.navLinksText}> Laws </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Lawyers')}>
          <View style={styles.navLinksContainer}>
            <FontAwesomeIcon icon={faUsers} color='#25D366' size={40} />
            <Text style={styles.navLinksText}> Lawyers </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={styles.navLinksContainer}>
            <Text style={styles.navLinksText}> Chats </Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HeaderParts;


const styles = StyleSheet.create({
    headerMainContainer: {
        width : '100%',
        height : 105,
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
      fontSize : 50, 
      color : 'hsla(360 100% 100% / 1.0)',
      fontWeight : '700',
      fontFamily: 'System',
      fontStyle : 'italic',
      marginTop : 5,
      marginHorizontal : 40,

      textShadowColor: '#25D366',
       textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10

    },

    header2MainContainer : {
      width : '100%',
      height : 50,
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginTop : 10
    },

    imageIconContainer :{
      flexDirection : 'row',
      justifyContent : 'space-around',
      width : 120,
      marginRight : 5
    },

    imageContainer : {
      width : 60,
      height : 60,
     borderRadius : 50,
    marginTop : 2,
    overflow : 'hidden'
    },
    image : {
      flex: 1,
    width: undefined, 
    height: undefined,
    }
    ,icons : {
      marginTop : 25,
      marginRight : 15
    }
    ,

    navLinksContainer : {
      height : '100%',
      width : 'auto',
      flexDirection : 'row',
      justifyContent : 'space-between'
    },

    navLinksText : {
        fontSize : 22, 
      color : 'hsla(360 100% 100% / 1.0)',
      fontWeight : '600',
      fontFamily: 'System',
      height : '100%',
      marginVertical : 5,
      marginLeft : 5
    }

});
