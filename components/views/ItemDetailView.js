import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';

import QRCodeViewer from '../QRCodeViewer';
import CodeViewer from '../CodeViewer';
import ExpirationDate from '../ExpirationDate';

export default class ItemDetailView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			itemData: this.props.navigation.state.params.itemData
		}
	}

    render() {
        var code = this.state.itemData.type == "Code" ? (<CodeViewer code={this.state.itemData.consumable}/>) : (<QRCodeViewer code={this.state.itemData.consumable}/>) ;
        var expirationDate = this.state.itemData.date == 'xx/xx/xx' ? (<ExpirationDate/>) : undefined;
        return (
            <ScrollView>
                <ImageBackground
                source={{uri: this.state.itemData.image}}
                style={styles.headerImageContainer}
                >
                    <View style={styles.textHeaderContainer}>
                        <Text style={styles.textTitleHeader}>{this.state.itemData.name}</Text>
                        <TouchableHighlight 
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={{color: '#f2f2f2'}}>Volver</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
                <View style={styles.detailsContainer}>
                    <Text style={styles.descriptionText}>{this.state.itemData.description}</Text>
                    {code}
                    {expirationDate}
                    <TouchableHighlight style={[styles.button , styles.shadow , {backgroundColor: '#BA8B49'}]}>
                        <Text style={{color: '#f2f2f2', fontWeight: 'bold', fontSize: 20}}>Regalar a un amigo</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button , styles.shadow , {backgroundColor: '#3b579d'}]}>
                        <Text style={{color: '#f2f2f2', fontWeight: 'bold', fontSize: 20}}>Compartir en Facebook</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    shadow: {
		shadowOpacity: 0.25,
		shadowRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 }
	},
    textHeaderContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(186, 139, 73, .85)',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
	headerImageContainer: {
        minHeight: 300,
        width: '100%'
    },
    backButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        padding: 10,
        margin: 20,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 10
    },
    textTitleHeader: {
        color: '#f2f2f2',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textPartnerHeader: {
        color: '#f2f2f2',
        fontSize: 20,
        textAlign: 'center'
    },
    detailsContainer:{
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    descriptionText: {
        textAlign: 'center',
        color: '#828282',
        marginBottom: 20
    },
    button: {
        width: '100%',
        marginTop: 20,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});