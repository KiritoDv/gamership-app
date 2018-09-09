import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class CodeViewer extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.code}</Text>
            </View>
        )
    }
}