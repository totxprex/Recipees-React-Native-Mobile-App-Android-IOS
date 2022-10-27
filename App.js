import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import styles from './src/styles';
import Nav from './src/components/nav';
import Engine from './src/components/engine';
import ThemeConText from './src/logic/themeContext';
import AuthEngine from './src/screens/Login-Signup';

export default function App() {
  const [theme, setTheme] = useState("light")
  const [navFunction, setNavFunction] = useState({})
  const navFunctions = useRef(null)
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(function () {
    setNavFunction(navFunctions)
  }, [])

  return (
    <ThemeConText.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        {!loggedIn && <AuthEngine />}
        {loggedIn && <View style={styles.mainCont}>
          <Engine loggedIn={loggedIn} ref={navFunctions} />
          <Nav loggedIn={loggedIn} navFunctions={navFunction.current} />
        </View>}
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeConText.Provider>
  );
}


