import React, { Component } from 'react';
import {Button, View, Text } from 'react-native'


class Gender extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Gender</Text>

            <Button
                title="next"
                onPress={() => this.props.navigation.navigate('TakePicture')}></Button>

        </View>
         
        )
    }
}

export default Gender