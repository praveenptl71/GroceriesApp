import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputLabel } from "../components/InputLabel";

export class Login extends Component<{
    navigation: StackNavigationHelpers
}> {

    onPress = (path:any) => {
        console.log("im preseed")
        const { navigation } = this.props;
        navigation.navigate(path)
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground style={styles.image} source={require('../assets/images/bg-banner.png')}>
                <ScrollView style={styles.scrollView}>
                    <View style={{flex:1, flexDirection:'row', padding:60,alignItems: 'center',justifyContent: 'center'}}>
                        <Image style={styles.topLogo} source={require('../assets/images/logo-brand-color.png')}></Image>
                    </View>
                
                    <View style={styles.view}>
                        <Text style={styles.text}>Login</Text>
                        <Text style={styles.textLight}>Enter your emails and password</Text>
                        <InputLabel 
                            label="Email"
                        />
                        <InputLabel 
                            label="Password"
                            secureTextEntry={true}
                            icon={{position:'right', name:'eye-off-outline'}}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.button}
                            onPress={()=>this.onPress('homeTab')}
                        >
                            <Text style={styles.btnText}>Log In </Text>
                        </TouchableOpacity>
                        <View style={{flex:1, flexDirection:'row', justifyContent: "center", marginVertical:10}}>
                            <Text >Don’t have an account?</Text>
                            <Text 
                                style={{color:'#53B175'}} 
                                onPress={()=>this.onPress('signup')}
                                > Singup</Text>
                        </View>
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
        color: '#7C7C7C',
        textAlign:'left',
        // padding: 10,
        marginBottom: 24
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
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '600', 
        alignContent:'center',
        textAlignVertical:'center',
        textAlign: 'center',
        paddingVertical: 20,
        flex: 1,
        flexDirection:'row'
    },
    topLogo: {
        width:47, 
        height:55,
    }
});