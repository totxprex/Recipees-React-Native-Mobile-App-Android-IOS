import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const Radio = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{ "flexDirection": "row", "alignItems": "center", marginBottom: 20 }}>
        <Text style={{"fontSize": 20, marginRight: 50, marginTop: -3}}>Light</Text>
        <RadioButton value="first" />
      </View>
      <View style={{ "flexDirection": "row", "alignItems": "center" }}>
        <Text style={{"fontSize": 20, marginRight: 52, marginTop: -3}}>Dark</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

export default Radio;