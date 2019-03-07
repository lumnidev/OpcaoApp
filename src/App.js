//import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

//import firebase from '@firebase/app';
//import '@firebase/database';

import HomeScreen from './screens/homeScreen';
import CategoryScreen from './screens/categoryScreen';
import SignInScreen from './screens/signInScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';


// Criação dos stacks de autenticação e de aplicação (para o usuário já autenticado)
const AppStack = createStackNavigator({ Home: HomeScreen, Category: CategoryScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// Exporta um NavigationContainer para a função AppRegistry.registerComponent(appName, () => App); no index.js
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen, //screen
    App: AppStack, // Stack (começa sempre na primeira screen da stack, neste caso Home screen)
    Auth: AuthStack, // Stack
  },
  {
    initialRouteName: 'AuthLoading', // Rota inicial (neste caso, uma screen)
  }
));


// Funcionalidade de fazer requisição de autenticação vai para AuthLoadingScreen

/*export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBDA0m4YIOb1PvWZB1AZua4ZB2XvWKN_tw",
      authDomain: "teste123-38e68.firebaseapp.com",
      databaseURL: "https://teste123-38e68.firebaseio.com",
      projectId: "teste123-38e68",
      storageBucket: "teste123-38e68.appspot.com",
      messagingSenderId: "52931871132"
    });
    firebase.database().ref('test').once('value', snap => {
      console.log(snap.val());
    });
  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem-vindo ao Mercado Opção</Text>
      </View>
    );
  }

}*/


