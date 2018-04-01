import React, { Component } from "react";
import { Dimensions, Text,StyleSheet , TouchableOpacity,View } from "react-native";

const width = Dimensions.get("window").width;
class Header extends Component{
    render()
    {
        return <View>
            <View style={styles.toolbar}>
              <Text style={styles.toolbarButton}>Menu</Text>
              <Text style={styles.toolbarTitle}>This is the title</Text>
              <Text style={styles.toolbarButton}>Msg</Text>
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
    textAlign: "center"
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1 //Step 3
  }
  
});
export default Header