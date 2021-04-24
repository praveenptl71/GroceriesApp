import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

export class Welcome extends Component<{
    navigation: StackNavigationHelpers
}>{

    onPress = () => {
        console.log("im preseed")
        const { navigation } = this.props;
        navigation.navigate('login')
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/bg_welcome.png')} style={styles.image}>
                    <View style={styles.view}>
                        <Image style={styles.brandImg} source={require('../assets/images/logo-brand.png')}></Image>
                        <Text style={styles.text}>Welcome to our store</Text>
                        <Text style={styles.textLight}>Ger your groceries in as fast as one hour</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text style={styles.btnText}>Get Started </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    view: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 80
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 40,
        paddingVertical: 16
    },
    textLight: {
        fontSize: 16,
        color: '#828282'

    },
    brandImg: {
        width: 48,
        height: 56
    },
    button: {
        backgroundColor: '#53B175',
        borderRadius: 19,
        width: '75%',
        marginVertical: 20,
        textAlign: 'center',
        paddingVertical: 20,
        zIndex: 1000
    },
    btnText: {
        color: '#FFF9FF',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '600'
    }
});