import { View,Text,Button } from 'react-native';
import React, { Component } from 'react';


class Walkthrough1 extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Walkthrough1</Text>

            <Button
                title="next"
                onPress={() => this.props.navigation.navigate('Walkthrough2')}></Button>

        </View>

        );
    }
}

export default Walkthrough1;