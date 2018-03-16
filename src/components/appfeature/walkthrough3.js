import { View,Text,Button } from 'react-native';
import React, { Component } from 'react';


class Walkthrough3 extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Walkthrough3</Text>

            <Button
                title="next"
                onPress={() => this.props.navigation.navigate('')}></Button>

        </View>
        );
    }
}

export default Walkthrough3;