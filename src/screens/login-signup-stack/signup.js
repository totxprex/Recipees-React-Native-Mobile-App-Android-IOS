import React, { useState } from "react";
import { Text, Image, ScrollView, View } from "react-native";
import bg from "../../../assets/bg.jpg"
import logo from "../../../assets/logo.png"
import { TextInput, Button } from "react-native-paper"
import Icon from "react-native-vector-icons/AntDesign"




function SignUp({ navigation }) {
  const [isLoading, setisLoading] = useState(false)


  return (
    <ScrollView>
      <View style={{
        "flexDirection": "row", "justifyContent": "center"
      }}>
        <Image source={logo} resizeMode="contain" style={{ "width": 50 }}></Image>
      </View >

      <Text style={{ fontSize: 30, opacity: 0.7, textAlign: "center", marginBottom: 20, marginTop: -20 }}>SIGN UP</Text>

      <TextInput activeOutlineColor="blue" placeholder="full name" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 15 }} mode="outlined" label="Name">
      </TextInput>

      <TextInput activeOutlineColor="blue" placeholder="@username" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 15 }} mode="outlined" label="username">
      </TextInput>

      <TextInput textContentType="emailAddress" activeOutlineColor="blue" placeholder="john@gmail.com" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 20 }} mode="outlined" label="email">
      </TextInput>

      <TextInput textContentType="newPassword" activeOutlineColor="blue" placeholder="password" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 20 }} mode="outlined" label="password">
      </TextInput>

      <Button style={{ backgroundColor: "#4286f4" }} color="white" loading={isLoading} onPress={() => { }}>Sign Up</Button>

      <Text style={{ opacity: 0.7, textAlign: "center", marginTop: 20 }}>Copyright ©️ 2022. All rights reserved.</Text>

      <Button onPress={() => navigation.navigate("Login")} style={{ "marginTop": 20 }}>
        Log In?
      </Button>

    </ScrollView>
  )
}


export default SignUp