import React, { Component } from "react";
import { Dimensions, TextInput, StyleSheet, View, Text } from "react-native";


const width = Dimensions.get("window").width;


class SearchBar extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 1, height: 40 }}>
                    <View style={styles.sbox}>
                        <Text style={{ color: 'white' }} >S</Text>
                    </View>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder="Search"
                        placeholderTextColor="white"
                        style={styles.searchinputStyle}
                    />
                </View>
            </View>

        );
    }

}
const styles = StyleSheet.create({
    searchinputStyle: {
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#131724',
        width: width - 80,
    },
    sbox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#131724',
        width: 40
    }
});
export default SearchBar