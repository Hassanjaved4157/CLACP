import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'

const LawyersCard = () => {
  return (
    <View style = {styles.mainContainer}>
      <Text style = {styles.mainText}> Lawyer Profiles </Text>
      <View style = {styles.cardsMainContainer}>
        <View style = {styles.cards}> 
        <View style = {styles.lawyerImageContainer}>
        {/* <Image source={{ur : 'https://images.pexels.com/photos/6896322/pexels-photo-6896322.jpeg?auto=compress&cs=tinysrgb&w=600'}} alt='sorry Image not Load !' style = {styles.lawyerImage}/>  */}
        <Image source={{uri: 'https://images.pexels.com/photos/6896322/pexels-photo-6896322.jpeg?auto=compress&cs=tinysrgb&w=600'}}
       style = {styles.lawyerImage}  alt='sorry Image not Load !' />
        </View>

        </View>

        <View style = {styles.cards}> 

        </View>

      </View>
    </View>
  )
}

export default LawyersCard;

const styles = StyleSheet.create({
  mainContainer : {
    width : 'auto',
    height : 300,
    borderStyle : 'solid',
    borderColor : 'yellow', 
    borderWidth : 3, 
    marginHorizontal : 5, 
    borderRadius : 15,
    // marginTop : 15,
  },

  mainText : {
    fontSize : 28,
    textAlign : 'center',
    marginVertical : 5,
    fontWeight : '800', 
    fontFamily : 'Algerian',
    color : '#9A4EAE'
  },

  cardsMainContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around'
  }, 

  cards : {
    height : 240,
    width : 165,
    borderStyle : 'solid',
    borderColor : 'blue',
    borderWidth : 3,
    marginTop : 5,
    borderRadius : 15
  },

  lawyerImageContainer : {
    width : 110, 
    height : 110,
    // clip-path: circle(50% at 50% 50%);
    borderStyle : 'solid',
    borderWidth : 3,
    borderColor : 'green', 
    borderRadius : '50%'
  },
  
  lawyerImage : {
    // width : '100%',
    // height : '100%',
    // borderRadius : 300
    flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: "100%",
        flexDirection: 'column'
  }
});