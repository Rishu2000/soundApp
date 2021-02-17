import React from "react"
import {Text,View,ScrollView,Image,TouchableOpacity,StyleSheet} from "react-native"
import Sound from "react-native-sound"
const soundList = [
  require("./assets/one.wav"),
  require("./assets/two.wav"),
  require("./assets/three.wav"),
  require("./assets/four.wav"),
  require("./assets/five.wav"),
  require("./assets/six.wav"),
  require("./assets/seven.wav"),
  require("./assets/eight.wav"),
  require("./assets/nine.wav"),
  require("./assets/ten.wav")
]

const App = () => {

  const playSound = (sound) => {
    const soundVoice = new Sound(sound,Sound.MAIN_BUNDLE, (err) => {
      if(err){
        console.log("Not able play sound.")
      }
    })
    setTimeout(() => {
      soundVoice.play()
    },500)
    soundVoice.release()
  }

  return(
    <ScrollView style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.img}/>
      <View style={styles.gridContainer}>
          {soundList.map((sound) => (
        <TouchableOpacity key={sound} style={styles.box} 
            onPress={() => playSound(sound)}>
          <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  )
}

export default App



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ff0"
  },
  img:{
    alignSelf:"center",
    marginTop:20
  },
  gridContainer:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"space-around"
  },
  box:{
    padding:40,
    backgroundColor:"#00f",
    marginBottom:10,
    borderRadius:5
  },
  text:{
    fontSize:50,
    color:"#fff"
  }
})