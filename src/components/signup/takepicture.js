'use strict';
import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, Icon } from 'react-native'
import Button from './../../Uicomponents/button';



const window = Dimensions.get('window');



class TakePicture extends Component {
    state = {}



    render() {
        return (



            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('Walkthrough1')}
                    width={window.width - 200}
                    marginVertical={10}
                    height={40}>
                    camera
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

export default TakePicture