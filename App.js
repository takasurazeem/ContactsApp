import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  StatusBar,
} from "react-native";
import { createSwitchNavigator } from "react-navigation";

// My imports
import contacts, { compareNames } from "./contacts";
import AddContactScreen from "./src/screens/AddContactScreen";
import ContactListScreen from "./src/screens/ContactListScreen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  fill: {
    flex: 1,
  },
});

const AppNavigator = createSwitchNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
  },
  {
    initialRouteName: "ContactList",
  }
);

export default class App extends React.Component {
  state = {
    contacts: contacts,
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      showForm: false,
    }));
  };

  render() {
    return <AppNavigator screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />;
  }
}
