import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/Quiz'
import Result from './screens/result'
import MyStack from './navigation/index'

const App = () => {
  return (
   
       <NavigationContainer>
      <MyStack/>
      </NavigationContainer>
    

    
   
      
      

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop : 30, 
    paddingHorizontal :16


  }
})