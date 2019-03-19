import React, { Component } from 'react';
import { Button, Text, View , Image, TextInput,Dimensions, StyleSheet} from 'react-native';
import logo from '../images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'



const { width: WIDTH } = Dimensions.get('window')

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
            <View style={styles.logoContent}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
           <Icon name={'md-contact'} size={28} color={'#2196f3'}
                style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder={'Email'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'

                />
            </View>
            <View style={styles.inputContainer}>
           
           <TextInput
               style={styles.input}
               placeholder={'Senha'}
               secureTextEntry={true}
               placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
               underlineColorAndroid='transparent'

           />
       </View>
       
        </View>
       
        );
    }
}


const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 150

    },
    logoContent: {
        alignItems: 'center',
        marginBottom: 50
    },
    inputIcon:{
        position: 'absolute',
        top:8,
        marginLeft: 37,
        },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        backgroundColor: '#003561a9',
        marginHorizontal: 25
    },
 
    inputContainer:{
        marginTop: 10,


    }
 


});

