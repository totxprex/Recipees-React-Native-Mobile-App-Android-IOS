import * as React from 'react';
import { ActivityIndicator, MD2Colors, } from 'react-native-paper';
import { View } from "react-native"

const Loading = ({ isLoading, styles }) => {

  return (

    <ActivityIndicator style={[{ position: "absolute", elevation: 100, "top": "50%", zIndex: 1000, left: "40%" }, styles]} size="large" animating={isLoading} />

  )
};

export default Loading;