import React, { Component } from 'react';
import { Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Button from './../../Uicomponents/button';
import DateTimePicker from 'react-native-modal-datetime-picker';


const window = Dimensions.get('window');

class BirthDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: new Date()
        };
    }



    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({ date: date })
        this._hideDateTimePicker();
        this.props.navigation.navigate('Gender')
    };



    render() {
        const { date } = this.state
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        console.log(`${month}/${day}/${year}`, "date date")
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

                    <View >
                    <Text style={{ color: "white", fontSize: 12, fontWeight: 'bold', marginVertical: 6 }}>Birth Date</Text>
                        <TouchableOpacity onPress={this._showDateTimePicker} style={{width:'100%'}}>
                            <Text style={{color:'white', fontSize: 30, fontWeight: 'bold'}}>{`${day} / ${month} / ${year}`}</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                            mode='date'
                            datePickerModeAndroid='spinner'
                            
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Gender')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity> */}

                    {/* <Button onPress={() => this.props.navigation.navigate('Gender')}
                        width={window.width - 200}
                        marginVertical={30}>
                        NEXT
                    </Button> */}
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
        //      borderColor: 'red',
        // borderWidth: 4,

    },
    input: {
        height: 40,
        padding: 0,
        width: window.width - 80

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

    // },
    // buttonText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontWeight: '700',
    //     fontSize: 12
    // },
});

export default BirthDate;