import React, { useState, useEffect, useContext } from "react";
import { Text, Image, ScrollView, View, Alert } from "react-native";
import logo from "../../../assets/logo.png"
import { TextInput, Button } from "react-native-paper"
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalDataContext from "../../logic/global-context";
import Loading from "../../logic/loadingAnimate"
import LottieView from 'lottie-react-native';

function Login({ navigation }) {
  const [isLoading, setisLoading] = useState(false)
  const [whatToDo, setWhatToDo] = useState("")
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setpasswordInput] = useState("")
  const { backendServer, setLoggedIn, setFullUserData, loggedIn } = useContext(GlobalDataContext)

  async function runLoggedInCheck() {
    const tokenToGet = await AsyncStorage.getItem("token")
    if (tokenToGet) {
      try {
        const usernameToGet = await AsyncStorage.getItem("username")

        const { data } = await (await fetch(`${backendServer}/recipees/api/v4/1680/${tokenToGet}/getuser/${usernameToGet}`)).json()

        if (!data) throw new Error("Internal Server Error")
        setFullUserData(data)
        setLoggedIn(true)
        setisLoading(false)
      }
      catch {
        Alert.alert("Server Error", "Please try again later...")
      }
    }
    else {
      setWhatToDo("Stay in login")
    }
  }

  useEffect(() => {

    runLoggedInCheck()
  }, [])


  async function logIn() {
    try {
      const { token, username } = await (await fetch(`${backendServer}/recipees/api/v4/1680/login/${usernameInput.toLowerCase()}/${passwordInput.toLowerCase()}`)).json()

      if (!token) throw new Error("Username or password incorrect")

      await AsyncStorage.setItem("token", token)
      await AsyncStorage.setItem("username", username)

      const usernameToGet = await AsyncStorage.getItem("username")
      const tokenToGet = await AsyncStorage.getItem("token")

      const { data } = await (await fetch(`${backendServer}/recipees/api/v4/1680/${tokenToGet}/getuser/${usernameToGet}`)).json()

      if (!data) throw new Error("Internal Server Error")
      setFullUserData(data)
      setLoggedIn(true)
      setisLoading(false)

    }
    catch (err) {
      Alert.alert("Error", "Error Logging You In...")
      setisLoading(false)
    }
  }


  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Loading isLoading={whatToDo === "Stay in login" ? false : true} />
      <ScrollView style={{ display: `${whatToDo === "Stay in login" ? "flex" : "none"}` }}>
        <View style={{
          "flexDirection": "row", "justifyContent": "center"
        }}>
          <Image source={logo} resizeMode="contain" style={{ "width": 50 }}></Image>
           <LottieView style={{marginTop: 50}} loop autoPlay source={require("../../../assets/watermelon.json")}/>
          
        </View >
        <Text style={{ fontSize: 30, opacity: 0.7, textAlign: "center", marginBottom: 30, marginTop: -20 }}>LOG IN</Text>

        <TextInput onChangeText={(text) => setUsernameInput(text)} activeOutlineColor="blue" placeholder="@username" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 15 }} mode="outlined" label="your username">
        </TextInput>


        <TextInput onChangeText={(text) => setpasswordInput(text)} textContentType="password" activeOutlineColor="blue" placeholder="password" focusable={true} style={{ height: 40, elevation: 5, marginBottom: 25 }} mode="outlined" label="your password">
        </TextInput>


        <Button onPress={() => {
          setisLoading(true)
          logIn()
        }} style={{ backgroundColor: "#4286f4" }} color="white" loading={isLoading}>Log In</Button>

        <Text style={{ opacity: 0.7, textAlign: "center", marginTop: 30 }}>Copyright ©️ 2022. All rights reserved.</Text>

        <Button onPress={() => navigation.navigate("Sign Up")} style={{ "marginTop": 20 }}>
          Sign Up?
        </Button>
      </ScrollView>
    </View>
  )
}


export default Login