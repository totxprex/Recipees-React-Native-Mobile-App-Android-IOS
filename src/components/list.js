import React, { useContext, forwardRef, useImperativeHandle, useEffect } from "react";
import { FlatList } from "react-native"
import listContext from "../logic/listContext";
import styles from "../styles";


const List = forwardRef(function ({ navigation }, ref) {
  const { setIsLoading, getData, initResturantsComp, setInitResturantsComp, showLists, setSearchQuery, searchQuery, setNavigation, isLoading } = useContext(listContext)

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
    <FlatList refreshing={isLoading} onRefresh={() => {
      setIsLoading(true)
      getData(searchQuery, navigation)
    }} data={initResturantsComp} contentContainerStyle={styles.recipeListCont} renderItem={({ item }) => item} />
  )
})



export default List