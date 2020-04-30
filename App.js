import React from "react";
import { createSwitchNavigator } from "react-navigation";

// My imports
import contacts, { compareNames } from "./contacts";
import AddContactScreen from "./src/screens/AddContactScreen";
import ContactListScreen from "./src/screens/ContactListScreen";


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
