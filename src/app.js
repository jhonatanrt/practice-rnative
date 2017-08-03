import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm'


export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDIOf6Zz0wZbohWS7iJsM4MX3KC8sdRCgc",
      authDomain: "auth-reactnative-7aea6.firebaseapp.com",
      databaseURL: "https://auth-reactnative-7aea6.firebaseio.com",
      projectId: "auth-reactnative-7aea6",
      storageBucket: "auth-reactnative-7aea6.appspot.com",
      messagingSenderId: "322094498978"
    });
  }

  render(){
    return ( 
      <View>
        <Header headerText = {'Inicio de sesion'} />
        <LoginForm/>
      </View>
    );
  }
}

const styles =StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
    }
});
