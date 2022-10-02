import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({titleText}) => {
  return (
    <View style={styles.Containertitle}>
      <Text style={styles.titleText}>{ titleText} </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    titleText:{
        textAlign:"center",
        fontWeight : "600", 
        fontSize : 35,
        color: "red",
        
    }, 
    Containertitle:{
      paddingVertical :16,
      justifyContent: 'center', 
      alignItems: 'center', 
      
    }
})