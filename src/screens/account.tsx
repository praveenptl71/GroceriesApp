// import React, { Component } from "react"
import React, { Component } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AccountItem } from "../components/AccountItem";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { AccountItem } from "../components/AccountItem";

export class Account extends Component{

    render() {
        const listItem = [
            { icon: 'shopping-outline', title: 'Orders'},
            { icon: 'card-account-details-outline', title: 'My Details'},
            { icon: 'map-marker-outline', title: 'Delivery Address'},
            { icon: 'credit-card-outline', title: 'Payment Methods'},
            { icon: 'ticket-percent-outline', title: 'Promo Code'},
            { icon: 'bell-outline', title: 'Notifications'},
            { icon: 'help-circle-outline', title: 'Help'},
            { icon: 'information-outline', title: 'About'}
        ]
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{flex:1, flexDirection:'row', paddingHorizontal:20, paddingVertical:30,borderBottomWidth:1, borderBottomColor:'#E2E2E2'}}>
                        <Image 
                            source={require('../assets/images/profile.png')} 
                            style={{width:100, height:100, alignSelf:'center',borderRadius:25, marginEnd:20}}
                            />
                        <View style={{flex:4, flexDirection:'column', justifyContent:'center'}}>
                            <Text style={{color:'#181725', fontSize:20}}>Praveen Patel</Text>
                            <Text style={{color:'#7C7C7C', fontSize:16, marginTop:3}}>praveenptl71@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:20}}>
                        {
                            listItem.map((item,index)=>{
                                return (
                                    <AccountItem 
                                        key={index}
                                        title={item.title}
                                        icon={item.icon} />
                                )
                            })
                        }
                        <View style={{marginVertical:50}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}>
                                <Icon style={{textAlignVertical:'center', justifyContent:'center',flex:1, flexDirection:'column',textAlign:'center'}} name="logout" size={24} color="#53B175" />
                                <Text style={styles.cartBtnText}>Log Out</Text>
                                <View style={{flex:1, flexDirection:'column'}}></View>
                            </TouchableOpacity>
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
    },
    cartBtn: {
        width:"100%",
        backgroundColor:'#F2F3F2',
        borderRadius:18,
        height:65,
        flex:1,
        flexDirection:'row'
    },
    cartBtnText: {
        color:'#53B175',
        fontSize:18,
        textAlignVertical:'center',
        textAlign:'center',
        justifyContent:'center',
        flex:4,
        flexDirection:'column'
    }
});