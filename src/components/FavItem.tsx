import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IProduct } from "../interface";

export type Props = {
    item : IProduct
} 

export class FavItem extends Component<Props>{
    render(){
        const {item} = this.props;

        return (
            <View style={styles.row}>
                <View style={styles.col1}>
                    <Image style={styles.thumbnail} source={item.thumbnail} />
                </View>
                <View style={styles.col2}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardSubTitle}>{item.quantity}</Text>
                        
                    </View>
                </View>
                <View style={styles.col3}>
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold',flexDirection:'column', marginRight:10 }}>{item.price}</Text>
                        <Icon style={{ flex:1, flexDirection:'column'}} name='chevron-right' size={36} color='#B3B3B3' />
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#E2E2E2'
    },
    col1 : {
        flex:2,
        flexDirection:'column',
        padding:15,
    },
    col2 : {
        flex:4,
        flexDirection:'column',
        paddingVertical:15,
        // paddingLeft:30
    },
    col3 : {
        flex:2,
        flexDirection:'column',
        paddingEnd:10
    },
    thumbnail:{
        maxWidth:60,
        height:60   ,
        // maxHeight:100
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
    
})