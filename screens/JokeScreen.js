import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-paper';
import AppBarComponent from '../components/AppBar';
class Joke extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppBarComponent navigation={this.props.navigation} goBack title="Jokes"/>
                <View>
                    <Text>This is the joke screen</Text>
                </View>
            </View>
        );
    }
}

export default Joke;