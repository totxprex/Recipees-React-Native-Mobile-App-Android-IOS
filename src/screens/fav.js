import { Text, View, FlatList, Alert } from "react-native"
import styles from "../styles";
import Loading from "../logic/loadingAnimate";
import React, { useState, useContext, useEffect } from "react";
import GlobalDataContext from "../logic/global-context";
import Card from "../components/card";






export default function Fav({ showFav }) {
  const [isLoading, setisLoading] = useState(true)
  const { fullUserData } = useContext(GlobalDataContext)
  const [comp, setCom] = useState([])

  async function getData() {
    let { likedRecipes } = fullUserData

    try {
      likedRecipes = likedRecipes.map(async function (e) {
        const { recipe } = await (await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${e}`)).json()

        return recipe
      })

      likedRecipes = await Promise.all(likedRecipes)


      likedRecipes = likedRecipes.map((e, i) => {
        return <Card shouldIShowDetails="no" data={e} navigation={{}} key={i} id={e.recipe_id} />
      })

      setCom(likedRecipes)
      setisLoading(false)
    }
    catch (err) {
      console.log(err)
      Alert.alert("Error", "Failed to fetch some data")
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (!showFav) return

  return (
    <View style={styles.recipeListCont}>
      <View style={{ backgroundColor: "rgb(241, 252, 251)", height: 40, elevation: 2, justifyContent: "center", width: "100%", paddingLeft: 20 }}>
        <Text style={[styles.heading, { fontWeight: "bold" }]}>Favourites</Text>
      </View>
      <Loading styles={{ "left": "45%" }} isLoading={isLoading} />
      <FlatList contentContainerStyle={styles.recipeListCont} data={comp} renderItem={({ item }) => {
        return item
      }} />

    </View>
  )
}