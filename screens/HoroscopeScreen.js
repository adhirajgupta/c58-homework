import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-paper';
import AppBarComponent from '../components/AppBar';
class Horoscope extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppBarComponent navigation={this.props.navigation} goBack title="Horoscope"/>
                <View>
                    <Text>This is the horoscope screen screen</Text>
                </View>
            </View>
        );
    }
}

export default Horoscope;

