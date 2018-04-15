import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { StackNavigator, } from 'react-navigation';
import { Gender, BirthDate, Mail, TakePicture } from './src/components/signup';
import { Walkthrough1 } from './src/components/appfeature';
import Home from './src/components/mainnavigation/home'
import Login from './src/components/login/login';
import MessageList from './src/components/messages/messageList';
import Allmessages from './src/components/messages/allmessages';
import Event from './src/components/events/event.js'
import Header from './src/Uicomponents/header'
const RootStack = StackNavigator(
  {
    Login: {
      screen: Login
    },
    TakePicture: {
      screen: TakePicture
    },
    BirthDate: {
      screen: BirthDate
    },
    Walkthrough1: {
      screen: Walkthrough1
    },

    Gender: {
      screen: Gender
    },

    Mail: {
      screen: Mail
    },
    Home: {
      screen: Home
    },
    Messages: {
      screen: Allmessages
    },

    Header: {
      screen: Header
    },
    Event: {
      screen: Event
    }
    //   Details: {
    //     screen: DetailsScreen,
    //   },
    //   Setting: {
    //     screen: Setting,
    //   },
    //   Details: {
    //     screen: DetailsScreen,
    //   },
    //   Home: {
    //     screen: Home,
    //   },
    //   Messages: {
    //     screen: Messages,
    //   },
    //   MyProfile: {
    //     screen: MyProfile,
    //   },
    //   Details: {
    //     screen: DetailsScreen,
    //   },
    //   PrivateMessages: {
    //     screen: PrivateMessages,
    //   },
    //   SendInvitation: {
    //     screen: SendInvitation,
    //   },
    //   Match: {
    //     screen: Match,
    //   },
    //   MatchInfo: {
    //     screen: MatchInfo,
    //   },
    //   Events: {
    //     screen: Events,
    //   },
    //   SingleEvents: {
    //     screen: SingleEvents,
    //   },
    //   RestrauntList: {
    //     screen: RestrauntList,
    //   },
    //   SingleRestraunt: {
    //     screen: SingleRestraunt,
    //   },
    //   SnackList: {
    //     screen: SnackList,
    //   },
    //   SingleSnack: {
    //     screen: SingleSnack,
    //   },
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: "Walkthrough1"
  }
);

export default class App extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (

      <RootStack />

    );
  }
}
