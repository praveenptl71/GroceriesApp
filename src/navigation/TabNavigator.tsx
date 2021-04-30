import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Account } from "../screens/Account";
import { Favourite } from "../screens/Favourites";
import { Cart } from "../screens/Cart";
import { Explore } from "../screens/Explore";
import { Shop } from "../screens/Shop";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="shop" tabBarOptions={{
      activeTintColor:'#53B175',
      inactiveTintColor:'#181725',
      showLabel:true,
      style:{height:60, borderTopRightRadius:15, borderTopLeftRadius:15,shadowColor:'#e6ebf380', shadowRadius:37, shadowOffset:{width:0, height:-12}},
      tabStyle:{paddingBottom:10},
      labelStyle:{fontSize:12, fontWeight:'600'},
      // iconStyle:{padding:5}
    }}>
      <Tab.Screen name="Shop" component={Shop} options={{
        tabBarIcon : ({focused, color, size})=>(  <Icon name="store-outline" size={28} color={color} />)
        }} />
      <Tab.Screen name="Explore" component={Explore} options={{
        tabBarIcon : ({focused, color, size})=>(  <Icon name="text-search" size={28} color={color} />)
        }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon : ({focused, color, size})=>(  <Icon name="cart-outline" size={28} color={color} />)
        }} />
      <Tab.Screen name="Favourite" component={Favourite} options={{
        tabBarIcon : ({focused, color, size})=>(  <Icon name="heart-outline" size={28} color={color} />)
        }} />
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon : ({focused, color, size})=>(  <Icon name="account-outline" size={28} color={color} />)
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;