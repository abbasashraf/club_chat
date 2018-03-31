import React, { Component } from 'react';
import { Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Button from './../../Uicomponents/button'

const window = Dimensions.get('window');

class Mail extends Component {
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
                            placeholder='Email Address'
                            placeholderTextColor='rgba(225,225,225,0.8)' />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Surname')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity> */}

                    <Button
                        width={window.width - 200}
                        onPress={() => this.props.navigation.navigate('Surname')}
                        height={40}>
                        NEXT
                    </Button>
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
        //  backgroundColor: 'transparent',
        opacity: 0.7,
        // borderColor:'purple', borderWidth:6 
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: "black",
        //borderWidth: 6,
        // height: 400,
        //paddingTop: 0,
        // marginTop:50
        // borderColor: 'pink', borderWidth: 4,
        width: window.width,
        height: 200
    },

    formContainer: {
        flex: 1,
        // paddingTop: 100,
        // borderColor: 'red', borderWidth: 4,
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',


    },
    input: {
        height: 40,
        // backgroundColor: 'rgba(225,225,225,0.2)',
        // borderBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        // marginBottom: 10,
        padding: 0,
        color: 'white',
        width: window.width - 80

    },
    buttonContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#2980b6',
        // paddingVertical: 10,
        // borderRadius: 50,
        // marginVertical: 30,
        // borderColor: 'gray', borderWidth: 4,
    },
    // buttonStyle: {
    //     backgroundColor: '#2980b6',
    //     borderRadius: 50,
    //     width: window.width - 200,
    //     height: 40,
    //     justifyContent: 'center',

    // },
    // buttonText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontWeight: '700',
    //     fontSize: 12
    // },
});

export default (Mail);