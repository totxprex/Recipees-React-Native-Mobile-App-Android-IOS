import React, { useState, useContext } from "react"
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native"
import bg from "../../../assets/bg.jpg"
import placeholder from "../../../assets/placeholder.png"
import styles from "../../styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Loading from "../../logic/loadingAnimate"
import settingsContext from "../../logic/settings-context"
import ThemeModal from "../../components/modal"



function SettingsCont({ navigation, route }) {
  const { isLoading, setisLoading } = useContext(settingsContext)
  const [themeModalVisible, setThemeModalVisible] = useState(false)


  return (
    <View style={styles.settingsCont}>
      <Loading isLoading={isLoading} />
      <ThemeModal setThemeModalVisible={setThemeModalVisible} isVisible={themeModalVisible} />

      <View style={styles.settingsheader}>
        <Image style={styles.settingsImage} source={bg} resizeMode="cover"></Image>
        <Image style={styles.userImage} source={placeholder} resizeMode="contain"></Image>
      </View>

      <View style={styles.settingsList}>

        <ScrollView style={{ "flex": 1 }}>

          <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.settingsCard}>
            <View style={styles.settingsCardIn1}>
              <Icon name="account" color="grey" size={25} style={{ "marginRight": 10 }} />
              <Text style={[styles.normalText, { "fontSize": 15, marginTop: 2 }]}>Account</Text>
            </View>
            <View style={styles.settingsCardIn2}>
              <Icon name="arrow-right-thin" color="grey" size={25} style={{ "marginRight": 10 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setThemeModalVisible(true)} style={styles.settingsCard}>
            <View style={styles.settingsCardIn1}>
              <Icon name="theme-light-dark" color="grey" size={25} style={{ "marginRight": 10 }} />
              <Text style={[styles.normalText, { "fontSize": 15, marginTop: 2 }]}>Theme</Text>
            </View>
            <View style={styles.settingsCardIn2}>
              <Icon name="arrow-right-thin" color="grey" size={25} style={{ "marginRight": 10 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("My Recipes")} style={styles.settingsCard}>
            <View style={styles.settingsCardIn1}>
              <Icon name="food-apple-outline" color="grey" size={25} style={{ "marginRight": 10 }} />
              <Text style={[styles.normalText, { "fontSize": 15, marginTop: 2 }]}>My Recipes</Text>
            </View>
            <View style={styles.settingsCardIn2}>
              <Icon name="arrow-right-thin" color="grey" size={25} style={{ "marginRight": 10 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsCard}>
            <View style={styles.settingsCardIn1}>
              <Icon name="backspace-reverse-outline" color="grey" size={25} style={{ "marginRight": 10 }} />
              <Text style={[styles.normalText, { "fontSize": 15, marginTop: 2 }]}>Sign out</Text>
            </View>
            <View style={styles.settingsCardIn2}>
              <Icon name="arrow-right-thin" color="grey" size={25} style={{ "marginRight": 10 }} />
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  )
}


export default SettingsCont