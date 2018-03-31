import React, { Component } from 'react';
import { Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Button from './../../Uicomponents/button'

const window = Dimensions.get('window');

class Gender extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Image
                    style={styles.imageStyle}
                    source={require('../../pic.jpg')}
                />
                <View style={styles.titleContainer}>
                    <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }}>CLUB CHAT</Text>
                </View>
                <View style={styles.formContainer}>
                    <View>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: 'bold', marginVertical: 6 }}>Gender</Text>
                        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('TakePicture')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>MALE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TakePicture')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>FEMALE</Text>
                    </TouchableOpacity> */}

                        <Button
                            onPress={() => this.props.navigation.navigate('TakePicture')}
                            width={window.width - 200} marginVertical={10}>
                            MALE
                    </Button>
                        <Button onPress={() => this.props.navigation.navigate('TakePicture')}
                            width={window.width - 200} marginVertical={10}>
                            FEMALE
                    </Button>
                    </View>
                </View>

                <View style={styles.buttonContainer}>

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        // resizeMode,
        position: 'absolute',
        width: window.width,
        height: window.height,
        justifyContent: 'center',
        opacity: 0.7,
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width,
        height: 200
    },

    formContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // buttonStyle: {
    //     backgroundColor: '#2980b6',
    //     borderRadius: 50,
    //     width: window.width - 200,
    //     height: 40,
    //     justifyContent: 'center',
    //     marginVertical: 8

    // },
    // buttonText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontWeight: '700',
    //     fontSize: 12
    // },
});

export default Gender;