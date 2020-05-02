import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// My imports
import AddContactScreen from './src/screens/AddContactScreen';
import ContactListScreen from './src/screens/ContactListScreen';
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { fetchUsers } from './src/api/ContactsAPI';

const ContactsTab = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
    },
  }
);

ContactsTab.navigationOptions = {
  /* tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contacts${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  ), */
};

const MainNavigator = createBottomTabNavigator(
  {
    Contacts: ContactsTab,
    Settings: SettingsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Contacts') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  state = {
    contacts: null,
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const result = await fetchUsers();
    // console.log(result);
    this.setState({ contacts: result });
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
