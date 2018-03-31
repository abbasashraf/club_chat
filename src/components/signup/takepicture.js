'use strict';
import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, Icon } from 'react-native'
import Button from './../../Uicomponents/button';
import Camera from "react-native-camera";

const window = Dimensions.get('window');

class TakePicture extends Component {
  state = {};
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => this.props.navigation.navigate("Walkthrough1"))
      .catch(err => this.props.navigation.navigate("Walkthrough1"));
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
          </Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});
export default TakePicture