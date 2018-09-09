import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


//Tabs views
import HistorialView from './HistorialView';
import InventarioView from './InventarioView';
import PadrinoView from './PadrinoView';
import TournamentsView from './TournamentsView';
import BuyGamershipView from './BuyGamershipView';
import UserView from './UserView';

class TabBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: this.props.navigationState.params.user,
			current: this.props.navigation.state.routeName
		}
	}
	
	render() {		
		const styles = StyleSheet.create({
			shadow: {
				shadowOpacity: 0.25,
				shadowRadius: 8,
				shadowColor: '#000'
			},
			mainContainer: {
				padding: 20,
				paddingTop: 10,
				paddingBottom: 10,
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				backgroundColor: '#f2f2f2'
			},
			userInfoContainer: {
				width: '100%',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			},
			tabsContainer: {
				marginTop: 10,
				flexDirection: 'row',
			},
			userNameText: {
				color: '#333333',
				fontSize: 30,
			},
			userProfilePhoto: {
				width: 30,
				height: 30,
				borderRadius: 10
			},
			tabBtn: {
				width: 45,
				height: 45,
				borderRadius: 100,
				borderColor: '#BA8B49',
				borderWidth: 2,
				padding: 10,
				margin: 5,
				marginTop: 0,
				marginBottom: 0,
				justifyContent: 'center',
				alignItems: 'center'				
			}
		});

		return (			
			<View style={[styles.mainContainer, styles.shadow]}>				
				<View style={styles.userInfoContainer}>					
					<TouchableHighlight
						underlayColor='transparent'
						onPress={() => this.props.navigation.navigate('User',{user: this.state.user})}
					>
						<Image
							style={styles.userProfilePhoto}
							source={{ uri: 'https://pre00.deviantart.net/6b22/th/pre/i/2018/022/e/4/rugrats_reptar_cover_for_kaboom_by_kaijusamurai-dc0u1oe.jpg' }}
						/>
					</TouchableHighlight>	
					<Text numberOfLines={1} style={styles.userNameText}>{this.state.user.username}</Text>
					<TouchableHighlight
						underlayColor='transparent'
						onPress={() => alert('Proximamente')}
					>
						<Icon name="cog" size={30} color="#333333" />
					</TouchableHighlight>					
				</View>
				<View style={styles.tabsContainer}>
					<TouchableHighlight
						style={[styles.tabBtn]}
						underlayColor='#333333'
						onPress={() => this.props.navigation.navigate('Historial')}
					>
						<Icon name="history" size={20} color="#BA8B49" />
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.tabBtn]}
						underlayColor='#333333'
						onPress={() => this.props.navigation.navigate('Inventario',{user: this.state.user})}
					>
						<Icon name="ticket" size={20} color="#BA8B49" />
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.tabBtn]}
						underlayColor='#333333'
						onPress={() => this.props.navigation.navigate('Padrino')}
					>
						<Icon name="users" size={20} color="#BA8B49" />
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.tabBtn]}
						underlayColor='#333333'
						onPress={() => this.props.navigation.navigate('Tournaments')}
					>
						<Icon name="gamepad" size={20} color="#BA8B49" />
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.tabBtn]}
						underlayColor='#333333'
						onPress={() => this.props.navigation.navigate('BuyGamership')}
					>
						<Icon name="shopping-cart" size={20} color="#BA8B49" />
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}
export default createMaterialTopTabNavigator({
	Historial: HistorialView,
	Inventario: InventarioView,
	Padrino: PadrinoView,
	Tournaments: TournamentsView,
	BuyGamership: BuyGamershipView	
}, {
		initialRouteName: 'Inventario',
		tabBarComponent: TabBar
	});