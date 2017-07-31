// Import libraries for making a component
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Make a component
export default class Header extends Component {
  render(){
    return ( 
      <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}
// Make the component available to other parts of the app
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
