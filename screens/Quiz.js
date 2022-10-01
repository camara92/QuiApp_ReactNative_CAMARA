import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {
  const [questions, setQuestion] = useState(); 
  const [ques, setQues] = useState(0); 

  const getQuiz= async()=>{
    // utilisqation des url pour la regeneration des questions avec opentdb 
    const url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"; 
    const res = await fetch(url); 
    //console.log(res);
    const data = await res.json(); 
     console.log(data.results[0]); 
    setQuestion(data.results); 
  }
  // useeffect on project : 0
  useEffect (()=>{
    getQuiz()
  }, [])

  // bouton next et skip 
  const handlenextPress =()=>{
    setQues(ques + 1); 

  }
  return (
    <View style={styles.container}>
      {
        questions && (
     <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {questions[ques].question }</Text>
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
        <TouchableOpacity style={styles.bouton} onPress ={ handlenextPress}>
          <Text style={styles.boutonText}>Next</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")}
        style={styles.bouton}
        >
          <Text style={styles.boutonText}>END </Text>
        </TouchableOpacity> */}
      </View>
       </View>
)}
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
    height: '50%'
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

  }, 
  parent:{
    height:'100%'
  }
})