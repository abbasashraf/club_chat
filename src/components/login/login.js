import React, { Component } from 'react';
import { Button, View, Text } from 'react-native'


class Login extends Component {
    state = {}

    static navigationOptions = {
        title: 'Home',
        // header: null
    };
    
//   static navigatorStyle = {
//     navBarHidden: true,
//   };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Log in"
                    onPress={() => this.props.navigation.navigate('')}>Login</Button>
                <Button
                    title="Sign Up"
                    onPress={() => this.props.navigation.navigate('Mail')}>Sign Up</Button>

            </View>

        )
    }
}

export default Login