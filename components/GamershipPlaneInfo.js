import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default class GamershipPlaneInfo extends Component {

    render() {
        var styles = StyleSheet.create({
            cardContainer: {
                backgroundColor: this.props.checked ? '#E0B650' : '#FFFFFF',
                borderColor: this.props.checked ? '#D59E16' : 'rgb(214, 212, 212)',
                elevation: this.props.checked ? 10 : 0,
                width: 160,
                height: 160,        
                margin: 5,
                borderWidth: 4
            },
            monthText:{
                color: this.props.checked ? '#FFFFFF' : '#909090', 
                fontWeight: 'bold', 
                fontSize: 80,
                textAlign: 'center',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            },
            monthTitle:{
                color: this.props.checked ? '#FFFFFF' : '#909090',
                paddingTop: 3,
                fontSize: 20,
                textAlign: 'center'
            },
            PlanesView:{
                flex: 1,        
                flexDirection: 'column',
                justifyContent: 'center'
            },
            monthView: {
                height: '80%'
            },
            priceView:{
                height: '20%',
                marginBottom: 20,
                borderTopWidth: 3,
                borderTopColor: this.props.checked ? '#D59E16' : 'rgb(214, 212, 212)'
            },
            priceTitle:{
                color: this.props.checked ? '#FFFFFF' : '#909090',
                fontSize: 17,
                textAlign: 'left',
                marginTop: 5,
                marginLeft: 10
            }
        })
        return (
            <TouchableWithoutFeedback onPress={this.props.onClick}>
                <View style={styles.cardContainer}>
                    <View style={styles.PlanesView}>
                        <View style={styles.monthView}>
                            <Text style={styles.monthText}>
                                {this.props.months}                            
                            </Text>
                            <Text style={styles.monthTitle}>
                                {this.props.prefix}
                            </Text>
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.priceTitle}>
                                {this.props.price}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}