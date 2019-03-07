import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class CategoryScreen extends Component {
    static navigationOptions = {
        title: 'Entrar',
    };



    render() {
        return (
            <View>
                <Text>
                    Category Screen
                </Text>
                <Button
                    title="print stack"
                    onPress={() => console.log('test log', this.props.navigation.state)}
                />
            </View>
        );
    }
}