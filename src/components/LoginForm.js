import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import { Button, Card, CardSection, Input } from './common';


export default class LoginForm extends Component {
  
    state = { email: '', password: '' };
  
    render(){
        return ( 
        <Card>
            <CardSection>
                <Input
                    label ="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder="user@gmail.com"/>
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    label ="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder="password"/>
            </CardSection>
            <CardSection>
                <Button>
                    Log in
                </Button>
            </CardSection>
        </Card>
        );
    }
}


