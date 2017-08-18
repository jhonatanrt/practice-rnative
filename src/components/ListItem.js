import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { CardSection } from './common';

export class ListItem extends Component {
  render(){
    return (
        <CardSection>
            <Text>{this.props.library.title}</Text>
        </CardSection>
    )
  }
}
