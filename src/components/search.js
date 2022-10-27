import { TextInput, } from "react-native";
import React, { useState, useContext } from "react";
import styles from "../styles";
import { View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import listContext from "../logic/listContext";




function Search({ setIsLoading }) {

  const [searchText, setSearchText] = useState("")
  const { setSearchQuery, searchQuery, getData, setInitResturantsComp } = useContext(listContext)

  function search() {
    if (searchText === "") return
    setIsLoading(true)
    setSearchQuery(searchText)
  }

  return (
    <View style={styles.searchCont}>
      <Icon style={[styles.searchImg, styles.love, { "width": 17 }]} name="hearto" size={15}></Icon>
      <TextInput onSubmitEditing={search} onChangeText={(text) => setSearchText(text)} style={[styles.searchInput]} placeholder={searchQuery}></TextInput>
      <Icon onPress={search} style={[styles.searchImg, styles.close]} name="search1" size={15}></Icon>
    </View>

  )
}


export default Search