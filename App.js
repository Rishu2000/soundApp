import React from "react"
import {Text,View,ScrollView,Image} from "react-native"
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
  return(
    <ScrollView>
      <Image source={require("./assets/logo.png")}/>
    </ScrollView>
  )
}

export default App