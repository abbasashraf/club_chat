import React, { Component } from "react";
import { View, StyleSheet } from "native-base";
import Header from "./../../Uicomponents/header";
import MessageList from "./messageList";
import MatchList from "./../invitation/MatchList";
import {
  Item,
  Input,
 
  Button,
  Text
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";

class Allmessages extends Component {
  Msg = [
    {
      title: "Smith",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic2.jpg"),
      time: "3:30 pm"
    },

    {
      title: "Peter",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic3.jpg"),
      time: "3:30 pm"
    },

    {
      title: "Ali",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic.jpg"),
      time: "3:30 pm"
    },

    {
      title: "Math",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic2.jpg"),
      time: "3:30 pm"
    },
    {
      title: "Physics",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic3.jpg"),
      time: "3:30 pm"
    },

    {
      title: "Java",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic.jpg"),
      time: "3:30 pm"
    },

    {
      title: "Laravel",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic2.jpg"),
      time: "3:30 pm"
    },

    {
      title: "React",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic3.jpg"),
      time: "3:30 pm"
    },
    ,
    {
      title: "Java1",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic.jpg"),
      time: "3:30 pm"
    },

    {
      title: "Laravel1",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic2.jpg"),
      time: "3:30 pm"
    },

    {
      title: "React1",
      desc: "Your any msg will here shortly",
      avatar: require("../../pic3.jpg"),
      time: "3:30 pm"
    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      Msg: this.Msg
    };
  }

  render() {
    
 Iconstyles = { width: 50, color: "#fff", textAlign: "center", fontSize: 30 };
    return <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} title={"Messages"} />
        <View style={{ flex: 1, padding: 5 }}>
          <MatchList messageList={this.Msg} />
        </View>
        <Item style={{ padding: 5 }}>
          <Icon style={{ fontSize: 20 }} name="search" />
          <Input placeholder="Search" />
          <Icon style={{ fontSize: 22 }} name="user-circle" />
        </Item>
        <View style={{ flex: 2, padding: 5 }}>
          <MessageList messageList={this.Msg} />
        </View>
      </View>;
  }
}

export default Allmessages;