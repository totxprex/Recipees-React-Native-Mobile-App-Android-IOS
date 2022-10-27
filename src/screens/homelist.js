import Search from "../components/search";
import engineFunctionsContext from "../logic/engineContext";
import React, { useContext, forwardRef } from "react";
import List from "../components/list";
import listContext from "../logic/listContext";
import Details from "../components/details";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

const Lists = forwardRef(function (_props, ref) {

  const { setIsLoading, getData, initResturantsComp, setInitResturantsComp, isLoading, showLists, setSearchQuery, searchQuery, setNavigation } = useContext(engineFunctionsContext)

  const StackNavigate = createNativeStackNavigator()



  if (!showLists) return

  return (
    <listContext.Provider value={{ setIsLoading, getData, initResturantsComp, setInitResturantsComp, isLoading, showLists, setSearchQuery, searchQuery, setNavigation }}>
      <Search setIsLoading={setIsLoading} />

      <NavigationContainer>
        <StackNavigate.Navigator screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalTransition
        }} initialRouteName="Recipes">

          <StackNavigate.Screen name="Recipes" component={List}></StackNavigate.Screen>

          <StackNavigate.Screen name="Details" component={Details}></StackNavigate.Screen>
        </StackNavigate.Navigator>

      </NavigationContainer>

    </listContext.Provider>

  )
})


export default Lists