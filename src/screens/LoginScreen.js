import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { login } from '../api/LoginAPI';

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
  error: {
    textAlign: 'center',
    color: 'red',
  },
});

export default class LoginScreen extends React.Component {
  state = {
    username: 'username',
    password: 'password',
  };

  handleUsernameUpdate = (username) => {
    this.setState({ username });
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.error}>{this.state.error}</Text>
            <TextInput
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={this.handleUsernameUpdate}
              style={styles.input}
              placeholder="username"
            />
            <TextInput
              value={this.state.password}
              onChangeText={this.handlePasswordUpdate}
              style={styles.input}
              placeholder="password"
              secureTextEntry
              textContentType="password"
            />
            <Button title="Click to Login..." onPress={this._login} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  }

  _login = async () => {
    try {
      const successs = await login(this.state.username, this.state.password);
      this.props.navigation.navigate('Main');
    } catch (err) {
      const errMessage = err.message;
      console.log(errMessage);
      this.setState({ error: errMessage });
    }
  };
}
