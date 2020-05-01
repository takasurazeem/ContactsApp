import React from "react";
import { createStackNavigator, createSwitchNavigator, createTabNavigator } from "react-navigation";

// My imports
import contacts from "./contacts";
import AddContactScreen from "./src/screens/AddContactScreen";
import ContactListScreen from "./src/screens/ContactListScreen";
import ContactDetailsScreen from "./src/screens/ContactDetailsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'


const ContactsTab = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  },
  {
    initialRouteName: "ContactList",
    navigationOptions: {
      headerTintColor: '#a41034'
    }
  }
);

ContactsTab.navigationOptions = {
  tabBarIcon: ( { focused, tintColor } ) => (
    <Ionicons
      name={`ios-contacts${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createTabNavigator({
  Contacts: ContactsTab,
  Settings: SettingsScreen,
}, {
  tabBarOptions: {
    activeTintColor: '#a41034'
  }
})

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Login",
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
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    );
  }
}
