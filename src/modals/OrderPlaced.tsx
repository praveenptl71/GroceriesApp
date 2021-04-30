import React, { Component } from "react";
import { Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    modalVisible : boolean;
    onRequestClose : any
}

export class OrderPlaced extends Component<Props>{

    render() {
        return (
            <Modal 
                presentationStyle='fullScreen'
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <View style={styles.centeredView}>
                    <ImageBackground 
                        source={require('../assets/images/bg-banner.png')}
                        style={{padding:20, flex:1}}
                        >
                        <Image
                            style={ styles.image}
                            source={require('../assets/images/order-plaiced.png')}
                        />
                        <Text style={{color:'#181725', fontSize:28, textAlign:'center', marginHorizontal:20, marginTop:40}}>Your Order has been accepted</Text>
                        <Text style={{color:'#7C7C7C', fontSize:16, textAlign:'center', margin:20}}>Your items has been placcd and is on it’s way to being processed</Text>

                        <View style={{padding:10, flex:1, justifyContent:'flex-end', marginBottom:10}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}>
                                <Text style={styles.cartBtnText}>Track Order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.cartBtn,{backgroundColor:'transparent', marginTop:5}]}
                                onPress={() => this.props.onRequestClose()}>
                                <Text style={[styles.cartBtnText,{color:'#181725'}]}>Back to home</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent:'center',
        // backgroundColor:'#FFFFFF'
    },
    image: {
        width:270,
        height:240,
        // textAlign:'center',
        alignSelf:'center',
        marginTop:100
    },
    cartBtn: {
        width:"100%",
        backgroundColor:'#53B175',
        borderRadius:18,
        height:60
    },
    cartBtnText: {
        color:'#FFF9FF',
        fontSize:18,
        textAlignVertical:'center',
        textAlign:'center',
        justifyContent:'center',
        flex:1
    }
});