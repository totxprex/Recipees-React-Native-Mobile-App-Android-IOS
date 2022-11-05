import React, { useState, useRef, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import styles from './src/styles';
import Nav from './src/components/nav';
import Engine from './src/components/engine';
import ThemeConText from './src/logic/themeContext';
import AuthEngine from './src/screens/Login-Signup';
import GlobalDataContext from './src/logic/global-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [theme, setTheme] = useState("light")
  const [navFunction, setNavFunction] = useState({})
  const navFunctions = useRef(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [fullUserData, setFullUserData] = useState({})


  useEffect(function () {
    setNavFunction(navFunctions)
  }, [navFunctions])


  return (
    <GlobalDataContext.Provider value={{ backendServer: "http://192.168.174.218:5500", setLoggedIn, fullUserData: fullUserData, setFullUserData, loggedIn }}>
      <ThemeConText.Provider value={theme}>
        <SafeAreaView style={styles.container}>
          {!loggedIn && <AuthEngine />}
          <View style={[styles.mainCont, { display: `${!loggedIn ? "none" : "flex"}` }]}>
            <Engine loggedIn={loggedIn} ref={navFunctions} />
            <Nav loggedIn={loggedIn} navFunctions={navFunction.current} />
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ThemeConText.Provider>
    </GlobalDataContext.Provider>
  );
}


