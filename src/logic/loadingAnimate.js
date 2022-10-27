import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Loading = ({isLoading}) => {

  return (
    <ActivityIndicator style={{ position: "absolute", elevation: 100, "top": "50%", zIndex: 1000 }} size="large" animating={isLoading} />
  )
};

export default Loading;