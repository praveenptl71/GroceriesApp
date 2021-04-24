import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputLabel } from "../components/InputLabel";

export class Explore extends Component<{
    navigation: StackNavigationHelpers
}> {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{flex:1, flexDirection:'row', padding:60,alignItems: 'center',justifyContent: 'center'}}>
                        <Image style={styles.topLogo} source={require('../assets/images/logo-brand-color.png')}></Image>
                    </View>
                
                    <View style={styles.view}>
                        <Text>Explore</Text>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#FFFFFF'
    },
    view: {
        padding: 30
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#FFFFFF'
    },
    topLogo: {
        width:47, 
        height:55,
    }
});