import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    StatusBar,
} from 'react-native';

// My imports
import contacts, { compareNames } from '../../contacts'
import SectionListContacts from '../components/SectionListContacts'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    fill: {
        flex: 1,
    }
});

export default class ContactListScreen extends React.Component {
    state = {
        showContacts: true,
    }

    toggleContacts = () => { this.setState(prevState => ({ showContacts: !prevState.showContacts })) }

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    sort = () => {
        this.state = this.setState(prevState => ({
            contacts: [...prevState.contacts].sort(compareNames),
        }))
    }


    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.fill}>
                    <Button title="toggle contacts" onPress={this.toggleContacts} />
                    {/* <Button title="sort" onPress={this.sort} /> */}
                    <Button title="toggle form" onPress={this.showForm} />
                    {
                        this.state.showContacts && !this.state.showForm &&
                        <SectionListContacts style={styles.fill} contacts={this.props.screenProps.contacts} />
                    }
                </SafeAreaView>
            </>
        )
    }
}

