import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class ExpirationDate extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.dataText}>EXPIRA EL: </Text>
                <Text style={styles.dataText}>DD/MM/YYYY</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#F1D3D3'
    },
    dataText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ED8989'
    }
});