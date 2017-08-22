// Import libraries for making a component
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Make a component
export class Header extends Component {
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    flexDirection: 'row',
    elevation: 8,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
        width: 0,
        height: 2
    },
    height: 40,
    marginBottom: 20
  },
  textStyle: {
    fontSize: 20
    }
});


