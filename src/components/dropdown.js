import * as React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons"

const DropDown = ({ data }) => {

  const componentIngridients = data?.ingredients.map(function (e, i) {
    return <List.Item key={i} title={`- ${e}`} />
  })

  return (
    <>
      <View style={{ marginBottom: 20, width: "100%" }}>
        <List.AccordionGroup >
          <View style={{ width: "100%" }}>
            <List.Accordion style={{ width: "100%", backgroundColor: "rgb(241, 252, 251)", borderRadius: 10 }} title={<View>
              <Icon name="fast-food" color="blue" size={20} /><Text>INGREDIENTS</Text>
            </View>} id="3">
              {componentIngridients}
            </List.Accordion>
          </View>
        </List.AccordionGroup >
      </View >

      <View style={{ marginBottom: 20, width: "100%" }}>
        <List.AccordionGroup>
          <View style={{ width: "100%" }}>
            <List.Accordion style={{ width: "100%", backgroundColor: "rgb(241, 252, 251)", borderRadius: 10 }} title={<View>
              <Icon name="ios-bookmarks" color="blue" size={20} /><Text>PUBLISHER URL</Text>
            </View>} id="3">
              <List.Item title={`${data.publisher_url}`} />
            </List.Accordion>
          </View>
        </List.AccordionGroup >
      </View>

      <View style={{ marginBottom: 20, width: "100%" }}>
        <List.AccordionGroup>
          <View style={{ width: "100%" }}>
            <List.Accordion style={{ width: "100%", backgroundColor: "rgb(241, 252, 251)", borderRadius: 10 }} title={<View>
              <Icon name="link" color="blue" size={20} /><Text>SOURCE URL</Text>
            </View>} id="3">
              <List.Item title={`${data.source_url}`} />
            </List.Accordion>
          </View>
        </List.AccordionGroup >
      </View>

    </>

  )
};

export default DropDown;