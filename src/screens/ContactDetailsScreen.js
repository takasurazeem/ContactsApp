import React from "react";
import { SafeAreaView, View, Button, StatusBar, Text } from "react-native";

export default class ContactDetailsScreen extends React.Component {
    
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam('name')
    })
  
    
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text>{this.props.navigation.getParam('phone')}</Text>
            <Button title="Get a random contact" onPress={this._goToRandom} />
          </View>
        </SafeAreaView>
      </>
    );
  }

  _goToRandom = () => {
    const contacts = this.props.screenProps.contacts;
    const phone = this.props.navigation.getParam('phone');
    let randomContact;
    while(!randomContact) {
        const randomIndex = Math.floor(Math.random() * contacts.length)
        if (phone !== contacts[randomIndex].phone) {
            randomContact = contacts[randomIndex]
        }
    }
    this.props.navigation.push('ContactDetails', {
        name: randomContact.name,
        phone: randomContact.phone,
    })
    // debugger;
  }

}
