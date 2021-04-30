import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct } from "../interface";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";


export type Props = {
    navigation: StackNavigationHelpers,
    items: IProduct
}

export class ProductCard extends Component<Props>{

    openDetails = (item:IProduct) =>{
        this.props.navigation.navigate('product-details')
    }
    
    render(){
        const {items} = this.props;
        return (
            <TouchableOpacity onPress={()=>this.openDetails(items)} activeOpacity={0.9}>
                <View style={styles.card}>
                    <Image source={items.thumbnail} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{items.title}</Text>
                    <Text style={styles.cardSubTitle}>{items.quantity}</Text>
                    <View style={styles.cardFooter}>
                        <Text style={styles.cardFooterText}>{items.price}</Text>
                        <TouchableOpacity style={styles.cardFooterBtn} activeOpacity={0.5} >
                            <Icon style={{alignSelf:'center'}} name='plus' size={28} color='#FFFFFF' />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card : {
        width: 170,
        // width:'98%',
        // height: 245,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderStyle:'solid',
        elevation:1,
        backgroundColor:'#FFFFFF',
        marginHorizontal: 5,
        padding:12,
        marginBottom:12,
    },
    cardImage: {
        width:100,
        height:80,
        marginVertical:20,
        alignSelf:'center'
    },
    cardTitle : {
        color: '#181725',
        fontSize: 16,
        textAlign: 'left',
        fontWeight:'bold'
    },
    cardSubTitle : {
        color: '#7C7C7C',
        fontSize: 14,
        textAlign: 'left'
    },
    cardFooter: {
        flex: 1,
        flexDirection:'row',
        marginTop:10
    },
    cardFooterText: {
        flex:2,
        flexDirection: 'column',
        textAlign: 'left',
        color: '#181725',
        fontSize: 18,
        textAlignVertical:'center'
    },
    cardFooterBtn: {
        flex:1,
        flexDirection:'column',
        textAlign:'right',
        backgroundColor: '#53B175',
        borderRadius: 16,
        width:45,
        height:45,
        justifyContent:'center',
        textAlignVertical:'center'
    }
})