import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputLabel } from "../components/InputLabel";

export class SignUp extends Component<{
    navigation: StackNavigationHelpers
}> {

    onPress = (path:string) => {
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
                        <Text style={styles.text}>Sign Up</Text>
                        <Text style={styles.textLight}>Enter your credentials to continue</Text>
                        <InputLabel 
                            label="Username"
                        />
                        <InputLabel 
                            label="Email"
                        />
                        <InputLabel 
                            label="Password"
                            secureTextEntry={true}
                            icon={{position:'right', name:'eye-off-outline'}}
                        />
                        
                        <View style={{flex:1, flexDirection:'row', width: Dimensions.get('window').width, marginVertical:10}}>
                            <Text >By continuing you agree to our</Text>
                            <Text style={{color:'#53B175'}} > Terms of Service and{'\n'} Privacy Policy.</Text>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.button}
                        >
                            <Text style={styles.btnText}>Sign Up </Text>
                        </TouchableOpacity>

                        <View style={{flex:1, flexDirection:'row', justifyContent: "center", marginTop:10, marginBottom:40}}>
                            <Text style={{fontWeight:'bold'}} >Already have an account? </Text>
                            <Text 
                                onPress={()=>this.onPress('login')}
                                style={{fontWeight:'bold',color:'#53B175'}} > Login</Text>
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
        flex: 1
    },
    scrollView: {
        
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
    },
    view: {
        padding: 30
    },
    text: {
        color: "#030303",
        fontSize: 26,
        paddingVertical: 16
    },
    textLight: {
        fontSize: 16,
        color: '#7C7C7C',
        textAlign:'left',
        marginBottom: 24
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
        flex: 1
    },
});