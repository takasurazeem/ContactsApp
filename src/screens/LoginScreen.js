import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Button,
	StatusBar,
	View,
	Text,
} from "react-native";

export default class LoginScreen extends React.Component {
	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView style={{ flex: 1 }}>
					<View style={{ justifyContent: "center", flex: 1 }}>
						<Text style={{ textAlign: "center" }}>
							You are currently logged out.
            </Text>
						<Button title="Click to Login..." onPress={this._login} />
					</View>
				</SafeAreaView>
			</>
		);
	}

	_login = () => {
		this.props.navigation.navigate('Main')
	}
}
