import React ,{Component} from 'react';
import {View,Text} from 'react-native'
import {StackNavigator,} from 'react-navigation'


const RootStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Details: {
      screen: DetailsScreen,
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
    B_Date: {
      screen: BirthDate,
    },
    Gender: {
      screen: Gender,
    },
    Picture: {
      screen: TakePicture,
    },
    Details: {
      screen: DetailsScreen,
    },
    Setting:{
      screen: Setting,
    },
    Home: {
      screen: Home,
    },
    Messages: {
      screen: Messages,
    },
    MyProfile:{
      screen: MyProfile,
    },
    Details: {
      screen: DetailsScreen,
    },
    PrivateMessages:{
      screen: PrivateMessages,
    },
    SendInvitation: {
      screen: SendInvitation,
    },
    Match: {
      screen: Match,
    },
    MatchInfo: {
      screen: MatchInfo,
    },
    Events: {
      screen: Events,
    },
    SingleEvents: {
      screen: SingleEvents,
    },
    RestrauntList: {
      screen: RestrauntList,
    },
    SingleRestraunt: {
      screen: SingleRestraunt,
    },
    SnackList: {
      screen: SnackList,
    },
    SingleSnack: {
      screen: SingleSnack,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends Component{
  render() {
    return (
        <View>
          <Text>
          hi thiis talha
          </Text>  
        </View>
    );
  }
}

