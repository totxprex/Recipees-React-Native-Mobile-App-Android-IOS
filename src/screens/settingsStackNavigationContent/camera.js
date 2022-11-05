import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, Alert, View } from 'react-native';
import { Button } from 'react-native-paper';
import GlobalDataContext from '../../logic/global-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


function CameraCont({ navigation, route }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPersmission, setHasPermission] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cameraReady, setCameraReady] = useState(false)
  let camera = useRef()
  const { backendServer, fullUserData } = useContext(GlobalDataContext)


  useEffect(() => {
    requestPermission().then(function (reply) {
      setHasPermission(reply.granted)
    })
  }, [])

  if (!hasPersmission) return

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));

  }

  function takePicture() {
    if (!cameraReady) return
    setIsLoading(true)
    camera.current.takePictureAsync().then(async (pic) => {
      try {
        const picture = pic.uri.split("/").pop()
        route.params.setUserImg(pic.uri)
        console.log(picture)

        const token = await AsyncStorage.getItem("token")
        const form = new FormData()

        form.append("photo", { uri: pic.uri, name: picture, type: "image/jpg" })

        await fetch(`${backendServer}/recipees/api/v4/1680/${token}/updatepic/${fullUserData.username}`, {
          method: "PATCH",
          headers: {
            "enctype": "multipart/form-data"
          },
          body: form,
        })

        navigation.navigate("Settings")
        setIsLoading(false)
      }
      catch {
        Alert.alert("Error updating photo")
        setIsLoading(false)
      }

    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }



  return (
    <View style={styles.container}>
      <Camera ref={camera} onCameraReady={() => setCameraReady(true)} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <Button onPress={() => takePicture()} loading={isLoading} color="blue" style={styles.button}>
            <Text style={{ color: "white" }}>Take Picture</Text>
          </Button>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "grey"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraCont