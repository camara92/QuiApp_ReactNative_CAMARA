import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.Containertitle}>
      <Text style={styles.titleText}>Welcome to Atlas Quiz </Text>
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