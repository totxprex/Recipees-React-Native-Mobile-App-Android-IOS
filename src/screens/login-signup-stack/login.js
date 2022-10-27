import React, { useState } from "react";
import { Text, Image, ScrollView, View } from "react-native";
import logo from "../../../assets/logo.png"
import { TextInput, Button } from "react-native-paper"



function Login({ navigation }) {
  const [isLoading, setisLoading] = useState(false)


  return (
    <ScrollView>
      <View style={{
        "flexDirection": "row", "justifyContent": "center"
      }}>
        <Image source={logo} resizeMode="contain" style={{ "width": 50 }}></Image>
      </View >
      <Text style={{ fontSize: 30, opacity: 0.7, textAlign: "center", marginBottom: 30, marginTop: -20 }}>LOG IN</Text>
      <TextInput activeOutlineColor="blue" placeholder="@username" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 15 }} mode="outlined" label="your username">
      </TextInput>

      <TextInput textContentType="password" activeOutlineColor="blue" placeholder="password" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 25 }} mode="outlined" label="your password">
      </TextInput>

      <Button style={{ backgroundColor: "#4286f4" }} color="white" loading={isLoading} onPress={() => { }}>Log In</Button>

      <Text style={{ opacity: 0.7, textAlign: "center", marginTop: 30 }}>Copyright ©️ 2022. All rights reserved.</Text>

      <Button onPress={() => navigation.navigate("Sign Up")} style={{ "marginTop": 20 }}>
        Sign Up?
      </Button>
    </ScrollView>
  )
}


export default Login