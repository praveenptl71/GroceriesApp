import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICategory } from "../interface";


export type Props = {
    items: ICategory,
    navigation:StackNavigationHelpers
}

export class ExploreCard extends Component<Props>{

    getBackgroundColor = (color: string, borderColor?:string) => {
        return {
            backgroundColor: color,
            borderColor : borderColor
        }
      }

    render(){
        const {items} = this.props;
        
        return (
            <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('product-listing')}
                activeOpacity={0.9}
                style={[styles.card, this.getBackgroundColor(items.bgColor, items.borderColor)]}>
                {/* <View style={[styles.card, this.getBackgroundColor(items.bgColor, items.borderColor)]}> */}
                    <Image source={items.image} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{items.title}</Text>
                {/* </View> */}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card : {
        width: '48%',
        // height: 100,
        borderRadius: 18,
        borderWidth: 1,
        // borderColor: '#53b175b3',
        // borderStyle:'solid',
        // elevation:1,
        // backgroundColor:'#FFFFFF',
        marginEnd: "2%",
        padding:12,
        // flex:1,
        // flexDirection:'column',
        // marginBottom:15
        marginVertical:8,
        alignItems:'center',
        justifyContent:'center'
        // flexGrow: 1
        
    },
    cardImage: {
        width:100,
        height:100,
        marginVertical:15,
        alignSelf:'center',
        flexDirection:'column'
    },
    cardTitle : {
        color: '#181725',
        fontSize: 20,
        textAlign: 'center',
        fontWeight:'bold',
        marginHorizontal:14,
        marginBottom:15,
        flexDirection:'column'
    }
})