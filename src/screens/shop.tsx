import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';
import { InputLabel } from "../components/InputLabel";
import { ICategory, IProduct } from "../interface";
import { ProductCard } from "../components/ProductCard";
import { CategoryCard } from "../components/CategoryCard";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { CarouselItems, Category, OfferProducts, SellingProducts } from "../data";

export class Shop extends Component<{
    navigation: StackNavigationHelpers
}> {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         activeIndex: 0,
    // product-details
    //     }
    // }

    _renderItem( {item} ) {
        return (
            <View style={{
                borderRadius: 5,
                height: 140,
                width: '100%',
            }}>
                <ImageBackground 
                    style={styles.bannerSlider} 
                    source={item.image} 
                    imageStyle={{ borderRadius: 6}}
                    >
                    {/* <Text style={{ fontSize: 30 }}>{item.title}</Text>
                    <Text>{item.text}</Text> */}
                </ImageBackground>
            </View>

        )
    }

    render() {
        let carouselItems = CarouselItems;
        const products:IProduct[] = OfferProducts;
        const selling:IProduct[] = SellingProducts;
        const category:ICategory[] = Category;
        
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={styles.topLogo} source={require('../assets/images/logo-brand-color.png')}></Image>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="map-marker" size={28} color='#4C4F4D' />
                        <Text style={styles.textLight}> Indore, India</Text>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                        <InputLabel
                            icon={{ name: 'magnify', position: 'left', color: '#181B19', size: 32 }}
                            inputStyle={{ borderBottomWidth: 0, backgroundColor: '#F2F3F2', borderRadius: 15, paddingStart: 15, paddingVertical: 6, marginTop: -18 }}
                            placeholder={{ text: 'Search Store', color: '#7C7C7C' }}
                        />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop:15 }}>
                            <Carousel
                                layout={"stack"}
                                // ref={ref => this.carousel = ref}
                                data={carouselItems}
                                sliderWidth={380}
                                sliderHeight={120}
                                itemWidth={380}
                                itemHeight={120}
                                renderItem={this._renderItem} 
                                indicatorStyle={'black'} />
                        </View>

                        <View style={styles.grid}>
                            <Text style={styles.gridHeader} >Exclusive Offer</Text>
                            <Text style={styles.gridHeaderlink}>See all</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginVertical:16}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                    {
                                        products.map((item, i)=>{
                                            return (
                                                <ProductCard key={i} items={item} navigation={this.props.navigation} />
                                            )
                                        })
                                    }
                            </ScrollView>
                        </View>

                        <View style={styles.grid}>
                            <Text style={styles.gridHeader} >Best Selling</Text>
                            <Text style={styles.gridHeaderlink}>See all</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginVertical:16}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                    {
                                        selling.map((item, i)=>{
                                            return (
                                                <ProductCard key={i} items={item} navigation={this.props.navigation}/>
                                            )
                                        })
                                    }
                            </ScrollView>
                        </View>

                        <View style={styles.grid}>
                            <Text style={styles.gridHeader} >Groceries</Text>
                            <Text style={styles.gridHeaderlink}>See all</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginVertical:16}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                    {
                                        category.map((item, i)=>{
                                            return (
                                                <CategoryCard key={i} items={item} />
                                            )
                                        })
                                    }
                            </ScrollView>
                        </View>
                        <View style={{flexDirection: 'row', marginVertical:16}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                    {
                                        selling.map((item, i)=>{
                                            return (
                                                <ProductCard key={i} items={item} />
                                            )
                                        })
                                    }
                            </ScrollView>
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
        width: 26,
        height: 30,
    },
    textLight: {
        fontSize: 16,
        color: '#4C4F4D',
        fontWeight: 'bold'
    },
    bannerSlider: {
        resizeMode:'cover',
        width:380,
        height:140,
        backgroundColor:'#FFFFFF'
    },
    grid : { 
        flex: 1, 
        flexDirection: 'row', 
        marginTop:15 
    },
    gridHeader: {
        color: '#181725',
        fontSize: 24,
        fontWeight: 'bold',
        flex:2,
        flexDirection:'column'
    },
    gridHeaderlink : {
        color: '#53B175',
        fontSize: 16,
        textAlign: 'right',
        flex:1,
        flexDirection:'column',
        textAlignVertical:'center'
    }
});