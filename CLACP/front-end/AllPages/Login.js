import { View, StyleSheet, Image, TextInput, Text, Button, TouchableOpacity, ImageBackground} from "react-native";
import CheckBox from 'expo-checkbox';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import HeaderParts from "../Comonents/HeaderParts";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

let Login = () => {

  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  // const handlePasswordChange = (text) => {
  //   setLoginPassword(text);
  // };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSignUpPress = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignUp'); // Replace 'SignUp' with the name of your SignUp screen
  };

  const handleSignInPress = async () => {

    try {
      const response = await fetch("http://192.168.1.3:5000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: loginPassword,
        })
      });

      if (!response.ok) {
        // Handle error, for example, show an alert
        console.error('Login failed');
        return;
      }

      // The login was successful, you can handle the response here
      const data = await response.json();
      console.log('Login successful', data);
      navigation.navigate('WelcomePage');

      // Redirect or perform any other actions after successful login
      // For example, you can navigate to another screen
      // navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <View style = {LoginStyles.mainContainer}>
      <HeaderParts />
        <View style = {LoginStyles.Imagecontainer}>
          <Image source={{uri: 'https://img.freepik.com/free-photo/3d-illustration-computer-monitor-login-screen_107791-16390.jpg?size=626&ext=jpg'}}
       style={{width: '100%', height: '100%', borderRadius : 15}} />
        </View>
        <Text style = {LoginStyles.welcomeText}> Welcome Back ! </Text>
        <Text style = {LoginStyles.continueText}> Sign in Continue </Text>

        <View style={[LoginStyles.container,{marginTop : 20}]}>
    <TextInput
      style={LoginStyles.input}
      placeholder="Enter your Mail ! " 
      onChangeText={handleEmailChange}
          value={email}
    />
  </View>
        {/* <TextInput placeholder="Email or Phone Number" style = {[LoginStyles.Inps, {marginTop : 20}]} placeholderTextColor="#585858"></TextInput> */}
        {/* <TextInput placeholder="Pasword" style = {LoginStyles.Inps} placeholderTextColor="#585858" ></TextInput> */}
        
        <View style={LoginStyles.container}>
      {/* <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      /> */}

<TextInput
  style={LoginStyles.input}
  placeholder="Password"
  secureTextEntry={!showPassword}
  value={loginPassword}
  onChangeText={(text) => setLoginPassword(text)}
/>
      <TouchableOpacity onPress={togglePasswordVisibility} style={LoginStyles.eyeIcon}>
        <Ionicons name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="black" />
      </TouchableOpacity>
    </View>

        <View style={LoginStyles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={LoginStyles.checkbox}
          // tintColors={{ true: '#F15927', false: 'black' }}
        />
        <Text style={LoginStyles.label}> Remember me </Text>
        <Text style={[LoginStyles.label, {marginLeft : 30, color : '#743089', fontWeight : '900'}]}> Forgot Password ! </Text>
      </View>

      <View style = {LoginStyles.BtnContainer}>
        <TouchableOpacity style = {LoginStyles.sigInBtn} onPress={handleSignInPress} >
          <Text style = {LoginStyles.signInBtnText}> SIGN IN </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginBottom: 10, flexDirection : 'row'}}>
      <Text style={LoginStyles.DontHave}> Don't Have an Account? </Text>
        <TouchableOpacity onPress={handleSignUpPress} >
          <Text style={[
          LoginStyles.DontHave,
          { color: '#743089', fontSize: 20, fontWeight: '700'},
        ]}> SignUp!</Text>
        </TouchableOpacity>
      {/* </Text> */}
    </View>
        {/* <Text style = {LoginStyles.SignInWithText}>----- SIGN IN WITH ----- </Text> */}
      </View>

      {/* <View style = {LoginStyles.socialMediaContainer}>

      <View style={LoginStyles.iconContainer}>
        <FontAwesomeIcon icon={faGoogle} size={40} color="#DB4437" />
      </View> */}

      {/* <View style={LoginStyles.iconContainer}>
        <FontAwesomeIcon icon={faFacebook} size={40} color="#3b5998" />
      </View>
      <View style={LoginStyles.iconContainer}>
        <FontAwesomeIcon icon={faTwitter} size={40} color="#1DA1F2" />
      </View> */}
        </View>
      
    // </View>
  )
}

const LoginStyles = StyleSheet.create({
    mainContainer : {
        backgroundColor : 'white',
        height : '100%',
        width : '100%',
        // marginTop : 42
    },
    Imagecontainer : {
      width : "auto",
      height : 230,
      marginTop : 10,
      marginHorizontal : 20,
      borderRadius : 20
    },
    LoginImage : {
      width : '100%',
      height : '100%'
    },

    welcomeText : {
      color : '#743089',
      fontSize : 32,
      fontWeight : '800',
      fontStyle : 'italic',
      marginTop : 10, 
      marginLeft : 10
    },

    continueText : {
      color : '#585858',
      fontSize : 20,
      marginLeft : 25
    },

    Inps : {
      width : 340,
      borderColor : '#F8F8F8',
      borderWidth : 2,
      height : 50,
      marginVertical : 10, 
      marginHorizontal : 20,
      backgroundColor : '#F8F8F8',
      // backgroundColor : '#5e0acc',
      borderRadius : 10,
      fontSize : 18,
      textAlign : 'center',
      borderBottomColor : '#5e0acc'
    },

    checkboxContainer: {
      flexDirection: 'row',
      marginLeft : 40
    },
    checkbox: {
      alignSelf: 'center',
      color : '#9A4EAE'
    },
    label: {
      margin: 5,
      fontSize : 16.5
    },
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

    signInBtnText : {
      color : 'white', 
      textAlign : 'center',
      fontSize : 23,
      fontWeight : '800',
      marginTop : 5
    },
    socialMediaContainer : {
      flex : 1,
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginTop : 5,
      marginHorizontal : 100
        },

    SignInWithText : {
      color : '#DB4437',
      fontSize : 22,
      textAlign : "center",
      marginTop : 10, 
      marginBottom : 10
    },
    DontHave : {
      color : '#585858',
      fontSize : 17, 
      fontStyle : 'italic',
      fontWeight : '500'
    },

    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
    ,
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 3,
      borderColor: 'grey',
      paddingBottom: 5,
      marginHorizontal : 40,
      marginVertical : 10
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingLeft: 8,
      textAlign : 'center',
      fontSize : 18,
      fontWeight : '800'

    },
    eyeIcon: {
      padding: 8,
    },

});

export default Login;