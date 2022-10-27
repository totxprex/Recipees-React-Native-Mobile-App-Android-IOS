import React, { useContext } from "react";
import { Text, ScrollView, ImageBackground } from "react-native";
import settingsContext from "../../logic/settings-context";
import styles from "../../styles";
import { TextInput } from "react-native-paper"
import bg from "../../../assets/bg.jpg"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


function AccountCont({ navigation, route }) {
  const { setisLoading } = useContext(settingsContext)

  return (
    <ImageBackground imageStyle={{ opacity: 0.2 }} style={{ flex: 1, paddingTop: 30 }} source={bg} resizeMode="cover">
      <ScrollView style={styles.recipeListCont2}>
        <Text style={{ fontSize: 25, color: "black", marginBottom: 20, textAlign: "center" }}>ACCOUNT SETTINGS</Text>
        <TextInput mode="flat" placeholder="Tolulope Mumuney" focusable={true} style={{ height: 50, elevation: 5, marginBottom: 30 }}></TextInput>
        <TextInput mode="flat" placeholder="totxprex@gmail.com" focusable={true} style={{ height: 50, elevation: 5, marginBottom: 30 }}></TextInput>
        <TextInput mode="flat" placeholder="*****" focusable={true} style={{ height: 50, elevation: 5, marginBottom: 30 }}></TextInput>

        <Icon.Button name="update" size={30}>
          Update Acoount Information
        </Icon.Button>
      </ScrollView>
    </ImageBackground>
  )
}


export default AccountCont