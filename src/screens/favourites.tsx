import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FavItem } from "../components/FavItem";
import { InputLabel } from "../components/InputLabel";
import { OfferProducts } from "../data";

export class Favourite extends Component<{
    navigation: StackNavigationHelpers
}> {

    render() {
        const product = OfferProducts

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>My Cart</Text>
                    </View>
                
                    <View style={styles.view}>
                        {
                            product.map((item, index)=>{
                                return (
                                    <FavItem item={item} key={index} />
                                )
                            })   
                        }
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
        paddingHorizontal: 15
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        paddingBottom:20,
        // backgroundColor: '#F2F3F2',
        borderBottomWidth:1,
        borderColor:'#E2E2E2'
    },
    headerTitle: {
        flex:1,
        flexDirection:'column',
        textAlign:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        color: '#181725',
        fontSize:20,
        fontWeight:'bold'
    }
});