import React, { Component } from "react";
import { Container,Input, Header,Icon, Content, List,Item, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {ScrollView} from 'react-native';
class MessageList extends Component{
constructor(props)
{
   super(props);
   console.log(props);
    props.messageList.map(element => {
      this.msgs.push(<List key={element.title}>
          <ListItem avatar>
            <Left>
              <Thumbnail source={element.avatar} />
            </Left>
            <Body>
              <Text>{element.title}</Text>
              <Text note>{element.desc}</Text>
            </Body>
            <Right>
              <Text note>{element.time}</Text>
            </Right>
          </ListItem>
        </List>);
    });
}
 msgs=[];
render()
{   
   
    return <ScrollView>
       
        {this.msgs}
      </ScrollView>;
}
}
export default MessageList;