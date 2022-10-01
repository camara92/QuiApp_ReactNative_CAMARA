import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View   style={styles.container}>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={require('../components/assets/images/imgquiz.webp')}
        style={styles.banner} 
       resizeMode ="contain" />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
        <Text>Start Go </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
         
    },
    banner:{
        height :300, 
        width: "100%", 
        backgroundColor: "white"
      

    }, 
    bannerContainer:{
        justifyContent: "center", 
        alignItems : "center"
    }
})