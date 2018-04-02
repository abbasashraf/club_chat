import React, { Component } from 'react';
import { Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Button from './../../Uicomponents/button'
const window = Dimensions.get('window');

class Login extends Component {
    state = {}

    static navigationOptions = {
        title: 'Home',
        // header: null
    };

    //   static navigatorStyle = {
    //     navBarHidden: true,
    //   };
    render() {
        const resizeMode = 'center';
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={styles.imageStyle} source={require("../../pic.jpg")} />
            <View style={styles.titleContainer}>
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold"
                }}
              >
                CLUB CHAT
              </Text>
            </View>
            <View style={styles.formContainer}>
              <View>
                <TextInput style={styles.input} underlineColorAndroid="transparent" autoCapitalize="none" onChange={ev => this.setState(
                      { email: ev.nativeEvent.text }
                    )} autoCorrect={false} keyboardType="email-address" returnKeyType="next" placeholder="Email Address" placeholderTextColor="rgba(225,225,225,0.8)" />

                <TextInput style={styles.input} onChange={ev => this.setState(
                      { pass: ev.nativeEvent.text }
                    )} placeholder="Password" placeholderTextColor="rgba(225,225,225,0.8)" secureTextEntry />
                <View style={styles.forgotPassContainer}>
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Forgot Password ?
                  </Text>
                </View>

                {/* <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SIGN IN</Text>
                        </TouchableOpacity> */}

                <Button onPress={() => this.props.navigation.navigate("Home")} width={window.width - 80} marginVertical={40} height={40}>
                  SIGN IN
                </Button>
                <View style={styles.signUpContainer}>
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Don't have an account ?
                    <Text style={{ color: "white", fontSize: 12, fontWeight: "700" }} onPress={() => this.props.navigation.navigate("Mail")}>
                      Sign Up
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>;
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
        opacity: 0.7
    },

    titleContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: "black",
        //borderWidth: 6,
        // height: 400,
        //paddingTop: 0,
        // marginTop:50
        // borderColor: 'pink',
        // borderWidth: 4,
        width: window.width,
        height: 200
    },

    formContainer: {
        flex: 1,
        paddingTop: 80,
        // borderColor: 'red',
        // borderWidth: 4,
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
        marginBottom: 10,
        padding: 0,
        color: 'white',
        width: window.width - 80

    },
    forgotPassContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6
    },
    signUpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default Login