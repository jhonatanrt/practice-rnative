import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { CardSection } from './common';

export default class ListItem extends Component {
  render(){
    return (
        <CardSection>
            <Text style={styles.textStyle}>{this.props.library.title}</Text>
        </CardSection>
    )
  }
}

const styles =StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '#683030',
    paddingLeft: 15
    }
});
