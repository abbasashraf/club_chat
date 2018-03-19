import React, { Component } from 'react';
import { Dimensions, Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'

const window = Dimensions.get('window');

class Surname extends Component {
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
                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            onChange={ev => this.setState({ email: ev.nativeEvent.text })}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Surname'
                            placeholderTextColor='rgba(225,225,225,0.8)' />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Password')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
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
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 0,
        color: 'white',
        width: window.width - 80

    },
    buttonContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: '#2980b6',
        borderRadius: 50,
        width: window.width - 200,
        height: 40,
        justifyContent: 'center',

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 12
    },
});

export default Surname;