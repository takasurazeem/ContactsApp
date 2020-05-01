import React from 'react';
import { SafeAreaView, StyleSheet, Button, StatusBar } from 'react-native';

// My imports
import SectionListContacts from '../components/SectionListContacts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  fill: {
    flex: 1,
  },
});

export default class ContactListScreen extends React.Component {
  static defaultNavigationOptions = ({ navigation }) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button
        title="Add"
        color="#a41034"
        onPress={() => {
          navigation.navigate('AddContact');
        }}
      />
    ),
  });

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };

  sort = () => {
    this.state = this.setState((prevState) => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.fill}>
          {/* <Button title="toggle contacts" onPress={this.toggleContacts} /> */}
          {/* <Button title="sort" onPress={this.sort} /> */}
          {this.state.showContacts && !this.state.showForm && (
            <SectionListContacts
              style={styles.fill}
              contacts={this.props.screenProps.contacts}
              onSelectContact={(contact) => {
                // debugger;
                this.props.navigation.navigate('ContactDetails', {
                  phone: contact.phone,
                  name: contact.name,
                });
              }}
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}
