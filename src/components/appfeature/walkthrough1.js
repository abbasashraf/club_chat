
import React, { Component } from 'react';
import { Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Button from './../../Uicomponents/button'

const window = Dimensions.get('window');

class Walkthrough1 extends Component {
  Walkthroughs = [
    {
      title: "Meet New Friends",
      Desc: " Thousand of new People to meet and have fun with.",
      img: require("../../pic.jpg")
    },
    {
      title: "Discover New Places",
      Desc:
        "Become the expert of the night, discover the best places of your city.",
      img: require("../../pic.jpg")
    },
    {
      title: "Invite your Friends",
      Desc: "Invite your Friends to the best places you have discover",
      img: require("../../pic.jpg")
    }
  ];
  state = {
    title: this.Walkthroughs[0].title,
    desc: this.Walkthroughs[0].desc,
    img: this.Walkthroughs[0].img,
    id: 0
  };
  ChangeScreen() {
    if (this.state.id == 3) {
      this.props.navigation.navigate("Surname");
    } else {
      this.setState({
        id: this.state.id + 1,
        title: this.Walkthroughs[this.state.id+1].title,
        desc: this.Walkthroughs[this.state.id+1].desc,
        img: this.Walkthroughs[this.state.id+1].img
      });
     
    }
  }
  getStyles(id)
  {
      if(id==this.state.id)
      {
          return { width: 8, height: 8, backgroundColor: "white", borderRadius: 50, marginHorizontal: 6 };
      }
      else{
          return { width: 8, height: 8, backgroundColor: "gray", borderRadius: 50, marginHorizontal: 6 };
      }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.imageStyle} source={this.state.img} />
        <View style={styles.titleContainer}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            CLUB CHAT
          </Text>
        </View>
        <View style={styles.WalkthroughContainer}>
          <View style={styles.Walkthroughinside}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              {this.state.title}
            </Text>
          </View>
          <View style={styles.Walkthroughinside2}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 12,
                lineHeight: 20
              }}
            >
              {this.state.desc}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.dotContainer}>
            <View style={this.getStyles(1)} />
            <View style={this.getStyles(2)} />
            <View style={this.getStyles(3)} />
          </View>
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Walkthrough2')} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity> */}

          <Button
            onPress={() => this.ChangeScreen()}
            width={window.width - 200}
            height={40}
          >
            NEXT
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    dotContainer: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 0,
        marginVertical: 20
    },
    grayDot: {
        width: 8,
        height: 8,
        backgroundColor: "gray",
        borderRadius: 50,
        marginHorizontal: 6
    },
    whiteDot: {
        width: 8,
        height: 8,
        backgroundColor: "white",
        borderRadius: 50,
        marginHorizontal: 6
    },
    imageStyle: {
        flex: 1,
        // resizeMode,
        position: 'absolute',
        width: window.width,
        height: window.height,
        justifyContent: 'center',
        opacity: 0.7,
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width,
        height: 200
    },

    WalkthroughContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        // justifyContent: 'center',
        // borderColor: 'blue',
        // borderWidth: 4,
    },
    Walkthroughinside: {
        marginTop: 10,
        alignItems: 'center',
        width: (window.width / 2 + 10),
        justifyContent: 'center',

    },
    Walkthroughinside2: {
        marginTop: 10,
        alignItems: 'center',
        width: (window.width / 2) + 50,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        width: window.width,
        alignItems: 'center',
        // justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 4,
        paddingTop: 10
    },
    // buttonStyle: {
    //     backgroundColor: '#2980b6',
    //     borderRadius: 50,
    //     width: window.width - 200,
    //     height: 40,
    //     justifyContent: 'center',

    // },
    // buttonText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontWeight: '700',
    //     fontSize: 12
    // },
});

export default Walkthrough1;