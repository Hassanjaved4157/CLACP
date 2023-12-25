import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PagesMainContainer from '../Comonents/pagesMainContainer';
import HeaderParts from '../Comonents/HeaderParts';

const Chat = () => {
  return (
    <PagesMainContainer>
        <View style = {styles.mainContainer}> 
        {/* <Text> Chat Page </Text> */}
        {/* <HeaderParts /> */}
        </View>
    </PagesMainContainer>
  )
}

export default Chat;


const styles = StyleSheet.create({
    mainContainer : {
        width : '100%',
        height : 'auto',
        marginTop : 42
    }
});
