import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SettingsItemView from '../SettingsItemView';

export default class SettingsView extends Component {

    constructor(){
        super();
        this.state = {
            currentSelected: 0
        }
    }

    render() {
        return(
            <ScrollView>
                <SettingsItemView 
                    items={['Test1','Test2','Test3','Test4','Test5','Test6']}
                />
                <SettingsItemView 
                    items={['Test1','Test2','Test3','Test4','Test5']}
                />
                <SettingsItemView 
                    items={['Test1','Test2','Test3','Test4']}
                />                
            </ScrollView>
        )
    }
}