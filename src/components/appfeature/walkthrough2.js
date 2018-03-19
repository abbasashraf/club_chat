
import React, { Component } from 'react';
import { Dimensions, Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'

const window = Dimensions.get('window');

class Walkthrough2 extends Component {
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
                <View style={styles.WalkthroughContainer}>
                    <View style={styles.Walkthroughinside}>
                        <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }}>Discover New Places</Text>
                       </View>
                       <View  style={styles.Walkthroughinside2}>
                        <Text style={{textAlign:'center', color: "white", fontSize: 12,lineHeight:20 }}>Become the expert of the night, discover the best places of your city.</Text>

                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.dotContainer}>
                        <View style={styles.grayDot}>
                        </View>
                        <View style={styles.whiteDot}>
                        </View>
                        <View style={styles.grayDot}>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Walkthrough3')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    dotContainer: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 0,
        marginVertical: 20
    },
    grayDot: {
        width: 8,
        height: 8,
        backgroundColor: "gray",
        borderRadius: 50,
        marginHorizontal: 6
    },
    whiteDot: {
        width: 8,
        height: 8,
        backgroundColor: "white",
        borderRadius: 50,
        marginHorizontal: 6
    },
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

    WalkthroughContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        // justifyContent: 'center',
        // borderColor: 'blue',
        // borderWidth: 4,
    },
    Walkthroughinside: {
        marginTop:10,                
        alignItems: 'center',
        width: (window.width / 2)+40,
        justifyContent: 'center', 
          
    },
    Walkthroughinside2:{
        marginTop:10,        
        alignItems: 'center',
        width: (window.width / 2) + 50,
        justifyContent: 'center', 
    },
    buttonContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        // justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 4,
        paddingTop: 10
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

export default Walkthrough2;