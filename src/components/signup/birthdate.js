import React, { Component } from 'react';
import {Button, View, Text } from 'react-native'



class BirthDate extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>BirthDate</Text>

                <Button
                    title="next"
                    onPress={() => this.props.navigation.navigate('Gender')}></Button>

            </View>
        )
    }
}

export default BirthDate