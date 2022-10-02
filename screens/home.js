import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View   style={styles.container}>
      <Title titleText = 'Quiz App' />
      <View style={styles.bannerContainer}>
        <Image source={require('../components/assets/images/imgquiz.webp')}
        style={styles.banner} 
       resizeMode ="contain" />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.bouton}>
        <Text style={styles.boutonText}>Start Go !</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      paddingTop :20, 
      paddingHorizontal :20, 
      height:'100%',
      backgroundColor: 'yellow'
         
    },
    banner:{
        height :300, 
        width: 300, 
        backgroundColor: "white", 
        borderRadius: 300
       
      

    }, 
    bannerContainer:{
        justifyContent: "center", 
        alignItems : "center", 
        flex:1,

    }, 
    bouton:{
      width:"100%", 
      backgroundColor: "#1A759F", 
      padding: 5 , 
      borderRadius: 30, 
      alignItems:'center', 
      marginBottom: 10

    }, 
    boutonText:{
      fontSize: 24, 
      fontWeight :'600', 
      color:'white', 

    }
})