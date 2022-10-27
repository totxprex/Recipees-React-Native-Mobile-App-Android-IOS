import React, { useState } from "react"
import settingsContext from "../logic/settings-context"
import SettingsCont from "./settingsStackNavigationContent/settings-cont"
import MyRecipesCont from "./settingsStackNavigationContent/my-recipes-cont"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import AccountCont from "./settingsStackNavigationContent/account-cont"
import { TransitionPresets } from "@react-navigation/stack"




export default function Settings({ showSettings }) {
  const [isLoading, setisLoading] = useState(false)


  const settingsStackNav = createNativeStackNavigator()

  if (!showSettings) return

  return (
    <settingsContext.Provider value={{ setisLoading, isLoading }}>

      <NavigationContainer>
        <settingsStackNav.Navigator initialRouteName="Settings" screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}>

          <settingsStackNav.Screen name="Settings" component={SettingsCont}></settingsStackNav.Screen>


          <settingsStackNav.Screen name="My Recipes" component={MyRecipesCont}></settingsStackNav.Screen>

          <settingsStackNav.Screen name="Account" component={AccountCont}></settingsStackNav.Screen>

        </settingsStackNav.Navigator>

      </NavigationContainer>

    </settingsContext.Provider>
  )
}