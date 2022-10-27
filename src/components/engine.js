import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import styles from "../styles";
import { View, Text } from "react-native"
import Card from "./card";
import Lists from "../screens/homelist";
import Settings from "../screens/settings";
import Fav from "../screens/fav";
import engineFunctionsContext from "../logic/engineContext";




const Engine = forwardRef(function ({ loggedIn }, ref) {
  const [initResturantsComp, setInitResturantsComp] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showListScreen, setShowListScreen] = useState(true)
  const [showFavScreen, setShowFavScreen] = useState(false)
  const [showSettingsScreen, setShowSettingsScreen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("pizza")
  const [navigation, setNavigation] = useState(null)



  useImperativeHandle(ref, function () {
    return {
      setShowListScreen() {
        getData(searchQuery, navigation)
        setShowListScreen(true)
        setShowFavScreen(false)
        setShowSettingsScreen(false)
      },
      setShowFavScreen() {
        setShowListScreen(false)
        setShowFavScreen(true)
        setShowSettingsScreen(false)
      },
      setShowSettingsScreen() {
        setShowListScreen(false)
        setShowFavScreen(false)
        setShowSettingsScreen(true)
      }
    }
  }

  )

  async function getData(query, navigation) {
    try {
      setIsLoading(true)
      const { recipes } = await (await (fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`))).json()


      const recipeComponents = recipes.map(function (e, i) {
        return <Card setIsLoading={setIsLoading} navigation={navigation ? navigation : {}} key={e.recipe_id} id={e.recipe_id} data={e} />
      })

      setInitResturantsComp(recipeComponents)
      setIsLoading(false)
    }
    catch {
      setInitResturantsComp([<Text>Recipe not found. Try searching "pizza", "corn"...</Text>])
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData(searchQuery, navigation)
  }, [searchQuery, navigation])

  if (!loggedIn) return

  return (
    <engineFunctionsContext.Provider value={{ setSearchQuery: setSearchQuery, searchQuery: searchQuery, setInitResturantsComp: setInitResturantsComp, showLists: showListScreen, initResturantsComp: initResturantsComp, isLoading: isLoading, getData: getData, setIsLoading: setIsLoading, setNavigation: setNavigation }} >
      <View style={styles.engineCont}>
        <Lists />
        <Settings showSettings={showSettingsScreen} />
        <Fav showFav={showFavScreen} />
      </View >
    </engineFunctionsContext.Provider >
  )
})

export default Engine