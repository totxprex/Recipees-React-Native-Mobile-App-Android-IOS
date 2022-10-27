import React, { useState, useEffect } from "react";
import { Pressable, Modal, StyleSheet, Text, View } from "react-native";
import Radio from "./radio";

const ThemeModal = ({ isVisible, setThemeModalVisible }) => {


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, { fontSize: 30, color: "grey" }]}>
              Theme
            </Text>
            <Text style={styles.modalText}><Radio />
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setThemeModalVisible(false)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "30%",
    width: "100%"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "70%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "rgb(241, 252, 251)",
    color: "black"
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeBtn: {
    position: "absolute",
    left: "110%",
    top: 10
  }
});

export default ThemeModal;