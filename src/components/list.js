import React, { useContext, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { FlatList, Animated } from "react-native"
import listContext from "../logic/listContext";
import styles from "../styles";
import AnimatedButton from "./animated-icon";


const List = forwardRef(function ({ navigation }, ref) {
  const { setIsLoading, getData, initResturantsComp, setInitResturantsComp, showLists, setSearchQuery, searchQuery, setNavigation, isLoading } = useContext(listContext)

  const startValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(startValue, {
      toValue: 1,
      duration: 1000,
      isInteraction: true,
      useNativeDriver: true
    }).start()

  }, [startValue])

  useImperativeHandle(ref, function () {
    return {
      navigateToDetailsPage() {
        navigation?.navigate("Details")
      }
    }
  })

  useEffect(() => {
    setNavigation(navigation)
  }, [])

  return (
    <>
      <Animated.FlatList style={{ opacity: startValue }} refreshing={isLoading} onRefresh={() => {
        setIsLoading(true)
        getData(searchQuery, navigation)
      }} data={initResturantsComp} contentContainerStyle={[styles.recipeListCont]} renderItem={({ item }) => item} />
      <AnimatedButton />
    </>

  )
})



export default List