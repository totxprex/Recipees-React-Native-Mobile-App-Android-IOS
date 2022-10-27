import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../../styles";
import Card from "../../components/card";
import Loading from "../../logic/loadingAnimate";


function MyRecipesCont({ navigation, route }) {
  const [component, setComponents] = useState([])
  const [isLoading, setisLoading] = useState(false)

  async function getData() {
    try {
      setisLoading(true)
      const { recipes } = await (await (fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`))).json()

      const dataa = recipes.map((e) => {
        return <Card shouldIShowDetails="no" navigation={{}} data={e} id={e.recipe_id} key={e.recipe_id} />
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
    getData()
  }, [])


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