import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'Sobre...',
    };



    render() {
        return (
            <View>
                <Text>
                    About Screen
                </Text>
                <Button
                    title="print stack"
                    onPress={() => console.log('aboutScreen.nav.state: ', this.props.navigation.state)}
                />
            </View>
        );
    }
}