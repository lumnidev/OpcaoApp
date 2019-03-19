import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


import firebase from '@firebase/app';
//import '@firebase/database';
import '@firebase/auth';

export default class AuthLoadingScreen extends Component {


    static navigationOptions = {
        title: 'AuthLoadingScreen',
    };

    componentWillMount() {
        console.log("Entered Component will mount");
        //this.props.navigation.navigate('App');

        if (firebase.auth().currentUser != null) {
            this.props.navigation.navigate('App');
        } else {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        // firebase.database().ref('test').once('value', snap => {
        //     console.log("value in the database: ", snap.val());
        // });



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




