import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Switch } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class SettingsItemView extends Component {

    constructor(){
        super()
        this.state = {
            enabled: false
        }
    }

    render() {
        var style = StyleSheet.create({
            container: {
                marginTop: 0,
                backgroundColor: '#373737'
            },
            default:{
                width: '100%',
                height: 65,
                backgroundColor: '#373737',
            },
            text: {
                textAlign: 'center',
                marginTop: 17,
                color: 'white',
                fontSize: 20
            },
            options:{
                
            },
            item: {
                marginLeft: 17,
                marginTop: 17,
                color: 'white',
                fontSize: 20
            },
            switch: {
                marginLeft: 17,
                marginTop: -25,
            },
            shadow: {
                elevation: 2
            }
        })
        return(
            <View style={style.container}>                
                <TouchableHighlight style={style.shadow} onPress={() =>{
                    this.setState({enabled: !this.state.enabled})
                }}>
                    <View style={[style.default,style.shadow]}>
                        <Text style={style.text}>Notificaciones</Text>
                    </View>
                </TouchableHighlight>
                {this.props.items.map((item, key) => {
                    if(this.state.enabled){
                        return (
                            <View key={key} style={[style.default, style.options]}>
                                <View>
                                    <Text style={style.item}>{item}</Text>
                                    <Switch style={style.switch}/>
                                </View>
                            </View>
                        );
                    }
                })}
            </View>
        )
    }
}