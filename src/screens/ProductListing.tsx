import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CheckBox from '@react-native-community/checkbox';
import { ProductCard } from "../components/ProductCard";
import { BeverageProducts } from "../data";

export class ProductListing extends Component<{
    navigation: StackNavigationHelpers
}>{
    state = {
        modalVisible: false,
        categories : [
            {title:'Eggs', checked:false},
            {title:'Noodles & Pasta', checked:false},
            {title:'Chips & Crisps', checked:false},
            {title:'Fast Food', checked:false}
        ],
        brand : [
            {title:'Individual Callection', checked:false},
            {title:'Cocola', checked:false},
            {title:'Ifad', checked:false},
            {title:'Kazi Farmas', checked:false}
        ]
    };

    setModalVisible = (visible: boolean) => {
        this.setState({ modalVisible: visible });
    }

    setToggleCheckBox = (newValue:boolean, index:number) => {
        let category = this.state.categories;
        category[index].checked = newValue;
        this.setState({categories:category})
    }

    setBrandCheckBox = (newValue:boolean, index:number) => {
        let brand = this.state.brand;
        brand[index].checked = newValue;
        this.setState({brand:brand})
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Modal presentationStyle='fullScreen'
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {

                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={[{paddingVertical:5, height:60, flexDirection:'row', padding:10}]}>
                            <TouchableOpacity activeOpacity={0.5} style={{justifyContent:'center', flex:1}}
                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                            >
                                <Icon name='close' size={32} color='#181725' />
                            </TouchableOpacity>
                            <Text style={[styles.headerTitle]} >Filters</Text>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                
                            </View>
                        </View>
                        <ScrollView style={styles.modalView}>
                            <Text style={{color: "#181725", fontSize:24,fontWeight:'bold', marginBottom:15}}>Categories</Text>
                            {
                                this.state.categories.map((item, index)=>{
                                    return (
                                        <View key={index} style={{flex:1, flexDirection:'row', marginBottom:5}}>
                                            <CheckBox
                                                disabled={false} 
                                                value={item.checked} 
                                                tintColors={{true:'#53B175', false:'#B1B1B1'}}
                                                style={styles.checkbox}
                                                onValueChange={(newValue) => this.setToggleCheckBox(newValue, index)}
                                            />
                                            <Text style={{fontSize:16, flexDirection:'column', marginLeft:10, textAlignVertical:'center'}}>{item.title}</Text>
                                        </View>
                                    )
                                })
                            }
                            
                            <Text style={{color: "#181725", fontSize:24,fontWeight:'bold', marginBottom:15, marginTop:30}}>Brand</Text>
                            {
                                this.state.brand.map((item, index)=>{
                                    return (
                                        <View key={index} style={{flex:1, flexDirection:'row', marginBottom:5}}>
                                            <CheckBox
                                                disabled={false} 
                                                value={item.checked} 
                                                tintColors={{true:'#53B175', false:'#B1B1B1'}}
                                                style={styles.checkbox}
                                                onValueChange={(newValue) => this.setBrandCheckBox(newValue, index)}
                                            />
                                            <Text style={{fontSize:16, flexDirection:'column', marginLeft:10, textAlignVertical:'center'}}>{item.title}</Text>
                                        </View>
                                    )
                                })
                            }
                            

                        </ScrollView>
                        <View style={{padding:10, backgroundColor:'#F2F3F2'}}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}>
                                <Text style={styles.cartBtnText}>Apply Filters</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.5} style={[styles.headerBtn]}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name='chevron-left' size={40} color='#181725' />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle} >Beverages</Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={styles.headerBtnRight}>
                                <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 15 }} >
                                    <Icon name='magnify' size={28} color='#181725' />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({modalVisible:true})} >
                                    <Icon name='filter-outline' size={28} color='#181725' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", padding: 20 }}>
                        {
                            BeverageProducts.map((item, i) => {
                                return (
                                    <ProductCard key={i} items={item} navigation={this.props.navigation} />
                                )
                            })
                        }
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
        padding: 10,
        // backgroundColor: '#F2F3F2',
    },
    headerBtn: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'left'
    },
    headerTitle: {
        flex: 3,
        flexDirection: 'column',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        color: '#181725',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerBtnRight: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right',
        alignSelf: 'center',
        alignItems: 'flex-end',
    },
    centeredView: {
        flex: 1,
        // flexDirection:'column',
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 5
    },
    modalView: {
        flex:10,
        // flexDirection:'column',
        marginTop: 10,
        backgroundColor: "#F2F3F2",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    checkbox : {
        transform: [
            { 
                scaleX: 1.3 
            }, 
            { 
                scaleY: 1.3 
            }
        ], 
        borderRadius:15,
        flexDirection:'column'
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