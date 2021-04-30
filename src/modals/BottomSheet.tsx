import React, { Component } from "react";
import { Animated, Button, Dimensions, Modal, PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FadeInView } from './fade_in_view';

interface Props {
    onDismiss: any,
    visible: boolean,
    onPlaceOrder:any
}
export class BottomSheet extends Component<Props, any>{

    render() {
        
        return (
            <FadeInView visible={this.props.visible} backgroundColor={'red'}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.visible}
                    onRequestClose={() => { }}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.container} onPress={() => { }}></TouchableOpacity>
                        <View style={styles.innerContainer}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={{ flex: 3, flexDirection: 'column', color: '#181725', fontSize: 22 }}>Checkout</Text>
                                <Icon onPress={()=>this.props.onDismiss()} style={{ flex: 1, flexDirection: 'column', textAlign: 'right' }} name="close" size={23} color='#181725' />
                            </View>
                            <View style={styles.itemRow}>
                                <Text style={styles.itemCol1}>Delivery</Text>
                                <View style={styles.itemCol2}>
                                    <Text style={{ color: '#181725', fontSize: 16 }}>Select Method</Text>
                                    <Icon name="chevron-right" size={24} color='#181725' />
                                </View>
                            </View>
                            <View style={styles.itemRow}>
                                <Text style={styles.itemCol1}>Payment</Text>
                                <View style={styles.itemCol2}>
                                    <Icon name="credit-card-outline" size={24} color='#181725' />
                                    <Icon name="chevron-right" size={24} color='#181725' />
                                </View>
                            </View>
                            <View style={styles.itemRow}>
                                <Text style={styles.itemCol1}>Promo Code</Text>
                                <View style={styles.itemCol2}>
                                    <Text style={{ color: '#181725', fontSize: 16 }}>Pick discount</Text>
                                    <Icon name="chevron-right" size={24} color='#181725' />
                                </View>
                            </View>
                            <View style={styles.itemRow}>
                                <Text style={styles.itemCol1}>Total Cost</Text>
                                <View style={styles.itemCol2}>
                                    <Text style={{ color: '#181725', fontSize: 16, fontWeight:'bold' }}>$13.97</Text>
                                </View>
                            </View>
                            <View style={{padding:10,}}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}
                                    onPress={() => this.props.onPlaceOrder()}>
                                    <Text style={styles.cartBtnText}>Place Order</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        padding: 0,
        justifyContent: "flex-end"
    },
    innerContainer: { 
        backgroundColor: 'white', 
        flex: 1, 
        paddingVertical: 24, 
        paddingHorizontal: 16 ,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    itemRow: { 
        flex: 1, 
        flexDirection: 'row' 
    },
    itemCol1: { 
        flex: 1, 
        flexDirection: 'column', 
        color: '#7C7C7C', 
        fontSize: 18 
    },
    itemCol2:{
        flex:1,
        flexDirection:'row',
        textAlign:'right',
        justifyContent:'flex-end'
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