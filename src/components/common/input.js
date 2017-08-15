import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';

export class Input extends Component {
  render(){
    return ( 
      <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{this.props.label}</Text>
          <TextInput
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={false}
            placeholder={this.props.placeholder}
            style={styles.inputStyle}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            style={{ height: 50, width: 200}}
          />
      </View>
    );
  }
}

const styles =StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex:2
  },
  labelStyle: {
    flex:1,
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

