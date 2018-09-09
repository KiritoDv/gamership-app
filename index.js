import React, { Component } from "react";
import { AppRegistry, View, Text, Button } from "react-native";

import { StackNavigator } from "react-navigation";

import Login from "./components/views/Login";

const App = createStackNavigator({
	Login: { screen: Login },
	Home: { screen: Home },
	ItemDetail: { screen: ItemDetailView },
	Register: { screen: RegisterView },
	Settings: { screen: SettingsView},
	User: {screen: UserView}
},
{
	initialRouteName: 'Login',
	navigationOptions: {
		header:null,
	},
	cardStyle: {
		backgroundColor: '#f2f2f2'
	}
});

AppRegistry.registerComponent("Sanborns", () => App);