import React, { Component } from "react";
import {
  Dimensions,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,navigationOptions
} from "react-native";
import Header from '../../Uicomponents/header';
class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  List = [
    {
      title: "Meet a friend",
      img: require("../../pic3.jpg"),
      
    },
    {
      title: "Event",
      img: require("../../pic2.jpg"),
      navigator : ()=>{
        console.log('naivigation')
        this.props.navigation.navigate("Event")
      }
    },
    {
      title: "Table Booking",
      img: require("../../pic3.jpg")
    },
    {
      title: "Sanck",
      img: require("../../pic2.jpg")
    }
  ];
  render() {
   var Options=[];
   this.List.forEach(element=>{
       Options.push(
           <View key={element.title} style={styles.bgImageWrapper} >
           <Image style={styles.imageStyle} source={element.img}/>
           <Text onPress={()=>{element.navigator()}} style={styles.title}>{element.title}</Text>
         </View>);
   })
    return <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }} >{Options}</View>
      </View>;
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
  },
  imageStyle: {
    // resizeMode,
    width: window.width,
    height: "100%",
    opacity: 0.75
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20
  },
  bgImageWrapper: {
    flex: 2,
    justifyContent: "center"
  },
  toolbar: {
    backgroundColor: "#81c04d",
    paddingTop: 30,
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

export default Home;
