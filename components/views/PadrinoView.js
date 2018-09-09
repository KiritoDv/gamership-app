import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class PadrinoView extends Component {

    render() {
        return (
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Mi padrino</Text>                    
                </View>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.maintenance}>En Construccion</Text>
                    <Entypo style={{textAlign: 'center', marginTop: 10}} name='warning' size={55} color="#BA8B49" regular />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 0
    },
    shadow: {
		shadowOpacity: 0.50,
		shadowRadius: 8,
		shadowColor: '#000'
    },
    tabTitle: {
        backgroundColor: '#f2f2f2',
        paddingBottom: 5
    },
    maintenance: {
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
        color: '#BA8B49',
        fontWeight: 'bold'
    }
});