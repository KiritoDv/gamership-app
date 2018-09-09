import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, StatusBar } from 'react-native'

export default class CustomTextInput extends React.Component{

    constructor(){
        super();
        this.state = {
            focus: false
        }
    }

    render(){
        return(
            <TextInput
                style={this.props.style}
                placeholder={this.props.placeholder}
                textContentType={this.props.textContentType}
                onChangeText={this.props.onChangeText}
                onBlur={() => this.setState({focus: false})}
                onFocus={() => this.setState({focus: true})}
                underlineColorAndroid={this.state.focus ? '#28A599' : '#C0C0C0'}
            />
        )
    }
}