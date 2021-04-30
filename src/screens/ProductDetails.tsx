import React, { Component } from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Accordion from 'react-native-collapsible/Accordion';
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

export class ProductDetails extends Component<{
    navigation: StackNavigationHelpers
}> {

    state = {
        entries: [
            { image: require('../assets/images/apple-1.png') },
            { image: require('../assets/images/apple-2.jpg') },
            { image: require('../assets/images/apple-3.jpg') },
            { image: require('../assets/images/apple-4.jpg') }
        ],
        activeSlide: 0,
        isFavourite: false,
        activeSections: [],
    }

    _renderItem(param:any) {
        const {item} = param;
        return (
            <View style={{
                borderRadius: 5,
                height: 240,
                width: '100%',
            }}>
                <ImageBackground
                    style={styles.bannerSlider}
                    source={item.image}
                    imageStyle={{ borderRadius: 6 }}
                >
                </ImageBackground>
            </View>

        )
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'transparent' }}
                dotStyle={{
                    width: 20,
                    height: 4,
                    borderRadius: 13,
                    marginHorizontal: -2,
                    backgroundColor: '#53B175'
                }}
                inactiveDotStyle={{
                    width: 5,
                    height: 5,
                    // borderRadius: 13,
                    marginHorizontal: -5,
                    backgroundColor: '#B3B3B3'
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
        );
    }

    favourite = () => {
        this.setState({ isFavourite: !this.state.isFavourite })
    }

    _renderSectionTitle = (section:any) => {
        return <></>;
    };

    _renderHeader = (section:any, index:number, isActive:boolean) => {
        return (
            <View style={styles.headerA}>
                <Text style={styles.headerText}>{section.title}</Text>
                {index == 2 ?
                    (<View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flexDirection:'row', justifyContent:'center', marginEnd:10,marginTop:4}}>
                            <Icon style={{textAlignVertical:'center'}} name="star" size={22} color="#F3603F"/>
                            <Icon name="star" size={22} color="#F3603F"/>
                            <Icon name="star" size={22} color="#F3603F"/>
                            <Icon name="star" size={22} color="#F3603F"/>
                            <Icon name="star" size={24} color="#F3603F"/>
                        </View>
                    </View>) :null
                }
                <Icon style={styles.headerIcon} name={isActive?'chevron-down':'chevron-right'} size={32} color="#181725" />
            </View>
        );
    };

    _renderContent = (section:any) => {
        return (
            <View style={styles.content}>
                <Text>{section.description}</Text>
            </View>
        );
    };

    _updateSections = (activeSections:any) => {
        this.setState({ activeSections });
      };

    render() {
        const SECTIONS = [
            {
                title: 'Product Detail',
                description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet. An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today',
            },
            {
                title: 'Nutritions',
                description: `Calories: 52 \r\nWater: 86%\r\nProtein: 0.3 grams\r\nCarbs: 13.8 grams\r\nSugar: 10.4 grams\r\nFiber: 2.4 grams\r\nFat: 0.2 grams`,
            },
            {
                title: 'Review',
                description: 'Lorem ipsum...',
            },
        ];

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.5} style={[styles.headerBtn]}
                            onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='chevron-left' size={40} color='#181725' />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={[styles.headerBtnRight]}>
                            <Icon name='share-variant' size={24} color='#181725' />
                        </TouchableOpacity>
                    </View>

                    
                    <View style={styles.imageView}>
                        <Carousel
                            layout={"stack"}
                            // ref={ref => this.carousel = ref}
                            data={this.state.entries}
                            sliderWidth={380}
                            sliderHeight={120}
                            itemWidth={380}
                            itemHeight={120}
                            renderItem={this._renderItem}
                            // indicatorStyle={'black'} 
                            onSnapToItem={(index) => this.setState({ activeSlide: index })} />
                        {this.pagination}
                    </View>
                    <View style={{padding:10, marginBottom:100}}>
                        <View style={styles.grid}>
                            <Text style={styles.gridHeader} >Exclusive Offer</Text>
                            {
                                (this.state.isFavourite) ?
                                    (<Icon name='heart' size={26} color={'#53B175'} style={styles.gridHeaderlink} onPress={this.favourite} />)
                                    : (<Icon name='heart-outline' size={26} color={'#7C7C7C'} style={styles.gridHeaderlink} onPress={this.favourite} />)
                            }
                        </View>
                        <Text style={styles.cardSubTitle}>1kg price</Text>

                        <View style={[styles.grid, { marginTop: 26 }]}>
                            <View style={styles.gridHeader} >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Icon name='minus' size={26} color={'#53B175'} style={{ textAlignVertical: 'center' }} />
                                    <TextInput value={'1'} style={{ width: 45, height: 45, borderRadius: 17, borderWidth: 1, borderColor: '#E2E2E2', marginHorizontal: 10, textAlign: 'center', color: '#181725', fontSize: 18, fontWeight: 'bold' }} />
                                    <Icon name='plus' size={26} color={'#53B175'} style={{ textAlignVertical: 'center' }} />
                                </View>
                            </View>
                            <Text style={[styles.gridHeaderlink, { fontSize: 24, fontWeight: 'bold' }]}>$4.99</Text>
                        </View>

                        <View style={{marginVertical:20}}>
                            <Accordion
                                sections={SECTIONS}
                                activeSections={this.state.activeSections}
                                renderSectionTitle={this._renderSectionTitle}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                                onChange={this._updateSections} 
                                underlayColor='#eaeaea' 
                                
                            />
                        </View>
                    </View>

                    
                </ScrollView>
                <View style={{margin:10, backgroundColor:'#FFFFFF'}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.cartBtn}>
                        <Text style={styles.cartBtnText}>Add To Basket</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        backgroundColor: '#FFFFFF',
        // paddingBottom:100
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#F2F3F2',
    },
    headerBtn: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'left'
    },
    headerBtnRight: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'right',
        alignSelf: 'center',
        alignItems: 'flex-end',
    },
    imageView: {
        paddingBottom: 0,
        paddingTop: 26,
        backgroundColor: '#F2F3F2',
        // backgroundColor:'blue',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        alignItems: 'center'
    },
    bannerSlider: {
        resizeMode: 'cover',
        width: 380,
        height: 240,
        backgroundColor: '#F2F3F2',
        // backgroundColor:'yellow'
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 15
    },
    gridHeader: {
        color: '#181725',
        fontSize: 24,
        fontWeight: 'bold',
        flex: 2,
        flexDirection: 'column'
    },
    gridHeaderlink: {
        textAlign: 'right',
        flex: 1,
        flexDirection: 'column',
        textAlignVertical: 'center'
    },
    cardSubTitle: {
        color: '#7C7C7C',
        fontSize: 14,
        paddingHorizontal: 15,
        textAlign: 'left'
    },
    headerA:{
        flex:1,
        flexDirection:'row',
        padding:20,
        borderTopWidth:1,
        borderColor:"#E2E2E2"
    },
    content: {
        paddingHorizontal:20,
        paddingBottom:16,
        fontSize:13,
        color:'#7C7C7C'
    },
    headerText:{
        flex:2,
        flexDirection:'column',
        fontSize:16,
        fontWeight:'bold'
    },
    headerIcon:{
        // flex:1,
        flexDirection:'column',
        textAlign:'right',
        textAlignVertical: 'center',
    },
    cartBtn: {
        // flex:1,
        width:"100%",
        // position:'absolute',
        // left:0,
        // bottom:0,
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