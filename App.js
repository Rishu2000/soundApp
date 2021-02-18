import React from "react"
import {Text,View,ScrollView,Image,TouchableOpacity,StyleSheet} from "react-native"
import Sound from "react-native-sound"
const soundList = [
  require("./assets/English-voice/one.mp3"),
  require("./assets/English-voice/two.mp3"),
  require("./assets/English-voice/three.mp3"),
  require("./assets/English-voice/four.mp3"),
  require("./assets/English-voice/five.mp3"),
  require("./assets/English-voice/six.mp3"),
  require("./assets/English-voice/seven.mp3"),
  require("./assets/English-voice/eight.mp3"),
  require("./assets/English-voice/nine.mp3"),
  require("./assets/English-voice/ten.mp3")
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
    },100)
    soundVoice.release()
  }

  return(
    <ScrollView style={styles.container}>
      <Image source={require("./assets/img/logo.png")} style={styles.img}/>
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