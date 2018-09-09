import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class QRCodeViewer extends Component {

    render() {
        return (
            <View>
                <Image source={{uri: this.props.code}} style={styles.imageQR}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageQR: {
        width: 256,
        height: 256,
    }
})