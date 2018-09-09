import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, StatusBar } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { ScrollView, FlatList } from 'react-native-gesture-handler'

export default class UserView extends Component {
    
    constructor(props) {
        super(props)        
		this.state = {
            user: this.props.navigation.state.params.user
		}
    }

    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.mainHeader}>
                    <Image
						style={style.userProfilePhoto}
					    source={{ uri: 'https://pre00.deviantart.net/6b22/th/pre/i/2018/022/e/4/rugrats_reptar_cover_for_kaboom_by_kaijusamurai-dc0u1oe.jpg' }}
					/>
                    <Text style={style.textHeader}>{this.state.user.username}</Text>
                </View>
                <View style={style.subContainer}>
                    <Text style={style.textContainer}>Datos del Usuario</Text>
                    <ScrollView style={style.itemContainer}>
                        <View style={style.optionContainer}>
                            <Text style={style.optionSubText}>Nombre Completo:</Text>
                            <Text style={style.optionText}>{this.state.user.name}</Text>
                        </View>
                        <View style={style.optionContainer}>
                            <Text style={style.optionSubText}>Nombre De Usuario:</Text>
                            <Text style={style.optionText}>{this.state.user.username}</Text>
                        </View>
                        <View style={style.optionContainer}>
                            <Text style={style.optionSubText}>Email:</Text>
                            <Text style={style.optionText}>{this.state.user.email}</Text>
                        </View>
                        <View style={style.optionContainer}>
                            <Text style={style.optionSubText}>Membresia Gamership:</Text>
                            <Text style={style.optionText}>Activa - 29/08/18</Text>
                        </View>
                        <View style={style.optionContainer}>
                            <Text style={style.optionSubText}>Password:</Text>
                            <Text style={style.optionText}>{this.state.user.password.replace(/\W/g, '•').replace(/\w/g, '•')}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

var style = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#f2f2f2'
    },    
    userProfilePhoto: {
        width: 130,
        height: 130,
        borderRadius: 360,
        marginTop: 15
    },
    textContainer: {
        color: '#BA8B49',
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    textHeader: {
        color: 'white',
        marginTop: 15,
        fontSize: 25
    },
    mainHeader: {
        flex: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
    },
    subContainer: {
        flex: 65
    },
    itemContainer: {
        marginTop: 30
    },
    optionContainer: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingBottom: 10,
        marginBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#333333'
    },
    optionText: {
        color: '#BA8B49',
        fontSize: 15
    },
    optionSubText: {
        color: '#333333',
        fontSize: 13
    }
})