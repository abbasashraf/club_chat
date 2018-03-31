import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, Icon } from 'react-native'
import Button from './../../Uicomponents/button';
// import { RNCamera } from 'react-native-camera';
import Camera from 'react-native-camera';



const window = Dimensions.get('window');



class TakePicture extends Component {
    state = {}

    takePicture = async function () {
        if (this.camera) {

            this.camera.capture()

            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
        }
    };
    // takePicture() {
    //     this.camera.capture()
    //         .then((data) => console.log(data))
    //         .catch(err => console.error(err));
    // }
    // takePicture() {
    //     //const options = { quality: 0.5, base64: true };
    //     //options.location = ...
    //     this.camera.capture()
    //         .then((data) => console.log(data))
    //         // .catch(err => console.error(err));
    // }



    render() {
        return (



            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    // onBarCodeRead={this.onBarCodeRead.bind(this)}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
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