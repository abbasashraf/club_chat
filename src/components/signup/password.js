import React, { Component } from 'react';
import {Button, View, Text } from 'react-native'


class Password extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Password</Text>

            <Button
                title="next"
                onPress={() => this.props.navigation.navigate('BirthDate')}></Button>

        </View>
           
        )
    }
}

export default Password