import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import Header from '../../Uicomponents/header';
import SearchBar from '../../Uicomponents/searchbar';
import Squarebtn from '../../Uicomponents/squarebtn'


const width = Dimensions.get("window").width;

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Header />
                <View style={{
                    width: width,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderColor: 'red',
                    // borderWidth: 2,
                    backgroundColor: '#131724'
                }}>
                    <SearchBar />
                    <Squarebtn 
                        width={width-40}
                        marginVertical={40}
                        height={40}>
                            SIGN IN
                        </Squarebtn>



                    <Text>events</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Event;