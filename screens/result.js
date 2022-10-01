import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
     <View>
      <Text>
        Résultats
      </Text>
     </View>
     <View style={styles.bannerContainer}>
     <Image source={require('../components/assets/images/imgquiz.webp')}
        style={styles.banner} 
       resizeMode ="contain" />
     </View>
     <View>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
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