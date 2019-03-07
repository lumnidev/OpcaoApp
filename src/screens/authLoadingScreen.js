import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class AuthLoadingScreen extends Component {
    static navigationOptions = {
        title: 'Entrar',
    };



    render() {
        return (
            <View>
                <Text>Verificando dados no servidor de autenticação</Text>
                <Button
                    title="user signed in"
                    /* Navega para um "Stack" de screens, já que a prop navigation ainda é o switchNavigation neste
                    momento
                    */
                    onPress={() => this.props.navigation.navigate('App')} 
                    
                />
            </View>
        );
    }
}




