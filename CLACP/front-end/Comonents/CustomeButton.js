import React, { useState } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch,faCheck} from '@fortawesome/free-solid-svg-icons';

const CustomButton = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyles = {
    backgroundColor: isPressed ? 'white' : '#743089',
    borderColor: '#743089',
  };

  const textStyles = {
    color: isPressed ? '#743089' : 'white',
    // fontWeight: isPressed ? 'bold' : 'normal',
  };

  const iconStyles = {
    color: isPressed ? '#743089' : 'white',
    // fontWeight: isPressed ? '900' : '900',
  };

  return (
    <TouchableHighlight
      style={[styles.buttonContainer, buttonStyles]}
      underlayColor="transparent"
      onPress={() => console.log('Button Pressed')}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.buttonContent}>
        <FontAwesomeIcon icon={ (props.iconType == "faSearch") ? faSearch : faCheck } size={25} style={[styles.icon, iconStyles]} />
        <Text style={[styles.text, textStyles]}>{props.btnText}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 6,
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

export default CustomButton;
