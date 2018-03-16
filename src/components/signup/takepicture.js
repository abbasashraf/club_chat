import React, { Component } from 'react';
import {Button, View, Text } from 'react-native'



class TakePicture extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>TakePicture</Text>

                <Button
                    title="next"
                    onPress={() => this.props.navigation.navigate('Walkthrough1')}></Button>

            </View>


        )
    }
}

export default TakePicture