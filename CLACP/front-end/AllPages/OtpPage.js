
import React from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet,TouchableHighlight} from 'react-native';
import HaderPart from '../Comonents/Hader';
import FooterPart from '../Comonents/Footer';
import CustomButton from '../Comonents/CustomeButton';
import PagesMainContainer from '../Comonents/pagesMainContainer';
import HeaderParts from '../Comonents/HeaderParts';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios for making HTTP requests
import { useState } from 'react';
import { otpForVerify } from './SignUp';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const OtpPage = () => {
  const navigation = useNavigation();
  // const [otpDigit1, setOtpDigit1] = useState('');
  // const [otpDigit2, setOtpDigit2] = useState('');
  // const [otpDigit3, setOtpDigit3] = useState('');
  // const [otpDigit4, setOtpDigit4] = useState('');

  const [otp, setOtp] = useState('');

   
  
//  const handleVerifyOtp = () => {
//     navigation.navigate('WelcomePage');
//   }

// const handleVerifyOtp = async () => {
  // const combinedOtp = otpDigit1 + otpDigit2 + otpDigit3 + otpDigit4;

//   try {
//     // Replace 'your_backend_url' with the actual URL of your backend API
//     const users = await axios.post('http://192.168.1.3:5000/verifyOtp');
//       // email: emailValue, // Replace with the actual user's email
//       // otp: combinedOtp,
//       for (const user of users.data) {
//         if (combinedOtp === user.otp) {
//           navigation.navigate('WelcomePage');
//           return; // Exit the loop if a matching OTP is found
//         }
//     };

//     if (users.data.message === 'Otp Matched') {
//       navigation.navigate('WelcomePage');
//     } else {
//       console.error('Otp did not match');
//     }
//   } catch (error) {
//     console.error('Error verifying OTP', error);
//   }
// };
const handleVerifyOtp = async () => {

  if (otpForVerify == otp ) {
    console.log('Verification successful');
    navigation.navigate('WelcomePage');
  }

  else {
    console.error('Verification failed ! ');
  }
  // const combinedOtp = otpDigit1 + otpDigit2 + otpDigit3 + otpDigit4;
  // const formattedOtp = combinedOtp.replace(/\s/g, '');
  // try {
  //   const response = await fetch("http://192.168.1.3:5000/otp", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       otp: otp // Include the entered OTP
  //     })
  //   });

  //   console.log(typeof otp);
  //   console.log(otp);

  //   if (!response.ok) {
  //     // Handle error, for example, show an alert
  //     console.error('Verification failed');
  //   } else {
  //     // OTP matched, you can handle the response here
  //     const data = await response.json();
  //     console.log('Verification successful', data);
  //     navigation.navigate('WelcomePage');
  //   }
    
    // Redirect or perform any other actions after successful verification
    // For example, you can navigate to another screen
    // navigation.navigate('WelcomePage'); // Replace 'WelcomePage' with the name of your welcome screen
  // } catch (error) {
  //   console.error('Error during verification:', error);
  // }

};


  return (
    <>
    <HeaderParts />
      <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
      <View style = {styles.secondMainContainer}>

      
      <View style = {styles.imgContainer}>
        <Image source={require('../Alll_Images/SignUpImage.png')}
       style={{width: '100%', height: '100%', borderRadius : 15}} />
      </View>

      <View style = {styles.textContainer}>
      <Text style = {styles.otpText}> OTP </Text>
      <Text style = {styles.fourDigitText}> Enter a 4 Digit code sent to your Number </Text>

      {/* <View style = {styles.inpContainer}>
        <TextInput  style = {styles.inps}/>
        <TextInput  style = {styles.inps}/>
        <TextInput  style = {styles.inps}/>
        <TextInput  style = {styles.inps}/>
      </View> */}

<View style={styles.inpContainer}>
        {/* <TextInput
          style={styles.inps}
          maxLength={1}
          keyboardType="numeric"
          value={otpDigit1}
          onChangeText={(text) => setOtpDigit1(text)}
        />
        <TextInput
          style={styles.inps}
          maxLength={1}
          keyboardType="numeric"
          value={otpDigit2}
          onChangeText={(text) => setOtpDigit2(text)}
        />
        <TextInput
          style={styles.inps}
          maxLength={1}
          keyboardType="numeric"
          value={otpDigit3}
          onChangeText={(text) => setOtpDigit3(text)}
        />
        <TextInput
          style={styles.inps}
          maxLength={1}
          keyboardType="numeric"
          value={otpDigit4}
          onChangeText={(text) => setOtpDigit4(text)}
        /> */}

        <TextInput 
        style={[styles.inps, {marginLeft : 20, width : 150, borderStyle : 'solid', borderWidth : 3, borderColor : '#743089'}]}
        maxLength={4}
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        />
      </View>

      <Text style = {styles.dontReceiveText}> 
        <Text> Don't Receive Code?</Text> 
        <Text style = {{color : '#743089', fontWeight : '900', fontSize : 25}}> Resend! </Text>
      </Text>

      </View>

      {/* <View style = {styles.btnConatiner}>
        <CustomButton btnText = "Verify" iconType = "faCheck"/>
      </View> */}

       {/* <View style={styles.btnConatiner}>
        <TouchableOpacity onPress={handleVerifyOtp}>
          <CustomButton btnText="Verify" iconType="faCheck" />

        </TouchableOpacity>
      </View> */}

      {/* <View style = {styles.BtnContainer}>
      <TouchableOpacity onPress={handleVerifyOtp} style = {styles.sigInBtn} >
        <Text style = {{color : 'white', fontSize : 21, textAlign : 'center', fontWeight : 'bold' }}>  Verify </Text>
        </TouchableOpacity>
        </View> */}

<TouchableHighlight
      style={[styles.buttonContainer]}
      underlayColor="transparent"
      onPress={handleVerifyOtp}
    >
      <View style={styles.buttonContent}>
        <FontAwesomeIcon icon={faCheck} size={25} style={[styles.icon]} />
        <Text style={[styles.text]}> Verify </Text>
      </View>
    </TouchableHighlight>

      </View>
      </View>

      </>
  );
}

