import React from "react";
import styles from "../styles";
import { View, ScrollView, Image, Text } from "react-native"
import star5 from "../../assets/5_star.png"
import open from "../../assets/open.png"
import dinner from "../../assets/logo.png"
import DropDown from "./dropdown"


export default function GetCard({ data }) {


  return (
    <ScrollView style={styles.recipeListCont2}>
      <View style={styles.cardCont2}>

        <Image source={{ uri: data.image_url }} style={styles.cardImg2}></Image>


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

        <DropDown data={data} />
      </View>
    </ScrollView>

  )
}