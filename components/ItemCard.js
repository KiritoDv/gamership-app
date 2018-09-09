import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class ItemCard extends Component {

    render() {
        return (
            <TouchableHighlight
            underlayColor='#f2f2f2'
            onPress={() => this.props.navigation.navigate('ItemDetail', {itemData: this.props.data})}
            style={styles.cardContainer}
            >
                <View>
                    <Image
                    source={{uri: this.props.data.image}}
                    style={styles.image}
                    >
                    </Image>
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={2}>{this.props.data.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 2,
    },
    image: {
        borderRadius: 10,
        width: '100%',
        height: 120,
        marginBottom: 5
    },
    textContainer: {
        backgroundColor: '#e2e2e2',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10
    },
    title: {
        color: '#333333',
        fontSize: 20,
        textAlign: 'center'
    }
});