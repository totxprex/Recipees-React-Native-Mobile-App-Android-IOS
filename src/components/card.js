import React from "react";
import styles from "../styles";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native"
import star5 from "../../assets/5_star.png"
import open from "../../assets/open.png"
import dinner from "../../assets/logo.png"
import Icon from 'react-native-vector-icons/AntDesign';




export default function Card({ shouldIShowDetails, data, navigation, id, setIsLoading }) {


  async function getDetailsData() {
    try {
      if (shouldIShowDetails === "no") return
      setIsLoading(true)
      const { recipe: data } = await (await (fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`))).json()

      navigation?.navigate("Details", { data: data })
    }
    catch (err) {
      Alert.alert("Cannot find that recipe")
      setIsLoading(false)
    }
  }

  return (
    <TouchableOpacity onPress={getDetailsData} style={styles.cardCont}>

      <Icon name="heart" color="red" size={20} style={[styles.liked]}></Icon>

      <Image source={{ uri: data.image_url }} style={styles.cardImg}></Image>


      <View style={styles.detailsCont}>
        <View style={styles.status}>
          <Text style={styles.heading}>{data.title.split(" ").splice(0, 3).join(" ")}...</Text>
          <Image resizeMode="stretch" source={star5} style={styles.starImg}></Image>
          <Text style={styles.normalText}>{data.publisher.split(" ").splice(0, 5).join(" ")}</Text>

        </View>

        <View style={styles.col2}>

          <Image resizeMode="stretch" style={{ "width": 20, "height": 20, marginBottom: 10 }} source={open}></Image>

          <Image resizeMode="stretch" style={{ "width": 20, "height": 20, marginBottom: 10 }} source={dinner}></Image>

        </View>
      </View>
    </TouchableOpacity >
  )
}