import React, { Component } from 'react';
import { Dimensions, Text, TouchableOpacity, } from 'react-native';

const width = Dimensions.get('window').width;
const Button = ({ onPress, children, width, marginVertical, border,borderColor,height}) => {
    // const { buttonContainer, buttonText } = styles;

    const buttonContainer = {
        backgroundColor: '#F28664',
        borderRadius: 50,
        height: 40,
        marginVertical: marginVertical,
        justifyContent: 'center',
        width: width,
        borderColor:borderColor,
        borderWidth: border,
        height:height
    }
    const buttonText = {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 12
    }
    return (
        <TouchableOpacity onPress={onPress} style={buttonContainer}>
            <Text style={buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};



export default Button;

