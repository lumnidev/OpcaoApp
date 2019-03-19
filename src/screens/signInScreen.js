import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';


export default class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    static navigationOptions = {
        title: 'SignInScreen',
    };



    render() {
        return (
            <View>
                <Text>
                    SignInScreen
                </Text>

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Button
                    title="Entrar"
                    onPress={() => this.props.navigation.navigate('App', { name: 'test' })}
                />
            </View>
        );
    }
}
