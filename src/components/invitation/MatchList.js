import React, { Component } from "react";
import {
  Container,
  Header,
  Icon,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
  Card,
  CardItem
} from "native-base";
import { ScrollView } from "react-native";
class MatchList extends Component {
  constructor(props) {
    super(props);

    props.messageList.map(element => {
      this.msgs.push(
        <List key={element.title}>
          <ListItem>
            <Thumbnail source={element.avatar} />
            <Body>
              <Text style={{ fontSize: 20 }}>{element.title}</Text>
            </Body>
            <Button style={{ backgroundColor: "#F28664" }} rounded warning>
              <Text>Start</Text>
            </Button>
          </ListItem>
        </List>
      );
    });
  }
  msgs = [];
  render() {
    return <ScrollView>
      
        {this.msgs}
      </ScrollView>;
  }
}

export default MatchList;
