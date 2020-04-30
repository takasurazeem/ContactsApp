import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  StatusBar,
} from 'react-native';

// My imports
import contacts, { compareNames } from './contacts'
import AddContactForm from './AddContactForm'
import ContactList from './ContactsList'


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  fill: {
    flex: 1,
  }
});

class App extends React.Component {
  state = {
    showContacts: true,
    contacts: contacts,
    showForm: false,
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      showForm: false,
    }))
  }

  toggleContacts = () => { this.setState(prevState => ({ showContacts: !prevState.showContacts })) }

  toggleForm = () => { this.setState(prevState => ({ showForm: !prevState.showForm })) }

  sort = () => {
    this.state = this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }


  render() {
    if (this.state.showForm)
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.fill}>
            <AddContactForm onSubmit={this.addContact} />
          </SafeAreaView>
        </>
      )
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.fill}>
          <Button title="toggle contacts" onPress={this.toggleContacts} />
          {/* <Button title="sort" onPress={this.sort} /> */}
          <Button title="toggle form" onPress={this.toggleForm} />
          {
            this.state.showContacts && !this.state.showForm &&
            <ContactList style={styles.fill} contacts={this.state.contacts} />
          }
        </SafeAreaView>
      </>
    )
  }
}


export default App;
