import React from 'react';
import AddContactForm from '../components/AddContactForm'

export default class AddContactScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Add Contact'
    }

    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList');
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit} />
    }

}