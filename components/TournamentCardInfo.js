import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class TournamentCardInfo extends Component {

    render() {
        var games = {
            '0':{
                image: require('../src/images/LeagueOfLegends.png'),
                width: '90%',
                background: 'black'
            },
            '1':{
                image: require('../src/images/Fortnite.png'),
                width: '100%',
                background: 'black'
            }
        }
        var game = games[this.props.game];
        var status = this.props.status ? 'user-check' : 'user-plus';
        const styles = StyleSheet.create({
            mainContainer: {
                width: '100%',
                height: 100,
                marginTop: 20,
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 10,
                alignItems: 'center',
                backgroundColor: game.background
            },
            image: {
                position: 'absolute',
                zIndex: 0,
                alignItems: 'center',
                width: game.width,
                height: 100,
            },
            infoContainer: {
                position: 'absolute',
                zIndex: 1,        
                flexDirection: 'column',
                padding: 5,
                justifyContent: 'space-around'
            },
            nameText: {        
                color: 'white',
                textAlign: 'center',
                fontSize: 20
            },
            authorText: {        
                color: 'white',
                textAlign: 'center',
                fontSize: 14
            },
            dateText: {        
                color: 'white',
                textAlign: 'center',
                fontSize: 13
            },
            status: {
                position: 'absolute',
                right: 10,
                top: 5
            }
        })
        return (
            <View style={styles.mainContainer}>                
                <Image
                    source={game.image}
                    style={styles.image}
                    blurRadius={3}
               />
                <TouchableWithoutFeedback onPress={this.props.onClick}>
                    <View style={styles.status}>
                        <Feather name={status} size={20} color="white" regular />
                    </View>
                </TouchableWithoutFeedback>                
                <View style={styles.infoContainer}>
                    <Text style={styles.nameText}>{this.props.name}</Text>
                    <Text style={styles.authorText}>                        
                        <Icon name="user" size={15} />{" "+this.props.author}
                    </Text>
                    <Text style={styles.dateText}>
                        {`\n`}
                        <Icon name="calendar" size={15} />{" "+this.props.date}
                    </Text>
                </View>
            </View>
        )
    }
}