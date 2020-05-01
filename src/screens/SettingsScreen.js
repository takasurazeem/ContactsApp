import React from "react";
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class SettingsScreen extends React.Component {
   static navigationOptions = {
    tabBarIcon: ( { focused, tintColor } ) => (
      <Ionicons
        name={`ios-options${focused ? '' : '-outline'}`}
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return <View style={{flex:1, backgroundColor: 'pink'}}/>;
  }
}
