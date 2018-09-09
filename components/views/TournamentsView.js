import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TournamentController from '../controllers/Tournament.controller';
import TournamentCardInfo from '../TournamentCardInfo'
export default class TournamentsView extends Component {

    constructor(props) {
        super(props)        
		this.state = {
            user: this.props.navigation.state.params.user,
            tournaments: []
		}
    }
    componentDidMount = () =>{
        var controller = new TournamentController();
        controller.getTournaments({
            userId: this.state.user._id 
        }).then(entry =>{
            if(entry.code == 200){
                this.setState({
                    tournaments: entry.tournaments
                })
            }
        })        
    }

    render() {
        var tournaments = this.state.tournaments.map((tournament, index) => {
            var data = {
                name: tournament.name,
                price: tournament.price
            }                   
            return (                
                <View key={index}>
                    <TournamentCardInfo game="0" status={false} name={data.name} author="Mario Me" date="18/08/2018"/>
                </View>
            ) 
        })
        return (
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Torneos Gamership</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
                    {tournaments}                    
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
    }
});