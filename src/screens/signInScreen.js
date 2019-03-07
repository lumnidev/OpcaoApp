import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Entrar',
    };



    render() {
        return (
            <View>
                <Text>
                    SignInScreen
                </Text>
                <Button
                    title="Entrar"
                    onPress={() => this.props.navigation.navigate('App', { name: 'test' })}
                />
            </View>
        );
    }
}
