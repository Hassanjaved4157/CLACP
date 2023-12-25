import React from 'react'
import { View, StyleSheet} from 'react-native'

const PagesMainContainer = ({children}) => {
  return (
    <View style = {styles.mainContiner} >
      {children}
    </View>
  )
}

export default PagesMainContainer;

const styles = StyleSheet.create({
    mainContiner : {
        width : '100%',
        height : '100%',
        // marginTop : 42,
        backgroundColor : 'white',
        // paddingHorizontal: 4
    }
});