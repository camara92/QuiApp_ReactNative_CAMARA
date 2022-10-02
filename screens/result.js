import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Title from '../components/title';

const Result = ({navigation, route}) => {
  //const params = route.params; 
  const { score  } = route.params; 
  if(score<50){
    console.log('Vous êtes disqualifiée ! ')
  }
  console.log(score);

  // const resultBannner =score >40? "https://cdni.iconscout.com/illustration/premium/thumb/businessman-see-himself-failure-in-the-mirror-5662446-4725733.png": "https://cdni.iconscout.com/illustration/premium/thumb/businessman-see-himself-failure-in-the-mirror-5662446-4725733.png"
  return (

    <View   style={styles.container}>
    <Title titleText='Résultats' />
      <Text style={styles.scoreValue}> Votre score est : {score} </Text>
      {
        score<50 &&
     
    <View style={styles.bannerContainer}>
      {/* <Image source={require('../components/assets/images/results.jpg')} */}
      <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/businessman-see-himself-failure-in-the-mirror-5662446-4725733.png'}}
      // https://cdna.iconscout.com/img/full-screen.0cca4a3.svg
      style={styles.banner} 
     resizeMode ="contain" />
    </View>
}
{
        score>=50 &&
     
    <View style={styles.bannerContainer}>
      {/* <Image source={require('../components/assets/images/results.jpg')} */}
      <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/preview/businessman-moving-towards-victory-4819001-4010289.png?w=0&h=700'}}
      // https://cdna.iconscout.com/img/full-screen.0cca4a3.svg
      style={styles.banner} 
     resizeMode ="contain" />
    </View>
}
   
   
    <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.bouton}>
      <Text style={styles.boutonText}>Go to Home</Text>
    </TouchableOpacity>

  </View>
  )
}

export default Result

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

  }, 
  scoreValue:{
    fontSize:24,
    fontWeight:'800', 
    alignSelf:'center'

  }
})