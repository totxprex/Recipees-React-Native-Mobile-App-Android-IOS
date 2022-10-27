import React from "react";
import { ImageBackground } from "react-native";
import Login from "./login-signup-stack/login";
import SignUp from "./login-signup-stack/signup";
import styles from "../styles";
import bg from "../../assets/bg.jpg"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets } from "@react-navigation/stack";


function AuthEngine({ }) {


  const authStackNavigation = createNativeStackNavigator()

  return (
    <ImageBackground imageStyle={{ opacity: 0.1 }} style={styles.loggedInCont} resizeMode="cover" source={bg}>

      <NavigationContainer>
        <authStackNavigation.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}>

          <authStackNavigation.Screen name="Login" component={Login}></authStackNavigation.Screen>

          <authStackNavigation.Screen name="Sign Up" component={SignUp}></authStackNavigation.Screen>

        </authStackNavigation.Navigator>
      </NavigationContainer>

    </ImageBackground >
  )
}


export default AuthEngine