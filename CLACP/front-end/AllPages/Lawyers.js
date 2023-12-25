import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PagesMainContainer from '../Comonents/pagesMainContainer';
import HeaderParts from '../Comonents/HeaderParts';

const Lawyers = () => {
  return (
    <PagesMainContainer>
      <HeaderParts />
        <View style = {styles.mainContainer}> 
        <Text> Lawyers Page </Text>
        {/* <HeaderParts /> */}
        </View>
     </PagesMainContainer>
  )
}

export default Lawyers;


const styles = StyleSheet.create({
    mainContainer : {
        width : '100%',
        height : 'auto',
        marginTop : 42,
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1
    }
});
