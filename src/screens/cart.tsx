import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomSheet } from "../modals/BottomSheet";
import { CartItem } from "../components/CartItem";
import { BeverageProducts } from "../data";
import { OrderPlaced } from "../modals/OrderPlaced";
import { OrderFailed } from "../modals/OrderFailed";

interface Props{
    navigation: StackNavigationHelpers
}

export class Cart extends Component<Props, any> {

    state= {
        presentActionSheet:false,
        placedOrder:false,
        failedOrder:false
    }

    openAction = (state:boolean) => {
        this.setState({presentActionSheet:state})
    }

    openOrderPlaced = (state:boolean) => {
        this.setState({placedOrder:state})
    }

    openOrderFailed = (state:boolean) => {
        this.setState({failedOrder:state})
    }

    onPlaceOrder = () => {
        const possibilities = [1,2];
        const random = Math.floor(Math.random() * possibilities.length);
        this.openAction(false);
        (random == 1) ? this.openOrderPlaced(true) : this.openOrderFailed(true)
        
    }
    
    render() {
        const product = BeverageProducts

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
                                    <CartItem item={item} key={index} />
                                )
                            })   
                        }
                    </View>
                    
                    
                
                <View style={{padding:10, backgroundColor:'#FFFFFF', marginBottom:60,flex:1, flexDirection:'row', zIndex:999, justifyContent:'flex-end'}}>
                    
                    <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}
                        onPress={() => this.openAction(true)}
                    >
                        <View style={{flex:1}}></View>
                        <Text style={styles.cartBtnText}>Go To Checkout</Text>
                        <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                            <Text style={{fontSize:12,textAlign:'center', marginEnd:30, color:'#FFFFFF', backgroundColor:'#489E67', borderRadius:4, paddingHorizontal:5, paddingVertical:2}}>$12.96</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                
                <OrderPlaced modalVisible={this.state.placedOrder} onRequestClose={()=> this.openOrderPlaced(false)} />
                <OrderFailed modalVisible={this.state.failedOrder} onRequestClose={()=> this.openOrderFailed(false)} />
                {
                    (this.state.presentActionSheet) ? (
                        <BottomSheet 
                            visible={this.state.presentActionSheet}
                            onDismiss={()=> this.openAction(false)}
                            onPlaceOrder={()=> this.onPlaceOrder()}
                        />
                    ) : null
                }
                
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
    },
    cartBtn: {
        flex:1, 
        flexDirection:'row',
        width:"100%",
        backgroundColor:'#53B175',
        borderRadius:18,
        height:60,
        zIndex:999
    },
    cartBtnText: {
        color:'#FFF9FF',
        fontSize:18,
        textAlignVertical:'center',
        textAlign:'center',
        justifyContent:'center',
        flex:3
    },
    
});