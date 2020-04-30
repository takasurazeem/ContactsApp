import React from 'react'
import { StyleSheet, View, TextInput, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5,
    },
})

export default class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    getHandler = key => val => {
        this.setState({ [key]: val })
    }


    /*
    handleNameChange = this.getHandler('name') // val => { this.setState({name: val}) }
    handlePhoneChange = this.getHandler('phone')
     */

    /* 
   handleNameChange = name => {
       // this.setState({ name }, this.validateForm)
       this.setState({ name })
   }
   */

     
    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) {
            // this.setState({ phone }, this.validateForm)
            this.setState({ phone })
        }
    }
    

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length <= 10 && this.state.phone.length != 0 && this.state.name.length >= 3) {
            this.setState({ isFormValid: true })
        } else {
            this.setState({ isFormValid: false })
        }
    }

    handleSubmit = () => {
        // this.props.onSubmit({ name: this.state.name, phone: this.state.phone, })
        // this.props.onSubmit({ ...this.state })
        // \/ below is equal to any of above two
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={this.getHandler('name')}
                    value={this.state.name} />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    onChangeText={this.getHandler('phone')}
                    // The above method is concise but not performance efficient.
                    // rather use the {this.updatePhoneHandler()}
                    value={this.state.phone}
                    keyboardType='phone-pad'
                    keyboardAppearance='dark'
                    autoCompleteType='tel' />

                <Button title=" Add Contact" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
            </KeyboardAvoidingView>
        )
    }

}