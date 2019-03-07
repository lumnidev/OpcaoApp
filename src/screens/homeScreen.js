import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Entrar',
    };



    render() {
        return (
            <View>
                <Text>
                    HomeScreen
                </Text>
                <Button
                    title="Ir para categoriass "
                    onPress={() => this.props.navigation.navigate('Category', { name: 'test category' })}
                />
            </View>
        );
    }
}