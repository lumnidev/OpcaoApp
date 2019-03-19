//import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

import firebase from '@firebase/app';

import HomeScreen from './screens/homeScreen';
import CategoryScreen from './screens/categoryScreen';
import SignInScreen from './screens/signInScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';
import AboutScreen from './screens/aboutScreen';
import DetailsScreen from './screens/detailsScreen';


// Inicialzar Firebase:
firebase.initializeApp({
  apiKey: "AIzaSyC4kTPrxZN_067pNivxEouLrlQVV_hSssA",
  authDomain: "opcaodev-1233.firebaseapp.com",
  databaseURL: "https://opcaodev-1233.firebaseio.com",
  projectId: "opcaodev-1233",
  storageBucket: "opcaodev-1233.appspot.com",
  messagingSenderId: "32255598931"
});

// Criação dos stacks de autenticação e de aplicação (para o usuário já autenticado)
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

// Opções para desabilitar o menu nas páginas subsequentes do HomeStack
HomeStack.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  let drawerLabel = "Página Principal";
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }

  return {
    drawerLockMode,
    drawerLabel
  };
};

const CategoryStack = createStackNavigator({
  Category: CategoryScreen,
  Details: DetailsScreen,
});

// Opções para desabilitar o menu nas páginas subsequentes do CategoryStack
CategoryStack.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  let drawerLabel = "Categorias";
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }

  return {
    drawerLockMode,
    drawerLabel
  };
};


const DrawerNav = createDrawerNavigator({
  Home: HomeStack,
  Category: CategoryStack,
  Sobre: {
    screen: AboutScreen
  }
});


const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// Exporta um NavigationContainer para a função AppRegistry.registerComponent(appName, () => App); no index.js
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen, //screen
    App: DrawerNav, // Stack (começa sempre na primeira screen do drawer, neste caso Home screen)
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


