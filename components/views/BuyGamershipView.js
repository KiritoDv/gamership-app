import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import GamershipPlaneInfo from '../GamershipPlaneInfo';

export default class BuyGamershipView extends Component {

    constructor(){
        super();
        this.state = {
            current: 0
        }
    }

    onPay = () =>{
        alert(this.state.current)
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Comprar Gamership</Text>
                </View>
                <ScrollView style={styles.itemContainer}>
                    <View style={styles.cardContainer}>
                        <GamershipPlaneInfo
                            months="1"
                            prefix="Mes"
                            price="$59.99"
                            checked={this.state.current === 0}
                            onClick={() => this.setState({current: 0})}
                        />
                        <GamershipPlaneInfo
                            months="3"
                            prefix="Meses"
                            price="$179.97"
                            checked={this.state.current === 1}
                            onClick={() => this.setState({current: 1})}
                        />
                        <GamershipPlaneInfo
                            months="12"
                            prefix="Meses"
                            price="$597.50"
                            checked={this.state.current === 2}
                            onClick={() => this.setState({current: 2})}
                        />                        
                    </View>                    
                </ScrollView>
                <View style={styles.payContainer}>
                    <TouchableHighlight 
                        underlayColor='#E0B650' 
                        style= {[styles.payButton, styles.shadow]}
                        onPress={this.onPay}
                    >
                        <Text style={{color:'#f2f2f2'}}>Proceder al Pago</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        
    },
    itemContainer: {
        padding: 20,
        paddingTop: 0,
        height: '80%'
    },
    cardContainer:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    payContainer:{
        
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
    payButton: {
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
        backgroundColor: '#D59E16',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});