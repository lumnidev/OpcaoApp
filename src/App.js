import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import firebase from '@firebase/app';
import '@firebase/database';



export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBDA0m4YIOb1PvWZB1AZua4ZB2XvWKN_tw",
      authDomain: "teste123-38e68.firebaseapp.com",
      databaseURL: "https://teste123-38e68.firebaseio.com",
      projectId: "teste123-38e68",
      storageBucket: "teste123-38e68.appspot.com",
      messagingSenderId: "52931871132"
    });
    firebase.database().ref('test').once('value',snap=>{
      console.log(snap.val());
    });
  }


  /*componentWillMount() {
    const firebase = require("firebase");

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBDA0m4YIOb1PvWZB1AZua4ZB2XvWKN_tw",
      authDomain: "teste123-38e68.firebaseapp.com",
      databaseURL: "https://teste123-38e68.firebaseio.com",
      projectId: "teste123-38e68",
      storageBucket: "teste123-38e68.appspot.com",
      messagingSenderId: "52931871132"
    };
    firebase.initializeApp(config);
  }*/

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
