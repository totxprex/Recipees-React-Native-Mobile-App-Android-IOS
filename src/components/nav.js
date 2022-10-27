import React, { useState } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native"
import styles from "../styles";
import map from "../../assets/map.png"
import res from "../../assets/resturant.png"
import settings from "../../assets/settings.png"
import cart from "../../assets/cart.png"



function Nav({ navFunctions, loggedIn }) {

  const [activeNav, setActiveNav] = useState("res")

  function navigateToRes() {
    setActiveNav("res")
    navFunctions.setShowListScreen()
  }

  function navigateToSettings() {
    setActiveNav("settings")
    navFunctions.setShowSettingsScreen()
  }

  function navigateToCart() {
    setActiveNav("fav")
    navFunctions.setShowFavScreen()
  }

  if (!loggedIn) return

  return (
    <View style={[styles.navCont]}>

      <TouchableOpacity style={{ "display": "flex", "alignItems": "center" }} onPress={navigateToRes}>
        <Image style={[styles.img, { "opacity": Number(`${activeNav === "res" ? 1 : 0.3}`) }]} source={res}></Image>
        <Text style={{ "color": "#474A4F" }}>Resturant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ "display": "flex", "alignItems": "center" }} onPress={navigateToCart}>
        <Image style={[styles.img, { "opacity": Number(`${activeNav === "fav" ? 1 : 0.3}`) }]} source={cart}></Image>
        <Text style={{ "color": "#474A4F" }}>Favourite</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ "display": "flex", "alignItems": "center" }} onPress={navigateToSettings}>
        <Image style={[styles.img, { "opacity": Number(`${activeNav === "settings" ? 1 : 0.3}`) }]} source={settings}></Image>
        <Text style={{ "color": "#474A4F" }}>Settings</Text>
      </TouchableOpacity>


    </View >
  )
}



export default Nav