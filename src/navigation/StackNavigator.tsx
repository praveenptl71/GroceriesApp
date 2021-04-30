import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import {Shop} from "../screens/shop";
// import {Account} from "../screens/account";
import { Welcome } from "../screens/welcome";
import { SignUp } from "../screens/Signup";
import { Login } from "../screens/Login";
import { GetStarted } from "../screens/GetStarted";
import BottomTabNavigator from './TabNavigator'
import { ProductDetails } from "../screens/ProductDetails";
import { ProductListing } from "../screens/ProductListing";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen options={{headerShown:false}} name="welcome" component={Welcome} />
      <Stack.Screen options={{headerShown:false}} name="get-started" component={GetStarted} />
      <Stack.Screen options={{headerShown:false}} name="signup" component={SignUp} />
      <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="homeTab" component={BottomTabNavigator} />
      <Stack.Screen options={{headerShown:false}} name="product-details" component={ProductDetails} />
      <Stack.Screen options={{headerShown:false}} name="product-listing" component={ProductListing} />
    </Stack.Navigator>
  );
}

// const ContactStackNavigator = () => {
//     return (
//       <Stack.Navigator screenOptions={screenOptionStyle}>
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     );
//   }

export { MainStackNavigator };