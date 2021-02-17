import React from "react"
import {Text,View,ScrollView,Image} from "react-native"

const App = () => {
  return(
    <ScrollView>
      <Image source={require("./assets/logo.png")}/>
    </ScrollView>
  )
}

export default App