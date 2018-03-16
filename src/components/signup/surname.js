import React, { Component } from 'react';
import {Button, View, Text } from 'react-native'


class Surname extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Surname</Text>

                <Button
                    title="next"
                    onPress={() => this.props.navigation.navigate('Password')}>Sign Up</Button>

            </View>
         
        );
    }
}

export default Surname;