export default OtpPage;

const styles = StyleSheet.create({
  mainContainer : {
    marginTop : 42,
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    backgroundColor : 'white', 
  },

  secondMainContainer : {
    height : 'auto',
    width : '100%',
    paddingHorizontal : 30,
    paddingVertical : 17,
    //   borderStyle : 'solid',
    // borderColor : 'red',
    // borderWidth : 4,
    marginBottom : 50

  },
  imgContainer : {
    width : 330,
    height : 180, 
  },

  img : {
    width : 'auto',
    height : 'auto'
  },

  textContainer : {
    height : 260, 
    width : 330,
    marginTop : 5,
    padding : 3,
  },

  otpText : {
    fontSize : 45,
    color : '#743089',
    textAlign : 'center',
     fontWeight : '900'
  },

  fourDigitText : {
    color : '#585858',
    fontSize : 24, 
    fontStyle : 'italic',
    fontWeight : '600',
    textAlign : 'center' ,
  },

  inpContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    margin : 15, 
    height : 60, 
    width : 'auto'
  },

  inps : {
    width : 30,
    height : 40,
    borderStyle : 'solid',
    borderBottomWidth : 5,
    borderBottomColor : '#743089',
    fontSize : 30,
    fontWeight : '800',
    textAlign : 'center',
    color : '#743089'

  },

  dontReceiveText : {
    color : '#585858',
    fontSize : 22, 
    fontStyle : 'italic',
    fontWeight : '500',
    textAlign : 'center' ,
  },

  btnConatiner : {
    height : 70, 
    width : 330,
    justifyContent : 'center',
    alignItems : 'center',
    paddingLeft : 15,
  }
  ,

   BtnContainer : {
     flex: 1,
     flexDirection : 'column',
    //  justifyContent : "space-around",
     alignItems : 'center'
    },
    sigInBtn : {
      width : 200,
      height : 50, 
      backgroundColor : '#743089',
      borderColor : '#743089',
      borderWidth : 5,
      borderRadius : 5,
      marginTop : 17
    },

    buttonContainer: {
      width: 120,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginVertical: 10,
      borderWidth: 6,
      marginHorizontal : 150
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      marginHorizontal : 3,
      fontWeight : '700',
      textAlign : 'center'
    },
    icon: {
      marginRight: 5,
      marginTop : 3,
      fontWeight : '900',
    },
});

