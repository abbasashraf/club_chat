import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { StackNavigator, } from 'react-navigation';
import { Gender, BirthDate, Mail, Password, TakePicture, Surname } from './src/components/signup';
import { Walkthrough1, Walkthrough2, Walkthrough3 } from './src/components/appfeature'
import Login from './src/components/login/login'


const RootStack = StackNavigator(
  {
    Walkthrough1: {
      screen: Walkthrough1,
    },
    Walkthrough2: {
      screen: Walkthrough2,
    },
    Walkthrough3: {
      screen: Walkthrough3,
    },
    Login: {
      screen: Login,
    },
    Mail: {
      screen: Mail,
    },
    Surname: {
      screen: Surname,
    },
    Password: {
      screen: Password,
    },
    BirthDate: {
      screen: BirthDate,
    },
    Gender: {
      screen: Gender,
    },
    TakePicture: {
      screen: TakePicture,
    },
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
    headerMode: 'none',
  },
  {
    initialRouteName: 'Walkthrough1',
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

