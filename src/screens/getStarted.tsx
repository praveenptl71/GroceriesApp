import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export class GetStarted extends Component<{
    navigation: StackNavigationHelpers
}> {

    onPress = () => {
        console.log("im preseed")
        const { navigation } = this.props;
        navigation.navigate('signup')
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground style={styles.image} source={require('../assets/images/bg-banner.png')}>
                <ScrollView style={styles.scrollView}>
                    <Image style={{width:'100%', height:360}} source={require('../assets/images/bg_signup.png')}></Image>
                
                    <View style={styles.view}>
                        <Text style={styles.text}>Get your groceries with nectar</Text>
                        <TextInput 
                            placeholder="Enter phone number" 
                            placeholderTextColor="#828282"
                            keyboardType="numeric"
                            style={styles.textInput} />

                        <Text style={styles.textLight}>Or connect with social media</Text>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.button, styles.btnGoogle]}
                            onPress={this.onPress}
                        >
                            <Image style={[styles.btnIcon, styles.btnIconGoogle]} source={require('../assets/icons/google.png')} />
                            <Text style={styles.btnText}>Continue with Google </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.button, styles.btnFacebook]}
                            onPress={this.onPress}
                        >
                            <Image style={[styles.btnIcon, styles.btnIconFb]} source={require('../assets/icons/facebook.png')} />
                            <Text style={styles.btnText}>Continue with Facebook </Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        // backgroundColor: '#FFFFFF'
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
    text: {
        color: "#030303",
        fontSize: 26,
        // fontWeight: "bold",
        // paddingHorizontal: 40,
        paddingVertical: 16
    },
    textInput: {
        borderBottomWidth: 2,
        borderColor: '#C4C4C4',
        color: '#000000',
        fontSize: 16
    },
    textLight: {
        fontSize: 16,
        color: '#828282',
        textAlign:'center',
        padding: 20,
        marginTop: 10
    },
    brandImg: {
        width: 48,
        height: 56
    },
    button: {
        backgroundColor: '#53B175',
        borderRadius: 19,
        width: '100%',
        marginVertical: 10,
        textAlign: 'center',
        paddingVertical: 5,
        zIndex: 1000,
        flex:1,
        flexDirection:'row'
    },
    btnText: {
        color: '#FFF9FF',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '600', 
        // backgroundColor:'red',
        // width:'90%',
        // position:'relative'
        flex:8,
        marginStart: -25,
        // backgroundColor:'red',
        alignContent:'center',
        textAlignVertical:'center'
        // flexDirection:'column'
    },
    btnGoogle: {
        backgroundColor: '#5383EC'
    },
    btnFacebook: {
        backgroundColor: '#4A66AC'
    },
    btnIcon: {
        height: 22,
        marginStart:20,
        margin: 10,
    },
    btnIconFb: {
        width: 11,
        marginLeft:25
    },
    btnIconGoogle: {
        width: 22,
    }
});