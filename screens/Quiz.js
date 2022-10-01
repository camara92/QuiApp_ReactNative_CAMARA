import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Imagine this is a really cool question </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cool option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text>Cool option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cool option 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.boutonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.boutonText}>Next</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Result")} >
          <Text>END </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    // padding: 12,
    // height: '100%'
    paddingTop :20, 
    paddingHorizontal :20, 
    height:'100%'

  },
  top:{
    marginVertical :16,

  }, options:{
    marginVertical:16, 
    felx: 1, 
    height: '75%'
  }, 
  bottom:{
    marginBottom:12,
    paddingVertical:16,
    justifyContent:'space-between', 
    flexDirection:'row'
  }, 
  bouton:{
    
    backgroundColor: "#1A759F", 
    padding: 12 , 
    borderRadius: 16, 
    alignItems:'center', 
    marginBottom: 20

  },
  boutonText:{
    fontSize: 24, 
    fontWeight :'600', 
    color:'white', 

  }
})