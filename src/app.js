import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

/* Importacion para REDUX */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import LibraryList from './components/LibraryList'

// export default class App extends Component {

//   state = { loggedIn: null };

//   componentWillMount(){
//     firebase.initializeApp({
//       apiKey: "AIzaSyDIOf6Zz0wZbohWS7iJsM4MX3KC8sdRCgc",
//       authDomain: "auth-reactnative-7aea6.firebaseapp.com",
//       databaseURL: "https://auth-reactnative-7aea6.firebaseio.com",
//       projectId: "auth-reactnative-7aea6",
//       storageBucket: "auth-reactnative-7aea6.appspot.com",
//       messagingSenderId: "322094498978"
//     });

//     firebase.auth().onAuthStateChanged((user)=>{
//       if(user){
//         this.setState({ loggedIn: true});
//       }
//       else{
//         this.setState({ loggedIn: false});
//       }
//     });
//   }

//   renderContent(){
//     switch (this.state.loggedIn) {
//       case true:
//         return (<CardSection>
//           <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
//         </CardSection>);
//       case false:
//         return <LoginForm/>;
//       default:
//         return <Spinner size="large"/>;
//     }

//   }

//   render(){
//     return ( 
//       <View>
//         <Header headerText = {'Inicio de sesion'} />
//         {this.renderContent()}
//       </View>
//     );
//   }
// }

export default class App extends Component{
  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText = 'Inicio de sesion' />
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}
