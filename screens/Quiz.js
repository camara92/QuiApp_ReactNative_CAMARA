import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const  shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
const Quiz = ({navigation}) => {
  const [questions, setQuestion] = useState(); 
  const [ques, setQues] = useState(0); 
  const  [Options , setOptions] = useState([]); 
  const [score, setScore] = useState(0);

  const getQuiz= async()=>{
    // utilisqation des url pour la regeneration des questions avec opentdb 
    const url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple&encode=url3986"; 
    const res = await fetch(url); 
    //console.log(res);
    const data = await res.json(); 
     //console.log(data.results[0]); 
    setQuestion(data.results); 
   setOptions( generateOptionsAndShuffle(data.results[0]));
  }
  // useeffect on project : 0
  useEffect (()=>{
    getQuiz()
  }, [])

  // bouton next et skip 
  const handlenextPress =()=>{
    setQues(ques + 1); 
    setOptions(generateOptionsAndShuffle(questions[ques +1]))

  }
  const generateOptionsAndShuffle = (_question)=>{
    
    const options = [..._question.incorrect_answers]; 
    options.push(_question.correct_answer);
    // console.log("Before : ", options);
    shuffleArray(options);
    //console.log("After : ",options);
    return options
  }
  const handleSelectedOption= (_option)=>{
    if(_option=== questions[ques].correct_answer){
      setScore ( score+10) ;
    }
if(ques !==9){
  setQues(ques + 1); 
  setOptions(generateOptionsAndShuffle(questions[ques +1]))
}
    // console.log(_option===questions[ques].correct_answer)

  }
  const handleShowResult =()=>{
    navigation.navigate("Result", {
      score: score
    })
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      {
        questions && (
     <View style={styles.parent}>
      <View style={styles.top}>
        {/* <Text style={styles.question}>Q. {decodeURIComponent (questions[ques].question )}</Text> */}
        <Text style={styles.question}>Q. {decodeURIComponent (questions[ques].question )}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButtom} onPress={ ()=> handleSelectedOption(Options[0])}>
          <Text style={styles.option}> {decodeURIComponent (Options[0] )}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom} onPress={ ()=> handleSelectedOption(Options[1])}>
          <Text style={styles.option}>{decodeURIComponent ( Options[1] )}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtom} onPress={ ()=> handleSelectedOption(Options[2])}>
            <Text style={styles.option}> {decodeURIComponent ( Options[2])} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtom} onPress={ ()=> handleSelectedOption(Options[3])}>
          <Text style={styles.option}> {decodeURIComponent ( Options[3] )} </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.optionButtom}>
            <Text style={styles.option}>  {decodeURIComponent ( Options[4] )}</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.boutonText}>Previous</Text>
        </TouchableOpacity>
        {
          ques !==9 &&
        <TouchableOpacity style={styles.bouton} onPress ={ handlenextPress}>
          <Text style={styles.boutonText}>Next</Text>
        </TouchableOpacity>
        }
        {
          ques ===9 &&
        <TouchableOpacity style={styles.bouton}  onPress={()=>handleShowResult()}>
          <Text style={styles.boutonText}>Résultats</Text>
        </TouchableOpacity>
        }
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")}
        style={styles.bouton}
        >
          <Text style={styles.boutonText}>END </Text>
        </TouchableOpacity> */}
      </View>
       </View>
)}
    </View>
    </ScrollView>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    // padding: 12,
    // height: '100%'
    paddingTop :20, 
    paddingHorizontal :20, 
    // flex :1
    // height:'100%'

  },
  top:{
    marginVertical :16,
   

  }, options:{
    marginVertical:16, 
    flex:1
    
    // height: '50%'
  }, 
  bottom:{
    marginBottom:10,
    paddingVertical:16,
    justifyContent:'space-between', 
    flexDirection:'row',
    
    
  }, 
  bouton:{
    
    backgroundColor: "#1A759F", 
    padding: 12 , 
    paddingHorizontal:16,
    borderRadius: 10, 
    alignItems:'center', 
    marginBottom: 20,
    
    
    

  },
  boutonText:{
    fontSize: 18, 
    fontWeight :'600', 
    color:'white', 

  }, 
  question:{
    fontSize:22,
    color:'red',
    textAlign : 'center'

  }, 
  option:{
    fontSize: 12,
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
    flex:1,
    height:'100%'
  }
})