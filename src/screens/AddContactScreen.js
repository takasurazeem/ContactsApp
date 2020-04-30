import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  StatusBar,
} from 'react-native';

// My imports

import AddContactForm from '../components/AddContactForm'
import { render } from 'react-dom';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  fill: {
    flex: 1,
  }
});

export default class AddContactScreen extends React.Component {

    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList');
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit} />
    }

}