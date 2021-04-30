import React, { Component } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props{
    modalVisible:boolean,
    onRequestClose:any
}
export class OrderFailed extends Component<Props>{

    render() {
        return (
            <Modal 
                // presentationStyle='formSheet'
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'rgba(0,0,0,0.2)' }}>
                    <View style={styles.childStyle}>
                        <TouchableOpacity activeOpacity={0.5} style={{width:40}}
                            onPress={() => this.props.onRequestClose()}>
                            <Icon name="close" size={24} color="#181725" />
                        </TouchableOpacity>
                        <Image source={require('../assets/images/order-failed.png')} style={styles.image} />
                        <Text style={{color:'#181725', fontSize:28, textAlign:'center', marginHorizontal:20, marginTop:40}}>Oops! Order Failed</Text>
                        <Text style={{color:'#7C7C7C', fontSize:16, textAlign:'center', margin:20}}>Something went tembly wrong.</Text>

                        <View style={{padding:10,}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}>
                                <Text style={styles.cartBtnText}>Please try again</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.cartBtn,{backgroundColor:'transparent', marginTop:5}]}
                                onPress={() => this.props.onRequestClose()}>
                                <Text style={[styles.cartBtnText,{color:'#181725'}]}>Back to home</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    childStyle:{
        margin:20,
        backgroundColor:'#FFFFFF',
        borderRadius:18,
        width:'90%',
        padding:16
    },
    image: {
        width:220,
        height:220,
        alignSelf:'center',
        marginTop:10
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
})