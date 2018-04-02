import React, { Component } from "react";
import { Dimensions, Text,StyleSheet ,TouchableHighlight, TouchableOpacity,View } from "react-native";

const width = Dimensions.get("window").width;

import Icon from "react-native-vector-icons/FontAwesome";
class Header extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return <View>
            <View style={styles.toolbar}>
              <TouchableHighlight>
                <Icon onPress={() => this.props.navigation.navigate("Home")} style={styles.toolbarButton} name="navicon" />
              </TouchableHighlight>
              <Text style={styles.toolbarTitle}>
                {this.props.title}
              </Text>
              <TouchableOpacity>
                <Icon onPress={() => this.props.navigation.navigate("Messages")} style={styles.toolbarButton} name="send-o" />
              </TouchableOpacity>
            </View>
          </View>;
    }

}
const styles = StyleSheet.create({
  
  toolbar: {
    backgroundColor: "black",
    paddingTop: 18,
    paddingBottom: 10,
    flexDirection: "row" //Step 1
  },
  toolbarButton: {
    width: 50, //Step 2
    color: "#fff",
    textAlign: "center",
    fontSize:20
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1 //Step 3
  }
  
});
export default Header