import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ExploreCard } from "../components/ExploreCard";
import { InputLabel } from "../components/InputLabel";
import { ICategory } from "../interface";

export class Explore extends Component<{
    navigation: StackNavigationHelpers
}> {

    render() {
        let category:ICategory[] = [
            { title:'Frash Fruits & Vegetable', image: require('../assets/images/category-vegetable.png'), bgColor:'#53b1751a', borderColor:'#53b175b3' },
            { title:'Cooking Oil & Ghee', image: require('../assets/images/category-cooking.png'), bgColor:'#f8a44c1a', borderColor:'#f8a44cb3' },
            { title:'Meat & Fish', image: require('../assets/images/category-meat.png'), bgColor:'#f7a59340', borderColor:'#F7A593' },
            { title:'Bakery & Snacks', image: require('../assets/images/category-bakery.png'), bgColor:'#d3b0e040', borderColor:'#D3B0E0' },
            { title:'Dairy & Eggs', image: require('../assets/images/category-dairy.png'), bgColor:'#fde59840', borderColor:'#FDE598' },
            { title:'Beverages', image: require('../assets/images/category-beverage.png'), bgColor:'#b7dff540', borderColor:'#B7DFF5' },
            { title:'Frozen Foods', image: require('../assets/images/category-pulses.png'), bgColor:'#836af626', borderColor:'#836af680' },
            { title:'Personal Care', image: require('../assets/images/category-pulses.png'), bgColor:'#d73b7726', borderColor:'#d73b7780' },
        ];

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Find Products</Text>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                        <InputLabel
                            icon={{ name: 'magnify', position: 'left', color: '#181B19', size: 32 }}
                            inputStyle={{ borderBottomWidth: 0, backgroundColor: '#F2F3F2', borderRadius: 15, paddingStart: 15, paddingVertical: 6, marginTop: -18 }}
                            placeholder={{ text: 'Search Store', color: '#7C7C7C' }}
                        />

                        <View style={{flex: 1, flexDirection: 'row',  flexWrap: "wrap",marginTop:10}}>

                        {
                            category.map((item, index)=>{
                                return (
                                    <ExploreCard navigation={this.props.navigation} items={item} key={index} />
                                )
                            })
                        }
                        </View>

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
    header: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        // backgroundColor: '#F2F3F2',
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