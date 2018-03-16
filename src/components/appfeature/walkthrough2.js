import { View,Text,Button } from 'react-native';
import React, { Component } from 'react';


class Walkthrough2 extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Walkthrough2</Text>

            <Button
                title="next"
                onPress={() => this.props.navigation.navigate('Walkthrough3')}></Button>

        </View>
        );
    }
}

export default Walkthrough2;