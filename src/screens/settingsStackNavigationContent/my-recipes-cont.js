import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../../styles";
import Card from "../../components/card";
import Loading from "../../logic/loadingAnimate";
import GlobalDataContext from "../../logic/global-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native"


function MyRecipesCont({ navigation, route }) {
  const [component, setComponents] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const { backendServer, fullUserData } = useContext(GlobalDataContext)
  const [recipes, setRecipes] = useState([])


  async function fixAwsUrl() {
    let { myPostedRecipes } = { ...route.params.data }
    const token = await AsyncStorage.getItem("token")

    myPostedRecipes = myPostedRecipes.map(async (e) => {
      try {
        const { data } = await (await fetch(`${backendServer}/recipees/api/v4/1680/${token}/aws/${e.image_url}`)).json()
        const newRec = { ...e }
        newRec.image_url = data
        return newRec
      }
      catch (err) {
        Alert.alert("Failed", "Some resources failed to fetch")
      }
    })

    myPostedRecipes = await Promise.all(myPostedRecipes)

    setRecipes(myPostedRecipes)

  }


  async function getData() {
    try {
      setisLoading(true)

      const dataa = recipes.map((e) => {
        return <Card shouldIShowDetails="no" navigation={{}} data={e} id={e._id} key={e._id} />
      })

      setComponents(dataa)
      setisLoading(false)
    }
    catch (_err) {
      setComponents([<Text>Error getting your recipe list. Please try again later</Text>])
      setisLoading(false)
    }
  }

  useEffect(() => {
    fixAwsUrl()
  }, [])

  useEffect(() => {

    getData()
  }, [recipes])


  return (
    <View style={styles.recipeListCont}>
      <View style={{ backgroundColor: "rgb(241, 252, 251)", height: 40, elevation: 2, justifyContent: "center", width: "100%", paddingLeft: 20 }}>
        <Text style={[styles.heading, { fontWeight: "bold" }]}>Your Recipes</Text>
      </View>
      <Loading isLoading={isLoading} />
      <FlatList contentContainerStyle={styles.recipeListCont} data={component} renderItem={({ item }) => item
      } />
    </View>
  )
}


export default MyRecipesCont