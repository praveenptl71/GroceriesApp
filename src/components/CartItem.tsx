import React, { Component } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IProduct } from "../interface";

export type Props = {
    item : IProduct
}   

export class CartItem extends Component<Props>{

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
                        <View style={{ flex: 1, flexDirection: 'row', marginTop:15 }}>
                            <Icon name='minus' size={26} color={'#53B175'} style={{ textAlignVertical: 'center' }} />
                            <TextInput value={'1'} style={{ width: 45, height: 45, borderRadius: 17, borderWidth: 1, borderColor: '#E2E2E2', marginHorizontal: 10, textAlign: 'center', color: '#181725', fontSize: 18, fontWeight: 'bold' }} />
                            <Icon name='plus' size={26} color={'#53B175'} style={{ textAlignVertical: 'center' }} />
                        </View>
                    </View>
                </View>
                <View style={styles.col3}>
                    <Icon style={{textAlign:'right', marginVertical:15}} name='close' size={24} color='#B3B3B3' />
                    <Text style={[styles.gridHeaderlink, { fontSize: 18, fontWeight: 'bold' }]}>{item.price}</Text>
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
        flex:1,
        flexDirection:'column',
        padding:15
    },
    col2 : {
        flex:2,
        flexDirection:'column',
        paddingVertical:15,
        paddingLeft:30
    },
    col3 : {
        flex:1,
        flexDirection:'column',
        paddingEnd:10
    },
    thumbnail:{
        maxWidth:100,
        height:100,
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
    gridHeaderlink: {
        textAlign: 'right',
        flex: 1,
        flexDirection: 'column',
        textAlignVertical: 'center'
    }
})