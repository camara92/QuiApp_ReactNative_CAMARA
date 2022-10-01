import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Imagine this is a really cool question </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButtom}>
          <Text style={styles.option}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom}>
          <Text style={styles.option}>Cool option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtom}>
            <Text style={styles.option}>Cool option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtom}>
          <Text style={styles.option}>Cool option 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtom}>
            <Text style={styles.option}>Cool option 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.boutonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.boutonText}>Next</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")}
        style={styles.bouton}
        >
          <Text style={styles.boutonText}>END </Text>
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
    height: '65%'
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
    paddingHorizontal:16,
    borderRadius: 10, 
    alignItems:'center', 
    marginBottom: 20

  },
  boutonText:{
    fontSize: 18, 
    fontWeight :'600', 
    color:'white', 

  }, 
  question:{
    fontSize:28,

  }, 
  option:{
    fontSize: 18,
    fontWeight:'500', 
    color: 'white', 


  }, 
  optionButtom:{
    paddingVertical: 12, 
    marginVertical:6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius:12,

  }
})