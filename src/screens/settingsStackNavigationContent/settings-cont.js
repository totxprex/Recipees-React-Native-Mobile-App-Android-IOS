import React, { useState, useContext } from "react"
import { View, Image, ScrollView, Text, TouchableOpacity, Alert } from "react-native"
import bg from "../../../assets/bg.jpg"
import styles from "../../styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Loading from "../../logic/loadingAnimate"
import settingsContext from "../../logic/settings-context"
import ThemeModal from "../../components/modal"
import AsyncStorage from "@react-native-async-storage/async-storage"
import GlobalDataContext from "../../logic/global-context"
import placeholer from "../../../assets/placeholder.png"
import { getDocumentAsync } from "expo-document-picker"



function SettingsCont({ navigation, route }) {
  const { isLoading, setisLoading } = useContext(settingsContext)
  const [themeModalVisible, setThemeModalVisible] = useState(false)
  const { setLoggedIn, fullUserData, backendServer } = useContext(GlobalDataContext)
  const [userImg, setUserImg] = useState(fullUserData.photo)

  async function updatePic() {
    const file = await getDocumentAsync({ type: "image/jpeg" })

    if (file.type === "success") {
      try {
        setisLoading(true)
        const picture = file

        const token = await AsyncStorage.getItem("token")
        const form = new FormData()

        form.append("photo", { name: file.name, type: file.mimeType, uri: file.uri })

        await fetch(`${backendServer}/recipees/api/v4/1680/${token}/updatepic/${fullUserData.username}`, {
          method: "PATCH",
          headers: {
            "enctype": "multipart/form-data"
          },
          body: form,
        })
        setisLoading(false)

        Alert.alert("Complete", "Photo upload success")
      }
      catch (err) {
        console.log(err)
        Alert.alert("Error updating photo", "404")
        setisLoading(false)
      }
    }
  }


  return (
    <View style={styles.settingsCont}>
      <Loading isLoading={isLoading} />
      <ThemeModal setThemeModalVisible={setThemeModalVisible} isVisible={themeModalVisible} />

      <View style={styles.settingsheader}>
        <Image style={styles.settingsImage} source={bg} resizeMode="cover"></Image>

        <TouchableOpacity style={styles.imgCont} onPress={() => navigation.navigate("Camera", { setUserImg: setUserImg })}>
          <Image style={styles.userImage} source={{ uri: userImg || placeholer }} resizeMode="contain" />
        </TouchableOpacity>

      </View>

      <View style={styles.settingsList}>

        <ScrollView style={{ "flex": 1 }}>

          <TouchableOpacity onPress={() => navigation.navigate('Account', { data: fullUserData })} style={styles.settingsCard}>
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

          <TouchableOpacity onPress={() => navigation.navigate("My Recipes", { data: fullUserData })} style={styles.settingsCard}>
            <View style={styles.settingsCardIn1}>
              <Icon name="food-apple-outline" color="grey" size={25} style={{ "marginRight": 10 }} />
              <Text style={[styles.normalText, { "fontSize": 15, marginTop: 2 }]}>My Recipes</Text>
            </View>
            <View style={styles.settingsCardIn2}>
              <Icon name="arrow-right-thin" color="grey" size={25} style={{ "marginRight": 10 }} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={updatePic} style={styles.settingsCard}>
            <View style={styles.settingsCardIn1}>
              <Icon name="file-image" color="grey" size={25} style={{ "marginRight": 10 }} />
              <Text style={[styles.normalText, { "fontSize": 15, marginTop: 2 }]}>Update Profile Picture</Text>
            </View>
            <View style={styles.settingsCardIn2}>
              <Icon name="arrow-right-thin" color="grey" size={25} style={{ "marginRight": 10 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={async () => {
            setisLoading(true)
            await AsyncStorage.removeItem("token")
            await AsyncStorage.removeItem("username")
            setisLoading(false)
            setLoggedIn(false)
          }} style={styles.settingsCard}>
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