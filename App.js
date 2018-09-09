import React, { Component } from "react";
import { AppRegistry, View, Text, Button } from "react-native";

import { createStackNavigator } from "react-navigation";

import Login from './components/views/Login';
import Home from './components/views/Home';
import ItemDetailView from './components/views/ItemDetailView';
import RegisterView from './components/views/RegisterView';
import SettingsView from './components/views/SettingsView';
import UserView from './components/views/UserView';

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

export default App;