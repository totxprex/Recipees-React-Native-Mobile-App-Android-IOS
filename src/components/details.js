import React, { useState } from "react";
import { Text } from "react-native"
import GetCard from "./getCard";


function Details({ navigation, route }) {

  return (
    <GetCard data={route.params.data} />
  )
}


export default Details