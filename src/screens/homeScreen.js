import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'HomeTitle',
    };

    products = [
        { id: "id001", name: "pão", barCode: 1 },
        { id: "id002", name: "batata", barCode: 2 },
        { id: "id003", name: "chocolate", barCode: 3 }
    ];


    render() {
        return (
            <View>
                <Text>
                    HomeScreen
                </Text>
                <Button
                    title="Isto é um produto (pao)"
                    onPress={() => this.props.navigation.navigate('Details', { product: this.products[2] })}
                />
            </View>
        );
    }
}