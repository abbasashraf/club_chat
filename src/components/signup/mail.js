import React, { Component } from 'react';
import {Button, View, Text } from 'react-native'


class Mail extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Mail</Text>

                <Button
                    title="next"
                    onPress={() => this.props.navigation.navigate('Surname')}></Button>

            </View>

        );
    }
}

export default (Mail);